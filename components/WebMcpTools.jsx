"use client";

import { useEffect } from "react";

import { searchResources } from "../lib/resource-search";


export function WebMcpTools({ productProfile }) {
  useEffect(() => {
    const context = document.modelContext;
    if (!context?.registerTool) return;

    const controller = new AbortController();
    const annotations = { readOnlyHint: true, consequentialHint: false, untrustedContentHint: false };
    const noArguments = { type: "object", properties: {}, additionalProperties: false };

    const registerTools = async () => {
      await context.registerTool({
        name: "get_product_profile",
        title: "Consulta il profilo del prodotto",
        description: `Legge il profilo pubblico di ${productProfile.product.name}, con destinatari, funzionalità e sito ufficiale.`,
        inputSchema: noArguments,
        annotations,
        execute: async () => productProfile,
      }, { signal: controller.signal });
      if (controller.signal.aborted) return;
      await context.registerTool({
        name: "find_product_resources",
        title: "Trova risorse ufficiali",
        description: `Cerca per parola chiave i link ufficiali su ${productProfile.product.name}.`,
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", minLength: 2, maxLength: 100, description: "Argomento da cercare nelle risorse del prodotto" },
          },
          required: ["query"],
          additionalProperties: false,
        },
        annotations,
        execute: async ({ query }) => {
          if (typeof query !== "string" || query.trim().length < 2 || query.length > 100) {
            return { error: "Scrivi una parola chiave tra 2 e 100 caratteri." };
          }
          return { resources: searchResources(productProfile.resources, query, 5) };
        },
      }, { signal: controller.signal });
      if (controller.signal.aborted) return;
      await context.registerTool({
        name: "get_demo_link",
        title: "Trova il link per una demo",
        description: `Restituisce la pagina ufficiale dove richiedere una demo di ${productProfile.product.name}.`,
        inputSchema: noArguments,
        annotations,
        execute: async () => ({ url: productProfile.demo }),
      }, { signal: controller.signal });
    };

    void registerTools().catch(() => controller.abort());
    return () => controller.abort();
  }, [productProfile]);

  return null;
}
