import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import "./experience.css";
import "./resources.css";
import { SITE_URL } from "../lib/site";

/* Tipografia: DM Sans per la struttura dei titoli e i numeri grandi,
   DM Serif Display (corsivo) solo per le parole evidenziate nei titoli,
   Inter per testo, interfaccia, label e navigazione. */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dmserif",
});

const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
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
    <html lang="it" className={`js ${dmSans.variable} ${dmSerif.variable} ${inter.variable}`}>
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
