import type { ResolvedSong } from "../types/music.ts";

/** A song the on-site player can play. */
export interface Track {
  id: string;
  title: string;
  artist?: string;
  videoId: string;
  /** Canonical youtube.com/watch URL — always offered as "Open on YouTube". */
  href: string;
  /** Where the track was queued from, e.g. a playlist title. */
  context?: { label: string; path?: string };
}

/**
 * Only songs with a checked, well-formed video link whose owner allows
 * playback on other sites go into the on-site player. Everything else keeps
 * opening YouTube (video or search) in a new tab.
 */
export function isPlayable(song: Pick<ResolvedSong, "status" | "videoId" | "embeddable">): boolean {
  return song.status === "linked" && Boolean(song.videoId) && song.embeddable !== false;
}

export function toTrack(song: ResolvedSong, context?: Track["context"]): Track | undefined {
  if (!isPlayable(song) || !song.videoId) return undefined;
  return { id: song.id, title: song.title, artist: song.artist, videoId: song.videoId, href: song.href, context };
}

export function buildQueue(songs: readonly ResolvedSong[], context?: Track["context"]): Track[] {
  const out: Track[] = [];
  const seen = new Set<string>();
  for (const s of songs) {
    const t = toTrack(s, context);
    if (t && !seen.has(t.id)) {
      seen.add(t.id);
      out.push(t);
    }
  }
  return out;
}

/** Index of the next track, or -1 at the end of the queue. */
export function nextIndex(current: number, length: number, repeat = false): number {
  if (length === 0) return -1;
  if (current + 1 < length) return current + 1;
  return repeat ? 0 : -1;
}

/** Index of the previous track (stays on the first track). */
export function prevIndex(current: number, length: number): number {
  if (length === 0) return -1;
  return Math.max(0, current - 1);
}

/** Fisher–Yates shuffle; optionally keeps `firstId` at the front. `rng` is injectable for tests. */
export function shuffleTracks(tracks: readonly Track[], rng: () => number = Math.random, firstId?: string): Track[] {
  const arr = [...tracks];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  if (firstId) {
    const k = arr.findIndex((t) => t.id === firstId);
    if (k > 0) arr.unshift(...arr.splice(k, 1));
  }
  return arr;
}

/**
 * YouTube IFrame API error codes. 101/150 = owner blocks embedding,
 * 100 = removed/private, 2 = bad id, 5 = HTML5 player error.
 */
export function describePlayerError(code: number): string {
  if (code === 101 || code === 150) return "the owner doesn't allow it to play on other websites";
  if (code === 100) return "the video is unavailable or private";
  if (code === 2) return "the video link is invalid";
  return "YouTube couldn't play it here";
}
