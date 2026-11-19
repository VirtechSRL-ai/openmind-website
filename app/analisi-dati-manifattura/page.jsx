import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { manufacturingAnalyticsPath } from "../../lib/discovery";
import { SITE_URL } from "../../lib/site";
import styles from "./page.module.css";

const title = "Software di analisi dati per PMI manifatturiere";
const description = "Con OpenMind interroghi i dati di ordini, produzione, margini e magazzino con domande in italiano. Leggi i risultati in tabelle, grafici e cruscotti.";
const canonical = `${SITE_URL}${manufacturingAnalyticsPath}`;

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title: `${title} — OpenMind`, description, url: canonical, images: ["/settori/meccanica.jpg"] },
};

const examples = [
  {
    question: "Quali ordini in portafoglio possiamo consegnare?",
    text: "Incrocia ordini, disponibilità a magazzino e vincoli di produzione per capire quali consegne puoi confermare.",
    href: "/risorse/consegnare-ordini-in-portafoglio",
    label: "Leggi l’esempio sugli ordini",
  },
  {
    question: "Che margine abbiamo fatto su quest’ordine?",
    text: "Confronta il ricavo con materiali e manodopera a consuntivo. Puoi partire dal margine e risalire alle voci che lo spiegano.",
    href: "/risorse/margine-reale-ordine-di-produzione",
    label: "Leggi l’esempio sul margine",
  },
  {
    question: "Quali fornitori stanno ritardando le consegne?",
    text: "Confronta le date previste con gli arrivi registrati e individua i ritardi da approfondire.",
    href: "/risorse/fornitori-in-ritardo-consegne",
    label: "Leggi l’esempio sugli acquisti",
  },
];

export default function ManufacturingAnalytics() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page} id="contenuto">
        <section className={`wrap ${styles.hero}`} aria-labelledby="titolo-analisi">
          <div>
            <h1 id="titolo-analisi">Analisi dati per la manifattura, con domande in italiano</h1>
            <p className={styles.intro}>
              OpenMind è il software di analisi dati AI per le PMI manifatturiere. Interroga in sola lettura i dati
              aziendali collegati e ti restituisce numeri, tabelle e grafici su ordini, produzione, costi e magazzino.
            </p>
            <Link className="btn btn-light" href="/demo">Richiedi una demo</Link>
          </div>
          <div className={styles.photo}>
            <Image src="/settori/meccanica.jpg" alt="" fill sizes="(max-width: 760px) 92vw, 44vw" priority />
          </div>
        </section>

        <section className={`wrap ${styles.examples}`} aria-labelledby="titolo-domande">
          <h2 id="titolo-domande">Le domande che puoi fare ai tuoi dati</h2>
          <ul>
            {examples.map(({ question, text, href, label }) => (
              <li key={href}>
                <h3>«{question}»</h3>
                <div><p>{text}</p><Link href={href}>{label}</Link></div>
              </li>
            ))}
          </ul>
        </section>

        <section className={`wrap ${styles.proof}`} aria-labelledby="titolo-dati">
          <h2 id="titolo-dati">Da dove arrivano le risposte</h2>
          <p>
            OpenMind lavora sui dati aziendali collegati. In demo puoi partire da una domanda concreta e verificare
            quali fonti occorrono per rispondere e come configurare l’accesso in sola lettura.
          </p>
          <div className={styles.links}>
            <Link href="/sicurezza">Sicurezza e accesso ai dati</Link>
            <a href="https://www.virtechsrl.com/casi-studio/openmind-manifattura">Caso studio in un’officina meccanica</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
