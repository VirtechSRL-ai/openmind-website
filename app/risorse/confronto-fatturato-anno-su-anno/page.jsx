import Reveal from "../../../components/Reveal";
import GroupSwitch from "../../../components/res/GroupSwitch";
import ResShell, { Brief, ResHeadMeta } from "../../../components/res/ResShell";
import { splitWords } from "../../../components/Words";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "confronto-fatturato-anno-su-anno");

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
  ["problema", "Il problema"],
  ["divergenza", "Il totale inganna"],
  ["accortezze", "Le accortezze"],
  ["openmind", "In 30 secondi"],
];

export default function Page() {
  return (
    <ResShell slug={PAGE.slug} chapters={CHAPTERS}>
      {/* ============ APERTURA: due anni a confronto, a tutta larghezza ============ */}
      <header className="a5-hero">
        <div className="wrap">
          <ResHeadMeta slug={PAGE.slug} crumb="Fatturato anno su anno" />
          <p className="a5-years" aria-hidden="true">
            <span className="a5-y">2023</span>
            <span className="a5-vs">vs</span>
            <span className="a5-y a5-y2">2024</span>
          </p>
          <Reveal as="h1" className="rv-words a5-title">
            {splitWords(
              <>
                Come confrontare il fatturato anno su anno <span className="ai">per linea di prodotto</span>
              </>
            )}
          </Reveal>
          <p className="res-lede a5-lede">
            Il totale anno su anno dice poco: è il confronto per linea che mostra chi cresce, chi
            cala e dove guardare.
          </p>
        </div>
      </header>

      <Brief
        items={[
          ["Il totale nasconde le tendenze: servono le linee, una per una.", "#divergenza"],
          ["Perimetri uguali, riclassifica stabile, valori netti, delta assoluto e percentuale.", "#accortezze"],
          ["Per famiglia, cliente o agente cambia solo la domanda.", "#openmind"],
        ]}
      />

      {/* ============ IL PROBLEMA: la domanda da trenta secondi ============ */}
      <section className="res-sec a5-problem" id="problema">
        <div className="wrap a5-problem-grid">
          <div>
            <h2 className="res-q">Sembra una domanda da trenta secondi. Perché non lo è?</h2>
            <p className="a5-quote">«Come sta andando il fatturato rispetto all&apos;anno scorso?»</p>
          </div>
          <ol className="a5-chores">
            {[
              "Estrarre due anni di righe fatturate",
              "Riclassificarle per linea",
              "Allineare i periodi",
              "Rifare tutto il mese dopo. O quando lo chiedono per famiglia, cliente o agente.",
            ].map((t, k) => (
              <Reveal as="li" delay={k * 120} key={t}>
                <span className="a5-chore-n">{k + 1}</span>
                {t}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ IL TOTALE INGANNA: una linea che si divide ============ */}
      <section
        className="a5-split scene-pin"
        id="divergenza"
        data-scene="pin"
        data-lead="0.2"
      >
        <div className="a5-stage">
          <div className="wrap a5-split-inner">
            <h2 className="res-q a5-split-q">Cosa nasconde il totale?</h2>
            <figure
              className="a5-chart"
              aria-label="Esempio illustrativo: la linea Componenti CNC cresce del 12%, la linea Carpenteria standard cala dell'8%; il totale da solo non lo mostra."
            >
              <svg viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
                <line className="a5-base" x1="0" y1="130" x2="600" y2="130" />
                <path className="a5-total" d="M 0 130 L 600 130" pathLength="100" />
                <path className="a5-up" d="M 250 130 C 380 130, 430 60, 600 40" pathLength="100" />
                <path className="a5-down" d="M 250 130 C 380 130, 430 180, 600 196" pathLength="100" />
              </svg>
              <span className="a5-lab a5-lab-total">Totale aziendale</span>
              <span className="a5-lab a5-lab-up">
                <strong>+12%</strong> Componenti CNC
              </span>
              <span className="a5-lab a5-lab-down">
                <strong>−8%</strong> Carpenteria standard
              </span>
            </figure>
            <p className="a5-split-text">
              Il totale, da solo, avrebbe nascosto entrambe le tendenze:{" "}
              <span className="ai">una linea che tira e una che perde terreno.</span>
            </p>
            <p className="res-note">Esempio illustrativo, non dati di un cliente reale.</p>
          </div>
        </div>
      </section>

      {/* ============ LE ACCORTEZZE: quattro regole, quattro micro-visual ============ */}
      <section className="res-sec a5-rules" id="accortezze">
        <div className="wrap">
          <h2 className="res-q">Quando un confronto è onesto?</h2>
          <ol className="a5-rules-grid">
            <Reveal as="li" className="a5-rule rv-from-left">
              <div className="a5-viz a5-viz-period" aria-hidden="true">
                <span>
                  <i />
                  gen–ago 2023
                </span>
                <span>
                  <i />
                  gen–ago 2024
                </span>
              </div>
              <h3>Perimetri uguali</h3>
              <p>Stesso intervallo nei due anni. Gennaio–agosto contro gennaio–agosto, non contro l&apos;anno intero.</p>
            </Reveal>
            <Reveal as="li" className="a5-rule rv-from-right">
              <div className="a5-viz a5-viz-class" aria-hidden="true">
                <span className="a5-chip">articolo</span>
                <span className="a5-arr">→</span>
                <span className="a5-chip a5-chip-on">linea</span>
              </div>
              <h3>Una riclassifica stabile</h3>
              <p>Ogni articolo nella sua linea dall&apos;anagrafica, non da una colonna Excel compilata a memoria.</p>
            </Reveal>
            <Reveal as="li" className="a5-rule rv-from-left">
              <div className="a5-viz a5-viz-net" aria-hidden="true">
                <span className="a5-net-bar">
                  <span className="a5-net-nc">note di credito</span>
                </span>
              </div>
              <h3>Valori confrontabili</h3>
              <p>Fatturato al netto delle note di credito, con lo stesso criterio nei due periodi.</p>
            </Reveal>
            <Reveal as="li" className="a5-rule rv-from-right">
              <div className="a5-viz a5-viz-delta" aria-hidden="true">
                <span className="a5-blk a5-blk-s">+12%</span>
                <span className="a5-blk a5-blk-l">−8%</span>
              </div>
              <h3>Delta assoluto e percentuale</h3>
              <p>Il +12% di una linea piccola non compensa il −8% di una linea grande: servono entrambe le letture.</p>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* ============ OPENMIND: la domanda si riscrive ============ */}
      <section className="res-sec a5-om" id="openmind">
        <div className="wrap a5-om-grid">
          <div>
            <h2 className="res-q">Cambiando solo la domanda</h2>
            <p className="res-lede">
              OpenMind interroga il gestionale, allinea i periodi e raggruppa dall&apos;anagrafica
              articoli. Il confronto che guardi ogni mese diventa un cruscotto che si riallinea a
              oggi.
            </p>
          </div>
          <GroupSwitch />
        </div>
      </section>
    </ResShell>
  );
}
