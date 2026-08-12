"use client";

import { useEffect, useRef, createElement } from "react";

/* Rivela l'elemento quando entra in viewport. Con JS assente o
   prefers-reduced-motion attivo il contenuto resta sempre visibile. */
export default function Reveal({ as = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = () => el.classList.add("in");

    if (reduced || !("IntersectionObserver" in window)) {
      show();
      return;
    }

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);

    /* Rete di sicurezza: deep link, scroll programmatici e scroll rapidi.
       Rivela anche gli elementi già superati (sopra il viewport), che
       altrimenti resterebbero nascosti per sempre. */
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const r = el.getBoundingClientRect();
      if (r.top < vh) {
        show();
        io.disconnect();
      }
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        check();
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const t1 = setTimeout(check, 300);
    const t2 = setTimeout(check, 1500);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [delay]);

  return createElement(as, { ref, className: `reveal ${className}`.trim(), ...rest }, children);
}
