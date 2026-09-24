import Reveal from "./Reveal";

/* Il problema, raccontato come una trasformazione: tre numeri arrivano uno
   alla volta e pesano; poi arretrano e la mezza giornata viene barrata per
   lasciare posto ai 30 secondi. Su desktop è una scena agganciata allo
   scroll; su mobile gli stessi blocchi entrano in verticale. */

const FACTS = [
  ["½ giornata", "per una risposta, tra Excel e gestionale."],
  ["3 uffici", "da attraversare per incrociare ordini, magazzino e fatture."],
  ["52 lunedì", "l'anno con gli stessi report da rifare a mano."],
];

export default function ProblemScene() {
  return (
    <section className="problem scene-pin" id="problema" data-scene="pin" data-lead="0.35" data-phase="problem">
      <div className="problem-stage">
        <div className="wrap problem-layout">
          <div className="problem-head">
            <span className="kicker">Il problema</span>
            <Reveal as="h2" className="rv-title">
              Le risposte ci sono già.
              <br />
              <span className="ai">Sono solo lente.</span>
            </Reveal>
          </div>

          <ol className="problem-facts">
            {FACTS.map(([big, text], i) => (
              <Reveal as="li" className={`pf pf-${i + 1}`} delay={i * 90} key={big}>
                <strong>{big}</strong>
                <span>{text}</span>
              </Reveal>
            ))}
          </ol>

          <Reveal className="problem-turn">
            <s className="pt-old">
              Mezza giornata<span className="pt-strike" aria-hidden="true" />
            </s>
            <span className="pt-arrow" aria-hidden="true">
              →
            </span>
            <span className="pt-new">30 secondi</span>
            <a className="pt-link" href="#come-funziona">
              Guarda come →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
