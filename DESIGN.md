# Design

Identità visiva ereditata dall'app OpenMind in produzione, evoluta nella direzione «materia fluida + fogli di carta» (redesign 09/2026).

## Theme

Tema notte completo (refinement 09/2026): tutto il sito vive in tonalità blu notte/grafite; un **fluido di particelle** (video Envato, onde argento-azzurre) scorre dietro la homepage e rappresenta il movimento dei dati. I contenuti sono **fogli** blu grafite arrotondati con rim light, separati da fasce di fluido; le bande scure usano **scrim a gradiente verticale** (dense al centro per il testo, quasi trasparenti ai bordi) così i confini si dissolvono nel fluido — mai rettangoli netti. Le uniche superfici chiare sono le **superfici-prodotto** (chat, cruscotto, risposte dei dialoghi, bolla Om, fogli millimetrati dei settori, example-box): la prova del prodotto è il punto di luce della pagina. Narrativa: dati (fluido) → analisi → risposte (carta). Sottopagine su canvas notte, bande opache via `.fluid-field ~ main`.

## Color palette

| Token | Valore | Uso |
|---|---|---|
| `--dark` / `--dark-2` | `#0a1020` / `#070b16` | Canvas notte, base del fluido, footer |
| `--cream` / `--cream-2` / `--card` | `#0f1627` / `#131c33` / `#141d36` | Fogli e card blu grafite |
| `--ink` / `--muted` | `#e9ecf5` / `#9aa3bd` | Testo su notte |
| `--paper` | `#f6f4ee` | Carta vera: bottoni primari, marchi Om, superfici-prodotto (che ri-scopano i token chiari) |
| `--periwinkle` | `#a2b6ff` | **Accento testuale unificato**: parole nei titoli, sottolineature/barrati, numeri grandi, label, icone |
| `--iris` | `#5667ff` | Accento grafico: puntini, barre, filo di progressione, alone hover |
| `--navy` | `#1e3a8a` | Bolle utente, ticker, CTA intermedia, grafici sulle superfici carta |

**L'arancione resta vietato**; coerenza cromatica: tutto ciò che è testuale/tipografico usa il periwinkle delle parole evidenziate (richiesta esplicita), il blu iris resta per la grafica. Errori form in rosso semantico `#e05c5c`. `.ff-tint` (navy→iris, soft-light) accorda il video al brand.

## Typography

Redesign 09/2026 · II (richiesta esplicita del cliente): **Cormorant Garamond non si usa più.**

- **DM Sans** (`--font-display`, 400–700) — struttura di tutti i titoli e dei numeri grandi (23,4%, 139 / 142, +8, 2023 vs 2024). Peso 500, tracking stretto (−0,035em titoli, −0,045em numeri).
- **DM Serif Display corsivo** (`--font-accent`) — solo le parole evidenziate nei titoli (`.ai`, `.fw-accent`), i numeri-contorno dei capitoli (01, 02…) e poche frasi-risposta. Mai per interi paragrafi.
- **Inter** — corpo, interfaccia, label, navigazione (ora anche in corsivo vero).
- `font-size-adjust: var(--fsa)` (0,45) su titoli e numeri display: allinea l'occhio di DM Sans e DM Serif Display nella stessa riga e conserva le misure calibrate sul vecchio serif. `html { font-synthesis: none }`: nessun falso corsivo, le vecchie regole «italic» sui titoli restano dritte.

## Logo

Logo ufficiale del cliente (`public/brand/openmind-logo.png`, PNG chiaro trasparente, solo ritagliato ai bordi; `openmind-logo-640.png` per header/footer). Mai ricreato né sostituito con testo. Posizioni: header in alto a sinistra (25px, 21px su mobile), footer, sipario d'apertura, e **filigrana finale** gigante nel footer (opacità 0,16, maschera a gradiente verso il basso, rivelazione lenta dal fondo con `rv-mark` — 2,4 s expo). Nota: il wordmark del logo si legge «Open Mind»; nei testi resta «OpenMind».

**Simbolo** (senza scritta, fornito dal cliente): `public/brand/openmind-symbol.png` e `-480.png` (trasparente, solo ritagliato) — centro della mappa dei settori, origine del circuito mobile, separatore nelle fasce «OPENMIND». **Favicon**: il simbolo su fondo navy fornito dal cliente → `app/icon.png` (512), `app/apple-icon.png` (180), `app/favicon.ico` (16/32/48); il vecchio `icon.svg` «Om» è eliminato.

## Components

- **Bottoni**: a pillola (radius 999px); primario carta piena su navy con luce interna, micro-lift all'hover e freccia `→` che scorre di 3px; secondario bordo 1px, niente ombre larghe.
- **Hero badge**: pill Inter maiuscoletto con puntino iris sopra l'H1 («Costruito per le PMI…»); su mobile la coda «· da Virtech Srl» sparisce.
- **Fluido scroll-driven** (`components/FluidField.jsx`): layer fisso a z negativo dietro la homepage con il video delle particelle (`public/fluid/fluid-1280.mp4` desktop / `fluid-768.mp4` mobile, H.264 GOP 4 per lo scrubbing, poster jpg). La testina video è pilotata dallo scroll (rAF + interpolazione, si ferma quando l'utente si ferma); il layer deriva di posizione/scala (`--fy`/`--fs`). Sopra: velo cromatico `.ff-tint` e vignetta. Fallback: poster statico senza JS o con `prefers-reduced-motion`; il RibbonField canvas è stato rimosso.
- **Fogli** (`.sheet`): i blocchi chiari (problema · come funziona+in azione · numeri+dentro+settori+dati · FAQ) sono card crema arrotondate con inset laterale e ombra, separate da fasce di fluido; la CTA intermedia è un foglio navy con la stessa geometria.
- **Interludi** (`.fluid-word`): due frasi in Cormorant corsivo gigante sul fluido — «Dai dati sparsi…» / «…alle risposte chiare.» — con parola accentata in periwinkle: le parole che dialogano con la materia.
- **Navigazione**: le quattro voci centrate in una pill dedicata (bordo, fondo translucido, hover a capsula); menu mobile a pannello (`components/MobileNav.jsx`, portal sul body per evitare il containing block del backdrop-filter dell'header) con voci in Cormorant corsivo e CTA.
- **Card**: radius 12px, bordo 1px `--line` **oppure** ombra ≤ 8px, mai entrambi.
- **Mockup chat**: riproduce l'app reale (saluto, bolle, stati di lavoro in mono, campo «Chiedi qualcosa a OpenMind…»); le risposte hanno l'avatar «Om».
- **Avatar Om**: quadrato arrotondato navy con «Om» in Cormorant — il volto ricorrente dell'analista, accanto a ogni risposta AI (chat hero, dialoghi, saluto nella banda soluzione).
- **Ticker**: banda navy ruotata di −1,1° tra hero e problema, con domande vere in corsivo Cormorant separate da ✳ iris; scorre in marquee, si ferma all'hover, statica con `prefers-reduced-motion` (il body ha `overflow-x: clip` per lo sbordo della rotazione).
- **Sticker**: pill mono maiuscolo ruotate di ±3–4° agganciate ai pannelli hero («senza Excel» su fondo iris, «come a un collega» su carta).
- **Evidenziatore**: barra iris inclinata sotto una parola chiave del titolo hero (`.hl-mark`), disegnata in entrata.
- **Dialoghi in azione**: gli esempi sono scambi chat — domanda serif corsiva navy a sinistra, risposta a destra come card con avatar Om, verdetti a pill (✓ verde / ! iris), mini-grafici a barre o numero gigante.
- **CTA intermedia**: banda navy piena a metà pagina («Hai in testa una domanda così anche tu?») oltre a header, hero, link contestuali e chiusura.
- **Badge fiducia**: la sicurezza è una griglia di 4 card con icona (scudo, lucchetto, persona, euro) e una riga di testo, con CTA demo in coda (`.trust-actions`).
- **Chip**: elenchi lunghi (dati coperti, altre analisi) resi come pill brevi, non paragrafi.
- **Icone**: set lineare interno (`components/Icons.jsx`, stroke 1.7, currentColor), su card capacità, passi, garanzie hero e fiducia.
- **FAQ**: `<details>` nativi con filetti.
- **Logo**: quadrato arrotondato navy con «Om» bianco in Cormorant + wordmark corsivo «OpenMind» (CSS/SVG, nessun file immagine esiste).
- **Sipario d'apertura** (`components/IntroVeil.jsx`), ~3,8s in quattro momenti: (1) particelle disperse che si radunano (`iv-gather`, 12 punti con offset), (2) le linee-dati si disegnano e fluiscono verso il centro, (3) il marchio Om appare con un anello di messa a fuoco (`iv-ring`), wordmark e tagline, (4) il velo si alza mentre la hero entra riga per riga. Skip con click/tasto/scroll; mai con `prefers-reduced-motion` né senza JS (classe `intro` pre-paint); sicurezza CSS a 5,5s. Chat e cruscotto attendono il velo (3,4s).
- **Titolo hero senza sottolineatura**: due righe `.h1-line` con entrata sfalsata; l'enfasi è tipografica (accento periwinkle), nessun evidenziatore.
- **Varianti di reveal**: `rv-title` (maschera clip-path dal basso, i titoli si «stampano»), `rv-sheet` (i fogli salgono interi), `rv-left`/`rv-right` (dialoghi alternati), `rv-scale` (card). Tutte azzerate con reduced-motion.
- **Filo di progressione** (`.scroll-thread` in FluidField): linea di 2px iris→periwinkle in cima alla pagina, scala con lo scroll — il filo conduttore del racconto.
- **Hover raffinati**: card e chip si sollevano di 2–3px con bordo e alone periwinkle/iris discreti (trait, trust-card, cap-card, domain-card, chip, FAQ); mai effetti aggressivi, tutto disattivato in reduced-motion.
- **Chiusura**: la banda finale ha un alone radiale periwinkle dietro la CTA e lo scrim più aperto in alto: la materia converge, la richiesta demo emerge nella quiete.
- **Percorso interattivo «Come funziona»** (`components/ProcessDemo.jsx`): i tre passi sono bottoni con numero sulla linea tratteggiata verticale; a fianco un pannello chat riproduce la sequenza reale (domanda fornitori in ritardo → stati di lavoro con pill «sola lettura» → analisi con verdetti e insight). Parte da solo in viewport, ogni passo si rivede con un click; reduced-motion/no-JS mostrano lo stato finale.
- **Conteggio in salita** (`components/CountUp.jsx`): i numeri grandi (30 s, 100%) salgono al valore vero quando entrano in viewport, cifre tabulari per non far ballare il layout; statici con reduced-motion o senza JS. Lo «0» resta fermo, com'è giusto.
- **CTA sicurezza**: in coda alla banda sicurezza, bottone «Richiedi una demo» + link «Approfondisci la sicurezza» (`.trust-actions`).

## Motion

Redesign 10/2026: un **linguaggio di transizione in quattro famiglie** (`app/experience.css`), non un effetto diverso per sezione.

- **A · Reveal** (contenuti informativi): salita breve 28px + blur che si scioglie, expo `cubic-bezier(.19,1,.22,1)` 1–1,2 s; titoli a maschera (`rv-title`) o parola per parola (`rv-words`, parole spezzate lato server da `components/Words.jsx`).
- **B · Slide** (esempi, confronti): domanda da sinistra, risposta da destra (max 120px, `--slide`), una linea le collega. Su ≤760px diventa verticale (36px).
- **C · Transform** (passaggi di fase): un elemento arretra e il successivo prende il suo posto — scena del problema, mappa dei settori, fogli che emergono dal fluido (`rv-sheet` con scala .965).
- **D · Focus** (CTA, numeri chiave): il blocco si mette a fuoco (`rv-focus`), la luce resta sul bottone (`btn-glow`).

**Due livelli di movimento** (principio preso da Grizzly): solo le scene marcate `data-scene` sono legate allo scroll — Problema, Esempi, Settori, interludi, capitoli 01/02/03/05 delle Risorse; tutto il resto parte una volta all'ingresso. `components/ScrollFx.jsx` è l'unico motore: scrive `--p` (0→1, interpolato) sugli elementi `data-scene="pin|pass"`, `data-step`/`--step` per le scene a capitoli; il CSS usa `--p` solo su transform/opacity. Le scene agganciate (sticky 100vh) esistono solo con `html.fx` e su schermi ≥1000×620; altrove e con `prefers-reduced-motion` il contenuto è lo stesso, in verticale, allo stato finale.

**Fluido come filo conduttore**: ogni sezione dichiara `data-phase` (hero, problem, analysis, examples, cta-mid, data, sectors, security, cta); `FluidField` legge quella al centro dello schermo e cambia umore con due strati in opacità/transform (`.ff-shade`, `.ff-glow`): spento sul problema, luce a sinistra sull'analisi, fuoco al centro sugli esempi, quiete sulla sicurezza, convergenza sulla chiusura.

**CTA con aura** (`.btn-glow`, su navbar, hero, CTA intermedia, form finale, menu mobile): alone sfumato che respira (5,6 s), anello conico periwinkle che gira piano (11 s, `@property --om-angle`), pozza di luce sotto l'etichetta; all'hover l'alone cresce e l'anello si ferma. Su mobile la navbar mostra «Demo» con la stessa aura.

## Layout

**Settori** (`SectorsMap`): scena in otto tappe — 0 il simbolo da solo con «Sei settori, un solo motore d'analisi»; 1–6 ogni settore compare, il suo raggio si traccia dal simbolo e resta, flusso di particelle verso il centro sul settore attivo; 7 tutto il sistema acceso, «Settori diversi. Un unico sistema. OpenMind al centro.» Regole «da questa tappa in poi» elencate in CSS.

**I dati** (`components/DataFlow.jsx`): non più righe icona+testo. Una frase tipografica in grande («OpenMind legge anagrafica articoli, distinte base…») le cui aree si accendono con lo scroll, chiusa da cosa torna indietro in serif corsivo con ingresso laterale. Su mobile resta una frase, non una colonna di card.

**CTA intermedia** (`MidCta`): due fasce «OPENMIND» giganti (DM Sans maiuscolo, simbolo come separatore) scorrono in loop continuo sopra (verso sinistra, piena) e sotto (verso destra, contorno) il riquadro — due metà identiche traslate del −50%, sfumate ai lati, ferme con reduced-motion. Riquadro arrotondato con l'immagine viola del cliente (`public/cta/openmind-cta-1100|2000.jpg`, crop 58% / 64% su mobile), apertura a maschera (clip-path) all'ingresso e parallax dell'immagine (±7%); velo radiale solo ai bordi. La vecchia sfocatura è rimossa.

**Risorse** (`app/resources.css`, `components/res/`): famiglia comune — barra-indice sticky sotto l'header con scroll-spy e filo di lettura (`ResBar`, su mobile «capitolo ▾»), «In breve» con tre conclusioni cliccabili, titoli di sezione formulati come domande, «Prossima risorsa» con il numero-simbolo dell'articolo successivo (`figure` in `lib/site.js`), CTA demo. Firma visiva diversa per ogni articolo: 01 cascata ricavo→margine agganciata (4 passi); 02 catena dei cinque incroci + cerchio 142→139→3→21/08 e split notte/carta; 03 «+8» che sborda, giorni che scorrono in orizzontale con contatore CSS, carte-domanda che si impilano, barre 10 gg vs 3 gg; 04 duello 12/78%, nastro del rituale che scorre, curva di Pareto disegnata a passi, parola che cambia con lo scroll, «file» consegnati; 05 2023 vs 2024 gigante, il totale che si divide in +12%/−8%, quattro accortezze con micro-visual, selettore del raggruppamento (`GroupSwitch`). Numeri solo dagli esempi illustrativi già presenti, sempre dichiarati. Il menu Risorse mostra accanto a ogni voce il suo numero.


Due sezioni consecutive non hanno mai lo stesso impianto. Sequenza homepage: hero centrato con pannelli → ticker ruotato → **Problema** (scena agganciata: ½ giornata / 3 uffici / 52 lunedì arrivano uno alla volta, poi arretrano e ~~Mezza giornata~~ → 30 secondi) → interludio a parole che si accendono → **Soluzione** (titolo editoriale a sinistra, saluto Om a destra, tratti in fila separati da filetti) → Come funziona (split interattivo) → **Esempi** (tre scene cinematografiche: domanda → OpenMind analizza → linea → risultato gigante su carta → dettaglio → dissolvenza; «Esempi illustrativi» dichiarato) → **CTA focus** «Vuoi vedere cosa può trovare nei tuoi dati?» → numeri giganti → bento Dentro OpenMind → **Dati come registro** (titolo sticky a sinistra, 10 aree in righe con filetto che si disegna) → **Settori come mappa** (Om al centro, sei nodi in orbita, un settore alla volta si accende con il suo percorso dati; su mobile circuito verticale) → Sicurezza split → FAQ → interludio → CTA finale.

**Risorse** (`/risorse`): indice a registro + cinque capitoli con layout diversi e cambio di fondo come stacco — 01 numero gigante (23,4%, 28% barrato), 02 domanda/risposta che si incontrano (139 su 142), 03 editoriale con linea del ritardo (+8 giorni), 04 cruscotto ABC (200 punti, 12 accesi, 78%), 05 rivelazione a tutto schermo (+12% / −8%). Ogni capitolo: Domanda → OpenMind → Risultato + perché serve; numeri = esempi illustrativi già presenti negli articoli.

**Mobile**: `overflow-x: clip` su `html`, `body` e `main` (con il solo body il valore passava al viewport come hidden e su iOS la pagina scivolava di lato); il ticker ruotato è tagliato da `.ticker-clip`; il fluido usa `100lvh`. Verificato senza overflow a 1440/1280/1024/768/430/390/375.

## Stack

Next.js 15 (App Router, output statico) · React 19 · CSS globale in `app/globals.css` · font via `next/font` (Cormorant Garamond, Inter). Componenti client: `components/ChatCard.jsx` (sequenza chat dell'hero) e `components/Reveal.jsx` (reveal on scroll con fallback). La versione HTML statica precedente è archiviata in `legacy-static/`. Nuovi componenti client: `FluidField` (fluido scroll-driven), `MobileNav`, `IntroVeil`, `ProcessDemo`, `CountUp`, `ScrollFx` (motore delle scene), `SectorsMap`. Server: `ProblemScene`, `Examples`, `DataLedger`, `Words`. Rimossi `HubDiagram` e `Sectors` (marquee). Stili del redesign 10/2026 in `app/experience.css`, caricato dopo `globals.css`.
