import DemoCta from "../../components/DemoCta";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../lib/site";

const TITLE = "Risorse";
const DESCRIPTION =
  "Cinque domande concrete che ogni PMI manifatturiera si pone — e come OpenMind risponde in 30 secondi, senza Excel.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/risorse" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/risorse",
  },
};

/* Icona «domanda» per ogni card — il virgolettato è il tratto delle risorse */
function QuoteIcon() {
  return (
    <svg
      className="res-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 8H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8c0 4-2 6-4 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8c0 4-2 6-4 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ============ HERO ============ */}
        <section className="section-cream page-hero">
          <div className="wrap">
            <div className="page-hero-grid">
              <div>
                <span className="kicker kicker-pill">Risorse</span>
                <h1>
                  Le domande che{" "}
                  <span className="ai ai-light">costano mezza giornata</span>
                </h1>
              </div>
              <p className="page-hero-sub">
                Ogni articolo parte da una domanda vera — quella che oggi
                richiede Excel, tre uffici e una mezza giornata — e mostra come
                OpenMind ci risponde in 30 secondi sui tuoi dati.
              </p>
            </div>
          </div>
        </section>

        {/* ============ GRIGLIA ARTICOLI ============ */}
        <section className="section section-dots risorse-index">
          <div className="wrap">
            <ol className="res-grid">
              {HYGIENE_PAGES.map((page, i) => (
                <Reveal as="li" key={page.slug} delay={i * 80}>
                  <a
                    href={`/risorse/${page.slug}`}
                    className="res-card"
                  >
                    <span className="res-card-num">{String(i + 1).padStart(2, "0")}</span>
                    <QuoteIcon />
                    <h2 className="res-card-title">{page.title}</h2>
                    <p className="res-card-desc">{page.description}</p>
                    <span className="res-card-link">
                      Leggi la risorsa{" "}
                      <span className="btn-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
