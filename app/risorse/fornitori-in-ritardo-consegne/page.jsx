import DemoCta from "../../../components/DemoCta";
import Reveal from "../../../components/Reveal";
import RisorseNav from "../../../components/RisorseNav";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "fornitori-in-ritardo-consegne");

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
        <article className="section section-cream article">
          <div className="wrap wrap-narrow">
            <div className="sec-head-left">
              <span className="kicker kicker-pill">Risorse</span>
              <h1>{PAGE.title}</h1>
              <p className="sec-sub">
                Il ritardo di un fornitore non è un problema d&apos;ufficio acquisti: è un
                OdP fermo, una consegna al cliente che slitta. Va visto prima, non dopo.
              </p>
            </div>

            <Reveal className="article-body">
              <h2>Il problema</h2>
              <p>
                Le date promesse dai fornitori sono nel gestionale, riga per riga. Ma il
                monitoraggio, in molte aziende, è fatto di telefonate di sollecito quando il
                materiale non arriva e di un Excel dei ritardi aggiornato quando c&apos;è
                tempo — cioè mai. Così il ritardo lo scopri quando il reparto si ferma, e a
                quel punto l&apos;unica leva rimasta è il corriere espresso.
              </p>

              <h2>Il metodo</h2>
              <p>Il monitoraggio utile risponde a tre domande, in quest&apos;ordine:</p>
              <ol>
                <li>
                  <strong>Quali righe sono in ritardo?</strong> Le righe degli ordini
                  d&apos;acquisto aperte con data promessa superata e quantità non ancora
                  ricevuta — non l&apos;ordine intero, la singola riga.
                </li>
                <li>
                  <strong>Quanto pesa il ritardo?</strong> Giorni oltre la data promessa,
                  fornitore per fornitore, per distinguere lo slittamento fisiologico dal
                  problema cronico.
                </li>
                <li>
                  <strong>Cosa blocca?</strong> L&apos;incrocio con i fabbisogni: quali
                  ordini di produzione aspettano quel componente, e quali consegne ai clienti
                  rischiano di slittare a cascata.
                </li>
              </ol>
              <p>
                È la terza domanda che trasforma un elenco di ritardi in una priorità: un
                ritardo di dieci giorni su un componente a scorta non vale quanto tre giorni
                su un codice che ferma una commessa.
              </p>
            </Reveal>

            <Reveal className="example-box">
              <span className="example-box-label">Esempio</span>
              <p>La fotografia di stamattina sugli ordini d&apos;acquisto aperti:</p>
              <div className="example-rows">
                <div className="example-row">
                  <span>Righe oltre la data promessa</span>
                  <strong>5</strong>
                </div>
                <div className="example-row">
                  <span>Ritardo del fornitore X sul componente critico</span>
                  <strong>8 giorni</strong>
                </div>
                <div className="example-row">
                  <span>OdP bloccati da quel componente</span>
                  <strong>2</strong>
                </div>
              </div>
              <p>
                Il sollecito giusto, al fornitore giusto, prima che i due OdP si fermino.
              </p>
              <p className="example-note">
                I numeri sono un esempio illustrativo, non dati di un cliente reale.
              </p>
            </Reveal>

            <Reveal as="section" className="article-body">
              <h2>Come risponde OpenMind in 30 secondi</h2>
              <div className="qa">
                <h3 className="qa-q">«Quali fornitori sono in ritardo sulle consegne?»</h3>
                <p className="qa-a">
                  OpenMind legge le righe d&apos;acquisto aperte nel gestionale, calcola i
                  giorni oltre la data promessa, raggruppa per fornitore e incrocia con i
                  fabbisogni degli OdP in corso: ti dice chi è in ritardo, di quanto, e
                  quali produzioni rischiano di fermarsi — aggiornato al momento della
                  domanda.
                </p>
              </div>
              <p>
                E se vuoi tenerla d&apos;occhio ogni giorno, la stessa domanda diventa un
                cruscotto che si riallinea a oggi a ogni apertura.
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
