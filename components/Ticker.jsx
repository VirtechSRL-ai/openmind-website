/* Banda che scorre con domande vere: l'elemento-firma tra hero e resto
   della pagina. Solo CSS (riusa la logica marquee), niente librerie.
   .ticker-clip taglia gli angoli della banda ruotata: senza, la banda
   allarga il documento e su iPhone la pagina scivola di lato. */

const QUESTIONS = [
  "Che margine ho fatto sull'ordine 2025/114?",
  "Riesco a consegnare tutto quello che ho in portafoglio?",
  "Quali fornitori sono in ritardo sulle consegne?",
  "Fammi un'analisi ABC del fatturato",
  "Confronta il fatturato 2023 vs 2024 per linea di prodotto",
  "Quanto ci è costato davvero l'ordine di produzione 114?",
  "Quali clienti hanno ridotto gli ordini?",
];

export default function Ticker() {
  return (
    <div className="ticker-clip">
    <div className="ticker" aria-label="Esempi di domande a cui OpenMind risponde">
      <div className="ticker-track">
        {[...QUESTIONS, ...QUESTIONS].map((q, i) => (
          <span key={i} className="ticker-item" aria-hidden={i >= QUESTIONS.length}>
            <span className="ticker-star" aria-hidden="true">
              ✳
            </span>
            «{q}»
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
