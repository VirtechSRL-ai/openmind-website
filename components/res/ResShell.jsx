import DemoCta from "../DemoCta";
import Reveal from "../Reveal";
import ScrollFx from "../ScrollFx";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { HYGIENE_PAGES } from "../../lib/site";
import ResBar from "./ResBar";

/* Cornice comune delle cinque risorse: la famiglia (barra-indice, in breve,
   prossima risorsa, chiusura) è la stessa; la composizione interna di ogni
   articolo è sua. */

export function ResHeadMeta({ slug, crumb }) {
  const i = HYGIENE_PAGES.findIndex((p) => p.slug === slug);
  return (
    <>
      <nav className="breadcrumb" aria-label="Percorso">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/risorse">Risorse</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{crumb}</span>
      </nav>
      <p className="res-chap">
        <span className="chap-num">{String(i + 1).padStart(2, "0")}</span>
        <span className="chap-topic">{HYGIENE_PAGES[i].label}</span>
      </p>
    </>
  );
}

export function Brief({ items }) {
  return (
    <section className="res-brief" aria-label="In breve">
      <div className="wrap res-brief-row">
        <span className="res-brief-label">In breve</span>
        <ol>
          {items.map(([text, href], k) => (
            <Reveal as="li" delay={k * 110} key={text}>
              <a href={href}>
                <span className="rb-n">{k + 1}</span>
                <span>{text}</span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function NextResource({ slug }) {
  const i = HYGIENE_PAGES.findIndex((p) => p.slug === slug);
  const next = HYGIENE_PAGES[(i + 1) % HYGIENE_PAGES.length];
  const n = ((i + 1) % HYGIENE_PAGES.length) + 1;
  const others = HYGIENE_PAGES.filter((p) => p.slug !== slug && p.slug !== next.slug);
  return (
    <section className="res-next" aria-label="Prossima risorsa">
      <div className="wrap">
        <a className="rn-card" href={`/risorse/${next.slug}`}>
          <span className="rn-kicker">
            Prossima risorsa <span className="rn-n">{String(n).padStart(2, "0")}</span>
          </span>
          <span className="rn-q">{next.question}</span>
          <span className="rn-fig">
            <span className="rn-fig-num">{next.figure}</span>
            <span className="rn-fig-label">{next.figureLabel}</span>
          </span>
          <span className="rn-go" aria-hidden="true">
            →
          </span>
        </a>
        <ul className="rn-others" aria-label="Altre risorse">
          {others.map((p) => (
            <li key={p.slug}>
              <a href={`/risorse/${p.slug}`}>
                <span>{p.label}</span>
                <span className="rn-o-fig">{p.figure}</span>
              </a>
            </li>
          ))}
          <li>
            <a href="/risorse">
              <span>Tutte le risorse</span>
              <span className="rn-o-fig">→</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function ResShell({ slug, chapters, children }) {
  const i = HYGIENE_PAGES.findIndex((p) => p.slug === slug);
  return (
    <>
      <SiteHeader />
      <ScrollFx />
      <ResBar title={HYGIENE_PAGES[i].label} chapters={chapters} />
      <main className={`res-article res-a${i + 1}`}>
        {children}
        <NextResource slug={slug} />
        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
