"use client";

import { useEffect, useState } from "react";
import { APP_URL, HYGIENE_PAGES } from "../lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-head" id="top">
      <div className="wrap head-row">
        <a className="brand" href="/#top" aria-label="OpenMind, torna all'inizio">
          <img className="brand-mark" src="/logo-mark.png" alt="" width="64" height="64" />
          <span className="brand-word">OpenMind</span>
        </a>
        <nav className="site-nav" aria-label="Sezioni del sito">
          <a href="/#come-funziona">Come funziona</a>
          <a href="/#esempi">Esempi</a>
          <a href="/sicurezza">Sicurezza</a>
          <div className="nav-drop">
            <button type="button" className="nav-drop-btn" aria-haspopup="true">
              Risorse
              <span className="nav-drop-caret" aria-hidden="true">
                ▾
              </span>
            </button>
            <div className="nav-drop-menu">
              {HYGIENE_PAGES.map((page) => (
                <a key={page.slug} href={`/risorse/${page.slug}`}>
                  {page.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="head-cta">
          <a className="btn btn-light" href="/#demo">
            Richiedi una demo
          </a>
          <a className="lang-pill" href={APP_URL}>
            Accedi
          </a>
        </div>
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-label="Menu di navigazione mobile"
        onClick={(event) => {
          if (event.target.closest("a")) setOpen(false);
        }}
      >
        <div className="wrap">
          <a href="/#come-funziona">Come funziona</a>
          <a href="/#esempi">Esempi</a>
          <a href="/sicurezza">Sicurezza</a>
          <p className="mobile-menu-label">Risorse</p>
          {HYGIENE_PAGES.map((page) => (
            <a key={page.slug} className="mobile-menu-sub" href={`/risorse/${page.slug}`}>
              {page.label}
            </a>
          ))}
          <div className="mobile-menu-cta">
            <a className="btn btn-light" href="/#demo">
              Richiedi una demo
            </a>
            <a className="lang-pill" href={APP_URL}>
              Accedi
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
