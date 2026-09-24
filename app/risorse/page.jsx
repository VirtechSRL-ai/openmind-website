import DemoCta from "../../components/DemoCta";
import Reveal from "../../components/Reveal";
import ScrollFx from "../../components/ScrollFx";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { splitWords } from "../../components/Words";
import { HYGIENE_PAGES } from "../../lib/site";

const TITLE = "Risorse";
const DESCRIPTION =
  "Cinque domande concrete che ogni PMI manifatturiera si pone — e come OpenMind risponde in 30 secondi, senza Excel.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/risorse" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/risorse",
  },
};

/* Le risorse come cinque capitoli, ognuno con il layout che serve al suo
   contenuto: un numero gigante, un dialogo a due lati, una linea del tempo,
   un cruscotto, una rivelazione a tutto schermo. Ogni capitolo risponde a
   tre domande: cosa chiedi, cosa guarda OpenMind, cosa ottieni.
   I numeri sono gli esempi illustrativi già presenti in ogni articolo. */

const page = (slug) => HYGIENE_PAGES.find((p) => p.slug === slug);

const INDEX = [
  ["margine-reale-ordine-di-produzione", "23,4%"],
  ["consegnare-ordini-in-portafoglio", "139 / 142"],
  ["fornitori-in-ritardo-consegne", "+8 giorni"],
  ["analisi-abc-fatturato-senza-excel", "12 su 200"],
  ["confronto-fatturato-anno-su-anno", "+12% · −8%"],
];

function ChapterHead({ n, slug }) {
  return (
    <p className="chap-head">
      <span className="chap-num">{String(n).padStart(2, "0")}</span>
      <span className="chap-topic">{page(slug).label}</span>
    </p>
  );
}

function ChapterFoot({ slug }) {
  return (
    <div className="chap-foot">
      <span className="chap-note">Esempio illustrativo, non dati di un cliente reale</span>
      <a className="res-cta" href={`/risorse/${slug}`}>
        Leggi la risorsa <span className="btn-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  );
}

function Flow({ steps }) {
  return (
    <ol className="chap-flow">
      {steps.map(([tag, text], i) => (
        <Reveal as="li" delay={i * 120} key={tag}>
          <span className="cf-tag">{tag}</span>
          <span className="cf-text">{text}</span>
        </Reveal>
      ))}
    </ol>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <ScrollFx />
      <main className="res-page">
        {/* ============ APERTURA + INDICE ============ */}
        <section className="res-hero">
          <div className="wrap res-hero-grid">
            <div>
              <span className="kicker kicker-pill">Risorse</span>
              <Reveal as="h1" className="rv-words">
                {splitWords(
                  <>
                    Le domande che <span className="ai ai-light">costano mezza giornata</span>
                  </>
                )}
              </Reveal>
              <p className="res-hero-sub">
                Cinque domande vere. Per ognuna: cosa chiedi, cosa guarda OpenMind, cosa
                ottieni. Senza Excel, senza SQL.
              </p>
            </div>
            <nav className="res-index" aria-label="Indice delle risorse">
              <ol>
                {INDEX.map(([slug, hint], i) => (
                  <Reveal as="li" delay={i * 70} key={slug}>
                    <a href={`#cap-${i + 1}`}>
                      <span className="ri-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ri-label">{page(slug).label}</span>
                      <span className="ri-hint">{hint}</span>
                    </a>
                  </Reveal>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* ============ 01 · UN NUMERO GIGANTE ============ */}
        <section className="chap chap-big" id="cap-1" aria-labelledby="cap-1-q">
          <div className="wrap">
            <ChapterHead n={1} slug="margine-reale-ordine-di-produzione" />
            <Reveal as="h2" className="chap-q rv-words" id="cap-1-q">
              {splitWords(<>«Che margine ho fatto davvero sull&apos;OdP 114?»</>)}
            </Reveal>

            <div className="bigfig" data-scene="pass" data-end="0.35">
              <span className="bigfig-label">Margine reale</span>
              <span className="bigfig-num">23,4%</span>
              <span className="bigfig-was">
                stimato in offerta{" "}
                <s>
                  28%<span className="bigfig-strike" aria-hidden="true" />
                </s>
              </span>
            </div>

            <Flow
              steps={[
                ["Domanda", "Quanto ho guadagnato su questo ordine, a consuntivo?"],
                ["OpenMind", "Ricavo, materiali a consuntivo e minuti effettivi di ogni fase."],
                ["Risultato", "4,6 punti di margine persi su una sola commessa, e le fasi dove il costo è scappato."],
              ]}
            />
            <p className="chap-why">
              Oggi il margine reale si ricostruisce a mano solo sulle commesse «sospette», quando
              ormai è tardi. Con una domanda lo vedi su qualsiasi ordine.
            </p>
            <ChapterFoot slug="margine-reale-ordine-di-produzione" />
          </div>
        </section>

        {/* ============ 02 · DOMANDA A SINISTRA, RISPOSTA A DESTRA ============ */}
        <section className="chap chap-split" id="cap-2" aria-labelledby="cap-2-q">
          <div className="wrap">
            <ChapterHead n={2} slug="consegnare-ordini-in-portafoglio" />
            <div className="split-stage" data-scene="pass" data-end="0.3">
              <div className="split-ask">
                <span className="cf-tag">Tu chiedi</span>
                <h2 className="chap-q" id="cap-2-q">
                  «Riesco a consegnare tutto quello che ho in portafoglio?»
                </h2>
                <p className="split-work">
                  OpenMind incrocia ordini clienti aperti, giacenze, distinte base e ordini in
                  corso.
                </p>
              </div>
              <span className="split-line" aria-hidden="true" />
              <div className="split-answer">
                <span className="cf-tag">OpenMind risponde</span>
                <p className="split-num">
                  139<small> su 142 ordini</small>
                </p>
                <p className="split-caption">coperti da giacenza e produzione in corso</p>
                <div className="cover-bar" aria-hidden="true">
                  <span style={{ "--w": "97.9%" }} />
                </div>
                <p className="split-alert">
                  <strong>3 ordini d&apos;acquisto</strong> da emettere entro il{" "}
                  <strong>21/08</strong>
                </p>
              </div>
            </div>
            <p className="chap-why">
              La copertura cambia ogni giorno. Tre righe d&apos;acquisto emesse in tempo, e il
              portafoglio si consegna tutto.
            </p>
            <ChapterFoot slug="consegnare-ordini-in-portafoglio" />
          </div>
        </section>

        {/* ============ 03 · EDITORIALE: LA LINEA DEL RITARDO ============ */}
        <section className="chap chap-edit" id="cap-3" aria-labelledby="cap-3-q">
          <div className="wrap">
            <ChapterHead n={3} slug="fornitori-in-ritardo-consegne" />
            <div className="edit-grid">
              <Reveal as="h2" className="chap-q edit-title rv-words" id="cap-3-q">
                {splitWords(
                  <>
                    «Quali fornitori sono <span className="ai ai-light">in ritardo</span>?»
                  </>
                )}
              </Reveal>
              <p className="edit-lede">
                Il ritardo di un fornitore non è un problema d&apos;ufficio acquisti: è un OdP
                fermo. Va visto prima, non dopo.
              </p>
            </div>

            <div className="timeline" data-scene="pass" data-end="0.35">
              <div className="tl-track" aria-hidden="true">
                <span className="tl-fill" />
              </div>
              <div className="tl-point tl-promised">
                <span className="tl-dot" aria-hidden="true" />
                <span className="tl-when">Data promessa</span>
                <span className="tl-what">5 righe d&apos;ordine oltre questa data</span>
              </div>
              <div className="tl-gap">
                <span className="tl-gap-num">+8 giorni</span>
                <span className="tl-gap-what">il fornitore X, sul componente critico</span>
              </div>
              <div className="tl-point tl-today">
                <span className="tl-dot" aria-hidden="true" />
                <span className="tl-when">Oggi</span>
                <span className="tl-what">
                  <strong>2 OdP</strong> bloccati da quel componente
                </span>
              </div>
            </div>

            <Flow
              steps={[
                ["Domanda", "Chi è in ritardo, di quanto, e cosa rischia di fermarsi?"],
                ["OpenMind", "Righe d'acquisto aperte, giorni oltre la data promessa, fabbisogni degli OdP."],
                ["Risultato", "Il sollecito giusto, al fornitore giusto, prima che la produzione si fermi."],
              ]}
            />
            <ChapterFoot slug="fornitori-in-ritardo-consegne" />
          </div>
        </section>

        {/* ============ 04 · IL CRUSCOTTO ============ */}
        <section className="chap chap-dash" id="cap-4" aria-labelledby="cap-4-q">
          <div className="wrap dash-grid">
            <div className="dash-text">
              <ChapterHead n={4} slug="analisi-abc-fatturato-senza-excel" />
              <Reveal as="h2" className="chap-q rv-words" id="cap-4-q">
                {splitWords(<>«Fammi un&apos;analisi ABC del fatturato»</>)}
              </Reveal>
              <p className="chap-why">
                Ti dice su quali clienti si regge davvero il fatturato. Il metodo è semplice: il
                problema è rifarla ogni volta a mano.
              </p>
              <Flow
                steps={[
                  ["OpenMind", "Classi A, B e C sul fatturato reale, con le soglie dichiarate."],
                  ["Risultato", "Pareto, cumulato e il CSV dei risultati, pronto per il CDA."],
                ]}
              />
            </div>

            <Reveal className="dash-card rv-from-right">
              <div className="dash-head">
                <span className="dash-title">Analisi ABC · clienti, anno in corso</span>
                <span className="dash-live">
                  <span aria-hidden="true" /> aggiornata a oggi
                </span>
              </div>
              <div className="dash-kpi">
                <span className="dash-big">78%</span>
                <span className="dash-kpi-text">
                  del fatturato arriva da <strong>12 clienti su 200</strong>
                </span>
              </div>
              <div
                className="dots"
                role="img"
                aria-label="200 clienti: 12 in classe A evidenziati"
              >
                {Array.from({ length: 200 }, (_, i) => (
                  <i key={i} className={i < 12 ? "a" : undefined} style={{ "--k": i }} />
                ))}
              </div>
              <div className="dash-legend" aria-hidden="true">
                <span>
                  <i className="lg-a" /> Classe A · 12 clienti
                </span>
                <span>
                  <i /> Tutti gli altri · 188
                </span>
              </div>
            </Reveal>
          </div>
          <div className="wrap">
            <ChapterFoot slug="analisi-abc-fatturato-senza-excel" />
          </div>
        </section>

        {/* ============ 05 · LA RIVELAZIONE A TUTTO SCHERMO ============ */}
        <section className="chap chap-reveal scene-pin" id="cap-5" data-scene="pin" data-lead="0.2" aria-labelledby="cap-5-q">
          <div className="rev-stage">
            <div className="wrap rev-layout">
              <ChapterHead n={5} slug="confronto-fatturato-anno-su-anno" />
              <h2 className="chap-q rev-q" id="cap-5-q">
                «Confronta il fatturato 2023 vs 2024 per linea di prodotto»
              </h2>
              <div className="rev-answer">
                <div className="rev-lines">
                  <div className="rev-line rev-up">
                    <span className="rev-name">Linea «Componenti CNC»</span>
                    <span className="rev-bar" aria-hidden="true">
                      <span />
                    </span>
                    <span className="rev-val">+12%</span>
                  </div>
                  <div className="rev-line rev-down">
                    <span className="rev-name">Linea «Carpenteria standard»</span>
                    <span className="rev-bar" aria-hidden="true">
                      <span />
                    </span>
                    <span className="rev-val">−8%</span>
                  </div>
                </div>
                <p className="rev-insight">
                  Il totale aziendale, da solo, avrebbe nascosto entrambe le tendenze:{" "}
                  <span className="ai ai-light">una linea che tira e una che perde terreno.</span>
                </p>
                <ChapterFoot slug="confronto-fatturato-anno-su-anno" />
              </div>
            </div>
          </div>
        </section>

        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
