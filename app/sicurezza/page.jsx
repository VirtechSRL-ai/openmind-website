import DemoCta from "../../components/DemoCta";
import Reveal from "../../components/Reveal";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";

const TITLE = "I tuoi dati, protetti a ogni livello";
const DESCRIPTION =
  "OpenMind è progettato secondo i più elevati standard di sicurezza ed è conforme alle normative per garantire la massima tutela delle informazioni trattate.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sicurezza" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sicurezza",
  },
};

/* i quattro «+» agli angoli delle card tratteggiate */
function PlusMarks() {
  return (
    <>
      <span className="plus-mark tl" aria-hidden="true">
        +
      </span>
      <span className="plus-mark tr" aria-hidden="true">
        +
      </span>
      <span className="plus-mark bl" aria-hidden="true">
        +
      </span>
      <span className="plus-mark br" aria-hidden="true">
        +
      </span>
    </>
  );
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ============ HERO SPLIT ============ */}
        <section className="section-cream page-hero">
          <div className="wrap">
            <div className="page-hero-grid">
              <div>
                <span className="kicker kicker-pill">Sicurezza</span>
                <h1>
                  I tuoi dati, <span className="ai ai-light">protetti a ogni livello</span>
                </h1>
              </div>
              <p className="page-hero-sub">
                OpenMind è progettato secondo i più elevati standard di sicurezza ed è
                conforme alle normative per garantire la massima tutela delle informazioni
                trattate. Zero allucinazioni, zero rischi.
              </p>
            </div>

            <div className="plus-grid plus-grid-3">
              <Reveal className="plus-card">
                <PlusMarks />
                <h2>GDPR Compliance</h2>
                <p>
                  Conformità al GDPR europeo e gestione dei dati nel pieno rispetto della
                  normativa vigente.
                </p>
              </Reveal>
              <Reveal className="plus-card" delay={60}>
                <PlusMarks />
                <h2>Server esclusivamente UE</h2>
                <p>
                  Tutti i dati sono trattati su server situati nell&apos;UE, con ridondanza
                  tra diversi data center europei.
                </p>
              </Reveal>
              <Reveal className="plus-card" delay={120}>
                <PlusMarks />
                <h2>Protezione dati</h2>
                <p>
                  I documenti e i dati inviati a OpenMind non vengono utilizzati per
                  l&apos;addestramento e sono gestiti secondo rigorose policy di
                  protezione.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ MISURE DI SICUREZZA ============ */}
        <section className="spec section-dots">
          <div className="wrap">
            <div className="spec-grid">
              <nav className="spec-nav" aria-label="Misure di sicurezza">
                <span className="kicker">Misure di sicurezza</span>
                <a href="#protezione-dati">Protezione dei dati</a>
                <a href="#accessi">Sicurezza degli accessi</a>
                <a href="#infrastruttura">Infrastruttura e difesa dalle minacce</a>
                <a href="#governance">Governance e continuità</a>
              </nav>

              <div className="spec-content">
                <Reveal as="section" className="spec-sec" id="protezione-dati">
                  <h2 className="spec-label">Protezione dei dati</h2>
                  <div className="spec-item">
                    <h3>Riservatezza</h3>
                    <p>
                      OpenMind garantisce la riservatezza dei dati, nel rispetto delle
                      normative sulla privacy e sul segreto professionale. Nessun dato o
                      informazione confidenziale verrà utilizzato per addestrare sistemi di
                      intelligenza artificiale: i dati sono trattati esclusivamente per
                      fornire il servizio da parte di OpenMind e dei suoi subprocessori. Su
                      richiesta sarà mostrato un SBOM (Software Bill of Materials)
                      dettagliato.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Server esclusivamente UE</h3>
                    <p>
                      Tutti i dati sono trattati su server situati esclusivamente
                      nell&apos;UE. Il server principale si trova nei Paesi Bassi (Europa).
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Crittografia</h3>
                    <p>
                      I dati inattivi sono crittografati in AES-256 e i dati in transito
                      tramite HTTPS. È disponibile anche l&apos;opzione Bring Your Own Key
                      (BYOK).
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Isolamento dei dati</h3>
                    <p>
                      Ogni cliente dispone di uno spazio virtuale dedicato ed esclusivo per
                      i propri dati. OpenMind non condivide i dati dei clienti per
                      alimentare librerie pubbliche né li condivide con altri clienti.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Backup</h3>
                    <p>
                      Il backup è attivo per tutti i dati trattati. Prevede inoltre la
                      ridondanza tra diversi data center dell&apos;UE, come protezione
                      aggiuntiva contro eventi meteorologici estremi.
                    </p>
                  </div>
                </Reveal>

                <Reveal as="section" className="spec-sec" id="accessi">
                  <h2 className="spec-label">Sicurezza degli accessi</h2>
                  <div className="spec-item">
                    <h3>Accesso sicuro</h3>
                    <p>
                      È attiva una politica sulle password per tutti gli account e le
                      password memorizzate sono crittografate. Il cliente può inoltre
                      attivare il Single Sign-On (SSO), compatibile con account Google e
                      Microsoft, così come con SAML e OAuth 2.0.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Controllo degli accessi</h3>
                    <p>
                      L&apos;accesso ai dati è limitato a un numero ridotto di personale
                      tecnico munito di autorizzazioni speciali. Tutti gli accessi e i
                      download sono monitorati per garantire la sicurezza dei dati.
                    </p>
                  </div>
                </Reveal>

                <Reveal as="section" className="spec-sec" id="infrastruttura">
                  <h2 className="spec-label">Infrastruttura e difesa dalle minacce</h2>
                  <div className="spec-item">
                    <h3>Sanificazione dei prompt</h3>
                    <p>
                      In base all&apos;architettura di OpenMind, il prompt injection non
                      rappresenta un rischio concreto. Tuttavia, la sanificazione dei
                      prompt è attiva su tutte le query.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Scansione delle vulnerabilità</h3>
                    <p>
                      Una scansione quotidiana delle vulnerabilità è attiva sul codice
                      della piattaforma. Le vulnerabilità rilevate vengono classificate e
                      gestite con priorità.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Test di penetrazione</h3>
                    <p>
                      Vengono inoltre condotti test di penetrazione con auditor esterni. Su
                      richiesta sarà mostrata una sintesi dei report.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Firewall e WAF</h3>
                    <p>
                      Il sito web e l&apos;applicazione sono entrambi protetti da firewall
                      e WAF, che includono anche la protezione contro attacchi DDoS.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Sicurezza fisica della rete</h3>
                    <p>
                      OpenMind non dispone di un data center fisico proprio: si affida a
                      servizi cloud registrati nel catalogo delle infrastrutture digitali
                      dell&apos;Agenzia per la Cybersicurezza. Il personale tecnico opera
                      in un ufficio separato, dotato di telecamere, misure di sicurezza e
                      sistemi IDS attivi sulla rete.
                    </p>
                  </div>
                </Reveal>

                <Reveal as="section" className="spec-sec" id="governance">
                  <h2 className="spec-label">Governance e continuità</h2>
                  <div className="spec-item">
                    <h3>Procedura di emergenza</h3>
                    <p>
                      OpenMind ha formalizzato una procedura di emergenza per la gestione
                      degli attacchi. Il cliente verrà avvisato il prima possibile in caso
                      di violazioni; le comunicazioni saranno inviate preferibilmente
                      tramite posta certificata o altri canali sicuri, concordati con il
                      cliente.
                    </p>
                  </div>
                  <div className="spec-item">
                    <h3>Piano di continuità</h3>
                    <p>
                      OpenMind ha adottato un Piano di Continuità e fornisce un Service
                      Level Agreement (SLA), allegato al contratto del piano corporate.
                      Anche i principali fornitori terzi dispongono di un proprio Piano di
                      Continuità.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
