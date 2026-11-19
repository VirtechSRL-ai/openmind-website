import Link from "next/link";
import { docsPath, exampleRequest, openApiPath, productName, profileApiDescription, profilePath } from "../../lib/discovery";
import styles from "./docs.module.css";

const title = `API del profilo ${productName}`;

export const metadata = {
  title,
  description: profileApiDescription,
  alternates: { canonical: docsPath },
};

export default function ApiDocs() {
  return (
    <main className={styles.docs} id="contenuto" tabIndex={-1}>
      <Link href="/">Torna a {productName}</Link>
      <h1>{title}</h1>
      <p>{profileApiDescription} La consultazione è senza credenziali.</p>
      <h2>Leggere il profilo</h2>
      <p>
        <code>GET {profilePath}</code> restituisce un oggetto JSON con la descrizione del prodotto,
        i destinatari, le funzionalità, i riferimenti Virtech e il link per richiedere una demo.
      </p>
      <pre><code className="language-bash">{exampleRequest}</code></pre>
      <ul>
        <li><a href={profilePath}>Profilo del prodotto in JSON</a></li>
        <li><a href={openApiPath}>Specifica OpenAPI</a></li>
      </ul>
    </main>
  );
}
