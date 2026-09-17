"use client";

import { useEffect, useRef, useState } from "react";

/* Conteggio in salita per i numeri grandi: parte quando il numero entra in
   viewport e si ferma sul valore vero. Il server rende già il valore finale,
   quindi senza JS, con prefers-reduced-motion o IntersectionObserver assente
   il numero è semplicemente statico. */
export default function CountUp({ value, suffix = "", decimals = 0, duration = 1100 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) return;
          started = true;
          io.disconnect();

          const t0 = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(value * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          setDisplay(0);
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}
