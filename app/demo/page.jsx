import ContactForm from "../../components/ContactForm";
import { DemoPageTracker, TrackedEmailLink } from "../../components/DemoTracking";
import JsonLd from "../../components/JsonLd";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { CONTACT_EMAIL, SITE_URL } from "../../lib/site";

const TITLE = "Demo OpenMind";
const DESCRIPTION =
  "Richiedi una demo di OpenMind e raccontaci quali domande vorresti fare ai dati della tua azienda manifatturiera.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/demo" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/demo",
  },
};

const demoStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Demo OpenMind",
  description: DESCRIPTION,
  url: `${SITE_URL}/demo`,
  about: { "@id": `${SITE_URL}/#software` },
  publisher: {
    "@type": "Organization",
    name: "Virtech Srl",
    email: CONTACT_EMAIL,
    url: SITE_URL,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={demoStructuredData} />
      <DemoPageTracker />
      <SiteHeader />
      <main className="contact-page">
        <section className="contact-main" aria-labelledby="demo-title">
          <div className="wrap contact-layout">
            <Reveal className="contact-intro">
              <span className="kicker kicker-pill">Demo</span>
              <h1 id="demo-title">
                Parliamo dei <span className="ai ai-light">tuoi dati.</span>
              </h1>
              <p className="contact-lead">
                Hai una domanda concreta su ordini, produzione, costi o magazzino? Scrivici
                cosa vorresti ottenere: prepareremo la demo partendo dal tuo caso.
              </p>

              <div className="contact-direct">
                <p className="contact-direct-label">Preferisci scrivere direttamente?</p>
                <TrackedEmailLink placement="demo_page">
                  {CONTACT_EMAIL}
                  <span aria-hidden="true">↗</span>
                </TrackedEmailLink>
                <p>Rispondiamo entro un giorno lavorativo.</p>
              </div>
            </Reveal>

            <Reveal className="contact-panel" delay={100}>
              <div className="contact-panel-head">
                <p>Prepariamo la tua demo</p>
                <span>Tutti i campi sono obbligatori</span>
              </div>
              <ContactForm variant="demo_page" />
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
