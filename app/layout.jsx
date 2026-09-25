import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, DM_Serif_Display, Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="posthog" strategy="afterInteractive">
          {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}p||((p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",p.onerror=function(){p=null},(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r));var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="mu yu bu Su init Vu Gu zu Uu Ku il Wu Yu ju rh oh ah uh hh dh capture getExtension Zu pu gh calculateEventProperties ph register register_once register_for_session unregister unregister_for_session Hu mh getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync wh identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags reset kh shutdown setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty yh ih createPersonProfile setInternalOrTestUser bh xu Cu opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing th debug nl Os getPageViewId captureTraceFeedback captureTraceMetric Du".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_AGXZ8vBu5SKyHdAxebcM8x8yUeRPrShBk9QwfE5fTefy', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  person_profiles: 'identified_only',
});`}
        </Script>
      </body>
    </html>
  );
}
