import Reveal from "../../../components/Reveal";
import ResShell, { Brief, ResHeadMeta } from "../../../components/res/ResShell";
import { splitWords } from "../../../components/Words";
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

const CHAPTERS = [
  ["problema", "Il rituale"],
  ["metodo", "Il metodo"],
  ["dimensioni", "Altre dimensioni"],
  ["openmind", "In 30 secondi"],
];

const RITUAL = [
  "Estrazione dal gestionale",
  "Pulizia di note di credito e righe anomale",
  "Tabella pivot",
  "Ordinamento decrescente",
  "Colonna del cumulato",
  "Soglie 80 / 95",
  "Classi A, B e C",
];

const METHOD = [
  ["Base dati pulita", "Il fatturato per cliente nel periodo, al netto delle note di credito. Dal gestionale, non da un'estrazione di tre mesi fa."],
  ["Ordinamento e cumulato", "Clienti dal più grande al più piccolo, con la percentuale cumulata sul totale."],
  ["Le classi", "A fino all'80% del cumulato, B fino al 95%, C il resto. Soglie da dichiarare, non da sottintendere."],
  ["La lettura", "Quanti clienti reggono l'azienda, quanto è concentrato il rischio, chi sta cambiando classe rispetto all'anno scorso."],
];

/* Curva di Pareto schematica: x = quota di clienti, y = quota di fatturato
   cumulata. L'unico punto con un valore è quello dell'esempio dell'articolo:
   12 clienti su 200 (6%) = 78% del fatturato. */
const CURVE = "M 0 200 C 4 40, 20 26, 100 16 S 260 4, 400 2";

export default function Page() {
  return (
    <ResShell slug={PAGE.slug} chapters={CHAPTERS}>
      {/* ============ APERTURA: due numeri, un duello tipografico ============ */}
      <header className="a4-hero">
        <div className="wrap a4-hero-grid">
          <div>
            <ResHeadMeta slug={PAGE.slug} crumb="Analisi ABC" />
            <Reveal as="h1" className="rv-words">
              {splitWords(
                <>
                  Come fare un&apos;analisi ABC del fatturato <span className="ai">senza Excel</span>
                </>
              )}
            </Reveal>
            <p className="res-lede">
              L&apos;analisi ABC dice su quali clienti si regge davvero il fatturato. Il metodo è
              semplice; il problema è rifarla ogni volta a mano.
            </p>
          </div>
          <div className="a4-duel" aria-label="Esempio: 12 clienti su 200 generano il 78% del fatturato">
            <p className="a4-duel-row">
              <span className="a4-duel-num">12</span>
              <span className="a4-duel-txt">clienti su 200</span>
            </p>
            <p className="a4-duel-row a4-duel-b">
              <span className="a4-duel-num">78%</span>
              <span className="a4-duel-txt">del fatturato</span>
            </p>
            <span className="res-note">Esempio illustrativo</span>
          </div>
        </div>
      </header>

      <Brief
        items={[
          ["Tre classi sul fatturato reale: A fino all'80%, B fino al 95%, C il resto.", "#metodo"],
          ["Costa un pomeriggio in Excel, quindi si fa una volta l'anno.", "#problema"],
          ["Lo stesso metodo vale per articoli, linee di prodotto e fornitori.", "#dimensioni"],
        ]}
      />

      {/* ============ IL RITUALE: un nastro di passaggi a mano ============ */}
      <section className="res-sec a4-ritual" id="problema" data-scene="pass" data-end="-0.2">
        <div className="wrap">
          <h2 className="res-q">Perché si fa una volta l&apos;anno?</h2>
          <p className="res-lede a4-ritual-lede">
            Perché ogni volta è lo stesso rituale. <strong>Un&apos;ora, se va bene</strong>, e su
            dati che invecchiano mentre il CDA li discute.
          </p>
        </div>
        <div className="a4-belt-wrap">
          <ol className="a4-belt">
            {RITUAL.map((r, k) => (
              <li key={r}>
                <span className="a4-belt-n">{k + 1}</span>
                {r}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ IL METODO: curva agganciata, passi che scorrono ============ */}
      <section
        className="a4-method scene-pin"
        id="metodo"
        data-scene="pin"
        data-steps="4"
        data-step="0"
        data-lead="0.2"
      >
        <div className="a4-stage">
          <div className="wrap a4-method-grid">
            <figure className="a4-pareto" aria-label="Curva di Pareto schematica con le classi A, B e C. Esempio: il 6% dei clienti, 12 su 200, genera il 78% del fatturato.">
              <svg viewBox="-34 -14 454 250" aria-hidden="true">
                <rect className="a4-band a4-band-a" x="0" y="0" width="400" height="40" />
                <rect className="a4-band a4-band-b" x="0" y="40" width="400" height="30" />
                <line className="a4-th" x1="0" y1="40" x2="400" y2="40" />
                <line className="a4-th" x1="0" y1="10" x2="400" y2="10" />
                <text className="a4-th-l" x="404" y="44">80%</text>
                <text className="a4-th-l" x="404" y="14">95%</text>
                <line className="a4-axis" x1="0" y1="200" x2="400" y2="200" />
                <line className="a4-axis" x1="0" y1="0" x2="0" y2="200" />
                <path className="a4-curve" d={CURVE} pathLength="100" />
                <g className="a4-mark">
                  <line x1="24" y1="44" x2="24" y2="200" />
                  <circle cx="24" cy="44" r="5" />
                  <text x="34" y="66">12 clienti · 78%</text>
                </g>
                <text className="a4-ax-l" x="400" y="222" textAnchor="end">
                  clienti, dal più grande →
                </text>
                <text className="a4-ax-l" x="-8" y="-4">fatturato cumulato</text>
              </svg>
              <figcaption>Curva schematica. Il punto evidenziato è l&apos;esempio illustrativo.</figcaption>
            </figure>

            <div className="a4-steps">
              <h2 className="res-q">Come si legge un&apos;ABC?</h2>
              <ol>
                {METHOD.map(([h, p], k) => (
                  <li className={`a4-step a4-s${k}`} key={h}>
                    <span className="a4-step-n">{["1", "2", "3", "4"][k]}</span>
                    <div>
                      <h3>{h}</h3>
                      <p>{p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALTRE DIMENSIONI: cambia la parola, non il metodo ============ */}
      <section className="res-sec a4-dims" id="dimensioni" data-scene="pass" data-steps="4" data-end="0.2">
        <div className="wrap">
          <p className="a4-dims-line">
            <span>Lo stesso schema vale per</span>
            <span className="a4-dims-words" aria-label="clienti, articoli, linee di prodotto, fornitori">
              <span>clienti</span>
              <span>articoli</span>
              <span>linee di prodotto</span>
              <span>fornitori</span>
            </span>
          </p>
          <p className="a4-dims-note">Cambia la dimensione, non il metodo.</p>
        </div>
      </section>

      {/* ============ OPENMIND: cosa ti consegna ============ */}
      <section className="res-sec a4-om" id="openmind">
        <div className="wrap a4-om-grid">
          <div>
            <span className="cf-tag">Tu chiedi</span>
            <p className="a4-om-q">«Fammi un&apos;analisi ABC del fatturato»</p>
            <p className="res-lede">
              OpenMind interroga il gestionale ed esegue l&apos;elaborazione in Python, con le
              soglie dichiarate nella risposta. Aggiornata a oggi.
            </p>
          </div>
          <ul className="a4-files">
            {[
              ["Classi", "A · B · C"],
              ["Cumulato", "cliente per cliente"],
              ["Pareto", "il grafico"],
              ["CSV", "scaricabile, per il CDA"],
            ].map(([t, s], k) => (
              <Reveal as="li" className="rv-from-right" delay={k * 110} key={t}>
                <span className="a4-file-t">{t}</span>
                <span className="a4-file-s">{s}</span>
              </Reveal>
            ))}
          </ul>
          <p className="a4-om-end">
            La prossima ABC è una domanda in chat, <span className="ai">non un pomeriggio in Excel.</span>
          </p>
        </div>
      </section>
    </ResShell>
  );
}
