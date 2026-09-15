import { HYGIENE_PAGES, SITE_URL } from "../lib/site";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/sicurezza`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...HYGIENE_PAGES.map((page) => ({
      url: `${SITE_URL}/risorse/${page.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
