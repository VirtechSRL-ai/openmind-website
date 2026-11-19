import { productName, profile } from "./discovery.js";

export const profileViewUri = "ui://product-profile/overview.html";
export const profileViewType = "text/html;profile=mcp-app";

function escapeHtml(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}

const featureItems = profile.product.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
const links = profile.resources.map(({ label, url }) => `<li>${escapeHtml(label)} <code>${escapeHtml(url)}</code></li>`).join("");

export const profileView = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(productName)}</title>
  <style>
    :root { color-scheme: light dark; font: 15px/1.5 system-ui, sans-serif; }
    body { margin: 1rem; overflow-wrap: anywhere; }
    h1 { margin: 0 0 .5rem; font-size: 1.55rem; }
    h2 { font-size: 1rem; }
    ul { padding-inline-start: 1.25rem; }
    li { margin-block: .35rem; }
    summary { cursor: pointer; font-weight: 600; }
    code { font-size: .85rem; }
  </style>
</head>
<body>
  <main>
    <h1>${escapeHtml(productName)}</h1>
    <p>${escapeHtml(profile.product.description)}</p>
    <p>${escapeHtml(profile.product.audience)}</p>
    <h2>Funzionalità</h2>
    <ul>${featureItems}</ul>
    <details>
      <summary>Demo e risorse</summary>
      <p>Richiedi una demo su <code>${escapeHtml(profile.demo)}</code></p>
      <ul>${links}</ul>
    </details>
  </main>
  <script>
    if (window.parent !== window) {
      const viewName = ${JSON.stringify(productName).replace(/</g, "\\u003c")};
      const initializeId = "initialize-product-profile";
      const listener = (event) => {
        if (event.source !== window.parent || event.data?.id !== initializeId || !event.data?.result) return;
        window.removeEventListener("message", listener);
        const hostOrigin = event.origin === "null" ? "*" : event.origin;
        window.parent.postMessage({ jsonrpc: "2.0", method: "ui/notifications/initialized" }, hostOrigin);
        const notifySize = () => window.parent.postMessage({
          jsonrpc: "2.0", method: "ui/notifications/size-changed",
          params: { height: Math.ceil(document.documentElement.getBoundingClientRect().height), width: document.documentElement.clientWidth },
        }, hostOrigin);
        new ResizeObserver(notifySize).observe(document.documentElement);
      };
      window.addEventListener("message", listener);
      window.parent.postMessage({
        jsonrpc: "2.0", id: initializeId, method: "ui/initialize",
        params: { protocolVersion: "2026-01-26", appInfo: { name: viewName, version: "1.0.0" }, appCapabilities: {} },
      }, "*");
    }
  </script>
</body>
</html>`;
