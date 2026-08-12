const SOURCES_A = [
  ["Anagrafica", "Articoli"],
  ["Distinte base", "Multilivello"],
  ["Cicli di lavoro", "Centri di costo"],
  ["Produzione", "Ordini e avanzamenti"],
  ["Vendite", "Ordini clienti"],
];

const SOURCES_B = [
  ["Acquisti", "Ordini fornitori"],
  ["Amministrazione", "Fatture e pagamenti"],
  ["Listini", "Acquisto e vendita"],
  ["Magazzino", "Giacenze"],
  ["Glossario", "Il vostro gergo"],
];

const OUTPUTS = [
  "Numeri esatti con percentuali",
  "Grafico interattivo",
  "Insight operativo",
  "Cruscotto salvato",
  "CSV dei risultati",
  "Chiarimento, se la domanda è ambigua",
];

/* Diagramma alla Compri: fonti dati → motore d'analisi → risposte.
   Tutto SVG + CSS, nessuna libreria: le linee tratteggiate «scorrono»
   verso il nodo centrale con una semplice animazione di stroke-dashoffset. */
export default function HubDiagram() {
  return (
    <div className="hub-diagram" aria-label="Le fonti dati aziendali confluiscono nel motore d'analisi di OpenMind, che restituisce numeri esatti, grafici, cruscotti e insight operativi.">
      {/* fonti: due nastri che scorrono in direzioni opposte */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...SOURCES_A, ...SOURCES_B, ...SOURCES_A, ...SOURCES_B].map(([label, name], i) => (
            <div className="domain-card" key={`a-${i}`}>
              <span className="domain-label">{label}</span>
              <span className="domain-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee marquee-gap" aria-hidden="true">
        <div className="marquee-track marquee-reverse">
          {[...SOURCES_B, ...SOURCES_A, ...SOURCES_B, ...SOURCES_A].map(([label, name], i) => (
            <div className="domain-card" key={`b-${i}`}>
              <span className="domain-label">{label}</span>
              <span className="domain-name">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* linee che convergono nel nodo */}
      <svg
        className="hub-svg"
        viewBox="0 0 800 190"
        preserveAspectRatio="xMidYMax meet"
        aria-hidden="true"
      >
        <path d="M 60 0 C 60 120, 380 130, 396 182" />
        <path d="M 230 0 C 230 100, 390 120, 398 182" />
        <path d="M 400 0 L 400 182" />
        <path d="M 570 0 C 570 100, 410 120, 402 182" />
        <path d="M 740 0 C 740 120, 420 130, 404 182" />
      </svg>

      <div className="hub" aria-hidden="true">
        <span className="hub-mark">Om</span>
        <span className="hub-caption">Motore d&apos;analisi · Claude di Anthropic</span>
      </div>

      {/* uscita: linea verticale e risposte */}
      <div className="hub-down" aria-hidden="true" />
      <p className="hub-out-label" aria-hidden="true">
        Risposte
      </p>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...OUTPUTS, ...OUTPUTS].map((name, i) => (
            <div className="domain-card out-card" key={`o-${i}`}>
              <span className="domain-name">
                <span className="out-arrow">→</span> {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
