"use client";

import { useEffect, useRef } from "react";

/* Il fluido che accompagna tutto il sito: un layer fisso dietro la pagina
   con il video delle onde di particelle (ProRes Envato convertito in H.264
   a GOP corti, proprio per poterlo scorrere avanti e indietro). La testina
   di riproduzione è pilotata dallo scroll: un loop rAF insegue con una
   interpolazione morbida la posizione di pagina e si spegne da solo quando
   l'utente si ferma — il fluido resta immobile mentre si legge. Il layer
   deriva anche di posizione e scala (variabili --fy/--fs) per dare la
   sensazione di attraversare un'unica materia.

   Fallback: senza JS o con prefers-reduced-motion il video non viene mai
   caricato e resta il fotogramma poster; se il video non può partire,
   il poster è comunque sotto di lui. Le sezioni chiare (i «fogli») coprono
   il layer, quelle scure lo rivelano con scrim diversi. */

export default function FluidField() {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    /* Fasi del racconto: la sezione che attraversa il centro dello schermo
       dichiara la sua fase (data-phase) e il fluido cambia umore — più
       disperso e spento sul problema, acceso sull'analisi, raccolto e quieto
       su sicurezza e chiusura. Solo opacità e scala, in CSS. */
    const phases = document.querySelectorAll("[data-phase]");
    let phaseIo = null;
    if (phases.length && "IntersectionObserver" in window) {
      phaseIo = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) root.dataset.phase = e.target.dataset.phase;
          }
        },
        { rootMargin: "-48% 0px -48% 0px" }
      );
      phases.forEach((el) => phaseIo.observe(el));
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => phaseIo && phaseIo.disconnect();
    }

    /* rendition in base al viewport, decisa una volta al caricamento */
    video.src = window.innerWidth < 760 ? "/fluid/fluid-768.mp4" : "/fluid/fluid-1280.mp4";
    video.load();

    let duration = 0;
    let target = 0;
    let current = 0;
    let raf = 0;

    const onMeta = () => {
      duration = video.duration || 0;
      try {
        video.currentTime = 0.04;
      } catch {}
      root.classList.add("ff-ready");
    };
    video.addEventListener("loadedmetadata", onMeta);

    const progress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const apply = () => {
      if (duration && !video.seeking) {
        const t = 0.04 + current * (duration - 0.16);
        if (Math.abs(video.currentTime - t) > 0.018) video.currentTime = t;
      }
      root.style.setProperty("--fy", (current * -52).toFixed(2));
      root.style.setProperty("--fs", (1 + current * 0.08).toFixed(4));
      /* filo di progressione in cima alla pagina */
      if (threadRef.current) {
        threadRef.current.style.transform = `scaleX(${current.toFixed(4)})`;
      }
    };

    const tick = () => {
      raf = 0;
      const delta = target - current;
      if (Math.abs(delta) < 0.0006) {
        /* arrivato: ultimo frame e stop, niente loop a vuoto */
        current = target;
        apply();
        return;
      }
      current += delta * 0.085;
      apply();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = progress();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      if (phaseIo) phaseIo.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", onMeta);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
    <div ref={rootRef} className="fluid-field" data-phase="hero" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ff-media ff-poster" src="/fluid/fluid-poster.jpg" alt="" />
      <video
        ref={videoRef}
        className="ff-media"
        muted
        playsInline
        preload="auto"
        poster="/fluid/fluid-poster.jpg"
      />
      <span className="ff-tint" />
      <span className="ff-shade" />
      <span className="ff-glow" />
      <span className="ff-vignette" />
    </div>
    {/* filo conduttore: sottile linea di avanzamento legata allo scroll */}
    <div className="scroll-thread" aria-hidden="true">
      <span ref={threadRef} />
    </div>
    </>
  );
}
