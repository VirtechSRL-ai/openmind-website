import { APP_URL, HYGIENE_PAGES } from "../lib/site";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="site-head" id="top">
      <div className="wrap head-row">
        <a className="brand" href="/#top" aria-label="OpenMind, torna all'inizio">
          <span className="brand-mark" aria-hidden="true">
            Om
          </span>
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
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
