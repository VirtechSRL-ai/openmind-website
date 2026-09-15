import { HYGIENE_PAGES } from "../lib/site";

export default function RisorseNav({ current }) {
  const others = HYGIENE_PAGES.filter((page) => page.slug !== current);
  return (
    <nav className="risorse-nav" aria-label="Altre risorse">
      <p className="risorse-nav-title">Altre domande a cui OpenMind risponde</p>
      <ul>
        {others.map((page) => (
          <li key={page.slug}>
            <a href={`/risorse/${page.slug}`}>{page.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
