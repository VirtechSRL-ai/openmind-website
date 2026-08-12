import ChatCard from "../components/ChatCard";
import HubDiagram from "../components/HubDiagram";
import LivePanel from "../components/LivePanel";
import Reveal from "../components/Reveal";

const APP_URL = "https://openmind-drab.vercel.app";
const DEMO_MAILTO = "mailto:info.virtechsrl@gmail.com?subject=Demo%20OpenMind";

export default function Home() {
  return (
    <>
      <header className="site-head" id="top">
        <div className="wrap head-row">
          <a className="brand" href="#top" aria-label="OpenMind, torna all'inizio">
            <span className="brand-mark" aria-hidden="true">
              Om
            </span>
            <span className="brand-word">OpenMind</span>
          </a>
          <nav className="site-nav" aria-label="Sezioni della pagina">
            <a href="#come-funziona">Come funziona</a>
            <a href="#dentro">Dentro OpenMind</a>
            <a href="#esempi">Esempi</a>
            <a href="#sicurezza">Sicurezza</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="head-cta">
            <a className="btn btn-light" href={DEMO_MAILTO}>
              Richiedi una demo
            </a>
            <a className="lang-pill" href={APP_URL}>
              Accedi
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap">
            <h1>
              L&apos;<span className="ai ai-dark">analista dati AI</span>
              <br />
              per la manifattura
            </h1>
            <p className="hero-sub">
              Fai domande in italiano su ordini, produzione, costi e magazzino.{" "}
              <em>OpenMind interroga i dati veri della tua azienda</em> e risponde con numeri
              esatti, grafici e consigli operativi.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light btn-lg" href={DEMO_MAILTO}>
                Richiedi una demo →
              </a>
              <a className="btn btn-outline-dark btn-lg" href="#come-funziona">
                Guardala in azione
              </a>
            </div>

            <div className="hero-panels">
              <LivePanel />
              <ChatCard />
            </div>
          </div>
        </section>

        {/* ============ STRISCIA ============ */}
        <div className="strip">
          <span className="kicker kicker-bare">
            Costruito per le PMI manifatturiere italiane · da Virtech Srl
          </span>
        </div>

        {/* ============ IL PROBLEMA ============ */}
        <section className="section section-cream" id="problema">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Il problema</span>
              <h2>Le risposte ci sono già. Sono solo lente.</h2>
              <p className="sec-sub">
                I numeri che ti servono sono nel gestionale. Il problema è arrivarci:
              </p>
            </div>
            <Reveal className="pains pains-divided">
              <div className="pain">
                <strong>Mezza giornata</strong>
                <span>
                  tra Excel e gestionale per rispondere a una domanda sola: «che margine ho fatto
                  su quell&apos;ordine?»
                </span>
              </div>
              <div className="pain">
                <strong>Tre uffici</strong>
                <span>
                  da attraversare per incrociare ordini clienti, magazzino, produzione e fatture.
                </span>
              </div>
              <div className="pain">
                <strong>Ogni lunedì</strong>
                <span>gli stessi report da rifare a mano, già vecchi il giorno dopo.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ LA SOLUZIONE ============ */}
        <section className="dark-band">
          <div className="wrap">
            <span className="kicker">La soluzione</span>
            <h2>
              Non un&apos;altra piattaforma di BI.
              <br />
              <span className="ai ai-dark">Un analista che risponde.</span>
            </h2>
            <p className="band-sub">
              Niente da configurare, niente da imparare: scrivi la domanda come la faresti a un
              collega. OpenMind è volutamente limitato ai dati della tua azienda: chiede
              chiarimenti quando la domanda è ambigua e dichiara le proprie assunzioni.
            </p>
          </div>
        </section>

        {/* ============ COME FUNZIONA ============ */}
        <section className="section section-dots" id="come-funziona">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker kicker-pill">Come funziona</span>
              <h2>Dalla domanda all&apos;analisi in tre passi</h2>
            </div>
            <div className="steps">
              <Reveal className="step-card">
                <span className="step-tag">Passo 01</span>
                <h3>Chiedi</h3>
                <p>
                  Scrivi la domanda come la faresti a un collega:{" "}
                  <em>«Che margine ho fatto sull&apos;ordine 2025/114?»</em>,{" "}
                  <em>«Riesco a consegnare tutto quello che ho in portafoglio?»</em>.
                </p>
              </Reveal>
              <Reveal className="step-card" delay={70}>
                <span className="step-tag">Passo 02</span>
                <h3>OpenMind interroga i dati veri</h3>
                <p>
                  Genera ed esegue la query sul database aziendale in quel momento: niente
                  risposte precotte, niente report statici. Se la domanda è ambigua, ti chiede un
                  chiarimento invece di tirare a indovinare.
                </p>
              </Reveal>
              <Reveal className="step-card" delay={140}>
                <span className="step-tag">Passo 03</span>
                <h3>Ricevi un&apos;analisi, non solo un numero</h3>
                <p>
                  Risposta diretta, cifre esatte con percentuali, confronto con il contesto,
                  grafico quando aiuta e un insight operativo su cosa fare.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ DENTRO OPENMIND ============ */}
        <section className="section section-cream" id="dentro">
          <div className="wrap">
            <div className="sec-head-left">
              <span className="kicker kicker-pill">Dentro OpenMind</span>
              <h2>
                Tre viste.
                <br />
                Un motore d&apos;analisi alla base.
              </h2>
              <p className="sec-sub">
                Chat, cruscotti e promemoria condividono lo stesso motore: il glossario della tua
                azienda mappato sui dati veri.
              </p>
            </div>

            <div className="caps">
              <Reveal className="cap-card">
                <h3>Chat analitica</h3>
                <p>
                  Domande in italiano, risposte in streaming con tabelle, grafici interattivi e lo
                  storico di tutte le conversazioni, ricercabile.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">
                    «Confronta fatturato 2023 vs 2024 per linea di prodotto»
                  </span>
                </div>
              </Reveal>
              <Reveal className="cap-card" delay={60}>
                <h3>Cruscotti sempre aggiornati</h3>
                <p>
                  Crei una dashboard conversando e OpenMind la salva. A ogni apertura i dati si
                  riallineano a oggi, senza rifare nulla.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">«Crea un cruscotto: top 10 fornitori 2025»</span>
                </div>
              </Reveal>
              <Reveal className="cap-card" delay={120}>
                <h3>Promemoria</h3>
                <p>
                  Annota attività e scadenze direttamente dove analizzi i dati. Ogni utente vede
                  solo i propri.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Esempio</span>
                  <span className="cap-doing-q">«Sollecitare il fornitore entro venerdì»</span>
                </div>
              </Reveal>
              <Reveal className="cap-card">
                <h3>Chiede, non suppone</h3>
                <p>
                  «Il più venduto»: per valore, quantità o numero di ordini? Quando una domanda ha
                  più letture, OpenMind chiede. E quando assume qualcosa, lo dichiara.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Trasparenza</span>
                  <span className="cap-doing-q">
                    «Ho interpretato &quot;recente&quot; come ultimi 30 giorni»
                  </span>
                </div>
              </Reveal>
              <Reveal className="cap-card" delay={60}>
                <h3>Parla il vostro gergo</h3>
                <p>
                  Fatturato, marginalità, giacenza, scostamento, DFFM: il glossario aziendale è
                  mappato sui dati, così ogni termine finisce sulla colonna giusta.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Glossario</span>
                  <span className="cap-doing-q">«scostamento» → standard vs effettivo</span>
                </div>
              </Reveal>
              <Reveal className="cap-card" delay={120}>
                <h3>Analisi da vero analista</h3>
                <p>
                  ABC e Pareto, confronti anno su anno, scostamenti standard/effettivo: OpenMind
                  esegue anche elaborazioni in Python e ti lascia il CSV dei risultati.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">«Fammi un&apos;analisi ABC del fatturato»</span>
                </div>
              </Reveal>
            </div>

            <div className="hub">
              <span className="hub-mark" aria-hidden="true">
                Om
              </span>
              <span className="hub-caption">Motore Claude di Anthropic</span>
            </div>
          </div>
        </section>

        {/* ============ ESEMPI ============ */}
        <section className="section section-cream" id="esempi">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Domande vere, risposte operative</span>
              <h2>
                Produzione e acquisti sono
                <br />
                il <span className="ai ai-light">cuore di OpenMind</span>
              </h2>
              <p className="sec-sub">
                Tre analisi guidate, già pronte, che partono da una semplice domanda in chat.
              </p>
            </div>

            <div className="qa-list">
              <Reveal as="article" className="qa">
                <h3 className="qa-q">«Riesco a consegnare tutto quello che ho in&nbsp;ordine?»</h3>
                <p className="qa-a">
                  OpenMind incrocia ordini clienti aperti, magazzino, distinte base, ordini di
                  produzione e di acquisto in corso, e ti restituisce un verdetto: cosa è coperto,
                  cosa manca, e l&apos;elenco esatto degli ordini da emettere — con quantità e
                  data ultima utile per emetterli.
                </p>
              </Reveal>
              <Reveal as="article" className="qa">
                <h3 className="qa-q">
                  «Quanto ci è costato davvero l&apos;ordine di produzione&nbsp;114?»
                </h3>
                <p className="qa-a">
                  Consuntivo completo: minuti standard contro effettivi per ogni fase, scarti,
                  valorizzazione dei materiali sulla distinta multilivello, costo pieno al pezzo —
                  confrontato con il ricavo.
                </p>
              </Reveal>
              <Reveal as="article" className="qa">
                <h3 className="qa-q">
                  «Che margine ho fatto sui primi 250 pezzi dell&apos;ordine di&nbsp;Rossi?»
                </h3>
                <p className="qa-a">
                  Ricavo contro costo materiali e manodopera, con il metodo di valorizzazione che
                  scegli tu, dichiarato nero su bianco nella risposta.
                </p>
              </Reveal>
            </div>

            <Reveal as="p" className="qa-more">
              E poi: analisi ABC del fatturato, fornitori in ritardo sulle consegne, fatture
              emesse e incassato, confronto listini tra anni, rotazione di magazzino, lotti
              d&apos;acquisto troppo grandi o troppo piccoli.
            </Reveal>

            <Reveal className="results">
              <div className="result">
                <strong>30 s</strong>
                <span className="result-label">Per una risposta</span>
                <span className="result-note">
                  al posto di mezza giornata tra Excel e gestionale
                </span>
              </div>
              <div className="result">
                <strong>0</strong>
                <span className="result-label">Righe di SQL da scrivere</span>
                <span className="result-note">query, calcoli e grafici li fa OpenMind</span>
              </div>
              <div className="result">
                <strong>100%</strong>
                <span className="result-label">Query in sola lettura</span>
                <span className="result-note">
                  i tuoi dati vengono letti e analizzati, mai modificati
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ DATI COPERTI ============ */}
        <section className="section section-dots" id="dati">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">I dati</span>
              <h2>
                Un&apos;unica interfaccia per l&apos;
                <span className="ai ai-light">archivio operativo completo</span>
              </h2>
            </div>
          </div>
          <HubDiagram />
          <div className="wrap">
            <p className="dati-note">
              Anagrafica articoli, distinte base multilivello, cicli di lavoro e centri di costo,
              ordini di produzione con gli avanzamenti di reparto, ordini clienti e fornitori con
              fatture e pagamenti, listini con le validità per anno, giacenze di magazzino:
              domande che oggi attraversano tre uffici, in un posto solo.
            </p>
          </div>
        </section>

        {/* ============ SICUREZZA ============ */}
        <section className="dark-band" id="sicurezza">
          <div className="wrap">
            <span className="kicker">Sicurezza</span>
            <h2>
              Affidabile per costruzione.
              <br />
              <span className="ai ai-dark">Senza sorprese.</span>
            </h2>
            <dl className="trust">
              <Reveal className="trust-item">
                <dt>Motore Claude di Anthropic</dt>
                <dd>
                  OpenMind è costruito sui modelli Claude, tra i più avanzati al mondo per
                  l&apos;analisi e il ragionamento sui dati.
                </dd>
              </Reveal>
              <Reveal className="trust-item" delay={60}>
                <dt>Accessi personali</dt>
                <dd>
                  Login con email e password; cruscotti, promemoria e conversazioni sono privati
                  per ciascun utente.
                </dd>
              </Reveal>
              <Reveal className="trust-item" delay={120}>
                <dt>Solo lettura, per progetto</dt>
                <dd>
                  Le query dei cruscotti vengono riverificate a ogni aggiornamento: possono
                  soltanto leggere i dati, mai modificarli.
                </dd>
              </Reveal>
              <Reveal className="trust-item" delay={180}>
                <dt>Costi sotto controllo</dt>
                <dd>
                  Ogni conversazione ha un tetto di spesa configurato: nessuna sorpresa a fine
                  mese.
                </dd>
              </Reveal>
            </dl>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="section section-cream" id="faq">
          <div className="wrap wrap-narrow">
            <div className="sec-head">
              <span className="kicker">FAQ</span>
              <h2>Domande frequenti</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Serve saper scrivere SQL o usare strumenti di BI?</summary>
                <p>No. Si scrive in italiano, come in una chat. SQL, calcoli e grafici li fa OpenMind.</p>
              </details>
              <details className="faq-item">
                <summary>Le risposte sono aggiornate?</summary>
                <p>
                  Sì: ogni domanda esegue una query sul database in quel momento, e i cruscotti
                  salvati si riallineano a oggi a ogni apertura.
                </p>
              </details>
              <details className="faq-item">
                <summary>E se la mia domanda è vaga?</summary>
                <p>
                  OpenMind chiede un chiarimento invece di inventare, e quando fa
                  un&apos;assunzione (per esempio «recente = ultimi 30 giorni») la dichiara
                  esplicitamente nella risposta.
                </p>
              </details>
              <details className="faq-item">
                <summary>Può modificare i dati?</summary>
                <p>
                  No: OpenMind legge e analizza. Le query salvate nei cruscotti sono verificate
                  come sola lettura a ogni esecuzione.
                </p>
              </details>
              <details className="faq-item">
                <summary>Chi vede le mie analisi?</summary>
                <p>Solo tu: conversazioni, cruscotti e promemoria sono legati al tuo account.</p>
              </details>
            </div>
          </div>
        </section>

        {/* ============ CTA FINALE ============ */}
        <section className="dark-band closing">
          <div className="wrap">
            <span className="kicker">Inizia ora</span>
            <h2>
              La prossima domanda,
              <br />
              <span className="ai ai-dark">falla ai tuoi dati.</span>
            </h2>
            <p className="band-sub">
              Accedi a OpenMind e chiedi quello che chiederesti al tuo miglior analista.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light btn-lg" href={APP_URL}>
                Accedi a OpenMind →
              </a>
              <a className="btn btn-outline-dark btn-lg" href={DEMO_MAILTO}>
                Richiedi una demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="brand" href="#top">
                <span className="brand-mark" aria-hidden="true">
                  Om
                </span>
                <span className="brand-word">OpenMind</span>
              </a>
              <p className="foot-tagline">L&apos;analista dati AI per la manifattura</p>
            </div>
            <nav className="foot-col" aria-label="Sezioni">
              <p className="foot-col-title">Info</p>
              <a href="#come-funziona">Come funziona</a>
              <a href="#dentro">Dentro OpenMind</a>
              <a href="#esempi">Esempi</a>
              <a href="#sicurezza">Sicurezza</a>
              <a href="#faq">FAQ</a>
            </nav>
            <nav className="foot-col" aria-label="Azienda">
              <p className="foot-col-title">Azienda</p>
              <a href={DEMO_MAILTO}>Contattaci</a>
              <a href={APP_URL}>Accedi all&apos;app</a>
            </nav>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Virtech Srl</span>
            <span>OpenMind v2.0.0 — Powered by Vanna AI</span>
          </div>
        </div>
      </footer>
    </>
  );
}
