import type { ResolvedPlaylist, SongLinkStatus } from "../types/music.ts";

/**
 * Tiny client-side search tuned for English + Hinglish queries.
 *
 * - case/diacritic-insensitive
 * - repeated letters collapsed ("shaadi" ≈ "shadi", "yaar" ≈ "yar")
 * - Hinglish ↔ English alias groups ("shaadi" also finds "wedding")
 * - every query word must match somewhere (AND), ranked by where it matched
 */

export interface PlaylistDoc {
  kind: "playlist";
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tags: string[];
  languages: string[];
  songCount: number;
  accentColor: string;
}

export interface SongDoc {
  kind: "song";
  id: string;
  title: string;
  artist?: string;
  language: string;
  tags: string[];
  href: string;
  status: SongLinkStatus;
  playlists: { slug: string; title: string }[];
}

export type SearchDoc = PlaylistDoc | SongDoc;

export interface SearchResult<T extends SearchDoc = SearchDoc> {
  doc: T;
  score: number;
}

/** Groups of interchangeable words. Keep entries normalised-friendly. */
export const ALIAS_GROUPS: string[][] = [
  ["shaadi", "shadi", "wedding", "vivah", "byah", "marriage"],
  ["baraat", "barat", "procession", "band baaja", "ghodi"],
  ["sangeet", "mehendi", "mehndi", "haldi"],
  ["chai", "tea", "tapri", "chaai", "kulhad"],
  ["dost", "dosti", "yaar", "yaari", "friends", "friendship", "mehfil"],
  ["purane", "purana", "old", "retro", "evergreen", "classic", "vintage"],
  ["safar", "travel", "journey", "trip", "yatra"],
  ["gaadi", "car", "drive", "driving"],
  ["naach", "nach", "dance", "dancing", "thumka"],
  ["party", "club", "masti"],
  ["ghazal", "gazal", "shayari", "nazm"],
  ["tyohar", "tyohaar", "festival", "festive", "utsav"],
  ["lokgeet", "folk", "lok"],
  ["punjabi", "panjabi"],
  ["haryanvi", "haryanavi", "haryana"],
  ["bhojpuri", "bihari"],
  ["rajasthani", "marwari"],
  ["hindi", "bollywood"],
  ["pyaar", "pyar", "ishq", "love", "romantic", "mohabbat"],
  ["dil", "heart"],
  ["dard", "heartbreak", "sad", "breakup"],
  ["sukoon", "chill", "calm", "relax", "lounge", "soft"],
  ["ladkiyan", "girls", "saheli", "sakhi"],
  ["parivar", "family", "ghar"],
  ["naai", "nai", "salon", "barber", "haircut"],
  ["bus", "local"],
  ["gaana", "gaane", "gana", "song", "songs", "music"],
];

/** Lowercase, strip accents/punctuation, collapse repeated letters. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9ऀ-ॿ]+/g, " ")
    .replace(/([a-z])\1+/g, "$1")
    .trim()
    .replace(/\s+/g, " ");
}

const STOP_WORDS = new Set(["the", "a", "an", "and", "ke", "ki", "ka", "aur", "for", "of", "songs", "song", "gaane", "gane", "gana", "music"]);

let aliasMap: Map<string, string[]> | null = null;
function getAliasMap(): Map<string, string[]> {
  if (aliasMap) return aliasMap;
  aliasMap = new Map();
  for (const group of ALIAS_GROUPS) {
    const norm = group.map(normalize);
    for (const w of norm) aliasMap.set(w, norm);
  }
  return aliasMap;
}

/** Expand a normalised query term to itself + aliases. */
export function expandTerm(term: string): string[] {
  return getAliasMap().get(term) ?? [term];
}

export function tokenize(query: string): string[] {
  const words = normalize(query).split(" ").filter(Boolean);
  const meaningful = words.filter((w) => !STOP_WORDS.has(w));
  // If the user typed only stop words (e.g. "songs"), fall back to them.
  return meaningful.length ? meaningful : words;
}

interface Field {
  text: string;
  weight: number;
}

function fieldsFor(doc: SearchDoc): Field[] {
  if (doc.kind === "playlist") {
    return [
      { text: normalize(doc.title), weight: 10 },
      { text: normalize(doc.shortTitle), weight: 8 },
      { text: normalize(doc.tags.join(" ")), weight: 5 },
      { text: normalize(doc.languages.join(" ")), weight: 4 },
      { text: normalize(doc.description), weight: 2 },
    ];
  }
  return [
    { text: normalize(doc.title), weight: 9 },
    { text: normalize(doc.artist ?? ""), weight: 7 },
    { text: normalize(doc.language), weight: 4 },
    { text: normalize(doc.tags.join(" ")), weight: 3 },
    { text: normalize(doc.playlists.map((p) => p.title).join(" ")), weight: 1 },
  ];
}

function scoreDoc(doc: SearchDoc, terms: string[], phrase: string): number {
  const fields = fieldsFor(doc);
  let total = 0;
  for (const term of terms) {
    const variants = expandTerm(term);
    let best = 0;
    for (const f of fields) {
      for (const v of variants) {
        if (!v || !f.text.includes(v)) continue;
        // Exact word match beats substring; original term beats alias.
        const wordHit = (" " + f.text + " ").includes(" " + v + " ");
        const s = f.weight * (wordHit ? 1.5 : 1) * (v === term ? 1 : 0.8);
        if (s > best) best = s;
      }
    }
    if (best === 0) return 0; // every term must match
    total += best;
  }
  // Bonus when the full phrase appears in the title.
  if (phrase.length > 2 && normalize(doc.title).includes(phrase)) total += 10;
  return total;
}

export function search<T extends SearchDoc>(docs: T[], query: string, limit = 50): SearchResult<T>[] {
  const terms = tokenize(query);
  if (!terms.length) return [];
  const phrase = normalize(query);
  const results: SearchResult<T>[] = [];
  for (const doc of docs) {
    const score = scoreDoc(doc, terms, phrase);
    if (score > 0) results.push({ doc, score });
  }
  results.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
  return results.slice(0, limit);
}

/** Build the search index from resolved playlists. Songs are de-duplicated by id. */
export function buildSearchIndex(playlists: ResolvedPlaylist[]): { playlists: PlaylistDoc[]; songs: SongDoc[] } {
  const playlistDocs: PlaylistDoc[] = playlists.map((p) => ({
    kind: "playlist",
    id: p.id,
    slug: p.slug,
    title: p.title,
    shortTitle: p.shortTitle,
    description: p.description,
    tags: p.tags,
    languages: p.languages,
    songCount: p.stats.total,
    accentColor: p.accentColor,
  }));

  const songMap = new Map<string, SongDoc>();
  for (const p of playlists) {
    for (const s of p.songs) {
      const existing = songMap.get(s.id);
      if (existing) {
        existing.playlists.push({ slug: p.slug, title: p.title });
        for (const t of s.tags) if (!existing.tags.includes(t)) existing.tags.push(t);
      } else {
        songMap.set(s.id, {
          kind: "song",
          id: s.id,
          title: s.title,
          artist: s.artist,
          language: s.language,
          tags: [...s.tags],
          href: s.href,
          status: s.status,
          playlists: [{ slug: p.slug, title: p.title }],
        });
      }
    }
  }
  return { playlists: playlistDocs, songs: [...songMap.values()] };
}
