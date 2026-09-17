/* Set di icone lineari coerenti (stroke 1.7, currentColor).
   Un solo componente: <Icon name="chat" /> — nessuna libreria esterna. */

const PATHS = {
  /* fulmine: velocità */
  spark: <path d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z" />,
  /* chat: bolla di conversazione */
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-8 8H4l1.8-2.7A8 8 0 1 1 21 12Z" />
      <path d="M8.5 10.5h7M8.5 13.5h4.5" />
    </>
  ),
  /* punto di domanda: chiede, non suppone */
  ask: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.9c-.8.35-1 .9-1 1.7" />
      <path d="M12 17h.01" />
    </>
  ),
  /* campanella: promemoria */
  bell: (
    <>
      <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6Z" />
      <path d="M10.3 19a2 2 0 0 0 3.4 0" />
    </>
  ),
  /* cruscotto */
  gauge: (
    <>
      <path d="M20.5 14.5a8.5 8.5 0 1 0-17 0" />
      <path d="M12 14.5 15.5 9" />
      <path d="M3.5 14.5h2M18.5 14.5h2M12 6v2" />
    </>
  ),
  /* libro: glossario */
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
      <path d="M9 7.5h7" />
    </>
  ),
  /* grafico a barre: analisi */
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V8M17 20v-9" />
    </>
  ),
  /* matita: scrivi la domanda */
  pen: (
    <>
      <path d="m14.5 5 4.5 4.5L8 20.5l-5 1 1-5L14.5 5Z" />
      <path d="m12.5 7 4.5 4.5" />
    </>
  ),
  /* database: interroga i dati */
  db: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
      <path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </>
  ),
  /* scudo con spunta: sicurezza */
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.7 3.2 8 7.5 10 4.3-2 7.5-5.3 7.5-10v-6L12 2.5Z" />
      <path d="m8.8 11.8 2.3 2.3 4.1-4.6" />
    </>
  ),
  /* lucchetto: sola lettura */
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <path d="M12 14.5v2.5" />
    </>
  ),
  /* persona: accessi personali */
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  /* euro: costi sotto controllo */
  euro: (
    <>
      <path d="M17.5 6.5A7 7 0 0 0 6.8 8.8a7 7 0 0 0 0 6.4 7 7 0 0 0 10.7 2.3" />
      <path d="M4 10.5h9M4 13.5h9" />
    </>
  ),
  /* occhio barrato → trasparenza: dichiara le assunzioni */
  note: (
    <>
      <path d="M6 3.5h12a1.5 1.5 0 0 1 1.5 1.5v14A1.5 1.5 0 0 1 18 20.5H6A1.5 1.5 0 0 1 4.5 19V5A1.5 1.5 0 0 1 6 3.5Z" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </>
  ),
};

export default function Icon({ name, className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
