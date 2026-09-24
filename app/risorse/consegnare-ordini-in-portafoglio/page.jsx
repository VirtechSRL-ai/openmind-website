import Reveal from "../../../components/Reveal";
import ResShell, { Brief, ResHeadMeta } from "../../../components/res/ResShell";
import { splitWords } from "../../../components/Words";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "consegnare-ordini-in-portafoglio");

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
  ["incroci", "I cinque incroci"],
  ["verdetto", "Il verdetto"],
  ["openmind", "In 30 secondi"],
];

const CROSSINGS = [
  ["Il portafoglio ordini", "Righe aperte dei clienti, quantità residue, date promesse."],
  ["Il fabbisogno", "Le distinte base multilivello esplose sui prodotti da consegnare."],
  ["La giacenza disponibile", "Al netto di quanto è già impegnato da altri ordini."],
  ["Gli ordini in corso", "OdP in lavorazione e acquisti già emessi, con le date attese."],
  ["Quello che manca", "I componenti scoperti, con la data ultima utile per ordinarli."],
];

/* Il verdetto (esempio illustrativo dell'articolo): 142 ordini aperti,
   139 coperti da giacenza e OdP in corso, 3 ordini d'acquisto da emettere
   entro il 21/08. Il cerchio si riempie fino a 139/142. */
const VERDICT = [
  ["142", "ordini aperti in portafoglio", "Si parte da qui."],
  ["139", "coperti da giacenza e ordini in corso", "Quasi il 98% del portafoglio."],
  ["3", "ordini d'acquisto ancora da emettere", "Sono i soli scoperti."],
  ["21/08", "data ultima per emetterli", "Emessi in tempo, si consegna tutto."],
];

export default function Page() {
  return (
    <ResShell slug={PAGE.slug} chapters={CHAPTERS}>
      {/* ============ APERTURA: la domanda a tutta pagina, la risposta onesta ============ */}
      <header className="a2-hero">
        <div className="wrap">
          <ResHeadMeta slug={PAGE.slug} crumb="Copertura del portafoglio" />
          <Reveal as="h1" className="rv-words a2-title">
            {splitWords(
              <>
                Come sapere se riesco a consegnare <span className="ai">tutti gli ordini</span> in
                portafoglio
              </>
            )}
          </Reveal>
          <div className="a2-honest">
            <span className="a2-honest-label">La risposta onesta, di solito</span>
            <span className="a2-dipende">
              «Dipende.»
              <span className="a2-dipende-strike" aria-hidden="true" />
            </span>
          </div>
        </div>
      </header>

      <Brief
        items={[
          ["La copertura non è un numero solo: è l'incrocio di cinque dati.", "#incroci"],
          ["Il risultato utile è un elenco: coperto, mancante, da ordinare entro quando.", "#verdetto"],
          ["E va rifatto ogni giorno, perché ordini e magazzino si muovono.", "#openmind"],
        ]}
      />

      {/* ============ IL PROBLEMA: dipende da… ============ */}
      <section className="res-sec a2-problem" id="problema">
        <div className="wrap a2-problem-grid">
          <h2 className="res-q">Da cosa dipende?</h2>
          <ul className="a2-depends">
            {[
              "dalla giacenza di magazzino",
              "da cosa consumano gli ordini di produzione in corso",
              "da cosa deve ancora arrivare dai fornitori",
              "da cosa non è nemmeno stato ordinato",
            ].map((t, k) => (
              <Reveal as="li" className="rv-from-left" delay={k * 110} key={t}>
                <span className="a2-dep-word">Dipende</span> {t}.
              </Reveal>
            ))}
          </ul>
          <Reveal as="p" className="a2-problem-note">
            Incrociare tutto a mano richiede ore, e il risultato è già vecchio il giorno dopo.
          </Reveal>
        </div>
      </section>

      {/* ============ I CINQUE INCROCI: una catena che si disegna ============ */}
      <section className="res-sec a2-cross" id="incroci" data-scene="pass" data-end="0.1">
        <div className="wrap">
          <h2 className="res-q">Cosa serve per un verdetto affidabile?</h2>
          <ol className="a2-chain">
            {CROSSINGS.map(([h, p], k) => (
              <li className="a2-node" style={{ "--k": k }} key={h}>
                <span className="a2-node-dot" aria-hidden="true">
                  {k + 1}
                </span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ IL VERDETTO: il cerchio si riempie, il numero cambia ============ */}
      <section
        className="a2-verdict scene-pin"
        id="verdetto"
        data-scene="pin"
        data-steps="4"
        data-step="0"
        data-lead="0.25"
      >
        <div className="a2-stage">
          <div className="wrap a2-verdict-grid">
            <div className="a2-verdict-head">
              <h2 className="res-q">Quindi: riesco a consegnare?</h2>
              <p className="res-note">Esempio illustrativo, non dati di un cliente reale.</p>
            </div>

            <div className="a2-gauge" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <circle className="a2-ring-bg" cx="60" cy="60" r="52" />
                <circle className="a2-ring" cx="60" cy="60" r="52" pathLength="100" />
                <circle className="a2-ring-gap" cx="60" cy="60" r="52" pathLength="100" />
              </svg>
              <div className="a2-gauge-nums">
                {VERDICT.map(([num], k) => (
                  <span className={`a2-num a2-v${k}`} key={num}>
                    {num}
                  </span>
                ))}
              </div>
            </div>

            <ol className="a2-verdict-list">
              {VERDICT.map(([num, label, note], k) => (
                <li className={`a2-vrow a2-v${k}`} key={num}>
                  <strong>{num}</strong>
                  <span>
                    {label}
                    <em>{note}</em>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ OPENMIND: split a metà schermo ============ */}
      <section className="a2-om" id="openmind">
        <div className="a2-om-ask">
          <div className="a2-om-inner">
            <span className="cf-tag">Tu chiedi</span>
            <Reveal as="p" className="a2-om-q rv-words">
              {splitWords(<>«Riesco a consegnare tutto quello che ho in portafoglio?»</>)}
            </Reveal>
          </div>
        </div>
        <div className="a2-om-answer">
          <div className="a2-om-inner">
            <span className="cf-tag">OpenMind risponde</span>
            <ul className="a2-om-rows">
              <Reveal as="li" delay={0}>
                <span className="a2-om-k a2-ok">Coperto</span>
                cosa si consegna con giacenza e ordini in corso
              </Reveal>
              <Reveal as="li" delay={140}>
                <span className="a2-om-k a2-miss">Manca</span>
                quali componenti restano scoperti
              </Reveal>
              <Reveal as="li" delay={280}>
                <span className="a2-om-k a2-do">Da ordinare</span>
                l&apos;elenco esatto, con quantità e data ultima utile
              </Reveal>
            </ul>
            <p className="a2-om-note">
              Ricalcolato ogni volta sui dati di quel momento, non su un report di lunedì scorso.
            </p>
          </div>
        </div>
      </section>
    </ResShell>
  );
}
