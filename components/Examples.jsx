import Reveal from "./Reveal";
import { splitWords } from "./Words";

/* «OpenMind in azione»: ogni esempio è una scena. Su desktop lo stage resta
   agganciato mentre la domanda entra da sinistra, OpenMind lavora, la
   risposta arriva da destra e il risultato emerge; poi la scena si dissolve
   e lascia il posto alla successiva. Su mobile la stessa sequenza scorre in
   verticale: domanda → analisi → risultato → dettaglio.
   I numeri sono quelli già usati negli esempi del sito: dimostrativi. */

const COVERED = 41;
const LINES = 44;

const EXAMPLES = [
  {
    q: "«Riesco a consegnare tutto quello che ho in ordine?»",
    work: "Incrocia portafoglio ordini, giacenze, distinte base e produzione in corso",
    result: (
      <>
        41<small>/44</small>
      </>
    ),
    resultLabel: "righe d'ordine già coperte",
    viz: (
      <div className="ex-grid-viz" aria-hidden="true">
        {Array.from({ length: LINES }, (_, i) => (
          <i key={i} className={i < COVERED ? "ok" : "gap"} style={{ "--k": i }} />
        ))}
      </div>
    ),
    detail: (
      <ul className="verdict">
        <li className="v-ok">41 righe coperte da magazzino e produzione</li>
        <li className="v-warn">3 ordini d&apos;acquisto da emettere · data ultima 21/08</li>
      </ul>
    ),
    insight: "Ti dà l'elenco degli ordini da emettere, con quantità e data ultima utile.",
  },
  {
    q: "«Quanto ci è costato davvero l'ordine di produzione 114?»",
    work: "Valorizza i materiali sulla distinta e somma i minuti effettivi di ogni fase",
    result: (
      <>
        148,90<small>&nbsp;€/pz</small>
      </>
    ),
    resultLabel: "costo pieno al pezzo, contro un ricavo di 194,40 €",
    viz: (
      <div className="mini-chart">
        {[
          ["Materiali", "68%", "101,30"],
          ["Manodopera", "27%", "40,10"],
          ["Scarti 1,8%", "5%", "7,50"],
        ].map(([label, w, val], i) => (
          <div className="bar-row" key={label}>
            <span className="bar-label">{label}</span>
            <span className="bar-track">
              <span className={`bar${i === 2 ? " bar-accent" : ""}`} style={{ "--w": w }} />
            </span>
            <span className="bar-val">{val}&nbsp;€</span>
          </div>
        ))}
      </div>
    ),
    insight: "Minuti standard contro effettivi, fase per fase: la fase 30 è quella fuori tempo.",
  },
  {
    q: "«Che margine ho fatto sui primi 250 pezzi dell'ordine di Rossi?»",
    work: "Mette il ricavo contro materiali e manodopera, a costo medio ponderato",
    result: (
      <>
        23,4<small>%</small>
      </>
    ),
    resultLabel: "margine reale sui primi 250 pezzi",
    viz: (
      <div className="ex-margin" aria-hidden="true">
        <span className="ex-margin-cost" />
        <span className="ex-margin-gain" />
      </div>
    ),
    detail: (
      <p className="ex-note-method">
        Il metodo di valorizzazione è <strong>dichiarato nella risposta</strong>: se preferisci
        FIFO o ultimo costo, lo chiedi e ricalcola.
      </p>
    ),
  },
];

export default function Examples() {
  return (
    <section className="examples" id="in-azione" data-phase="examples">
      <span id="esempi" className="anchor-alias" aria-hidden="true" />

      <div className="wrap ex-head">
        <span className="kicker">OpenMind in azione</span>
        <Reveal as="h2" className="rv-words">
          {splitWords(
            <>
              Tre domande vere. <span className="ai">Guarda cosa trova.</span>
            </>
          )}
        </Reveal>
        <p className="ex-disclaimer">Esempi illustrativi: i numeri sono dimostrativi, non dati di un cliente.</p>
      </div>

      {EXAMPLES.map((ex, i) => (
        <article className="ex scene-pin" data-scene="pin" data-lead="0.5" key={i}>
          <div className="ex-stage">
            <div className="wrap ex-layout">
              <Reveal className="ex-q">
                <span className="ex-count">
                  <span>{String(i + 1).padStart(2, "0")}</span> / 03
                </span>
                <span className="ex-tag">La domanda</span>
                <p className="ex-question">{ex.q}</p>
                <p className="ex-work">
                  <span className="ex-work-dot" aria-hidden="true" />
                  <span>
                    <span className="ex-tag">OpenMind analizza</span>
                    {ex.work}
                  </span>
                </p>
              </Reveal>

              <span className="ex-bridge" aria-hidden="true" />

              <Reveal className="ex-a">
                <div className="ex-card">
                  <div className="ex-card-head">
                    <span className="om-ava" aria-hidden="true">
                      Om
                    </span>
                    <span className="ex-tag">Il risultato</span>
                  </div>
                  <p className="ex-result">{ex.result}</p>
                  <p className="ex-result-label">{ex.resultLabel}</p>
                  <div className="ex-detail">
                    {ex.viz}
                    {ex.detail}
                    {ex.insight && <p className="dialog-insight">{ex.insight}</p>}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </article>
      ))}

      <div className="wrap">
        <Reveal className="more-chips">
          <span className="more-chips-label">E poi</span>
          <ul>
            <li>Analisi ABC del fatturato</li>
            <li>Fornitori in ritardo</li>
            <li>Fatture emesse e incassato</li>
            <li>Confronto listini tra anni</li>
            <li>Rotazione di magazzino</li>
            <li>Lotti d&apos;acquisto fuori misura</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
