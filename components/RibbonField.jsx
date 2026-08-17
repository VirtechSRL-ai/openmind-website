"use client";

import { useEffect, useRef } from "react";

/* Campo di nastri («ribbon field», dai gradienti community di 21st.dev):
   fasce diagonali bianco → azzurro → oltremare → iris, piegate da un'onda
   trasversale che avanza piano. Disegnato a bassa risoluzione su canvas e
   riscalato via CSS (la sfocatura è gratis). Il lato «bianco» del campo
   sfuma nel fondo scuro (envelope ramp), così il testo resta leggibile.
   Con prefers-reduced-motion il campo è un singolo fotogramma statico. */

const STOPS = [
  { pos: 0.18, rgb: [255, 255, 255] }, // bianco
  { pos: 0.57, rgb: [120, 184, 249] }, // azzurro cielo
  { pos: 0.6, rgb: [86, 103, 255] }, // oltremare
  { pos: 1.0, rgb: [77, 47, 249] }, // iris
];

const ANGLE = (32 * Math.PI) / 180;
const SCALE = 0.68;
const WAVE = 0.14;
const FEATHER = 0.048; // softness 24 → piuma sulle giunzioni tra fasce
const FADE = 0.4; // envelope ramp: alpha 0 → 1 lungo l'asse delle fasce

const W = 232;
const H = 132;

function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/* Colore della fascia in s ∈ [0,1], con transizioni ammorbidite ai bordi. */
function colorAt(s) {
  let prev = STOPS[0];
  if (s <= STOPS[0].pos - FEATHER) return STOPS[0].rgb;
  for (let k = 1; k < STOPS.length; k++) {
    const cur = STOPS[k];
    const b = prev.pos; // confine tra fascia k-1 e fascia k
    if (s < b + FEATHER) {
      const t = smoothstep(b - FEATHER, b + FEATHER, s);
      return [
        prev.rgb[0] + (cur.rgb[0] - prev.rgb[0]) * t,
        prev.rgb[1] + (cur.rgb[1] - prev.rgb[1]) * t,
        prev.rgb[2] + (cur.rgb[2] - prev.rgb[2]) * t,
      ];
    }
    if (s <= cur.pos - FEATHER) return cur.rgb;
    prev = cur;
  }
  return STOPS[STOPS.length - 1].rgb;
}

export default function RibbonField({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = W;
    canvas.height = H;
    const img = ctx.createImageData(W, H);
    const data = img.data;

    const cos = Math.cos(ANGLE);
    const sin = Math.sin(ANGLE);
    const aspect = W / H;
    const TWO_PI = Math.PI * 2;

    const draw = (ph) => {
      const waveClock = 20.75 + ph * 1.2;
      let i = 0;
      for (let y = 0; y < H; y++) {
        const v = y / H - 0.5;
        for (let x = 0; x < W; x++) {
          const u = (x / W - 0.5) * aspect;
          const cross = -u * sin + v * cos;
          let s =
            (u * cos + v * sin) * SCALE +
            0.5 +
            WAVE * 0.35 * Math.sin(cross * 2.4 * TWO_PI + waveClock);
          s = Math.min(1, Math.max(0, s));
          const rgb = colorAt(s);
          const alpha = smoothstep(0, FADE, s);
          data[i] = rgb[0];
          data[i + 1] = rgb[1];
          data[i + 2] = rgb[2];
          data[i + 3] = alpha * 255;
          i += 4;
        }
      }
      ctx.putImageData(img, 0, 0);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    draw(0);
    if (reduced) return;

    let raf = 0;
    let start = 0;
    const loop = (ts) => {
      if (!start) start = ts;
      draw((ts - start) / 1000);
      raf = requestAnimationFrame(loop);
    };

    /* Anima solo quando è in viewport: niente rAF sprecati fuori schermo. */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!raf) raf = requestAnimationFrame(loop);
        } else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
          start = 0;
        }
      });
    });
    io.observe(canvas);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`ribbon-field ${className}`.trim()} aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}
