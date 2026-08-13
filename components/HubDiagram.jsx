import fs from "fs";
import path from "path";

const SOURCES_A = [
  ["Anagrafica", "Articoli", "anagrafica"],
  ["Distinte base", "Multilivello", "distinte"],
  ["Cicli di lavoro", "Centri di costo", "cicli"],
  ["Produzione", "Ordini e avanzamenti", "produzione"],
  ["Vendite", "Ordini clienti", "vendite"],
];

const SOURCES_B = [
  ["Acquisti", "Ordini fornitori", "acquisti"],
  ["Amministrazione", "Fatture e pagamenti", "amministrazione"],
  ["Listini", "Acquisto e vendita", "listini"],
  ["Magazzino", "Giacenze", "magazzino"],
  ["Glossario", "Il vostro gergo", "glossario"],
];

const OUTPUTS = [
  "Numeri esatti con percentuali",
  "Grafico interattivo",
  "Insight operativo",
  "Cruscotto salvato",
  "CSV dei risultati",
  "Chiarimento, se la domanda è ambigua",
];

const ICONS_DIR = path.join(process.cwd(), "public", "dati");

function DomainCard({ label, name, slug }) {
  const hasIcon = slug && fs.existsSync(path.join(ICONS_DIR, `${slug}.jpg`));
  return (
    <div className={`domain-card${hasIcon ? " has-icon" : ""}`}>
      {hasIcon && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img className="domain-icon" src={`/dati/${slug}.jpg`} alt="" loading="lazy" />
      )}
      <span className="domain-text">
        <span className="domain-label">{label}</span>
        <span className="domain-name">{name}</span>
      </span>
    </div>
  );
}

/* Diagramma alla Compri: fonti dati → motore d'analisi → risposte.
   Tutto SVG + CSS, nessuna libreria: le linee tratteggiate «scorrono»
   verso il nodo centrale con una semplice animazione di stroke-dashoffset. */
export default function HubDiagram() {
  return (
    <div className="hub-diagram" aria-label="Le fonti dati aziendali confluiscono nel motore d'analisi di OpenMind, che restituisce numeri esatti, grafici, cruscotti e insight operativi.">
      {/* fonti: due nastri che scorrono in direzioni opposte */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...SOURCES_A, ...SOURCES_B, ...SOURCES_A, ...SOURCES_B].map(([label, name, slug], i) => (
            <DomainCard key={`a-${i}`} label={label} name={name} slug={slug} />
          ))}
        </div>
      </div>
      <div className="marquee marquee-gap" aria-hidden="true">
        <div className="marquee-track marquee-reverse">
          {[...SOURCES_B, ...SOURCES_A, ...SOURCES_B, ...SOURCES_A].map(([label, name, slug], i) => (
            <DomainCard key={`b-${i}`} label={label} name={name} slug={slug} />
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
        <span className="hub-caption">Motore d&apos;analisi OpenMind</span>
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
