import DemoCta from "../../../components/DemoCta";
import Reveal from "../../../components/Reveal";
import RisorseNav from "../../../components/RisorseNav";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
import { HYGIENE_PAGES } from "../../../lib/site";

const PAGE = HYGIENE_PAGES.find((p) => p.slug === "confronto-fatturato-anno-su-anno");

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
                Il totale anno su anno dice poco: è il confronto per linea di prodotto che
                mostra chi cresce, chi cala e dove guardare.
              </p>
            </div>

            <Reveal className="article-body">
              <h2>Il problema</h2>
              <p>
                «Come sta andando il fatturato rispetto all&apos;anno scorso?» sembra una
                domanda da trenta secondi, finché non serve la risposta per linea di
                prodotto. A quel punto significa estrarre due anni di righe fatturate,
                riclassificarle per linea, allineare i periodi — e rifare tutto il mese dopo,
                o quando qualcuno chiede lo stesso confronto per famiglia, per cliente o per
                agente.
              </p>

              <h2>Il metodo</h2>
              <p>Perché il confronto anno su anno sia onesto servono quattro accortezze:</p>
              <ol>
                <li>
                  <strong>Perimetri uguali</strong> — stesso intervallo di date nei due anni
                  (gennaio–agosto contro gennaio–agosto, non contro l&apos;anno intero).
                </li>
                <li>
                  <strong>Una riclassifica stabile</strong> — ogni articolo assegnato alla
                  sua linea di prodotto dall&apos;anagrafica, non da una colonna Excel
                  compilata a memoria.
                </li>
                <li>
                  <strong>Valori confrontabili</strong> — fatturato al netto di note di
                  credito nei due periodi, con lo stesso criterio.
                </li>
                <li>
                  <strong>Delta assoluto e percentuale</strong> — il +12% di una linea
                  piccola non compensa il −8% di una linea grande: servono entrambe le
                  letture.
                </li>
              </ol>
              <p>
                Il risultato utile è una tabella per linea con i due anni affiancati, il
                delta e la variazione percentuale — e la stessa logica pronta per qualsiasi
                altro raggruppamento.
              </p>
            </Reveal>

            <Reveal className="example-box">
              <span className="example-box-label">Esempio</span>
              <p>Confronto anno su anno per linea di prodotto, a parità di periodo:</p>
              <div className="example-rows">
                <div className="example-row">
                  <span>Linea «Componenti CNC»</span>
                  <strong>+12%</strong>
                </div>
                <div className="example-row">
                  <span>Linea «Carpenteria standard»</span>
                  <strong>−8%</strong>
                </div>
              </div>
              <p>
                Il totale aziendale, da solo, avrebbe nascosto entrambe le tendenze: una
                linea che tira e una che perde terreno.
              </p>
              <p className="example-note">
                I numeri sono un esempio illustrativo, non dati di un cliente reale.
              </p>
            </Reveal>

            <Reveal as="section" className="article-body">
              <h2>Come risponde OpenMind in 30 secondi</h2>
              <div className="qa">
                <h3 className="qa-q">
                  «Confronta il fatturato 2023 vs 2024 per linea di prodotto»
                </h3>
                <p className="qa-a">
                  OpenMind interroga il gestionale, allinea i periodi, raggruppa per linea
                  dall&apos;anagrafica articoli e ti restituisce tabella e grafico con delta
                  assoluti e percentuali. Qualsiasi periodo, qualsiasi raggruppamento — per
                  famiglia, cliente o agente — cambiando solo la domanda.
                </p>
              </div>
              <p>
                E il confronto che guardi ogni mese diventa un cruscotto salvato, che si
                riallinea a oggi a ogni apertura.
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
