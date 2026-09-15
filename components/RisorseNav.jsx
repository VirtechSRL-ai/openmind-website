import { HYGIENE_PAGES } from "../lib/site";

export default function RisorseNav({ current }) {
  const others = HYGIENE_PAGES.filter((page) => page.slug !== current);
  return (
    <nav className="risorse-nav" aria-label="Altre risorse">
      <p className="risorse-nav-title">Altre domande a cui OpenMind risponde</p>
      <ul className="risorse-nav-list">
        {others.map((page) => (
          <li key={page.slug}>
            <a href={`/risorse/${page.slug}`} className="risorse-nav-card">
              <span className="risorse-nav-card-title">{page.title}</span>
              <span className="risorse-nav-card-desc">{page.label}</span>
              <span className="risorse-nav-card-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
