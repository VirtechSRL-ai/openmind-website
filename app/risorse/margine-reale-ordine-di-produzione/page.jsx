import DemoCta from "../../../components/DemoCta";
import Reveal from "../../../components/Reveal";
import RisorseNav from "../../../components/RisorseNav";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "margine-reale-ordine-di-produzione");

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
        {/* ============ HERO SPLIT ============ */}
        <section className="section-cream page-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Percorso">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/risorse">Risorse</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Margine reale</span>
            </nav>
            <div className="page-hero-grid art-hero-grid">
              <div>
                <span className="kicker kicker-pill">Risorse</span>
                <h1>{PAGE.title}</h1>
              </div>
              <p className="page-hero-sub">
                Il margine stimato in offerta e il margine reale a fine commessa
                raramente coincidono. La differenza si nasconde nel consuntivo:
                materiali, minuti effettivi, scarti.
              </p>
            </div>
          </div>
        </section>

        <article className="section section-cream article art-body-section">
          <div className="wrap wrap-narrow">
            <Reveal className="article-body">
              <h2>Il problema</h2>
              <p>
                Quando l&apos;ordine di produzione si chiude, il gestionale ha già
                tutto: i prelievi di materiale, gli avanzamenti di reparto, le fasi
                del ciclo, la fattura emessa. Ma il margine reale nessuno lo
                calcola, perché ricostruirlo significa esportare tre o quattro
                tabelle in Excel, valorizzare la distinta base multilivello, sommare
                i minuti dichiarati in reparto e incrociare il tutto con il ricavo.
                Mezza giornata di lavoro, e quindi si fa solo sulle commesse
                «sospette» — quando ormai è tardi.
              </p>

              <h2>Il metodo</h2>
              <p>Per arrivare al margine reale di un OdP servono quattro numeri:</p>
              <ol>
                <li>
                  <strong>Il ricavo</strong> — le righe fatturate (o l&apos;ordine
                  cliente) collegate all&apos;OdP.
                </li>
                <li>
                  <strong>I materiali a consuntivo</strong> — i prelievi effettivi
                  valorizzati sulla distinta base multilivello, con un metodo
                  dichiarato (costo medio ponderato, FIFO o ultimo costo), scarti
                  inclusi.
                </li>
                <li>
                  <strong>La manodopera effettiva</strong> — i minuti dichiarati per
                  ogni fase del ciclo, moltiplicati per il costo del centro di
                  lavoro: minuti effettivi, non i minuti standard del preventivo.
                </li>
                <li>
                  <strong>Lo scostamento</strong> — il confronto tra standard ed
                  effettivo, fase per fase, che dice <em>dove</em> il margine si è
                  eroso.
                </li>
              </ol>
              <p>
                Margine reale = (ricavo − materiali a consuntivo − manodopera
                effettiva) / ricavo. Il punto non è la formula: è avere i quattro
                numeri insieme, senza ricostruirli a mano.
              </p>
            </Reveal>

            <Reveal className="example-box">
              <span className="example-box-label">Esempio</span>
              <p>
                Ordine di produzione <span className="num">2025/114</span>, margine
                stimato in offerta <span className="num">28%</span>. Il consuntivo
                racconta un&apos;altra storia:
              </p>
              <div className="example-rows">
                <div className="example-row">
                  <span>Ricavo fatturato</span>
                  <strong>48.600 €</strong>
                </div>
                <div className="example-row">
                  <span>Materiali a consuntivo</span>
                  <strong>25.270 €</strong>
                </div>
                <div className="example-row">
                  <span>Manodopera effettiva</span>
                  <strong>11.960 €</strong>
                </div>
                <div className="example-row example-row-highlight">
                  <span>Margine reale</span>
                  <strong>23,4%</strong>
                </div>
              </div>
              <p>
                Sono <span className="num">4,6 punti</span> di margine regalati
                senza saperlo — su una sola commessa.
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
                  <p>«Che margine ho fatto sull&apos;OdP 114?»</p>
                </div>
                <div className="om-chat-a">
                  <span className="om-chat-label">OpenMind risponde</span>
                  <p>
                    Interroga il gestionale che già usi, in quel momento: valorizza
                    i materiali sulla distinta multilivello con il metodo che scegli
                    tu (dichiarato nella risposta), somma i minuti effettivi per
                    fase, confronta con il ricavo e ti restituisce margine reale,
                    scostamento contro lo stimato e le fasi dove il costo è
                    scappato.
                  </p>
                </div>
              </div>
              <p>
                Nessuna esportazione, nessun foglio Excel: una domanda in italiano,
                il calcolo lo fa OpenMind sui dati veri della tua azienda.
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
