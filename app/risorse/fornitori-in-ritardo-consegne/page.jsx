import Reveal from "../../../components/Reveal";
import ResShell, { Brief, ResHeadMeta } from "../../../components/res/ResShell";
import { splitWords } from "../../../components/Words";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "fornitori-in-ritardo-consegne");

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
  ["ritardo", "Il ritardo"],
  ["domande", "Le tre domande"],
  ["openmind", "In 30 secondi"],
];

const DAYS = 9; /* dalla data promessa (giorno 0) a oggi (+8): esempio dell'articolo */

const QUESTIONS = [
  [
    "Quali righe sono in ritardo?",
    "Le righe d'acquisto aperte con data promessa superata e quantità non ancora ricevuta. Non l'ordine intero: la singola riga.",
    "5 righe",
  ],
  [
    "Quanto pesa il ritardo?",
    "Giorni oltre la data promessa, fornitore per fornitore: per distinguere lo slittamento fisiologico dal problema cronico.",
    "+8 giorni",
  ],
  [
    "Cosa blocca?",
    "L'incrocio con i fabbisogni: quali ordini di produzione aspettano quel componente, e quali consegne ai clienti rischiano di slittare.",
    "2 OdP",
  ],
];

export default function Page() {
  return (
    <ResShell slug={PAGE.slug} chapters={CHAPTERS}>
      {/* ============ APERTURA: il numero che sborda, il titolo sotto ============ */}
      <header className="a3-hero">
        <span className="a3-hero-num" aria-hidden="true">
          +8
        </span>
        <div className="wrap a3-hero-inner">
          <ResHeadMeta slug={PAGE.slug} crumb="Fornitori in ritardo" />
          <Reveal as="h1" className="rv-words">
            {splitWords(
              <>
                Come monitorare i <span className="ai">fornitori in ritardo</span> sulle consegne
              </>
            )}
          </Reveal>
          <p className="res-lede a3-lede">
            Il ritardo di un fornitore non è un problema d&apos;ufficio acquisti: è un OdP fermo.
            Va visto prima, non dopo.
          </p>
        </div>
      </header>

      <Brief
        items={[
          ["Il ritardo si guarda riga per riga, non ordine per ordine.", "#domande"],
          ["Conta di quanto, e soprattutto cosa blocca in produzione.", "#ritardo"],
          ["Pochi giorni su un codice critico pesano più di tanti su una scorta.", "#domande"],
        ]}
      />

      {/* ============ IL PROBLEMA: oggi → prima ============ */}
      <section className="res-sec a3-problem" id="problema">
        <div className="wrap">
          <h2 className="res-q">Come lo scopri oggi?</h2>
          <ol className="a3-today">
            {[
              ["Le date promesse", "sono nel gestionale, riga per riga"],
              ["Il monitoraggio", "sono telefonate di sollecito quando il materiale non arriva"],
              ["L'Excel dei ritardi", "si aggiorna quando c'è tempo. Cioè mai"],
              ["Il ritardo", "lo scopri quando il reparto si ferma"],
            ].map(([a, b], k) => (
              <Reveal as="li" className={k % 2 ? "rv-from-right" : "rv-from-left"} delay={60} key={a}>
                <strong>{a}</strong> {b}.
              </Reveal>
            ))}
          </ol>
          <Reveal as="p" className="a3-express">
            A quel punto, l&apos;unica leva rimasta è <span className="ai">il corriere espresso.</span>
          </Reveal>
        </div>
      </section>

      {/* ============ IL RITARDO: i giorni scorrono in orizzontale ============ */}
      <section
        className="a3-late scene-pin"
        id="ritardo"
        data-scene="pin"
        data-steps={DAYS}
        data-step="0"
        data-lead="0.2"
      >
        <div className="a3-stage">
          <div className="wrap a3-late-head">
            <h2 className="res-q">Di quanto, e cosa si ferma?</h2>
            <p className="a3-counter" aria-label="Ritardo: 8 giorni oltre la data promessa">
              <span className="a3-count" aria-hidden="true" />
              <span className="a3-count-static" aria-hidden="true">
                +8
              </span>
              <span className="a3-count-unit">giorni oltre la data promessa</span>
            </p>
          </div>

          <div className="a3-strip-wrap" aria-hidden="true">
            <ol className="a3-strip">
              {Array.from({ length: DAYS }, (_, d) => (
                <li className="a3-day" style={{ "--d": d }} key={d}>
                  <span className="a3-day-n">{d === 0 ? "0" : `+${d}`}</span>
                  <span className="a3-day-l">
                    {d === 0 ? "Data promessa" : d === DAYS - 1 ? "Oggi" : "giorno"}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="wrap a3-effects">
            <div className="a3-effect a3-e1">
              <span className="a3-e-k">Fornitore X</span>
              componente critico, non ancora ricevuto
            </div>
            <span className="a3-e-arrow" aria-hidden="true">
              →
            </span>
            <div className="a3-effect a3-e2">
              <span className="a3-e-k">2 OdP bloccati</span>
              aspettano quel componente
            </div>
            <span className="a3-e-arrow" aria-hidden="true">
              →
            </span>
            <div className="a3-effect a3-e3">
              <span className="a3-e-k">Consegne a rischio</span>
              ai clienti, a cascata
            </div>
          </div>
          <p className="wrap res-note a3-note">Esempio illustrativo, non dati di un cliente reale.</p>
        </div>
      </section>

      {/* ============ LE TRE DOMANDE: carte che si impilano ============ */}
      <section className="res-sec a3-stack-sec" id="domande">
        <div className="wrap">
          <h2 className="res-q">Tre domande, in quest&apos;ordine</h2>
          <ol className="a3-stack">
            {QUESTIONS.map(([q, a, fig], k) => (
              <li className="a3-card" style={{ "--k": k }} key={q}>
                <span className="a3-card-n">{String(k + 1).padStart(2, "0")}</span>
                <div className="a3-card-body">
                  <h3>{q}</h3>
                  <p>{a}</p>
                </div>
                <span className="a3-card-fig">{fig}</span>
              </li>
            ))}
          </ol>

          <figure className="a3-weigh" data-scene="pass" data-end="0.3">
            <blockquote>
              Dieci giorni su un componente a scorta non valgono{" "}
              <span className="ai">tre giorni su un codice che ferma una commessa.</span>
            </blockquote>
            <div className="a3-bars" aria-hidden="true">
              <div className="a3-bar a3-bar-a">
                <span className="a3-bar-l">10 giorni · componente a scorta</span>
                <span className="a3-bar-t">
                  <span style={{ "--w": "100%" }} />
                </span>
              </div>
              <div className="a3-bar a3-bar-b">
                <span className="a3-bar-l">3 giorni · ferma una commessa</span>
                <span className="a3-bar-t">
                  <span style={{ "--w": "30%" }} />
                </span>
                <span className="a3-bar-flag">priorità</span>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* ============ OPENMIND: il lavoro in quattro gesti ============ */}
      <section className="res-sec a3-om" id="openmind" data-scene="pass" data-end="0.3">
        <div className="wrap">
          <p className="a3-om-q">
            <span className="cf-tag">Tu chiedi</span>
            «Quali fornitori sono in ritardo sulle consegne?»
          </p>
          <ol className="a3-pipe">
            {[
              ["Legge", "le righe d'acquisto aperte nel gestionale"],
              ["Calcola", "i giorni oltre la data promessa"],
              ["Raggruppa", "per fornitore"],
              ["Incrocia", "con i fabbisogni degli OdP in corso"],
            ].map(([v, t], k) => (
              <li style={{ "--k": k }} key={v}>
                <strong>{v}</strong>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <Reveal as="p" className="a3-om-out">
            Ti dice <strong>chi</strong> è in ritardo, <strong>di quanto</strong>, e{" "}
            <strong>quali produzioni</strong> rischiano di fermarsi. E se vuoi guardarla ogni
            giorno, la stessa domanda diventa{" "}
            <span className="ai">un cruscotto che si riallinea a oggi.</span>
          </Reveal>
        </div>
      </section>
    </ResShell>
  );
}
