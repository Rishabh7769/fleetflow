export function buildSearch(search?: string) {
  if (!search) return undefined;

  return {
    contains: search,
    mode: "insensitive" as const,
  };
}