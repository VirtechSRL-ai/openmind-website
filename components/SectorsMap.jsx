"use client";

import { useRef } from "react";

/* «Settori diversi → un unico sistema → OpenMind al centro». Il simbolo del
   logo è il nodo centrale. Su desktop la scena resta agganciata e procede in
   otto tappe (data-step, scritto da ScrollFx): 0 il simbolo da solo; 1–6 un
   settore alla volta compare, il suo raggio parte dal simbolo e resta
   tracciato, a fianco il percorso dei dati di quel settore; 7 tutto il
   sistema acceso insieme. Cliccando un nodo si salta alla sua tappa.
   Su mobile il simbolo diventa l'origine di un circuito verticale. */

const SECTORS = [
  { slug: "meccanica", label: "Meccanica di precisione", short: "Meccanica", chain: ["Ordini clienti", "Cicli di lavoro", "Margine per ordine"] },
  { slug: "lamiera", label: "Carpenteria e lamiera", short: "Carpenteria", chain: ["Materiali", "Lavorazioni", "Costo a consuntivo"] },
  { slug: "plastica", label: "Materie plastiche", short: "Plastiche", chain: ["Distinte base", "Scarti", "Costo al pezzo"] },
  { slug: "elettromeccanica", label: "Elettromeccanica", short: "Elettromeccanica", chain: ["Componenti", "Fornitori", "Ritardi di consegna"] },
  { slug: "automazione", label: "Automazione", short: "Automazione", chain: ["Produzione", "Minuti effettivi", "Scostamenti"] },
  { slug: "cnc", label: "Lavorazioni CNC", short: "CNC", chain: ["Centri di costo", "Tempi per fase", "Margine commessa"] },
];

const STEPS = SECTORS.length + 2;
const R = 38;
const pos = (i) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
};

export default function SectorsMap() {
  const ref = useRef(null);

  const jump = (i) => {
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const lead = 0.2 * vh;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - vh + lead;
    window.scrollTo({ top: top - lead + ((i + 1.5) / STEPS) * span, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="sectors scene-pin"
      id="settori"
      data-scene="pin"
      data-steps={STEPS}
      data-step="0"
      data-lead="0.2"
      data-phase="sectors"
    >
      <div className="sx-stage">
        <div className="wrap sx-layout">
          <div className="sx-head">
            <span className="kicker">I settori</span>
            <h2>
              Parla la lingua <span className="ai">della tua fabbrica.</span>
            </h2>
            <p className="sx-sub">
              Costruito per le PMI della manifattura italiana: ogni settore guarda i propri
              numeri, OpenMind li legge tutti dallo stesso gestionale.
            </p>
          </div>

          <div className="sx-map">
            <svg className="sx-svg" viewBox="0 0 100 100" aria-hidden="true">
              <circle className="sx-orbit" cx="50" cy="50" r={R} />
              <circle className="sx-orbit sx-orbit-in" cx="50" cy="50" r={R * 0.52} />
              {SECTORS.map((s, i) => {
                const { x, y } = pos(i);
                return (
                  <g key={s.slug} className={`sx-link-g sx-i${i}`}>
                    <line className="sx-ray" x1="50" y1="50" x2={x} y2={y} pathLength="100" />
                    <line className="sx-flow" x1="50" y1="50" x2={x} y2={y} pathLength="100" />
                  </g>
                );
              })}
            </svg>
            <span className="sx-sweep" aria-hidden="true" />
            <span className="sx-core" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="sx-core-sym" src="/brand/openmind-symbol-480.png" alt="" width="480" height="423" />
            </span>
            {SECTORS.map((s, i) => {
              const { x, y } = pos(i);
              return (
                <button
                  type="button"
                  key={s.slug}
                  className={`sx-node sx-i${i}`}
                  style={{ "--x": `${x}%`, "--y": `${y}%` }}
                  onClick={() => jump(i)}
                  aria-label={`Mostra ${s.label}`}
                >
                  <span className="sx-node-dot" aria-hidden="true" />
                  <span className="sx-node-label">{s.short}</span>
                </button>
              );
            })}
          </div>

          <div className="sx-panels">
          <div className="sx-intro">
            <span className="sx-idx">Un unico sistema</span>
            <p className="sx-intro-t">
              Sei settori della manifattura, <span className="ai">un solo motore d&apos;analisi.</span>
            </p>
          </div>
          <div className="sx-outro" aria-hidden="true">
            <span className="sx-idx">Il sistema</span>
            <p className="sx-intro-t">
              Settori diversi. Un unico sistema. <span className="ai">OpenMind al centro.</span>
            </p>
          </div>
          <ol className="sx-list">
            <li className="sx-origin" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/openmind-symbol-480.png" alt="" width="480" height="423" />
            </li>
            {SECTORS.map((s, i) => (
              <li className={`sx-item sx-i${i}`} key={s.slug}>
                <span className="sx-idx">
                  Settore {String(i + 1).padStart(2, "0")} / 06
                </span>
                <h3 className="sx-name">{s.label}</h3>
                <p className="sx-chain">
                  {s.chain.map((c, k) => (
                    <span className="sx-link" style={{ "--k": k }} key={c}>
                      {k > 0 && (
                        <span className="sx-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                      <span className="sx-chip">{c}</span>
                    </span>
                  ))}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="sx-img" src={`/settori/${s.slug}.jpg`} alt="" loading="lazy" />
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
