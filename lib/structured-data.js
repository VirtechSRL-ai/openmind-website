import { FAQS, HYGIENE_PAGES, SITE_URL } from "./site.js";

const organizationId = "https://www.virtechsrl.com/#organization";
const productId = `${SITE_URL}/#software`;

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export function articleStructuredData(slug) {
  const page = HYGIENE_PAGES.find((item) => item.slug === slug);
  const url = `${SITE_URL}/risorse/${slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: page.title,
        description: page.description,
        url,
        inLanguage: "it-IT",
        author: { "@id": organizationId },
        publisher: { "@id": organizationId },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": productId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Risorse",
            item: `${SITE_URL}/risorse`,
          },
          { "@type": "ListItem", position: 3, name: page.title, item: url },
        ],
      },
    ],
  };
}
