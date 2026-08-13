import fs from "fs";
import path from "path";
import Reveal from "./Reveal";

const SECTORS = [
  { slug: "meccanica", label: "Meccanica di precisione" },
  { slug: "lamiera", label: "Carpenteria e lamiera" },
  { slug: "plastica", label: "Materie plastiche" },
  { slug: "elettromeccanica", label: "Elettromeccanica" },
  { slug: "automazione", label: "Automazione" },
  { slug: "cnc", label: "Lavorazioni CNC" },
];

/* Slider dei settori in stile «foglio tecnico»: ogni card mostra
   l'illustrazione a matita da /public/settori/<slug>.png quando esiste;
   in sua assenza resta il foglio millimetrato con i segni di registro. */
export default function Sectors() {
  const dir = path.join(process.cwd(), "public", "settori");

  return (
    <section className="section section-cream" id="settori">
      <div className="wrap">
        <div className="sec-head">
          <span className="kicker">I settori</span>
          <h2>
            Costruito per le PMI della{" "}
            <span className="ai ai-light">manifattura italiana</span>
          </h2>
        </div>
      </div>
      <Reveal>
        <div
          className="marquee sectors-marquee"
          aria-label="Settori: meccanica di precisione, carpenteria e lamiera, materie plastiche, elettromeccanica, automazione, lavorazioni CNC"
        >
          <div className="marquee-track">
            {[...SECTORS, ...SECTORS].map(({ slug, label }, i) => {
              const file = `/settori/${slug}.jpg`;
              const exists = fs.existsSync(path.join(dir, `${slug}.jpg`));
              return (
                <div key={`${slug}-${i}`} className="sector-card" aria-hidden={i >= SECTORS.length}>
                  <span className="sector-label">{label}</span>
                  <div className="sector-sheet">
                    {exists ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={file} alt="" loading="lazy" />
                    ) : (
                      <span className="sector-marks" aria-hidden="true" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
