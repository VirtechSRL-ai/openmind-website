import ContactForm from "../../components/ContactForm";
import { ContactPageTracker, TrackedEmailLink } from "../../components/ContactTracking";
import JsonLd from "../../components/JsonLd";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { CONTACT_EMAIL, SITE_URL } from "../../lib/site";

const TITLE = "Contatti";
const DESCRIPTION =
  "Contatta il team OpenMind di Virtech Srl per richiedere una demo o parlare delle esigenze di analisi dati della tua azienda.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contatti",
  },
};

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contatti OpenMind",
  description: DESCRIPTION,
  url: `${SITE_URL}/contatti`,
  mainEntity: {
    "@type": "Organization",
    name: "Virtech Srl",
    email: CONTACT_EMAIL,
    url: SITE_URL,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactStructuredData} />
      <ContactPageTracker />
      <SiteHeader />
      <main className="contact-page">
        <section className="contact-main" aria-labelledby="contact-title">
          <div className="wrap contact-layout">
            <Reveal className="contact-intro">
              <span className="kicker kicker-pill">Contatti</span>
              <h1 id="contact-title">
                Parliamo dei <span className="ai ai-light">tuoi dati.</span>
              </h1>
              <p className="contact-lead">
                Hai una domanda concreta su ordini, produzione, costi o magazzino? Scrivici
                cosa vorresti ottenere: prepareremo il confronto partendo dal tuo caso.
              </p>

              <div className="contact-direct">
                <p className="contact-direct-label">Preferisci scrivere direttamente?</p>
                <TrackedEmailLink placement="contact_page">
                  {CONTACT_EMAIL}
                  <span aria-hidden="true">↗</span>
                </TrackedEmailLink>
                <p>Rispondiamo entro un giorno lavorativo.</p>
              </div>
            </Reveal>

            <Reveal className="contact-panel" delay={100}>
              <div className="contact-panel-head">
                <p>Raccontaci la tua esigenza</p>
                <span>Tutti i campi sono obbligatori</span>
              </div>
              <ContactForm variant="contact" />
              <p className="contact-privacy">
                I dati inviati saranno usati esclusivamente per rispondere alla tua richiesta.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
