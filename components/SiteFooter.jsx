import { APP_URL, DEMO_MAILTO, HYGIENE_PAGES } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="/#top">
              <img className="brand-mark" src="/logo-mark.png" alt="" width="64" height="64" />
              <span className="brand-word">OpenMind</span>
            </a>
            <p className="foot-tagline">L&apos;analista dati AI per la manifattura</p>
          </div>
          <nav className="foot-col" aria-label="Sezioni">
            <p className="foot-col-title">Info</p>
            <a href="/#come-funziona">Come funziona</a>
            <a href="/#dentro">Dentro OpenMind</a>
            <a href="/#esempi">Esempi</a>
            <a href="/sicurezza">Sicurezza</a>
            <a href="/#faq">FAQ</a>
          </nav>
          <nav className="foot-col" aria-label="Risorse">
            <p className="foot-col-title">Risorse</p>
            {HYGIENE_PAGES.map((page) => (
              <a key={page.slug} href={`/risorse/${page.slug}`}>
                {page.label}
              </a>
            ))}
          </nav>
          <nav className="foot-col" aria-label="Azienda">
            <p className="foot-col-title">Azienda</p>
            <a href="/sicurezza">Sicurezza e protezione dati</a>
            <a href="/#demo">Richiedi una demo</a>
            <a href={DEMO_MAILTO}>Contattaci</a>
            <a href={APP_URL}>Accedi all&apos;app</a>
          </nav>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Virtech Srl</span>
          <span>OpenMind v2.0.0 — Powered by Virtech</span>
        </div>
      </div>
    </footer>
  );
}
