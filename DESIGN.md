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

- **Cormorant Garamond corsivo** (500/600/700) — h1/h2, numeri grandi (½ giornata, 30 s, 23,4%), domande dei dialoghi, ticker, interludi, wordmark. Alto contrasto editoriale, è l'elemento distintivo del brand.
- **Inter** (variable) — corpo, navigazione, bottoni, h3 e titoli funzionali delle card, numeri secondari (tile del cruscotto) e tutte le etichette maiuscolettate (che prima erano in mono: `--font-mono` ora punta a Inter).
- Contrasto intenzionale: headline editoriali corsive vs testo moderno e pulito. Scala fluida `clamp()`; Cormorant ha occhio piccolo, quindi corpi maggiorati (hero fino a 6rem).

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

Sobria e orchestrata: coreografia d'ingresso dell'hero (badge → H1 → sottotitolo → CTA → pannelli, rise + blur-in scalati di 80ms), sequenza della chat nell'hero (messaggio → stati di lavoro → risposta con barre), reveal on-scroll con blur che si dissolve solo con JS attivo (default visibile), easing `cubic-bezier(.16,1,.3,1)`, tutto disattivato con `prefers-reduced-motion`.

## Layout

Colonna contenuti max 1120px; sezioni con spaziatura fluida `clamp(4rem, 10vw, 8rem)`; ritmo alternato per struttura, non solo per colore: hero denso → ticker → numeri giganti del problema (½ giornata / 3 uffici / 52 lunedì, con il «prima → dopo» ~~Mezza giornata~~ → 30 secondi) → banda scura col personaggio → passi → dialoghi → CTA navy → numeri enormi (`clamp(4.2rem, 10vw, 7.5rem)`) → bento → marquee. Un'unica sequenza numerata (i 3 passi reali); nessun eyebrow ripetuto sopra ogni sezione.

## Stack

Next.js 15 (App Router, output statico) · React 19 · CSS globale in `app/globals.css` · font via `next/font` (Cormorant Garamond, Inter). Componenti client: `components/ChatCard.jsx` (sequenza chat dell'hero) e `components/Reveal.jsx` (reveal on scroll con fallback). La versione HTML statica precedente è archiviata in `legacy-static/`. Nuovi componenti client: `FluidField` (fluido scroll-driven), `MobileNav`, `IntroVeil`, `ProcessDemo`, `CountUp`.
