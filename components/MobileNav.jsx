"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { APP_URL } from "../lib/site";

/* Menu mobile: bottone hamburger nella barra e pannello a tutto schermo
   con le quattro voci principali in grande, più le azioni. Il pannello
   blocca lo scroll della pagina finché è aperto. */

const LINKS = [
  ["/#come-funziona", "Come funziona"],
  ["/#esempi", "Esempi"],
  ["/sicurezza", "Sicurezza"],
  ["/risorse", "Risorse"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="nav-burger"
        aria-expanded={open}
        aria-label={open ? "Chiudi il menu" : "Apri il menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {/* portal sul body: l'header ha un backdrop-filter che farebbe da
          containing block per il pannello fixed, intrappolandolo */}
      {open &&
        createPortal(
        <div className="mobile-menu">
          <nav className="mm-links" aria-label="Menu principale">
            {LINKS.map(([href, label], i) => (
              <a key={href} href={href} style={{ "--i": i }} onClick={close}>
                {label}
              </a>
            ))}
          </nav>
          <div className="mm-actions">
            <a className="btn btn-light btn-lg" href="/#demo" onClick={close}>
              Richiedi una demo
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a className="mm-login" href={APP_URL}>
              Hai già un account? Accedi →
            </a>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
