import Reveal from "./Reveal";

/* CTA intermedia, famiglia «Focus»: arriva subito dopo gli esempi. Il
   riquadro è una finestra sulla materia (immagine fornita dal cliente): si
   apre da una maschera mentre entra e l'immagine scorre più lenta del
   testo. Sopra e sotto, due fasce «OPENMIND» scorrono in versi opposti e
   lo incorniciano. */

const REPEAT = 6;

function Band({ reverse = false }) {
  const half = (key) => (
    <span className="omb-half" aria-hidden={key === "b" ? "true" : undefined} key={key}>
      {Array.from({ length: REPEAT }, (_, i) => (
        <span className="omb-item" key={i}>
          <span className="omb-word">OpenMind</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="omb-sym" src="/brand/openmind-symbol-480.png" alt="" width="480" height="423" />
        </span>
      ))}
    </span>
  );
  return (
    <div className={`omb${reverse ? " omb-rev" : ""}`} aria-hidden="true">
      <div className="omb-track">{[half("a"), half("b")]}</div>
    </div>
  );
}

export default function MidCta({ title, note, label = "Richiedi una demo" }) {
  return (
    <aside className="mid-cta" data-phase="cta-mid">
      <Band />
      <div className="wrap">
        <div className="mc-frame" data-scene="pass" data-end="-0.7">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="mc-img"
            src="/cta/openmind-cta-2000.jpg"
            srcSet="/cta/openmind-cta-1100.jpg 1100w, /cta/openmind-cta-2000.jpg 2000w"
            sizes="(max-width: 760px) 100vw, 1240px"
            alt=""
            loading="lazy"
          />
          <span className="mc-veil" aria-hidden="true" />
          <Reveal className="mc-content">
            <p className="mid-cta-title">{title}</p>
            {note && <p className="mid-cta-note">{note}</p>}
            <a className="btn btn-light btn-lg btn-glow" href="#demo">
              {label}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
      <Band reverse />
    </aside>
  );
}
