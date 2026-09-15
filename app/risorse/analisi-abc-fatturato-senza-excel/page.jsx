import DemoCta from "../../../components/DemoCta";
import Reveal from "../../../components/Reveal";
import RisorseNav from "../../../components/RisorseNav";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "analisi-abc-fatturato-senza-excel");

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: `/risorse/${PAGE.slug}` },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: `/risorse/${PAGE.slug}`,
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-cream page-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Percorso">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/risorse">Risorse</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Analisi ABC</span>
            </nav>
            <div className="page-hero-grid art-hero-grid">
              <div>
                <span className="kicker kicker-pill">Risorse</span>
                <h1>{PAGE.title}</h1>
              </div>
              <p className="page-hero-sub">
                L&apos;analisi ABC dice su quali clienti si regge davvero il
                fatturato. Il metodo è semplice; il problema è rifarla ogni volta
                a mano.
              </p>
            </div>
          </div>
        </section>

        <article className="section section-cream article art-body-section">
          <div className="wrap wrap-narrow">
            <Reveal className="article-body">
              <h2>Il problema</h2>
              <p>
                Il rituale è noto: estrazione del fatturato dal gestionale, tabella
                pivot, ordinamento decrescente, colonna del cumulato, soglie 80/95,
                classi A, B e C. Un&apos;ora se va bene, di più se l&apos;estrazione
                va pulita da note di credito e righe anomale. E siccome costa tempo,
                l&apos;analisi si fa una volta l&apos;anno — su dati che invecchiano
                mentre il CDA li discute.
              </p>

              <h2>Il metodo</h2>
              <p>L&apos;ABC classico sul fatturato clienti funziona così:</p>
              <ol>
                <li>
                  <strong>Base dati pulita</strong> — il fatturato per cliente nel
                  periodo, al netto di note di credito, dal gestionale (non da
                  un&apos;estrazione di tre mesi fa).
                </li>
                <li>
                  <strong>Ordinamento e cumulato</strong> — clienti in ordine
                  decrescente di fatturato, con la percentuale cumulata sul totale.
                </li>
                <li>
                  <strong>Le classi</strong> — A fino all&apos;80% del cumulato, B
                  fino al 95%, C il resto. Soglie da dichiarare, non da
                  sottintendere.
                </li>
                <li>
                  <strong>La lettura</strong> — quanti clienti reggono l&apos;azienda,
                  quanto è concentrato il rischio, chi sta scalando classe rispetto
                  all&apos;anno scorso.
                </li>
              </ol>
              <p>
                Lo stesso schema vale per articoli, linee di prodotto o fornitori:
                cambia la dimensione, non il metodo.
              </p>
            </Reveal>

            <Reveal className="example-box">
              <span className="example-box-label">Esempio</span>
              <p>ABC del fatturato clienti sull&apos;anno in corso:</p>
              <div className="example-rows">
                <div className="example-row">
                  <span>Clienti attivi nel periodo</span>
                  <strong>200</strong>
                </div>
                <div className="example-row">
                  <span>Clienti in classe A</span>
                  <strong>12</strong>
                </div>
                <div className="example-row example-row-highlight">
                  <span>Quota di fatturato generata dalla classe A</span>
                  <strong>78%</strong>
                </div>
              </div>
              <p>
                Dodici clienti su duecento reggono più di tre quarti del fatturato:
                un dato da portare in CDA — con il CSV già pronto.
              </p>
              <p className="example-note">
                I numeri sono un esempio illustrativo, non dati di un cliente reale.
              </p>
            </Reveal>

            <Reveal as="section" className="article-body">
              <h2>Come risponde OpenMind in 30 secondi</h2>
              <div className="om-chat">
                <div className="om-chat-q">
                  <span className="om-chat-label">Tu chiedi</span>
                  <p>«Fammi un&apos;analisi ABC del fatturato»</p>
                </div>
                <div className="om-chat-a">
                  <span className="om-chat-label">OpenMind risponde</span>
                  <p>
                    Interroga il gestionale, esegue l&apos;elaborazione in Python
                    con le soglie dichiarate nella risposta, e ti restituisce
                    classi, cumulato e grafico di Pareto — aggiornati a oggi, con
                    il CSV dei risultati scaricabile per il CDA.
                  </p>
                </div>
              </div>
              <p>
                Niente estrazioni, niente pivot: la prossima ABC è una domanda in
                chat, non un pomeriggio in Excel.
              </p>
            </Reveal>

            <RisorseNav current={PAGE.slug} />
          </div>
        </article>

        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
