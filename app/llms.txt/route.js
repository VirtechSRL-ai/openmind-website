import { CONTACT_EMAIL, HYGIENE_PAGES, SITE_URL } from "../../lib/site";

export function GET() {
  const resources = HYGIENE_PAGES.map(
    (page) => `- ${page.label}: ${SITE_URL}/risorse/${page.slug}`
  ).join("\n");

  const content = `# OpenMind

OpenMind è l'analista dati AI di Virtech Srl per le PMI manifatturiere italiane.
Interroga in sola lettura i dati aziendali e restituisce risposte in italiano con numeri, grafici e indicazioni operative.

## Pagine principali

- Home: ${SITE_URL}/
- Sicurezza e protezione dei dati: ${SITE_URL}/sicurezza
- Demo: ${SITE_URL}/demo
- Risorse: ${SITE_URL}/risorse

## Risorse operative

${resources}

## Richiedere una demo

- Azienda: Virtech Srl
- Email: ${CONTACT_EMAIL}

Gli esempi numerici pubblicati nelle risorse sono illustrativi e non rappresentano dati di clienti reali.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
