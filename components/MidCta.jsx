/* CTA intermedia: un invito breve nel punto in cui il lettore è già convinto,
   senza aspettare la chiusura della pagina. */

export default function MidCta({ title, note, label = "Richiedi una demo" }) {
  return (
    <aside className="mid-cta">
      <div className="wrap mid-cta-row">
        <div className="mid-cta-text">
          <p className="mid-cta-title">{title}</p>
          {note && <p className="mid-cta-note">{note}</p>}
        </div>
        <a className="btn btn-light btn-lg" href="#demo">
          {label}
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </aside>
  );
}
