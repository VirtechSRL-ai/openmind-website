"use client";

import { useEffect } from "react";

/* Motore unico delle scene legate allo scroll. Ogni elemento con
   `data-scene` riceve la variabile CSS `--p` (0 → 1) che il CSS usa solo
   su transform e opacity; qui non si tocca mai il layout.

   - data-scene="pin": scena con stage sticky. p = 0 quando la scena tocca
     il bordo alto del viewport, p = 1 quando lo stage sta per sganciarsi.
     `data-lead` (frazione di viewport) anticipa l'inizio, così il primo
     movimento parte mentre lo stage sta ancora arrivando.
   - data-scene="pass": elemento che attraversa il viewport. p = 0 quando il
     suo bordo alto entra dal basso, p = 1 quando arriva a `data-end`
     (frazione di viewport, default 0.3).
   - data-steps="n": scrive anche `data-step` e `--step` (0…n-1) per le
     scene a capitoli (i settori).

   Il valore insegue il bersaglio con un'interpolazione morbida: il
   movimento resta cinematografico anche con la rotella a scatti. Solo le
   scene vicine al viewport vengono misurate; il loop si ferma da solo.
   Con prefers-reduced-motion la classe `fx` non viene mai messa su <html>
   e il CSS mostra lo stato finale, senza sticky. */

const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

export default function ScrollFx() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-scene]"));
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const html = document.documentElement;
    html.classList.add("fx");

    const items = els.map((el) => ({
      el,
      pin: el.dataset.scene === "pin",
      lead: parseFloat(el.dataset.lead || "0"),
      end: parseFloat(el.dataset.end || "0.3"),
      steps: parseInt(el.dataset.steps || "0", 10),
      live: false,
      cur: -1,
      tgt: 0,
      step: -1,
    }));
    const byEl = new Map(items.map((it) => [it.el, it]));

    const measure = (it) => {
      const r = it.el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (it.pin) {
        const lead = it.lead * vh;
        const span = r.height - vh + lead;
        return span > 0 ? clamp((lead - r.top) / span) : r.top < 0 ? 1 : 0;
      }
      return clamp((vh - r.top) / (vh * (1 - it.end)));
    };

    const write = (it) => {
      it.el.style.setProperty("--p", it.cur.toFixed(4));
      if (it.steps) {
        const s = Math.min(it.steps - 1, Math.floor(it.cur * it.steps));
        if (s !== it.step) {
          it.step = s;
          it.el.dataset.step = String(s);
          it.el.style.setProperty("--step", String(s));
        }
      }
    };

    let raf = 0;
    const frame = () => {
      raf = 0;
      let moving = false;
      /* prima tutte le letture, poi tutte le scritture: niente layout thrash */
      for (const it of items) if (it.live) it.tgt = measure(it);
      for (const it of items) {
        if (!it.live) continue;
        if (it.cur < 0) it.cur = it.tgt;
        const d = it.tgt - it.cur;
        if (Math.abs(d) > 0.0005) {
          it.cur += d * 0.12;
          moving = true;
        } else {
          it.cur = it.tgt;
        }
        write(it);
      }
      if (moving) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const it = byEl.get(e.target);
          if (!it) continue;
          it.live = e.isIntersecting;
          if (!it.live) {
            /* uscita: congela lo stato esatto (0 sotto, 1 sopra) */
            it.cur = it.tgt = measure(it);
            write(it);
          }
        }
        kick();
      },
      { rootMargin: "35% 0px 35% 0px" }
    );
    items.forEach((it) => io.observe(it.el));

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (raf) cancelAnimationFrame(raf);
      html.classList.remove("fx");
    };
  }, []);

  return null;
}
