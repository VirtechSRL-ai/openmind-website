import ContactForm from "./ContactForm";
import { APP_URL, DEMO_MAILTO } from "../lib/site";

export default function DemoCta() {
  return (
    <section className="dark-band closing" id="demo" data-phase="cta">
      <div className="wrap">
        <span className="kicker">Richiedi una demo</span>
        <h2>
          Vuoi provarlo <span className="ai ai-dark">sui tuoi dati?</span>
        </h2>
        <p className="band-sub">
          Lascia nome, email e azienda: ti ricontattiamo noi. Oppure scrivi a{" "}
          <a href={DEMO_MAILTO}>info.virtechsrl@gmail.com</a>.
        </p>
        <ContactForm />
        <p className="cf-alt">
          Hai già un account? <a href={APP_URL}>Accedi a OpenMind →</a>
        </p>
      </div>
    </section>
  );
}
