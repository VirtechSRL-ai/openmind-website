import ContactForm from "./ContactForm";
import RibbonField from "./RibbonField";
import { APP_URL, DEMO_MAILTO } from "../lib/site";

export default function DemoCta({ withField = false }) {
  return (
    <section className="dark-band closing" id="demo">
      {withField && <RibbonField className="closing-field" />}
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
