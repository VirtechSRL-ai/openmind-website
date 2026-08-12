"use client";

import { useEffect, useRef, useState } from "react";

const ROWS = [
  {
    what: "Copertura ordini in portafoglio",
    detail: "3 ordini d'acquisto da emettere · data ultima 21/08",
    when: "adesso",
  },
  {
    what: "Consuntivo ordine di produzione 114",
    detail: "margine 23,4% · scarti 1,8% · costo pieno al pezzo",
    when: "2 min fa",
  },
  {
    what: "Analisi ABC fatturato 2024",
    detail: "classe A: 12 clienti · CSV pronto da scaricare",
    when: "9 min fa",
  },
  {
    what: "Fornitori in ritardo sulle consegne",
    detail: "5 righe oltre data promessa · dettaglio per fornitore",
    when: "14 min fa",
  },
];

/* Mockup del cruscotto: metriche e attività recenti, rivelate in sequenza. */
export default function LivePanel() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setVisible(ROWS.length);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let timers = [];
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          io.disconnect();
          ROWS.forEach((_, i) => {
            timers.push(setTimeout(() => setVisible(i + 1), 400 + i * 550));
          });
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="panel"
      role="img"
      aria-label="Il cruscotto di OpenMind: metriche operative sempre aggiornate e l'elenco delle ultime analisi eseguite sui dati aziendali."
    >
      <div className="panel-head" aria-hidden="true">
        <span className="panel-title">Cruscotto</span>
        <span className="live-flag">
          <span className="live-dot" />
          dati di adesso
        </span>
      </div>

      <div className="tiles" aria-hidden="true">
        <div className="tile tile-hot">
          <span className="tile-label">Ordini aperti</span>
          <span className="tile-value">142</span>
          <span className="tile-note">portafoglio clienti</span>
        </div>
        <div className="tile">
          <span className="tile-label">OdP in corso</span>
          <span className="tile-value">28</span>
          <span className="tile-note">6 in avanzamento oggi</span>
        </div>
        <div className="tile">
          <span className="tile-label">Righe in ritardo</span>
          <span className="tile-value">5</span>
          <span className="tile-note">consegne fornitori</span>
        </div>
        <div className="tile">
          <span className="tile-label">Analisi salvate</span>
          <span className="tile-value">17</span>
          <span className="tile-note">si aggiornano da sole</span>
        </div>
      </div>

      <div className="feed" aria-hidden="true">
        <span className="feed-title">Ultime analisi</span>
        {ROWS.map((row, i) => (
          <div key={row.what} className={`feed-row${i < visible ? " on" : ""}`}>
            <span className="feed-what">{row.what}</span>
            <span className="feed-detail">{row.detail}</span>
            <span className="feed-when">{row.when}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
