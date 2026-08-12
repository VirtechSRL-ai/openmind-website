# Design

Identità visiva ereditata dall'app OpenMind in produzione (identity-preservation: i token esistono già nel prodotto).

## Theme

Editoriale, sobrio, «carta e inchiostro navy». Luce ambiente: ufficio amministrativo di una PMI, schermo desktop, lettura diurna — quindi fondo chiaro caldo per il corpo pagina, con hero e chiusura in navy profondo (strategia **Committed**: il navy porta l'identità su ~35% della superficie).

## Color palette (OKLCH + hex di riferimento)

| Token | Valore | Uso |
|---|---|---|
| `--navy` | `#1e3a8a` | Colore primario di marca, bottoni, link |
| `--navy-deep` | `#16255c` | Fondo hero e CTA finale |
| `--navy-ink` | `#101a3d` | Ombre/testi su superfici navy chiare |
| `--paper` | `#fafaf7` | Fondo pagina (carta calda, token dell'app) |
| `--ink` | `#211f26` | Testo corpo su carta (≥ 12:1) |
| `--muted` | `#565661` | Testo secondario su carta (≥ 5:1) |
| `--ember` | `#c2410c` | Arancio bruciato: accenti puntuali, avvisi, virgolette |
| `--line` | `#e5e2d9` | Filetti su carta |
| su navy: testo `#fafaf7`, secondario `#b9c3e0`, filetti `rgba(250,250,247,.16)` | | |

Niente gradienti decorativi, niente glass. L'arancio non supera il ~2% della superficie.

## Typography

- **Fraunces** (variable, opsz) — titoli serif, peso 500–600, letter-spacing −0.02em, `text-wrap: balance`.
- **Inter Tight** — interfaccia e corpo, 400/500/600.
- **JetBrains Mono** — microcopy «di macchina»: stati di lavoro, etichette dati, credito tecnologico.
- Scala fluida con `clamp()`, rapporto ≥ 1.25. Corpo max 68ch.

## Components

- **Bottoni**: radius 8px; primario navy pieno (su carta) / carta piena (su navy); secondario bordo 1px, niente ombre larghe.
- **Card**: radius 12px, bordo 1px `--line` **oppure** ombra ≤ 8px, mai entrambi.
- **Mockup chat**: riproduce l'app reale (saluto, bolle, stati di lavoro in mono, campo «Chiedi qualcosa a OpenMind…»).
- **FAQ**: `<details>` nativi con filetti.
- **Logo**: quadrato arrotondato navy con «Om» bianco in Fraunces + wordmark «OpenMind» (CSS/SVG, nessun file immagine esiste).

## Motion

Sobria e orchestrata: sequenza della chat nell'hero (messaggio → stati di lavoro → risposta con barre), reveal on-scroll solo con JS attivo (default visibile), easing `cubic-bezier(.16,1,.3,1)`, tutto disattivato con `prefers-reduced-motion`.

## Layout

Colonna contenuti max 1120px; sezioni con spaziatura fluida `clamp(4rem, 10vw, 8rem)`; ritmo variato (hero denso → «Come funziona» arioso). Un'unica sequenza numerata (i 3 passi reali); nessun eyebrow ripetuto sopra ogni sezione.

## Stack

Next.js 15 (App Router, output statico) · React 19 · CSS globale in `app/globals.css` · font via `next/font` (Fraunces, Inter Tight, JetBrains Mono). Componenti client: `components/ChatCard.jsx` (sequenza chat dell'hero) e `components/Reveal.jsx` (reveal on scroll con fallback). La versione HTML statica precedente è archiviata in `legacy-static/`.
