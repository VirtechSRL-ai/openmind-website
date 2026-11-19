import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import { docsPath, productName, profile, siteUrl } from "./discovery.js";
import { searchResources } from "./resource-search.js";
import { profileView, profileViewType, profileViewUri } from "./profile-view.js";

const resourceSchema = z.object({ label: z.string(), url: z.url() });
const profileSchema = z.object({
  product: z.object({
    name: z.string(), website: z.url(), description: z.string(), audience: z.string(), features: z.array(z.string()),
  }),
  publisher: z.object({ name: z.string(), website: z.url(), portfolio: z.url(), email: z.email() }),
  demo: z.url(),
  resources: z.array(resourceSchema),
});
const readOnly = { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false };

function toolResult(data) {
  return { structuredContent: data, content: [{ type: "text", text: JSON.stringify(data) }] };
}

const handler = createMcpHandler(() => {
  const server = new McpServer({ name: `${productName.toLowerCase()}-profilo`, version: "1.0.0", websiteUrl: siteUrl }, {
    instructions: `Usa questi strumenti per consultare il profilo pubblico di ${productName}, orientarti tra le risorse e trovare la pagina per richiedere una demo. Documentazione su ${siteUrl}${docsPath}.`,
    capabilities: { extensions: { "io.modelcontextprotocol/ui": {} } },
  });

  server.registerTool("get_product_profile", {
    title: "Profilo del prodotto",
    description: `Legge il profilo pubblico di ${productName}, con descrizione, destinatari, funzionalità e link ufficiali.`,
    inputSchema: z.strictObject({}),
    outputSchema: profileSchema,
    annotations: readOnly,
    _meta: { ui: { resourceUri: profileViewUri } },
  }, async () => toolResult(profile));

  server.registerTool("find_product_resources", {
    title: "Risorse ufficiali del prodotto",
    description: `Filtra per parole chiave i collegamenti pubblici sulle funzionalità e su come usare ${productName}.`,
    inputSchema: z.strictObject({
      query: z.string().trim().min(2).max(100).describe("Argomento da cercare tra le risorse ufficiali"),
      limit: z.number().int().min(1).max(8).optional().describe("Numero massimo di risorse. Il valore predefinito è 5."),
    }),
    outputSchema: z.object({ resources: z.array(resourceSchema) }),
    annotations: readOnly,
  }, async ({ query, limit }) => toolResult({ resources: searchResources(profile.resources, query, limit) }));

  server.registerTool("get_demo_link", {
    title: "Pagina per richiedere una demo",
    description: `Restituisce il link ufficiale dove l'utente può richiedere una demo di ${productName}.`,
    inputSchema: z.strictObject({}),
    outputSchema: z.object({ url: z.url() }),
    annotations: readOnly,
  }, async () => toolResult({ url: profile.demo }));

  server.registerResource("profilo-prodotto", profileViewUri, {
    title: `Profilo di ${productName}`,
    description: "Scheda consultabile del prodotto con descrizione, funzionalità, demo e risorse.",
    mimeType: profileViewType,
    _meta: { ui: { csp: { connectDomains: [], resourceDomains: [] } } },
  }, async () => ({
    contents: [{ uri: profileViewUri, mimeType: profileViewType, text: profileView, _meta: { ui: { csp: { connectDomains: [], resourceDomains: [] } } } }],
  }));

  return server;
}, { legacy: "stateless" });

function requestError(status, code, message) {
  return Response.json({ jsonrpc: "2.0", id: null, error: { code, message } }, { status });
}

export async function serveMcp(request) {
  const origin = request.headers.get("origin");
  const requestOrigin = new URL(request.url);
  const deploymentOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  const loopbackOrigin = ["127.0.0.1", "localhost", "[::1]"].includes(requestOrigin.hostname) ? requestOrigin.origin : null;
  if (origin && origin !== siteUrl && origin !== deploymentOrigin && origin !== loopbackOrigin) {
    return requestError(403, -32000, "Origin not allowed");
  }

  if (request.method !== "POST" || !request.body) return handler.fetch(request);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    return requestError(415, -32600, "Send a JSON request with Content-Type: application/json");
  }

  const limit = 16_384;
  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let size = 0;
  let text = "";
  let parsedBody;
  try {
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > limit) {
        await reader.cancel();
        return requestError(413, -32600, "Request exceeds 16 KiB");
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    parsedBody = JSON.parse(text + decoder.decode());
    if (parsedBody === null || typeof parsedBody !== "object") {
      return requestError(400, -32600, "Expected a JSON-RPC object");
    }
  } catch {
    await reader.cancel().catch(() => {});
    return requestError(400, -32700, "Invalid JSON request");
  } finally {
    reader.releaseLock();
  }

  return handler.fetch(request, { parsedBody });
}
