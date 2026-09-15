import DemoCta from "../../../components/DemoCta";
import Reveal from "../../../components/Reveal";
import RisorseNav from "../../../components/RisorseNav";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "consegnare-ordini-in-portafoglio");

export const metadata = {
  title: PAGE.title,
  description: PAGE.description,
  alternates: { canonical: `/risorse/${PAGE.slug}` },
  openGraph: {
    title: PAGE.title,
    description: PAGE.description,
    url: `/risorse/${PAGE.slug}`,
  },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-cream page-hero">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Percorso">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/risorse">Risorse</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Copertura portafoglio</span>
            </nav>
            <div className="page-hero-grid art-hero-grid">
              <div>
                <span className="kicker kicker-pill">Risorse</span>
                <h1>{PAGE.title}</h1>
              </div>
              <p className="page-hero-sub">
                La copertura del portafoglio ordini non è un numero solo: è
                l&apos;incrocio tra ordini clienti, giacenze, distinte base e
                ordini in corso. E cambia ogni giorno.
              </p>
            </div>
          </div>
        </section>

        <article className="section section-cream article art-body-section">
          <div className="wrap wrap-narrow">
            <Reveal className="article-body">
              <h2>Il problema</h2>
              <p>
                «Riesco a consegnare tutto quello che ho in portafoglio?» è la
                domanda che il responsabile di produzione si fa ogni settimana, e la
                risposta onesta di solito è «dipende». Dipende dalla giacenza di
                magazzino, da cosa consumano gli ordini di produzione in corso, da
                cosa deve ancora arrivare dai fornitori e da cosa non è nemmeno
                stato ordinato. Incrociare tutto a mano richiede ore, e il risultato
                è già vecchio il giorno dopo: nel frattempo sono entrati ordini nuovi
                e il magazzino si è mosso.
              </p>

              <h2>Il metodo</h2>
              <p>Per un verdetto affidabile sulla copertura servono cinque incroci:</p>
              <ol>
                <li>
                  <strong>Il portafoglio ordini</strong> — le righe degli ordini
                  clienti aperti, con quantità residue e date di consegna promesse.
                </li>
                <li>
                  <strong>Il fabbisogno di componenti</strong> — l&apos;esplosione
                  delle distinte base multilivello sui prodotti da consegnare.
                </li>
                <li>
                  <strong>La giacenza disponibile</strong> — al netto di quanto è
                  già impegnato da altri ordini.
                </li>
                <li>
                  <strong>Gli ordini in corso</strong> — OdP in lavorazione e ordini
                  d&apos;acquisto già emessi, con le date attese.
                </li>
                <li>
                  <strong>Quello che manca</strong> — i componenti scoperti, con la
                  data ultima utile per ordinarli tenendo conto dei tempi di
                  consegna dei fornitori.
                </li>
              </ol>
              <p>
                Il risultato utile non è «sì» o «no»: è l&apos;elenco esatto di
                cosa è coperto, cosa manca e cosa va ordinato — con quantità e data
                ultima per emettere l&apos;ordine.
              </p>
            </Reveal>

            <Reveal className="example-box">
              <span className="example-box-label">Esempio</span>
              <p>
                Portafoglio con <span className="num">142 ordini aperti</span>. Dopo
                l&apos;incrocio con giacenze, distinte base e ordini in corso, il
                verdetto:
              </p>
              <div className="example-rows">
                <div className="example-row">
                  <span>Ordini coperti da giacenza e OdP in corso</span>
                  <strong>139</strong>
                </div>
                <div className="example-row">
                  <span>Ordini d&apos;acquisto ancora da emettere</span>
                  <strong>3</strong>
                </div>
                <div className="example-row example-row-highlight">
                  <span>Data ultima utile per emetterli</span>
                  <strong>21/08</strong>
                </div>
              </div>
              <p>
                Tre righe d&apos;acquisto emesse in tempo, e il portafoglio si
                consegna tutto.
              </p>
              <p className="example-note">
                I numeri sono un esempio illustrativo, non dati di un cliente reale.
              </p>
            </Reveal>

            <Reveal as="section" className="article-body">
              <h2>Come risponde OpenMind in 30 secondi</h2>
              <div className="om-chat">
                <div className="om-chat-q">
                  <span className="om-chat-label">Tu chiedi</span>
                  <p>«Riesco a consegnare tutto quello che ho in portafoglio?»</p>
                </div>
                <div className="om-chat-a">
                  <span className="om-chat-label">OpenMind risponde</span>
                  <p>
                    Incrocia in tempo reale ordini clienti aperti, magazzino,
                    distinte base, ordini di produzione e d&apos;acquisto in corso, e
                    ti restituisce un verdetto: cosa è coperto, cosa manca e
                    l&apos;elenco esatto degli ordini da emettere — con quantità e
                    data ultima utile per emetterli.
                  </p>
                </div>
              </div>
              <p>
                La domanda la rifai quando vuoi: la risposta è ricalcolata ogni
                volta sui dati di quel momento, non su un report di lunedì scorso.
              </p>
            </Reveal>

            <RisorseNav current={PAGE.slug} />
          </div>
        </article>

        <DemoCta />
      </main>
      <SiteFooter />
    </>
  );
}
