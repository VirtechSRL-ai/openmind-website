export function searchResources(resources, query, limit = 5) {
  const normalize = (text) => text.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
  const terms = normalize(query).split(/[^a-z0-9]+/).filter((term) => term.length > 2);
  const matches = resources.map((resource) => {
    const haystack = normalize(`${resource.label} ${new URL(resource.url).pathname}`);
    return { resource, score: terms.filter((term) => haystack.includes(term)).length };
  });
  return matches
    .filter(({ score }) => terms.length === 0 || score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit)
    .map(({ resource }) => resource);
}
