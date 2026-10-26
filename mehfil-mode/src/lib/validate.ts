import type { Playlist } from "../types/music.ts";
import { SITUATION_IDS } from "../data/situations.ts";
import { REJECT_REASON_LABEL, parseYouTubePlaylistUrl, parseYouTubeVideoUrl } from "./youtube.ts";
import { isPlaceholderSong } from "./songs.ts";

export type IssueLevel = "error" | "warning";

export interface DataIssue {
  level: IssueLevel;
  playlist?: string;
  songId?: string;
  message: string;
}

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const HEX_RE = /^#[0-9a-fA-F]{6}$/;

/**
 * Validate the playlist data. Errors break the build-time check
 * (`npm run validate:data`); warnings are informational.
 */
export function validatePlaylists(
  playlists: Playlist[],
  opts: { targetMin?: number } = {},
): DataIssue[] {
  const issues: DataIssue[] = [];
  const err = (message: string, playlist?: string, songId?: string) =>
    issues.push({ level: "error", message, playlist, songId });
  const warn = (message: string, playlist?: string, songId?: string) =>
    issues.push({ level: "warning", message, playlist, songId });

  const ids = new Set<string>();
  const slugs = new Set<string>();
  /** songId → canonical metadata, to check cross-playlist consistency. */
  const songIndex = new Map<string, { title: string; artist?: string; youtubeUrl?: string; language: string; from: string }>();

  for (const p of playlists) {
    const label = p.slug || p.id || "(unnamed playlist)";
    if (!p.id) err("Playlist is missing an id", label);
    if (ids.has(p.id)) err(`Duplicate playlist id "${p.id}"`, label);
    ids.add(p.id);

    if (!SLUG_RE.test(p.slug)) err(`Slug "${p.slug}" must be lowercase-with-dashes`, label);
    if (slugs.has(p.slug)) err(`Duplicate slug "${p.slug}"`, label);
    slugs.add(p.slug);

    if (!p.title?.trim()) err("Missing title", label);
    if (!p.shortTitle?.trim()) err("Missing shortTitle", label);
    if (!p.description?.trim()) err("Missing description", label);
    if (!HEX_RE.test(p.accentColor)) err(`accentColor "${p.accentColor}" must be a #RRGGBB hex`, label);
    for (const c of [p.theme.from, p.theme.via, p.theme.to]) {
      if (!HEX_RE.test(c)) err(`Theme colour "${c}" must be a #RRGGBB hex`, label);
    }
    if (!p.situations.length) err("At least one situation is required", label);
    for (const s of p.situations) {
      if (!SITUATION_IDS.includes(s)) err(`Unknown situation "${s}"`, label);
    }
    if (p.category !== p.situations[0]) err("category must equal the first entry in situations", label);
    if (!p.tags.length) warn("No tags — playlist will be harder to find in search", label);

    if (p.youtubePlaylistUrl !== undefined && !parseYouTubePlaylistUrl(p.youtubePlaylistUrl).ok) {
      err(`youtubePlaylistUrl is not a valid YouTube playlist URL: ${p.youtubePlaylistUrl}`, label);
    }

    const songIds = new Set<string>();
    const positions = new Set<number>();
    const songLanguages = new Set<string>();

    for (const s of p.songs) {
      const sl = s.id || "(no id)";
      if (!s.id || !SLUG_RE.test(s.id)) err(`Song id "${s.id}" must be lowercase-with-dashes`, label, sl);
      if (songIds.has(s.id)) err(`Song "${s.id}" appears twice in this playlist`, label, sl);
      songIds.add(s.id);

      if (!Number.isInteger(s.position) || s.position < 1) err(`Invalid position ${s.position}`, label, sl);
      if (positions.has(s.position)) err(`Duplicate position ${s.position}`, label, sl);
      positions.add(s.position);

      if (!s.title?.trim()) err("Song is missing a title", label, sl);
      if (!s.language?.trim()) err("Song is missing a language", label, sl);
      songLanguages.add(s.language);

      if (isPlaceholderSong(s)) {
        warn("Placeholder entry — hidden from the site until replaced with real data", label, sl);
        continue;
      }

      if (s.youtubeUrl !== undefined) {
        const parsed = parseYouTubeVideoUrl(s.youtubeUrl);
        if (!parsed.ok) err(`Bad YouTube URL (${REJECT_REASON_LABEL[parsed.reason]}): ${s.youtubeUrl}`, label, sl);
      }

      const prev = songIndex.get(s.id);
      if (prev) {
        if (prev.title !== s.title || prev.artist !== s.artist || prev.youtubeUrl !== s.youtubeUrl || prev.language !== s.language) {
          err(`Song "${s.id}" differs from its entry in "${prev.from}" (title/artist/url/language must match)`, label, sl);
        }
      } else {
        songIndex.set(s.id, { title: s.title, artist: s.artist, youtubeUrl: s.youtubeUrl, language: s.language, from: label });
      }
    }

    for (const lang of songLanguages) {
      if (!p.languages.includes(lang)) warn(`Songs in "${lang}" but playlist.languages doesn't list it`, label);
    }
    for (const lang of p.languages) {
      if (!songLanguages.has(lang)) warn(`playlist.languages lists "${lang}" but no song uses it`, label);
    }

    if (opts.targetMin !== undefined && p.songs.length < opts.targetMin) {
      warn(`${p.songs.length}/${opts.targetMin} songs — needs ${opts.targetMin - p.songs.length} more to reach target`, label);
    }
  }

  return issues;
}
