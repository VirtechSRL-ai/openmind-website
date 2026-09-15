// Costanti condivise del sito marketing OpenMind.

// URL di produzione del sito marketing — PLACEHOLDER: confermare il dominio reale prima del deploy.
export const SITE_URL = "https://openmind-website.vercel.app";

// L'app OpenMind (non il sito marketing).
export const APP_URL = "https://openmind-drab.vercel.app";

export const DEMO_MAILTO = "mailto:info.virtechsrl@gmail.com?subject=Demo%20OpenMind";

// PLACEHOLDER: sostituire con l'ID reale del form Formspree (https://formspree.io).
export const FORMSPREE_ID = "REPLACE_WITH_FORMSPREE_ID";

// Le 5 pagine "hygiene" SEO: titolo = domanda esatta dell'ICP.
// Riusato da footer, sitemap e link incrociati tra pagine.
export const HYGIENE_PAGES = [
  {
    slug: "margine-reale-ordine-di-produzione",
    title: "Come calcolare il margine reale di un ordine di produzione",
    label: "Margine reale di un OdP",
    description:
      "Ricavo, materiali a consuntivo e minuti effettivi: il metodo per calcolare il margine reale di un ordine di produzione. Esempio: 23,4% reale contro il 28% stimato.",
  },
  {
    slug: "consegnare-ordini-in-portafoglio",
    title: "Come sapere se riesco a consegnare tutti gli ordini in portafoglio",
    label: "Copertura del portafoglio ordini",
    description:
      "Incrociare portafoglio ordini, giacenze, distinte base e ordini in corso per capire cosa è coperto e cosa manca — con quantità e data ultima per ordinare.",
  },
  {
    slug: "fornitori-in-ritardo-consegne",
    title: "Come monitorare i fornitori in ritardo sulle consegne",
    label: "Fornitori in ritardo",
    description:
      "Righe d'ordine oltre la data promessa, giorni di ritardo e OdP bloccati: come tenere sotto controllo i fornitori senza rincorrere conferme al telefono.",
  },
  {
    slug: "analisi-abc-fatturato-senza-excel",
    title: "Come fare un'analisi ABC del fatturato senza Excel",
    label: "Analisi ABC del fatturato",
    description:
      "Classi A, B e C sul fatturato reale, senza estrazioni né tabelle pivot. Esempio: 12 clienti su 200 che generano il 78% del fatturato, con CSV pronto.",
  },
  {
    slug: "confronto-fatturato-anno-su-anno",
    title: "Come confrontare il fatturato anno su anno per linea di prodotto",
    label: "Fatturato anno su anno",
    description:
      "Confronto anno su anno per linea di prodotto dai dati del gestionale: crescite e cali riga per riga, per qualsiasi periodo, con una sola domanda.",
  },
];
