"use client";

import { useEffect, useState } from "react";

/* Sipario d'apertura: alla prima visita della sessione le linee-dati
   convergono nel marchio Om — lo stesso gesto del diagramma hub — poi il
   velo si alza sulla hero, la cui coreografia parte in coda (delay in CSS
   sotto `html.intro`). Un inline script in layout.jsx aggiunge `intro` a
   <html> prima del primo paint, mai con prefers-reduced-motion né nelle
   visite successive della sessione: niente lampi di contenuto, niente velo
   senza JS. Qui si gestiscono solo uscita e skip (click, tasto, scroll);
   una animazione CSS di sicurezza nasconde comunque il velo dopo 4s. */

const LEAVE_AT = 3150; // ms: il velo inizia ad alzarsi
const GONE_AT = 3850; // ms: velo rimosso del tutto

/* particelle disperse: posizione finale (cx, cy) e offset di partenza */
const DOTS = [
  [60, 50, -64, -34],
  [300, 50, 64, -34],
  [60, 190, -64, 34],
  [300, 190, 64, 34],
  [180, 26, 0, -46],
  [180, 214, 0, 46],
  [110, 84, -44, -26],
  [250, 84, 44, -26],
  [110, 156, -44, 26],
  [250, 156, 44, 26],
  [146, 58, -22, -42],
  [214, 182, 22, 42],
];

export default function IntroVeil() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("intro")) {
      setGone(true);
      return;
    }
    try {
      sessionStorage.setItem("om-intro", "1");
    } catch {
      /* storage bloccato: il velo resta comunque una tantum per pagina */
    }

    const timers = [];
    let closed = false;

    /* uscita naturale: il velo sfuma mentre la hero sale da sotto;
       la classe `intro` resta, così i delay della hero non si resettano */
    timers.push(
      setTimeout(() => {
        document.querySelector(".intro-veil")?.classList.add("iv-leave");
      }, LEAVE_AT)
    );
    timers.push(setTimeout(() => setGone(true), GONE_AT));

    /* skip: si toglie `intro` da <html>, i delay della hero tornano a zero
       e la coreografia riparte subito, senza velo */
    const skip = () => {
      if (closed) return;
      closed = true;
      timers.forEach(clearTimeout);
      root.classList.remove("intro");
      setGone(true);
    };
    const opts = { passive: true };
    window.addEventListener("pointerdown", skip, opts);
    window.addEventListener("keydown", skip);
    window.addEventListener("wheel", skip, opts);
    window.addEventListener("touchmove", skip, opts);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
  }, []);

  if (gone) return null;

  return (
    <div className="intro-veil" aria-hidden="true">
      <div className="iv-center">
        <svg className="iv-lines" viewBox="0 0 360 240" fill="none">
          <path d="M 12 26 C 90 60, 130 90, 152 104" />
          <path d="M 180 8 L 180 78" />
          <path d="M 348 26 C 270 60, 230 90, 208 104" />
          <path d="M 12 214 C 90 180, 130 150, 152 136" />
          <path d="M 180 232 L 180 162" />
          <path d="M 348 214 C 270 180, 230 150, 208 136" />
          <g className="iv-dots">
            {DOTS.map(([cx, cy, dx, dy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="2.2"
                style={{
                  "--dx": `${dx}px`,
                  "--dy": `${dy}px`,
                  animationDelay: `${0.08 + i * 0.055}s`,
                }}
              />
            ))}
          </g>
        </svg>
        <span className="iv-markwrap">
          <span className="iv-ring" aria-hidden="true" />
          <span className="iv-mark">Om</span>
        </span>
        <span className="iv-word">OpenMind</span>
        <span className="iv-tag">Analista dati AI · Virtech Srl</span>
      </div>
    </div>
  );
}
