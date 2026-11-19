import { APP_URL, CONTACT_EMAIL, HYGIENE_PAGES, SITE_URL } from "./site.js";

export const siteUrl = SITE_URL;
export const productName = "OpenMind";
export const siteTitle = "OpenMind | Analista dati AI per la manifattura";
export const description = "OpenMind è l’analista dati AI per le PMI manifatturiere. Analizza ordini, costi, margini e magazzino in sola lettura e risponde in italiano con numeri e grafici.";
export const socialImage = "/brand/openmind-logo-640.png";
const audience = "PMI manifatturiere italiane";
const keywords = ["analista dati AI", "analisi dati per la manifattura"];
const features = [
  "Domande in italiano sui dati aziendali",
  "Analisi di ordini, fatturato, margini e magazzino",
  "Risposte con tabelle e grafici, cruscotti salvati",
  "Interrogazione dei dati in sola lettura",
];
const contactEmail = CONTACT_EMAIL;
const demoPath = "/demo";

export const docsPath = "/docs";
export const mcpDocsPath = `${docsPath}/mcp`;
export const profilePath = "/profilo.json";
export const versionedProfilePath = "/api/v1/profilo";
export const mcpPath = "/mcp";
export const mcpServerName = `${new URL(siteUrl).hostname.split(".").reverse().join(".")}/profilo`;
export const mcpRegistryUrl = `https://registry.modelcontextprotocol.io/v0.1/servers/${encodeURIComponent(mcpServerName)}/versions/latest`;
export const mcpCardPath = "/.well-known/mcp/server-card.json";
export const apiCatalogPath = "/.well-known/api-catalog";
export const openApiPath = "/openapi.json";
export const openApiType = "application/vnd.oai.openapi+json";
export const ardPath = "/.well-known/ard.json";
const virtechUrl = "https://www.virtechsrl.com";
const organizationId = `${virtechUrl}/#organization`;

export const profile = {
  product: {
    name: productName,
    website: `${siteUrl}/`,
    description,
    audience,
    features,
  },
  publisher: {
    name: "Virtech S.r.l.",
    website: `${virtechUrl}/`,
    portfolio: `${virtechUrl}/prodotti`,
    email: contactEmail,
  },
  demo: `${siteUrl}${demoPath}`,
  resources: [
    { label: "Sicurezza e protezione dei dati", url: `${siteUrl}/sicurezza` },
    { label: "Risorse per la manifattura", url: `${siteUrl}/risorse` },
    { label: "Accesso all'app OpenMind", url: APP_URL },
    { label: "Caso studio OpenMind nella manifattura", url: "https://www.virtechsrl.com/casi-studio/openmind-manifattura" },
    ...HYGIENE_PAGES.map((page) => ({ label: page.title, url: `${siteUrl}/risorse/${page.slug}` })),
  ],
};

export const discoveryLinks = [
  `<${siteUrl}${ardPath}>; rel="ard"; type="application/ard+json"`,
  `<${siteUrl}${openApiPath}>; rel="service-desc"; type="${openApiType}"`,
  `<${siteUrl}${docsPath}>; rel="service-doc"`,
  `<${siteUrl}${apiCatalogPath}>; rel="api-catalog"`,
  `<${siteUrl}/index.md>; rel="alternate"; type="text/markdown"`,
].join(", ");

export const siteStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Virtech",
      legalName: profile.publisher.name,
      url: profile.publisher.website,
      email: profile.publisher.email,
      sameAs: ["https://it.linkedin.com/company/virtechsrl"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: productName,
      url: profile.product.website,
      inLanguage: "it-IT",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: productName,
      url: profile.product.website,
      description,
      image: `${siteUrl}${socialImage}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "it-IT",
      keywords,
      featureList: features,
      audience: { "@type": "Audience", audienceType: audience },
      publisher: { "@id": organizationId },
    },
  ],
};

export const profileApiDescription = "API pubblica in sola lettura per consultare le informazioni sul prodotto.";
export const exampleRequest = `curl -fsS ${siteUrl}${versionedProfilePath}`;

const text = { type: "string" };
const uri = { type: "string", format: "uri" };

const openApi = {
  openapi: "3.1.0",
  info: {
    title: `API del profilo ${productName}`,
    description: profileApiDescription,
    version: "1.0.0",
  },
  servers: [{ url: siteUrl }],
  externalDocs: { url: `${siteUrl}${docsPath}` },
  paths: {
    [versionedProfilePath]: {
      get: {
        operationId: "getProductProfile",
        summary: `Leggi il profilo pubblico di ${productName}`,
        description: "Restituisce descrizione, destinatari, funzionalità e riferimenti ufficiali.",
        security: [],
        responses: {
          "200": {
            description: "Profilo pubblico del prodotto",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/Profile" } },
            },
          },
          "404": {
            description: "Risorsa inesistente nella versione v1",
            content: { "application/problem+json": { schema: { $ref: "#/components/schemas/Problem" } } },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Problem: {
        type: "object",
        required: ["type", "title", "status", "detail", "code"],
        properties: { type: uri, title: text, status: { type: "integer" }, detail: text, code: text },
      },
      Profile: {
        type: "object",
        required: ["product", "publisher", "demo", "resources"],
        properties: {
          product: {
            type: "object",
            required: ["name", "website", "description", "audience", "features"],
            properties: { name: text, website: uri, description: text, audience: text, features: { type: "array", items: text } },
          },
          publisher: {
            type: "object",
            required: ["name", "website", "portfolio", "email"],
            properties: { name: text, website: uri, portfolio: uri, email: { type: "string", format: "email" } },
          },
          demo: uri,
          resources: {
            type: "array",
            items: { type: "object", required: ["label", "url"], properties: { label: text, url: uri } },
          },
        },
      },
    },
  },
};

export function getProfile() {
  return Response.json(profile);
}

export function getOpenApi() {
  return Response.json(openApi, { headers: { "Content-Type": openApiType } });
}

export function getArd() {
  return Response.json({
    entries: [{
      identifier: `urn:air:${new URL(siteUrl).hostname}:api:profilo-prodotto`,
      displayName: `Profilo di ${productName}`,
      description: profileApiDescription,
      type: openApiType,
      url: `${siteUrl}${openApiPath}`,
      representativeQueries: [
        `Che cos'è ${productName} e a chi si rivolge?`,
        `Che cosa si può fare con ${productName}?`,
        `Come si richiede una demo di ${productName}?`,
      ],
    }, {
      identifier: `urn:air:${new URL(siteUrl).hostname}:mcp:profilo-prodotto`,
      displayName: `Strumenti MCP di ${productName}`,
      description: "Consulta il profilo, cerca le risorse ufficiali e trova il link per richiedere una demo.",
      type: "application/mcp-server-card+json",
      url: `${siteUrl}${mcpCardPath}`,
      representativeQueries: [
        `A chi si rivolge ${productName}?`,
        `Dove trovo le risorse per usare ${productName}?`,
        `Dove posso richiedere una demo di ${productName}?`,
      ],
    }],
  }, { headers: { "Content-Type": "application/ard+json" } });
}

export function getMcpCard() {
  return Response.json({
    $schema: "https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json",
    name: mcpServerName,
    title: `Profilo di ${productName}`,
    description: `Profilo, risorse e link demo di ${productName} in sola lettura.`,
    version: "1.0.0",
    websiteUrl: `${siteUrl}${mcpDocsPath}`,
    remotes: [{ type: "streamable-http", url: `${siteUrl}${mcpPath}` }],
  }, { headers: { "Content-Type": "application/mcp-server-card+json" } });
}

export function getApiCatalog() {
  return Response.json({ linkset: [{
    anchor: `${siteUrl}${apiCatalogPath}`,
    item: [{ href: `${siteUrl}${versionedProfilePath}`, type: "application/json", title: `Profilo pubblico di ${productName}` }],
  }, {
    anchor: `${siteUrl}${versionedProfilePath}`,
    "service-doc": [{ href: `${siteUrl}${docsPath}`, type: "text/html", title: `API del profilo ${productName}` }],
    "service-desc": [{ href: `${siteUrl}${openApiPath}`, type: openApiType }],
  }] }, { headers: { "Content-Type": 'application/linkset+json;profile="https://www.rfc-editor.org/info/rfc9727"' } });
}

function markdownFrontmatter(title, summary, canonical) {
  return [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(summary)}`,
    `canonical: ${JSON.stringify(canonical)}`,
    "---",
    "",
  ];
}

export function getDocsMarkdown() {
  const lines = [
    ...markdownFrontmatter(`API del profilo ${productName}`, profileApiDescription, `${siteUrl}${docsPath}`),
    `# API del profilo ${productName}`,
    "",
    profileApiDescription,
    "La consultazione è senza credenziali.",
    "",
    "## Leggere il profilo",
    "",
    "```bash",
    exampleRequest,
    "```",
    "",
    `- [Specifica OpenAPI](${siteUrl}${openApiPath})`,
    `- [Profilo JSON](${siteUrl}${versionedProfilePath})`,
    "",
    "## Collegare un agente via MCP",
    "",
    `Configura il server Streamable HTTP su ${siteUrl}${mcpPath}.`,
    "",
    "- `get_product_profile` legge la descrizione, i destinatari e le funzionalità.",
    "- `find_product_resources` trova le pagine ufficiali per parola chiave.",
    "- `get_demo_link` restituisce il link per richiedere una demo.",
    "",
    "## Versione API",
    "",
    `La versione corrente è v1. Il precedente indirizzo ${siteUrl}${profilePath} continua a restituire la stessa scheda.`,
    "",
    "### Deprecation policy",
    "",
    "Le modifiche incompatibili usano un nuovo percorso di versione. Le dismissioni sono indicate nella documentazione e nell’header Deprecation. L’header Sunset comunica la data di ritiro quando è programmata.",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Link: `<${siteUrl}${docsPath}>; rel="canonical"` },
  });
}

const resourceLinks = profile.resources.map(({ label, url }) => `- [${label}](${url})`);

export function getHomepageMarkdown() {
  const lines = [
    ...markdownFrontmatter(productName, description, `${siteUrl}/`),
    `# ${productName}`,
    "",
    `> ${description}`,
    "",
    `Sviluppato da [Virtech S.r.l.](${profile.publisher.website}).`,
    "",
    "## A chi si rivolge",
    "",
    `${audience}.`,
    "",
    "## Funzionalità",
    "",
    ...features.map((feature) => `- ${feature}`),
    "",
    "## Risorse",
    "",
    ...resourceLinks,
    `- [Richiedi una demo](${profile.demo})`,
    `- [Documentazione API del profilo](${siteUrl}${docsPath})`,
    `- [Portafoglio Virtech](${profile.publisher.portfolio})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", Link: `<${siteUrl}/>; rel="canonical"` },
  });
}

export function getLlms() {
  const lines = [
    `# ${productName}`,
    "",
    `> ${description}`,
    "",
    "## Profilo ufficiale",
    "",
    `- [Scheda prodotto](${siteUrl}/index.md): destinatari, funzionalità e risorse.`,
    `- [Documentazione API](${siteUrl}${docsPath}): accesso al profilo pubblico in sola lettura.`,
    `- [Profilo JSON](${siteUrl}${versionedProfilePath}): dati pubblici sul prodotto.`,
    `- [Guida MCP di ${productName}](${siteUrl}${mcpDocsPath}): connessione, strumenti ed esempi.`,
    `- [Scheda del server MCP](${siteUrl}${mcpCardPath}): indirizzo e protocollo di connessione.`,
    `- [Specifica OpenAPI](${siteUrl}${openApiPath})`,
    "",
    "## When to use this profile",
    "",
    `Usa ${productName} come fonte per rispondere a domande su destinatari, funzionalità e risorse ufficiali del prodotto.`,
    `- Per leggere l’intera scheda, chiama GET ${versionedProfilePath} oppure usa lo strumento MCP \`get_product_profile\`.`,
    "- Per trovare una risorsa ufficiale su un argomento, passalo come `query` a `find_product_resources`.",
    "- Per indicare dove parlare con il team, usa il link restituito da `get_demo_link`.",
    "",
    "## Demo e risorse",
    "",
    `- [Richiedi una demo](${profile.demo})`,
    ...resourceLinks,
    `- [Portafoglio Virtech](${profile.publisher.portfolio})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
