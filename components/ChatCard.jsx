"use client";

import { useEffect, useRef, useState } from "react";

const STATES = [
  "Esploro il database…",
  "Confronto le metriche…",
  "Compongo la visualizzazione…",
];

/* Riproduce la sequenza reale dell'app: domanda → stati di lavoro → risposta. */
export default function ChatCard() {
  const cardRef = useRef(null);
  const [step, setStep] = useState(0); // 0 attesa · 1 domanda · 2 stati · 3 risposta
  const [stateIdx, setStateIdx] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setStep(3);
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    let timers = [];
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          io.disconnect();

          timers.push(setTimeout(() => setStep(1), 600));
          timers.push(setTimeout(() => setStep(2), 1300));
          STATES.forEach((_, i) => {
            timers.push(setTimeout(() => setStateIdx(i), 1300 + i * 900));
          });
          timers.push(setTimeout(() => setStep(3), 1300 + STATES.length * 900));
        });
      },
      { threshold: 0.35 }
    );
    io.observe(card);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="panel"
      role="img"
      aria-label="La chat di OpenMind: alla domanda «Che margine ho fatto sull'ordine 2025/114?» risponde con il margine calcolato, il dettaglio di ricavi e costi e un consiglio operativo."
    >
      <div className="panel-head" aria-hidden="true">
        <span className="panel-title">Nuova chat</span>
        <span className="live-flag">v2.0.0</span>
      </div>

      <div className="chat-body chat-seq" aria-hidden="true">
        <p className="chat-hello">
          <strong>Buongiorno.</strong> Come posso aiutarti oggi?
        </p>

        <div className={`msg msg-user${step >= 1 ? " shown" : ""}`} data-step="1">
          Che margine ho fatto sull&apos;ordine 2025/114?
        </div>

        <div
          className={`msg-status${step >= 2 ? " shown" : ""}${step >= 3 ? " done" : ""}`}
          data-step="2"
        >
          <span className="status-dot" />
          <span className="status-text">{STATES[stateIdx]}</span>
        </div>

        <div className={`msg msg-ai${step >= 3 ? " shown" : ""}`} data-step="3">
          <p>
            Sull&apos;ordine <strong>2025/114</strong> il margine è del <strong>23,4%</strong>:
            ricavo 48.600&nbsp;€ contro 37.230&nbsp;€ di costi.
          </p>
          <div className="mini-chart">
            <div className="bar-row">
              <span className="bar-label">Ricavo</span>
              <span className="bar-track">
                <span className="bar" style={{ "--w": "100%" }} />
              </span>
              <span className="bar-val">48.600&nbsp;€</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">Materiali</span>
              <span className="bar-track">
                <span className="bar" style={{ "--w": "52%" }} />
              </span>
              <span className="bar-val">25.270&nbsp;€</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">Manodopera</span>
              <span className="bar-track">
                <span className="bar" style={{ "--w": "25%" }} />
              </span>
              <span className="bar-val">11.960&nbsp;€</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">Margine</span>
              <span className="bar-track">
                <span className="bar bar-ember" style={{ "--w": "23%" }} />
              </span>
              <span className="bar-val">11.370&nbsp;€</span>
            </div>
          </div>
          <p className="msg-insight">
            Ho valorizzato i materiali a costo medio ponderato — fammi sapere se preferisci un
            altro metodo.
          </p>
        </div>
      </div>

      <div className="chat-input" aria-hidden="true">
        <span className="chat-placeholder">Chiedi qualcosa a OpenMind…</span>
        <span className="chat-send">Invia</span>
      </div>

      <div className="saved" aria-hidden="true">
        <p className="saved-title">Suggerimenti</p>
        <div className="saved-row">Fammi un&apos;analisi ABC del fatturato 2024</div>
        <div className="saved-row">Confronta fatturato 2023 vs 2024</div>
        <div className="saved-row">Quali clienti hanno ridotto gli ordini?</div>
      </div>
    </div>
  );
}
