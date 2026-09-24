"use client";

import { useState } from "react";

/* «Cambiando solo la domanda»: scegli il raggruppamento e la domanda si
   riscrive. Non mostra risultati inventati: mostra che il confronto è lo
   stesso, cambia solo la parola. */

const GROUPS = [
  ["linea di prodotto", "per linea di prodotto"],
  ["famiglia", "per famiglia"],
  ["cliente", "per cliente"],
  ["agente", "per agente"],
];

export default function GroupSwitch() {
  const [g, setG] = useState(0);
  return (
    <div className="gs">
      <div className="gs-tabs" role="radiogroup" aria-label="Raggruppamento">
        {GROUPS.map(([label], k) => (
          <button
            type="button"
            role="radio"
            aria-checked={g === k}
            className="gs-tab"
            key={label}
            onClick={() => setG(k)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="gs-q" aria-live="polite">
        «Confronta il fatturato 2023 vs 2024{" "}
        <span className="gs-var" key={g}>
          {GROUPS[g][1]}
        </span>
        »
      </p>
      <p className="gs-out">
        Stessa logica, stessa risposta: <strong>tabella e grafico</strong> con i due anni
        affiancati, <strong>delta assoluti e percentuali</strong>.
      </p>
    </div>
  );
}
