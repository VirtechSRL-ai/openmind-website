import Reveal from "../../../components/Reveal";
import ResShell, { Brief, ResHeadMeta } from "../../../components/res/ResShell";
import { splitWords } from "../../../components/Words";
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

const CHAPTERS = [
  ["problema", "Il problema"],
  ["calcolo", "Il calcolo"],
  ["scostamento", "Lo scostamento"],
  ["openmind", "In 30 secondi"],
];

/* Firma visiva: la cascata dal ricavo al margine. Esempio illustrativo
   dell'articolo: ricavo 48.600 €, materiali 25.270 €, manodopera 11.960 €
   → margine 11.370 € = 23,4% (contro il 28% stimato in offerta). */
const REV = 48600;
const WF = [
  { key: "rev", label: "Ricavo fatturato", val: "48.600 €", from: 0, to: REV },
  { key: "mat", label: "Materiali a consuntivo", val: "− 25.270 €", from: 23330, to: REV },
  { key: "lab", label: "Manodopera effettiva", val: "− 11.960 €", from: 11370, to: 23330 },
  { key: "mar", label: "Margine reale", val: "11.370 € · 23,4%", from: 0, to: 11370 },
];
const pct = (v) => `${((v / REV) * 100).toFixed(2)}%`;

const STEPS = [
  ["Il ricavo", "Le righe fatturate (o l'ordine cliente) collegate all'OdP."],
  [
    "I materiali a consuntivo",
    "I prelievi effettivi sulla distinta base multilivello, scarti inclusi, con un metodo di valorizzazione dichiarato.",
  ],
  [
    "La manodopera effettiva",
    "I minuti dichiarati per ogni fase, per il costo del centro di lavoro. Effettivi, non quelli standard del preventivo.",
  ],
  ["Lo scostamento", "Standard contro effettivo, fase per fase: dice dove il margine si è eroso."],
];

export default function Page() {
  return (
    <ResShell slug={PAGE.slug} chapters={CHAPTERS}>
      {/* ============ APERTURA: split, il numero come immagine ============ */}
      <header className="a1-hero">
        <div className="wrap a1-hero-grid">
          <div className="a1-hero-text">
            <ResHeadMeta slug={PAGE.slug} crumb="Margine reale" />
            <Reveal as="h1" className="rv-words">
              {splitWords(
                <>
                  Come calcolare il <span className="ai">margine reale</span> di un ordine di
                  produzione
                </>
              )}
            </Reveal>
            <p className="res-lede">
              Il margine stimato in offerta e quello reale a fine commessa raramente coincidono.
              La differenza si nasconde nel consuntivo.
            </p>
          </div>

          <div className="a1-hero-fig" aria-label="Esempio: margine reale 23,4% contro 28% stimato in offerta">
            <span className="a1-fig-label">Margine reale · OdP 2025/114</span>
            <span className="a1-fig-num">
              23,4<small>%</small>
            </span>
            <span className="a1-fig-was">
              stimato in offerta{" "}
              <s>
                28%
                <span className="a1-fig-strike" aria-hidden="true" />
              </s>
            </span>
            <span className="a1-fig-delta">− 4,6 punti</span>
          </div>
        </div>
      </header>

      <Brief
        items={[
          ["Il margine reale si calcola sul consuntivo, non sul preventivo.", "#problema"],
          ["Servono quattro numeri insieme: ricavo, materiali, manodopera, scostamento.", "#calcolo"],
          ["Nell'esempio: 4,6 punti di margine persi su una sola commessa.", "#scostamento"],
        ]}
      />

      {/* ============ IL PROBLEMA: una frase, e ciò che il gestionale ha già ============ */}
      <section className="res-sec a1-problem" id="problema">
        <div className="wrap a1-problem-grid">
          <h2 className="res-q">Perché nessuno lo calcola?</h2>
          <Reveal as="p" className="a1-statement">
            Il gestionale ha già tutto. <mark>Ricostruirlo a mano costa mezza giornata</mark>: così
            si fa solo sulle commesse «sospette», quando ormai è tardi.
          </Reveal>
          <div className="a1-has">
            <span className="a1-has-label">Già nel gestionale</span>
            <ul>
              {["Prelievi di materiale", "Avanzamenti di reparto", "Fasi del ciclo", "Fattura emessa"].map(
                (t, k) => (
                  <Reveal as="li" className="rv-from-right" delay={k * 120} key={t}>
                    {t}
                  </Reveal>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ IL CALCOLO: scena agganciata, la cascata si costruisce ============ */}
      <section
        className="a1-calc scene-pin"
        id="calcolo"
        data-scene="pin"
        data-steps="4"
        data-step="0"
        data-lead="0.25"
      >
        <div className="a1-stage">
          <div className="wrap a1-calc-grid">
            <div className="a1-steps">
              <h2 className="res-q">Da cosa è fatto il margine reale?</h2>
              <ol>
                {STEPS.map(([h, p], k) => (
                  <li className={`a1-step a1-s${k}`} key={h}>
                    <span className="a1-step-n">{k + 1}</span>
                    <div>
                      <h3>{h}</h3>
                      <p>{p}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <figure
              className="a1-chart"
              aria-label="Esempio illustrativo: ricavo 48.600 €, materiali 25.270 €, manodopera 11.960 €, margine reale 11.370 € pari al 23,4%, contro il 28% stimato"
            >
              <div className="wf" aria-hidden="true">
                {WF.map((c) => (
                  <div className={`wf-col wf-${c.key}`} key={c.key}>
                    <span className="wf-plot">
                      <span
                        className="wf-bar"
                        style={{ "--b": pct(c.from), "--h": pct(c.to - c.from) }}
                      />
                      {c.key === "mar" && (
                        <span className="wf-est">
                          <span>stimato in offerta 28%</span>
                        </span>
                      )}
                    </span>
                    <span className="wf-val">{c.val}</span>
                    <span className="wf-lab">{c.label}</span>
                  </div>
                ))}
              </div>
              <figcaption>
                Margine reale = (ricavo − materiali − manodopera) / ricavo. Numeri di esempio, non
                dati di un cliente.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ LO SCOSTAMENTO: il numero enorme ============ */}
      <section className="res-sec a1-gap" id="scostamento" data-scene="pass" data-end="0.25">
        <div className="wrap">
          <h2 className="res-q a1-gap-q">Quanto costa non saperlo?</h2>
          <p className="a1-gap-num" aria-hidden="true">
            −4,6
          </p>
          <p className="a1-gap-text">
            <strong>4,6 punti di margine</strong> regalati senza saperlo.{" "}
            <span className="ai">Su una sola commessa.</span>
          </p>
        </div>
      </section>

      {/* ============ OPENMIND: la domanda, il lavoro, la risposta ============ */}
      <section className="res-sec a1-om" id="openmind">
        <div className="wrap a1-om-grid">
          <div>
            <h2 className="res-q">E con OpenMind?</h2>
            <p className="res-lede">
              Una domanda in italiano. Nessuna esportazione, nessun foglio Excel: il calcolo lo fa
              OpenMind sui dati veri della tua azienda.
            </p>
          </div>
          <Reveal className="a1-chat rv-from-right">
            <p className="a1-user">Che margine ho fatto sull&apos;OdP 114?</p>
            <div className="a1-answer">
              <span className="om-ava" aria-hidden="true">
                Om
              </span>
              <div>
                <ul className="a1-does">
                  {[
                    "Interroga il gestionale che già usi, in quel momento",
                    "Valorizza i materiali sulla distinta, con il metodo che scegli tu",
                    "Somma i minuti effettivi per fase",
                    "Confronta con il ricavo",
                  ].map((t, k) => (
                    <li style={{ "--k": k }} key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="a1-returns">
                  Ti restituisce <strong>margine reale</strong>, <strong>scostamento</strong> contro
                  lo stimato e <strong>le fasi</strong> dove il costo è scappato.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </ResShell>
  );
}
