/**
 * YouTube URL helpers.
 *
 * IMPORTANT: a URL passing these checks is only *well-formed*. It does not
 * prove the video exists, is public, or plays in your region. Always check
 * links by hand before adding them to the data files.
 */

const VIDEO_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "music.youtube.com",
]);
const SHORT_HOSTS = new Set(["youtu.be", "www.youtu.be"]);

/** YouTube video ids are 11 chars of [A-Za-z0-9_-]. */
const VIDEO_ID_RE = /^[A-Za-z0-9_-]{11}$/;
/** Playlist ids are typically PL…, OL…, UU…, etc. Keep the check permissive. */
const PLAYLIST_ID_RE = /^[A-Za-z0-9_-]{10,64}$/;

const PLACEHOLDER_MARKERS = [
  "replace",
  "placeholder",
  "video_id",
  "videoid",
  "your_video",
  "example",
  "todo",
  "xxxxx",
];

export type YouTubeParseResult =
  | { ok: true; videoId: string; canonicalUrl: string }
  | { ok: false; reason: YouTubeRejectReason };

export type YouTubeRejectReason =
  | "empty"
  | "not-a-url"
  | "bad-protocol"
  | "not-youtube"
  | "missing-id"
  | "bad-id"
  | "placeholder";

function toUrl(raw: string): URL | null {
  try {
    return new URL(raw.trim());
  } catch {
    return null;
  }
}

/** True when the string looks like a template value rather than real data. */
export function isPlaceholderText(value: string | undefined | null): boolean {
  if (!value) return false;
  const v = value.toLowerCase();
  return PLACEHOLDER_MARKERS.some((m) => v.includes(m));
}

/** True when an id is obviously fake, e.g. "aaaaaaaaaaa" or "00000000000". */
function isDegenerateId(id: string): boolean {
  return /^(.)\1+$/.test(id) || /^(0123456789|abcdefghij)/i.test(id);
}

/**
 * Parse and validate a YouTube *video* URL.
 * Supports watch?v=, youtu.be/, /shorts/, /embed/ and /live/ formats.
 */
export function parseYouTubeVideoUrl(raw: string | undefined | null): YouTubeParseResult {
  if (!raw || !raw.trim()) return { ok: false, reason: "empty" };
  if (isPlaceholderText(raw)) return { ok: false, reason: "placeholder" };

  const url = toUrl(raw);
  if (!url) return { ok: false, reason: "not-a-url" };
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return { ok: false, reason: "bad-protocol" };
  }

  const host = url.hostname.toLowerCase();
  let id: string | null = null;

  if (SHORT_HOSTS.has(host)) {
    id = url.pathname.split("/").filter(Boolean)[0] ?? null;
  } else if (VIDEO_HOSTS.has(host)) {
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments[0] === "watch") {
      id = url.searchParams.get("v");
    } else if (["shorts", "embed", "live"].includes(segments[0] ?? "")) {
      id = segments[1] ?? null;
    } else {
      return { ok: false, reason: "missing-id" };
    }
  } else {
    return { ok: false, reason: "not-youtube" };
  }

  if (!id) return { ok: false, reason: "missing-id" };
  if (!VIDEO_ID_RE.test(id)) return { ok: false, reason: "bad-id" };
  if (isDegenerateId(id)) return { ok: false, reason: "placeholder" };

  return { ok: true, videoId: id, canonicalUrl: `https://www.youtube.com/watch?v=${id}` };
}

export function isValidYouTubeVideoUrl(raw: string | undefined | null): boolean {
  return parseYouTubeVideoUrl(raw).ok;
}

/** Validate a YouTube *playlist* URL (youtube.com/playlist?list=ID). */
export function parseYouTubePlaylistUrl(
  raw: string | undefined | null,
): { ok: true; listId: string; canonicalUrl: string } | { ok: false } {
  if (!raw || !raw.trim() || isPlaceholderText(raw)) return { ok: false };
  const url = toUrl(raw);
  if (!url || (url.protocol !== "https:" && url.protocol !== "http:")) return { ok: false };
  if (!VIDEO_HOSTS.has(url.hostname.toLowerCase())) return { ok: false };
  if (url.pathname.replace(/\/+$/, "") !== "/playlist") return { ok: false };
  const list = url.searchParams.get("list");
  if (!list || !PLAYLIST_ID_RE.test(list) || isDegenerateId(list)) return { ok: false };
  return { ok: true, listId: list, canonicalUrl: `https://www.youtube.com/playlist?list=${list}` };
}

/**
 * Build a YouTube *search* URL. Used when a song has no verified video link —
 * it is always labelled as a search in the UI, never as a specific video.
 */
export function buildYouTubeSearchUrl(title: string, artist?: string): string {
  const q = [title, artist].filter(Boolean).join(" ").trim();
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

export const REJECT_REASON_LABEL: Record<YouTubeRejectReason, string> = {
  empty: "No URL",
  "not-a-url": "Not a valid URL",
  "bad-protocol": "URL must start with https://",
  "not-youtube": "Not a YouTube URL",
  "missing-id": "No video id found in URL",
  "bad-id": "Video id is malformed (must be 11 characters)",
  placeholder: "Placeholder value — replace with a real link",
};
