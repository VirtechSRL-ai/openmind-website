import ChatCard from "../components/ChatCard";
import CountUp from "../components/CountUp";
import DemoCta from "../components/DemoCta";
import FluidField from "../components/FluidField";
import HubDiagram from "../components/HubDiagram";
import Icon from "../components/Icons";
import IntroVeil from "../components/IntroVeil";
import LivePanel from "../components/LivePanel";
import MidCta from "../components/MidCta";
import ProcessDemo from "../components/ProcessDemo";
import Reveal from "../components/Reveal";
import Sectors from "../components/Sectors";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <>
      <IntroVeil />
      <FluidField />
      <SiteHeader />

      <main>
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap">
            <p className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true" />
              <span>
                Costruito per le PMI manifatturiere italiane
                <span className="hero-badge-extra"> · da Virtech Srl</span>
              </span>
            </p>
            <h1>
              <span className="h1-line">
                L&apos;<span className="ai ai-dark">analista dati AI</span>
              </span>
              <br />
              <span className="h1-line h1-line-2">per la manifattura</span>
            </h1>
            <p className="hero-sub">
              Scrivi la domanda come la faresti a un collega. OpenMind interroga i dati veri
              della tua azienda e risponde con numeri esatti, grafici e consigli operativi.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light btn-lg" href="#demo">
                Richiedi una demo
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="btn btn-outline-dark btn-lg" href="#in-azione">
                Guardala in azione
              </a>
            </div>

            <ul className="hero-proof" aria-label="Tre garanzie in breve">
              <li>
                <Icon name="spark" />
                Risposte in ~30 secondi
              </li>
              <li>
                <Icon name="pen" />
                In italiano, zero SQL
              </li>
              <li>
                <Icon name="lock" />
                Dati in sola lettura
              </li>
            </ul>

            <div className="hero-panels">
              <span className="sticker sticker-iris" aria-hidden="true">
                senza Excel
              </span>
              <span className="sticker sticker-paper" aria-hidden="true">
                «come a un collega»
              </span>
              <LivePanel />
              <ChatCard />
            </div>
          </div>
        </section>

        {/* ============ TICKER DOMANDE ============ */}
        <Ticker />

        {/* ============ FOGLIO: IL PROBLEMA ============ */}
        <Reveal className="sheet rv-sheet">
        <section className="section section-cream" id="problema">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">Il problema</span>
              <Reveal as="h2" className="rv-title">Le risposte ci sono già. Sono solo lente.</Reveal>
            </div>
            <Reveal className="pains pains-divided">
              <div className="pain">
                <strong>½ giornata</strong>
                <span>per una risposta, tra Excel e gestionale.</span>
              </div>
              <div className="pain">
                <strong>3 uffici</strong>
                <span>da attraversare per incrociare ordini, magazzino e fatture.</span>
              </div>
              <div className="pain">
                <strong>52 lunedì</strong>
                <span>l&apos;anno con gli stessi report da rifare a mano.</span>
              </div>
            </Reveal>
            <Reveal className="vs-row">
              <s className="vs-old">Mezza giornata</s>
              <span className="vs-arrow" aria-hidden="true">
                →
              </span>
              <span className="vs-new">30 secondi</span>
              <a className="vs-link" href="#in-azione">
                Guarda come →
              </a>
            </Reveal>
          </div>
        </section>
        </Reveal>

        {/* ============ INTERLUDIO SUL FLUIDO ============ */}
        <section className="fluid-word" aria-label="Dai dati sparsi alle risposte">
          <Reveal as="p">
            Dai dati <span className="fw-accent">sparsi</span>…
          </Reveal>
        </section>

        {/* ============ IL TUO ANALISTA (soluzione + personalità) ============ */}
        <section className="dark-band" id="analista">
          <div className="wrap">
            <span className="kicker">La soluzione</span>
            <Reveal as="h2" className="rv-title">
              Non un&apos;altra piattaforma di BI.
              <br />
              <span className="ai ai-dark">Un analista che risponde.</span>
            </Reveal>

            <Reveal className="om-intro">
              <span className="om-ava om-ava-lg" aria-hidden="true">
                Om
              </span>
              <p className="om-bubble">
                <strong>Buongiorno.</strong> Come posso aiutarti oggi?
              </p>
            </Reveal>

            <div className="traits">
              <Reveal className="trait rv-scale">
                <Icon name="ask" />
                <h3>Chiede, non suppone</h3>
                <p>«Il più venduto»: per valore o per quantità? Se è ambiguo, te lo chiede.</p>
              </Reveal>
              <Reveal className="trait rv-scale" delay={60}>
                <Icon name="note" />
                <h3>Dichiara le assunzioni</h3>
                <p>«Ho interpretato &quot;recente&quot; come ultimi 30 giorni.» Nero su bianco.</p>
              </Reveal>
              <Reveal className="trait rv-scale" delay={120}>
                <Icon name="book" />
                <h3>Parla il vostro gergo</h3>
                <p>Marginalità, giacenza, scostamento: il glossario è mappato sui vostri dati.</p>
              </Reveal>
              <Reveal className="trait rv-scale" delay={180}>
                <Icon name="lock" />
                <h3>Lavora in sola lettura</h3>
                <p>Legge e analizza. I dati non vengono mai modificati.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ FOGLIO: COME FUNZIONA + IN AZIONE ============ */}
        <Reveal className="sheet rv-sheet">
        <section className="section section-dots" id="come-funziona">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker kicker-pill">Come funziona</span>
              <Reveal as="h2" className="rv-title">Dalla domanda all&apos;analisi in tre passi</Reveal>
            </div>
            <ProcessDemo />
          </div>
        </section>

        {/* ============ OPENMIND IN AZIONE ============ */}
        <section className="section section-cream" id="in-azione">
          <span id="esempi" className="anchor-alias" aria-hidden="true" />
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">OpenMind in azione</span>
              <Reveal as="h2" className="rv-title">
                Domande vere,
                <br />
                <span className="ai ai-light">risposte operative</span>
              </Reveal>
            </div>

            <div className="dialogs">
              <Reveal as="article" className="dialog rv-left">
                <p className="dialog-q">«Riesco a consegnare tutto quello che ho in ordine?»</p>
                <div className="dialog-a">
                  <span className="om-ava" aria-hidden="true">
                    Om
                  </span>
                  <div className="dialog-body">
                    <p>
                      Quasi: <strong>41 righe su 44 sono coperte</strong>. Per il resto devi
                      emettere 3 ordini d&apos;acquisto.
                    </p>
                    <ul className="verdict">
                      <li className="v-ok">41 righe coperte da magazzino e produzione</li>
                      <li className="v-warn">3 ordini da emettere · data ultima 21/08</li>
                    </ul>
                    <p className="dialog-insight">
                      Ecco l&apos;elenco degli ordini, con quantità e data ultima utile.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" className="dialog rv-right">
                <p className="dialog-q">
                  «Quanto ci è costato davvero l&apos;ordine di produzione 114?»
                </p>
                <div className="dialog-a">
                  <span className="om-ava" aria-hidden="true">
                    Om
                  </span>
                  <div className="dialog-body">
                    <p>
                      Costo pieno <strong>148,90 € al pezzo</strong>, contro un ricavo di 194,40 €.
                    </p>
                    <div className="mini-chart">
                      <div className="bar-row">
                        <span className="bar-label">Materiali</span>
                        <span className="bar-track">
                          <span className="bar" style={{ "--w": "68%" }} />
                        </span>
                        <span className="bar-val">101,30&nbsp;€</span>
                      </div>
                      <div className="bar-row">
                        <span className="bar-label">Manodopera</span>
                        <span className="bar-track">
                          <span className="bar" style={{ "--w": "27%" }} />
                        </span>
                        <span className="bar-val">40,10&nbsp;€</span>
                      </div>
                      <div className="bar-row">
                        <span className="bar-label">Scarti 1,8%</span>
                        <span className="bar-track">
                          <span className="bar bar-accent" style={{ "--w": "5%" }} />
                        </span>
                        <span className="bar-val">7,50&nbsp;€</span>
                      </div>
                    </div>
                    <p className="dialog-insight">
                      Minuti standard contro effettivi per ogni fase: la fase 30 è quella fuori
                      tempo.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal as="article" className="dialog rv-left">
                <p className="dialog-q">
                  «Che margine ho fatto sui primi 250 pezzi dell&apos;ordine di Rossi?»
                </p>
                <div className="dialog-a">
                  <span className="om-ava" aria-hidden="true">
                    Om
                  </span>
                  <div className="dialog-body">
                    <p className="dialog-big">
                      23,4<small>%</small>
                    </p>
                    <p>
                      Ricavo contro costo di materiali e manodopera, valorizzati a{" "}
                      <strong>costo medio ponderato</strong> — te lo dichiaro nella risposta,
                      e puoi scegliere un altro metodo.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="more-chips">
              <span className="more-chips-label">E poi</span>
              <ul>
                <li>Analisi ABC del fatturato</li>
                <li>Fornitori in ritardo</li>
                <li>Fatture emesse e incassato</li>
                <li>Confronto listini tra anni</li>
                <li>Rotazione di magazzino</li>
                <li>Lotti d&apos;acquisto fuori misura</li>
              </ul>
            </Reveal>
          </div>
        </section>
        </Reveal>

        {/* ============ CTA INTERMEDIA ============ */}
        <MidCta
          title="Hai in testa una domanda così anche tu?"
          note="Falla sui tuoi dati: ti prepariamo una demo con il tuo gestionale."
        />

        {/* ============ FOGLIO: NUMERI + DENTRO + SETTORI + DATI ============ */}
        <Reveal className="sheet rv-sheet">
        <section className="section section-dots" id="numeri">
          <div className="wrap">
            <Reveal className="results">
              <div className="result">
                <strong>
                  <CountUp value={30} suffix={" s"} />
                </strong>
                <span className="result-label">Per una risposta</span>
                <span className="result-note">al posto di mezza giornata</span>
              </div>
              <div className="result">
                <strong>0</strong>
                <span className="result-label">Righe di SQL da scrivere</span>
                <span className="result-note">query, calcoli e grafici li fa OpenMind</span>
              </div>
              <div className="result">
                <strong>
                  <CountUp value={100} suffix="%" />
                </strong>
                <span className="result-label">Query in sola lettura</span>
                <span className="result-note">i dati vengono letti, mai modificati</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ DENTRO OPENMIND ============ */}
        <section className="section section-cream" id="dentro">
          <div className="wrap">
            <div className="sec-head-left">
              <span className="kicker kicker-pill">Dentro OpenMind</span>
              <Reveal as="h2" className="rv-title">
                Tre viste.
                <br />
                Un motore d&apos;analisi alla base.
              </Reveal>
            </div>

            <div className="caps">
              <Reveal className="cap-card b-4" spotlight>
                <span className="cap-icon" aria-hidden="true">
                  <Icon name="chat" />
                </span>
                <div className="cap-vis" aria-hidden="true">
                  <span className="cv-row cv-user" />
                  <span className="cv-row cv-ai" />
                  <span className="cv-row cv-ai short" />
                  <span className="cv-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
                <h3>Chat analitica</h3>
                <p>
                  Domande in italiano, risposte in streaming con tabelle e grafici interattivi.
                  Storico ricercabile.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">
                    «Confronta fatturato 2023 vs 2024 per linea di prodotto»
                  </span>
                </div>
              </Reveal>
              <Reveal className="cap-card b-2" delay={60} spotlight>
                <span className="cap-icon" aria-hidden="true">
                  <Icon name="bell" />
                </span>
                <h3>Promemoria</h3>
                <p>Attività e scadenze dove analizzi i dati. Ogni utente vede solo i propri.</p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Esempio</span>
                  <span className="cap-doing-q">«Sollecitare il fornitore entro venerdì»</span>
                </div>
              </Reveal>
              <Reveal className="cap-card b-2" spotlight>
                <span className="cap-icon" aria-hidden="true">
                  <Icon name="chart" />
                </span>
                <h3>Analisi da vero analista</h3>
                <p>
                  ABC e Pareto, confronti anno su anno, scostamenti: elaborazioni anche in
                  Python, con il CSV dei risultati.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">«Fammi un&apos;analisi ABC del fatturato»</span>
                </div>
              </Reveal>
              <Reveal className="cap-card b-4" delay={60} spotlight>
                <span className="cap-icon" aria-hidden="true">
                  <Icon name="gauge" />
                </span>
                <div className="cap-vis cap-vis-tiles" aria-hidden="true">
                  <span className="cvt">
                    <span className="cvt-label">Ordini aperti</span>
                    <span className="cvt-val">142</span>
                  </span>
                  <span className="cvt">
                    <span className="cvt-label">OdP in corso</span>
                    <span className="cvt-val">28</span>
                  </span>
                  <span className="cvt">
                    <span className="cvt-label">In ritardo</span>
                    <span className="cvt-val">5</span>
                  </span>
                </div>
                <h3>Cruscotti sempre aggiornati</h3>
                <p>
                  Crei una dashboard conversando, OpenMind la salva. A ogni apertura i dati si
                  riallineano a oggi.
                </p>
                <div className="cap-doing">
                  <span className="cap-doing-label">Domanda tipo</span>
                  <span className="cap-doing-q">«Crea un cruscotto: top 10 fornitori 2025»</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ SETTORI ============ */}
        <Sectors />

        {/* ============ DATI COPERTI ============ */}
        <section className="section section-dots" id="dati">
          <div className="wrap">
            <div className="sec-head">
              <span className="kicker">I dati</span>
              <Reveal as="h2" className="rv-title">
                Un&apos;unica interfaccia per l&apos;
                <span className="ai ai-light">archivio operativo completo</span>
              </Reveal>
            </div>
          </div>
          <HubDiagram />
          <div className="wrap">
            <ul className="data-chips" aria-label="Dati coperti">
              <li>Anagrafica articoli</li>
              <li>Distinte base multilivello</li>
              <li>Cicli e centri di costo</li>
              <li>OdP e avanzamenti</li>
              <li>Ordini clienti e fornitori</li>
              <li>Fatture e pagamenti</li>
              <li>Listini per anno</li>
              <li>Giacenze di magazzino</li>
            </ul>
          </div>
        </section>
        </Reveal>

        {/* ============ SICUREZZA ============ */}
        <section className="dark-band dark-band-calm" id="sicurezza">
          <div className="wrap">
            <span className="kicker">Sicurezza</span>
            <Reveal as="h2" className="rv-title">
              Affidabile per costruzione.
              <br />
              <span className="ai ai-dark">Senza sorprese.</span>
            </Reveal>

            <div className="trust-cards">
              <Reveal className="trust-card rv-scale">
                <span className="trust-icon" aria-hidden="true">
                  <Icon name="shield" />
                </span>
                <h3>Motore AI di ultima generazione</h3>
                <p>Costruito sui modelli più avanzati per l&apos;analisi dei dati.</p>
              </Reveal>
              <Reveal className="trust-card rv-scale" delay={60}>
                <span className="trust-icon" aria-hidden="true">
                  <Icon name="lock" />
                </span>
                <h3>Solo lettura, per progetto</h3>
                <p>Le query leggono e basta, riverificate a ogni esecuzione.</p>
              </Reveal>
              <Reveal className="trust-card rv-scale" delay={120}>
                <span className="trust-icon" aria-hidden="true">
                  <Icon name="user" />
                </span>
                <h3>Accessi personali</h3>
                <p>Chat, cruscotti e promemoria privati per ciascun utente.</p>
              </Reveal>
              <Reveal className="trust-card rv-scale" delay={180}>
                <span className="trust-icon" aria-hidden="true">
                  <Icon name="euro" />
                </span>
                <h3>Costi sotto controllo</h3>
                <p>Tetto di spesa configurato per ogni conversazione.</p>
              </Reveal>
            </div>

            <div className="trust-actions">
              <a className="btn btn-light" href="#demo">
                Richiedi una demo
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a className="trust-link" href="/sicurezza">
                Approfondisci la sicurezza →
              </a>
            </div>
          </div>
        </section>

        {/* ============ FOGLIO: FAQ ============ */}
        <Reveal className="sheet rv-sheet">
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
        </Reveal>

        {/* ============ INTERLUDIO SUL FLUIDO ============ */}
        <section className="fluid-word" aria-label="Alle risposte chiare">
          <Reveal as="p">
            …alle risposte <span className="fw-accent">chiare</span>.
          </Reveal>
        </section>

        {/* ============ CTA FINALE ============ */}
        <DemoCta />
      </main>

      <SiteFooter />
    </>
  );
}
