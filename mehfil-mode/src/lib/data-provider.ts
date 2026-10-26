/**
 * Data provider — the ONLY module UI code should use to read music data.
 *
 * Today it reads local TypeScript files. To move to a database (Supabase,
 * Postgres, a CMS…), re-implement these async functions against that source;
 * pages and components don't need to change.
 */
import type {
  PlaylistSummary,
  ResolvedPlaylist,
  Situation,
  SituationId,
} from "../types/music.ts";
import { existsSync } from "node:fs";
import path from "node:path";
import { playlistSources } from "../data/playlists/index.ts";
import { situations } from "../data/situations.ts";
import { resolvePlaylist } from "./songs.ts";
import { buildSearchIndex } from "./search.ts";

let cache: ResolvedPlaylist[] | null = null;

const COVER_EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

/**
 * Drop-in covers: if `public/covers/<slug>.webp|jpg|jpeg|png|avif` exists and
 * the playlist has no explicit `coverImage`, use it. No code change needed.
 */
export function findCoverImage(slug: string, publicDir = path.join(process.cwd(), "public")): string | undefined {
  for (const ext of COVER_EXTENSIONS) {
    if (existsSync(path.join(publicDir, "covers", `${slug}.${ext}`))) return `/covers/${slug}.${ext}`;
  }
  return undefined;
}

function loadAll(): ResolvedPlaylist[] {
  if (!cache) {
    cache = playlistSources.map((p) => {
      const resolved = resolvePlaylist(p);
      return resolved.coverImage ? resolved : { ...resolved, coverImage: findCoverImage(p.slug) };
    });
  }
  return cache;
}

export function toSummary(p: ResolvedPlaylist): PlaylistSummary {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { songs, ...rest } = p;
  return rest;
}

export async function getAllPlaylists(): Promise<ResolvedPlaylist[]> {
  return loadAll();
}

export async function getPlaylistSummaries(): Promise<PlaylistSummary[]> {
  return loadAll().map(toSummary);
}

export async function getPlaylistBySlug(slug: string): Promise<ResolvedPlaylist | undefined> {
  return loadAll().find((p) => p.slug === slug);
}

export async function getAllSlugs(): Promise<string[]> {
  return loadAll().map((p) => p.slug);
}

export async function getFeaturedPlaylists(): Promise<PlaylistSummary[]> {
  return loadAll().filter((p) => p.featured).map(toSummary);
}

export async function getSituations(): Promise<Situation[]> {
  return situations;
}

export interface SituationGroup {
  situation: Situation;
  playlists: PlaylistSummary[];
}

/** Situations with the playlists that opt into them (derived, never duplicated). */
export async function getSituationGroups(): Promise<SituationGroup[]> {
  const all = loadAll();
  return situations
    .map((situation) => ({
      situation,
      playlists: all.filter((p) => p.situations.includes(situation.id)).map(toSummary),
    }))
    .filter((g) => g.playlists.length > 0);
}

export async function getPlaylistsBySituation(id: SituationId): Promise<PlaylistSummary[]> {
  return loadAll().filter((p) => p.situations.includes(id)).map(toSummary);
}

export interface LanguageGroup {
  language: string;
  slug: string;
  /** Playlists that feature this language. */
  playlists: PlaylistSummary[];
  /** Number of distinct songs in this language across all playlists. */
  songCount: number;
}

export function languageSlug(language: string): string {
  return language.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Non-regional buckets excluded from the "Regional music" section. */
const NON_REGIONAL = new Set(["Instrumental", "English"]);

/**
 * Languages derived from the actual song data. Only languages that have at
 * least one song appear — nothing is invented.
 */
export async function getLanguageGroups(opts: { regionalOnly?: boolean } = {}): Promise<LanguageGroup[]> {
  const all = loadAll();
  const songsByLang = new Map<string, Set<string>>();
  for (const p of all) {
    for (const s of p.songs) {
      if (!songsByLang.has(s.language)) songsByLang.set(s.language, new Set());
      songsByLang.get(s.language)!.add(s.id);
    }
  }
  const groups: LanguageGroup[] = [];
  for (const [language, ids] of songsByLang) {
    if (opts.regionalOnly && NON_REGIONAL.has(language)) continue;
    groups.push({
      language,
      slug: languageSlug(language),
      playlists: all.filter((p) => p.songs.some((s) => s.language === language)).map(toSummary),
      songCount: ids.size,
    });
  }
  return groups.sort((a, b) => b.songCount - a.songCount || a.language.localeCompare(b.language));
}

export async function getSearchIndex() {
  return buildSearchIndex(loadAll());
}

/** Items the "Discover something random" feature may pick from. */
export interface RandomPool {
  playlists: { slug: string; title: string; shortTitle: string; accentColor: string }[];
  /** Only songs with a well-formed direct link. Empty until links are added. */
  linkedSongs: { id: string; title: string; artist?: string; href: string; playlistSlug: string; playlistTitle: string }[];
}

export async function getRandomPool(): Promise<RandomPool> {
  const all = loadAll();
  const seen = new Set<string>();
  const linkedSongs: RandomPool["linkedSongs"] = [];
  for (const p of all) {
    for (const s of p.songs) {
      if (s.status !== "linked" || seen.has(s.id)) continue;
      seen.add(s.id);
      linkedSongs.push({ id: s.id, title: s.title, artist: s.artist, href: s.href, playlistSlug: p.slug, playlistTitle: p.title });
    }
  }
  return {
    playlists: all.map((p) => ({ slug: p.slug, title: p.title, shortTitle: p.shortTitle, accentColor: p.accentColor })),
    linkedSongs,
  };
}

export async function getCatalogStats() {
  const all = loadAll();
  const ids = new Set<string>();
  let linked = 0;
  for (const p of all) {
    for (const s of p.songs) {
      if (ids.has(s.id)) continue;
      ids.add(s.id);
      if (s.status === "linked") linked++;
    }
  }
  return { playlists: all.length, uniqueSongs: ids.size, linkedSongs: linked };
}
