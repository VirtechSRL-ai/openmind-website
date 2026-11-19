import Link from "next/link";
import { docsPath, mcpCardPath, mcpDocsPath, mcpPath, productName, siteUrl } from "../../../lib/discovery";
import styles from "../docs.module.css";

const title = "Server MCP di OpenMind";
const description = "Collega un agente a OpenMind per consultare il profilo dell’analista dati per la manifattura, trovare guide sull’analisi dei margini e ottenere il link alla demo.";
const canonical = `${siteUrl}${mcpDocsPath}`;
const endpoint = `${siteUrl}${mcpPath}`;
const searchExample = { name: "find_product_resources", arguments: { query: "margine", limit: 3 } };

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", title, description, url: canonical },
};

export default function McpDocs() {
  return (
    <main className={styles.docs} id="contenuto" tabIndex={-1}>
      <Link href={docsPath}>Documentazione API e MCP di {productName}</Link>
      <h1>{title}</h1>
      <p>{description}</p>

      <h2>Configurare la connessione</h2>
      <p>Aggiungi questo URL come server remoto nel tuo client MCP e scegli il trasporto Streamable HTTP. La connessione al profilo pubblico è in sola lettura e non richiede credenziali.</p>
      <pre><code>{endpoint}</code></pre>
      <p><a href={mcpCardPath}>Scheda del server in formato JSON</a></p>

      <h2>Strumenti disponibili</h2>
      <ul className="space-y-2">
        <li><code>get_product_profile</code> restituisce destinatari, funzionalità e riferimenti ufficiali.</li>
        <li><code>find_product_resources</code> cerca tra le risorse pubbliche. Vuole una parola chiave in <code>query</code> e accetta un <code>limit</code> facoltativo da 1 a 8.</li>
        <li><code>get_demo_link</code> restituisce la pagina in cui richiedere o provare una demo.</li>
      </ul>

      <h2>Esempio di ricerca</h2>
      <p>Cerca la guida di OpenMind all’analisi dei margini per le aziende manifatturiere.</p>
      <pre><code>{JSON.stringify(searchExample, null, 2)}</code></pre>
    </main>
  );
}
