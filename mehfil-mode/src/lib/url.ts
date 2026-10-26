/**
 * Canonical base URL for share links, canonical tags, OG, sitemap and robots.
 *
 * Resolution order:
 *  1. NEXT_PUBLIC_SITE_URL (set this in production)
 *  2. VERCEL_PROJECT_PRODUCTION_URL (auto-provided by Vercel)
 *  3. http://localhost:3000 (local development only)
 */
export function getBaseUrl(env: Record<string, string | undefined> = process.env): string {
  const explicit = env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return stripTrailingSlash(withProtocol(explicit));
  const vercel = env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return stripTrailingSlash(withProtocol(vercel));
  return "http://localhost:3000";
}

export function absoluteUrl(path = "/", env?: Record<string, string | undefined>): string {
  const base = getBaseUrl(env);
  const p = path.startsWith("/") ? path : `/${path}`;
  return p === "/" ? base : `${base}${p}`;
}

export function playlistPath(slug: string): string {
  return `/playlists/${slug}`;
}

function withProtocol(u: string): string {
  return /^https?:\/\//i.test(u) ? u : `https://${u}`;
}

function stripTrailingSlash(u: string): string {
  return u.replace(/\/+$/, "");
}
