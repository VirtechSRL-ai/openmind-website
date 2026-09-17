"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icons";

/* «Come funziona» in azione: i tre passi diventano un percorso cliccabile,
   sincronizzato con un pannello chat che riproduce la sequenza reale
   dell'app — domanda → stati di lavoro → analisi. Parte da solo quando
   entra in viewport; ogni passo si può rivedere con un click. Con
   prefers-reduced-motion o senza IntersectionObserver la scena mostra
   subito il risultato finale, e i click cambiano stato senza animazioni. */

const STATUSES = [
  "Leggo gli ordini fornitori aperti…",
  "Confronto date promesse e consegne…",
  "Preparo il dettaglio per fornitore…",
];

const STATUS_MS = 850;
const STEPS = [
  {
    icon: "pen",
    title: "Chiedi",
    body: (
      <>
        Come a un collega: <em>«Quali fornitori sono in ritardo sulle consegne?»</em>
      </>
    ),
  },
  {
    icon: "db",
    title: "OpenMind interroga i dati veri",
    body: "Genera ed esegue la query sul tuo database, in quel momento. In sola lettura.",
  },
  {
    icon: "chart",
    title: "Ricevi un'analisi",
    body: "Numeri esatti, il dettaglio che serve e un consiglio su cosa fare adesso.",
  },
];

export default function ProcessDemo() {
  const rootRef = useRef(null);
  const timers = useRef([]);
  const reducedRef = useRef(false);
  const [phase, setPhase] = useState(-1); // -1 attesa · 0 domanda · 1 lavoro · 2 analisi
  const [statusIdx, setStatusIdx] = useState(0);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const push = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  /* fa ripartire la scena dal passo scelto e completa la sequenza */
  const playFrom = (from) => {
    clearTimers();

    if (reducedRef.current) {
      /* niente sequenze a tempo: cambi di stato istantanei */
      setStatusIdx(0);
      setPhase(from);
      if (from === 1) push(() => setPhase(2), 1200);
      return;
    }

    const work = (at) => {
      push(() => {
        setStatusIdx(0);
        setPhase(1);
      }, at);
      STATUSES.forEach((_, i) => {
        push(() => setStatusIdx(i), at + i * STATUS_MS);
      });
      push(() => setPhase(2), at + STATUSES.length * STATUS_MS);
    };

    if (from === 0) {
      setPhase(-1);
      push(() => setPhase(0), 300);
      work(1000);
    } else if (from === 1) {
      setPhase(0);
      work(120);
    } else {
      setPhase(2);
    }
  };

  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedRef.current || !("IntersectionObserver" in window)) {
      setPhase(2);
      return;
    }

    const el = rootRef.current;
    if (!el) return;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          io.disconnect();
          playFrom(0);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = phase < 0 ? 0 : phase;

  return (
    <div className="pd" ref={rootRef}>
      <ol className="pd-steps">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className={`pd-li${active === i ? " on" : ""}${active > i ? " done" : ""}`}
          >
            <button type="button" className="pd-step-btn" onClick={() => playFrom(i)}>
              <span className="pd-num" aria-hidden="true">
                {i + 1}
              </span>
              <span className="pd-step-text">
                <span className="pd-step-title">
                  <Icon name={s.icon} />
                  {s.title}
                </span>
                <span className="pd-step-body">{s.body}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      <div
        className="pd-stage panel"
        role="img"
        aria-label="La sequenza di OpenMind: alla domanda «Quali fornitori sono in ritardo sulle consegne?» interroga il database in sola lettura e risponde: 5 righe d'ordine oltre la data promessa, su 3 fornitori, con il dettaglio per fornitore e un consiglio sui solleciti."
      >
        <div className="panel-head" aria-hidden="true">
          <span className="panel-title">OpenMind in azione</span>
          <span className="live-flag">
            <span className="live-dot" />
            dati di adesso
          </span>
        </div>

        <div className="chat-body chat-seq pd-seq" aria-hidden="true">
          <div className={`msg msg-user${phase >= 0 ? " shown" : ""}`} data-step="1">
            Quali fornitori sono in ritardo sulle consegne?
          </div>

          <div
            className={`msg-status${phase >= 1 ? " shown" : ""}${phase >= 2 ? " done" : ""}`}
            data-step="2"
          >
            <span className="status-dot" />
            <span className="status-text">{STATUSES[statusIdx]}</span>
            <span className="pd-ro">sola lettura</span>
          </div>

          <div className={`msg-ai-row${phase >= 2 ? " shown" : ""}`} data-step="3">
            <span className="om-ava" aria-hidden="true">
              Om
            </span>
            <div className="msg msg-ai">
              <p>
                <strong>5 righe d&apos;ordine</strong> sono oltre la data promessa, su 3
                fornitori.
              </p>
              <ul className="verdict">
                <li className="v-ok">38 righe in consegna nei tempi</li>
                <li className="v-warn">5 righe in ritardo · la più critica: +6 giorni</li>
              </ul>
              <p className="msg-insight">
                Ecco il dettaglio per fornitore: partirei dal sollecito dei due ordini con
                più giorni di ritardo.
              </p>
            </div>
          </div>
        </div>

        <div className="chat-input" aria-hidden="true">
          <span className="chat-placeholder">Chiedi qualcosa a OpenMind…</span>
          <span className="chat-send">Invia</span>
        </div>
      </div>
    </div>
  );
}
