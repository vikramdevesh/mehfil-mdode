import type {
  Playlist,
  PlaylistStats,
  ResolvedPlaylist,
  ResolvedSong,
  Song,
  SongLinkStatus,
} from "../types/music.ts";
import {
  buildYouTubeSearchUrl,
  isPlaceholderText,
  parseYouTubePlaylistUrl,
  parseYouTubeVideoUrl,
} from "./youtube.ts";

/** A song is a placeholder if its title/artist/url still hold template text. */
export function isPlaceholderSong(song: Song): boolean {
  if (isPlaceholderText(song.title) || isPlaceholderText(song.artist)) return true;
  if (song.youtubeUrl === undefined) return false;
  const parsed = parseYouTubeVideoUrl(song.youtubeUrl);
  return !parsed.ok && parsed.reason === "placeholder";
}

export function getSongLinkStatus(song: Song): SongLinkStatus {
  if (isPlaceholderSong(song)) return "placeholder";
  if (song.youtubeUrl === undefined || song.youtubeUrl.trim() === "") return "search";
  return parseYouTubeVideoUrl(song.youtubeUrl).ok ? "linked" : "invalid";
}

export function resolveSong(song: Song): ResolvedSong {
  const status = getSongLinkStatus(song);
  const parsed = parseYouTubeVideoUrl(song.youtubeUrl);
  if (status === "linked" && parsed.ok) {
    return { ...song, status, href: parsed.canonicalUrl, videoId: parsed.videoId };
  }
  // Search fallback for missing or broken links. Never pretend it's a video.
  return { ...song, status, href: buildYouTubeSearchUrl(song.title, song.artist) };
}

export function computeStats(songs: ResolvedSong[]): PlaylistStats {
  const visible = songs.filter((s) => s.status !== "placeholder");
  return {
    total: visible.length,
    linked: visible.filter((s) => s.status === "linked").length,
    pendingLink: visible.filter((s) => s.status === "search").length,
    invalid: visible.filter((s) => s.status === "invalid").length,
  };
}

/**
 * Turn a source playlist into what the UI renders: songs sorted by position,
 * placeholder entries removed, link status computed, playlist URL validated.
 */
export function resolvePlaylist(playlist: Playlist): ResolvedPlaylist {
  const resolved = [...playlist.songs]
    .sort((a, b) => a.position - b.position)
    .map(resolveSong)
    .filter((s) => s.status !== "placeholder");
  const pl = parseYouTubePlaylistUrl(playlist.youtubePlaylistUrl);
  return {
    ...playlist,
    songs: resolved,
    stats: computeStats(resolved),
    validPlaylistUrl: pl.ok ? pl.canonicalUrl : undefined,
  };
}
