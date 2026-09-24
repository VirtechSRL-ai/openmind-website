"use client";

import { useEffect, useRef, useState } from "react";

/* Barra-indice agganciata sotto l'header: i capitoli della risorsa, quello
   che stai leggendo evidenziato, e un filo che avanza con la lettura. Su
   smartphone diventa un'unica riga «capitolo attuale ▾» che apre l'indice. */

export default function ResBar({ title, chapters }) {
  const [active, setActive] = useState(chapters[0]?.[0]);
  const [open, setOpen] = useState(false);
  const fillRef = useRef(null);

  useEffect(() => {
    const els = chapters.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (fillRef.current) fillRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [chapters]);

  const current = chapters.find(([id]) => id === active) || chapters[0];

  return (
    <nav className={`res-bar${open ? " is-open" : ""}`} aria-label="Indice della risorsa">
      <div className="wrap res-bar-row">
        <span className="rbar-title">{title}</span>
        <button
          type="button"
          className="rbar-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="rbar-now">{current[1]}</span>
          <span className="rbar-caret" aria-hidden="true">
            ▾
          </span>
        </button>
        <ol className="rbar-list">
          {chapters.map(([id, label], k) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={id === active ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="rbar-n">{String(k + 1).padStart(2, "0")}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <span className="rbar-track" aria-hidden="true">
        <span ref={fillRef} />
      </span>
    </nav>
  );
}
