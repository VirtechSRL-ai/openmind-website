import { APP_URL, HYGIENE_PAGES } from "../lib/site";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="site-head" id="top">
      <div className="wrap head-row">
        <a className="brand" href="/#top" aria-label="OpenMind, torna all'inizio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
              className="brand-logo"
              src="/brand/openmind-logo-640.png"
              alt=""
              width="640"
              height="102"
            />
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
                  <span className="nd-label">{page.label}</span>
                  <span className="nd-fig">{page.figure}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="head-cta">
          <a className="btn btn-light btn-glow head-demo" href="/#demo" aria-label="Richiedi una demo">
            <span className="head-demo-full">Richiedi una demo</span>
            <span className="head-demo-short">Demo</span>
          </a>
          <a className="lang-pill" href={APP_URL}>
            Accedi
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
