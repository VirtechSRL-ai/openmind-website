import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

export const metadata = {
  title: "OpenMind — L'analista dati AI della tua azienda",
  description:
    "OpenMind è l'analista dati AI della tua azienda: fai domande in italiano su ordini, costi, margini e magazzino e ottieni risposte precise, grafici e cruscotti sempre aggiornati — direttamente dai tuoi dati reali.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="it"
      className={`js ${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <noscript>
          {/* Senza JS il contenuto resta sempre visibile */}
          <style>{`.js .reveal{opacity:1;transform:none}.js .chat-body [data-step]{opacity:1;transform:none}.js .msg-status{display:none}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
