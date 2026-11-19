import Link from "next/link";
import { docsPath, exampleRequest, mcpPath, openApiPath, productName, profileApiDescription, profilePath, siteUrl, versionedProfilePath } from "../../lib/discovery";
import styles from "./docs.module.css";

const title = `API del profilo ${productName}`;

export const metadata = {
  title,
  description: profileApiDescription,
  alternates: { canonical: docsPath, types: { "text/markdown": "/docs.md" } },
};

export default function ApiDocs() {
  return (
    <main className={styles.docs} id="contenuto" tabIndex={-1}>
      <Link href="/">Torna a {productName}</Link>
      <h1>{title}</h1>
      <p>{profileApiDescription} La consultazione è senza credenziali.</p>
      <h2>Leggere il profilo</h2>
      <p>
        <code>GET {versionedProfilePath}</code> restituisce un oggetto JSON con la descrizione del prodotto,
        i destinatari, le funzionalità, i riferimenti Virtech e il link per richiedere una demo.
      </p>
      <pre><code className="language-bash">{exampleRequest}</code></pre>
      <ul>
        <li><a href={versionedProfilePath}>Profilo del prodotto in JSON</a></li>
        <li><a href={openApiPath}>Specifica OpenAPI</a></li>
      </ul>
      <h2>Collegare un agente via MCP</h2>
      <p>Nel tuo client MCP configura l’indirizzo qui sotto usando il trasporto Streamable HTTP. Gli strumenti sono pubblici e in sola lettura.</p>
      <pre><code>{`${siteUrl}${mcpPath}`}</code></pre>
      <ul>
        <li><code>get_product_profile</code> mostra il profilo e le funzionalità.</li>
        <li><code>find_product_resources</code> cerca le risorse ufficiali per parola chiave.</li>
        <li><code>get_demo_link</code> indica dove richiedere una demo.</li>
      </ul>
      <h2>Versione API</h2>
      <p>L’API corrente è v1. L’indirizzo <a href={profilePath}>{profilePath}</a> continua a restituire la stessa scheda.</p>
      <p className="mt-3">
        Le modifiche incompatibili usano un nuovo percorso di versione. La documentazione e l’header <code>Deprecation</code>
        segnalano le dismissioni. L’header <code>Sunset</code> comunica la data di ritiro quando è programmata.
      </p>
    </main>
  );
}
