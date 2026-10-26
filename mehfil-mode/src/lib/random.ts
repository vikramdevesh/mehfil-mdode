/** Pick a random element. `rng` is injectable for tests. */
export function pickRandom<T>(items: readonly T[], rng: () => number = Math.random): T | undefined {
  if (!items.length) return undefined;
  const i = Math.min(items.length - 1, Math.floor(rng() * items.length));
  return items[i];
}

/** Pick a random element different from `avoid` when possible. */
export function pickRandomExcept<T>(
  items: readonly T[],
  avoid: T | undefined,
  rng: () => number = Math.random,
  eq: (a: T, b: T) => boolean = Object.is,
): T | undefined {
  if (items.length <= 1 || avoid === undefined) return pickRandom(items, rng);
  const pool = items.filter((x) => !eq(x, avoid));
  return pickRandom(pool, rng);
}
