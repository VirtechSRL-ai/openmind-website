import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "../lib/site";

/* Coppia tipografica: Cormorant Garamond corsivo per i titoli editoriali
   e i numeri grandi, Inter per testo, interfaccia, label e navigazione. */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: "#0c101e",
};

const DESCRIPTION =
  "OpenMind è l'analista dati AI della tua azienda: fai domande in italiano su ordini, costi, margini e magazzino e ottieni risposte precise, grafici e cruscotti sempre aggiornati — direttamente dai tuoi dati reali.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OpenMind — L'analista dati AI della tua azienda",
    template: "%s — OpenMind",
  },
  description: DESCRIPTION,
  openGraph: {
    siteName: "OpenMind",
    locale: "it_IT",
    type: "website",
    url: "/",
    title: "OpenMind — L'analista dati AI della tua azienda",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`js ${cormorant.variable} ${inter.variable}`}>
      <body>
        {/* Prima del primo paint: attiva il sipario d'apertura (IntroVeil) solo
            alla prima visita della sessione e mai con animazioni ridotte.
            Senza JS lo script non gira e il velo resta nascosto. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{if(!sessionStorage.getItem("om-intro")&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.classList.add("intro")}catch(e){}',
          }}
        />
        <noscript>
          {/* Senza JS il contenuto resta sempre visibile */}
          <style>{`.js .reveal{opacity:1;transform:none}.js .chat-body [data-step]{opacity:1;transform:none}.js .msg-status{display:none}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
