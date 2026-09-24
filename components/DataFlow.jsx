/* I dati coperti raccontati come una frase: l'archivio operativo scorre in
   grande, e le aree si accendono una dopo l'altra mentre la frase attraversa
   lo schermo (scena "pass" di ScrollFx). In fondo, la stessa frase si chiude
   su cosa torna indietro. Niente griglie di icone: su smartphone resta una
   frase leggibile, non una colonna di card. */

const AREAS = [
  "anagrafica articoli",
  "distinte base multilivello",
  "cicli e centri di costo",
  "ordini di produzione e avanzamenti",
  "ordini clienti",
  "ordini fornitori",
  "fatture e pagamenti",
  "listini per anno",
  "giacenze di magazzino",
];

const OUTPUTS = [
  "numeri esatti",
  "un grafico",
  "un consiglio operativo",
  "un cruscotto salvato",
  "il CSV dei risultati",
];

export default function DataFlow() {
  const n = AREAS.length + 1;
  return (
    <section className="dataflow" id="dati" data-phase="data">
      <div className="wrap">
        <div className="df-head">
          <span className="kicker">I dati</span>
          <h2>
            Tutto l&apos;archivio operativo, <span className="ai">in una domanda.</span>
          </h2>
        </div>

        <p className="df-flow" data-scene="pass" data-end="0.05" style={{ "--n": n }}>
          <span className="df-lead">OpenMind legge </span>
          {AREAS.map((a, i) => (
            <span key={a}>
              <span className="df-area" style={{ "--i": i }}>
                {a}
              </span>
              {i < AREAS.length - 1 ? <span className="df-sep">, </span> : null}
            </span>
          ))}
          <span className="df-sep"> e </span>
          <span className="df-area df-area-last" style={{ "--i": AREAS.length }}>
            il vostro glossario
          </span>
          <span className="df-sep">.</span>
        </p>

        <div className="df-out" data-scene="pass" data-end="0.35">
          <p className="df-out-lead">
            Dallo stesso gestionale, nel momento in cui chiedi. Nessuna esportazione, nessun
            dato modificato. E ti restituisce
          </p>
          <ul className="df-out-list">
            {OUTPUTS.map((o, i) => (
              <li key={o} style={{ "--i": i }}>
                {o}
              </li>
            ))}
          </ul>
          <p className="df-out-note">
            Se la domanda è ambigua, prima di rispondere ti chiede un chiarimento.
          </p>
        </div>
      </div>
    </section>
  );
}
