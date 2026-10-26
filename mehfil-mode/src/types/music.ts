/**
 * Core music data types.
 *
 * These types describe the *source* data that lives in src/data. UI code never
 * reads src/data directly — it goes through src/lib/data-provider.ts so the
 * storage layer (local files today, a database tomorrow) can change without
 * touching components.
 */

export type SituationId =
  | "chai-tapri"
  | "road-trips"
  | "friends-mehfil"
  | "party-mode"
  | "shaadi-celebrations"
  | "chill-lounge";

/** Icon keys resolved to Lucide icons in src/components/icons.tsx. */
export type IconKey =
  | "scissors"
  | "truck"
  | "coffee"
  | "bus"
  | "volume"
  | "party"
  | "users"
  | "feather"
  | "wine"
  | "flower"
  | "sparkles"
  | "home"
  | "car"
  | "flame"
  | "drum"
  | "music";

export type ArtPattern = "dots" | "stripes" | "waves" | "grid" | "rings" | "rays";

export interface PlaylistTheme {
  /** Three colour stops for the cover gradient (hex). */
  from: string;
  via: string;
  to: string;
  /** Decorative pattern overlaid on the cover. */
  pattern: ArtPattern;
  icon: IconKey;
  /** Optional emoji used as a secondary motif. */
  emoji?: string;
}

/**
 * A song as written in a playlist data file.
 *
 * The same `id` may appear in several playlists (e.g. "kala-chashma" is in both
 * Party Mode and Baraat Bangers). When it does, title/artist/youtubeUrl must
 * match — `npm run validate:data` enforces this — so a future database can
 * store each song once and link it to many playlists.
 */
export interface Song {
  /** Stable, unique, URL-safe id, e.g. "lag-jaa-gale". */
  id: string;
  title: string;
  /** Singer(s) / artist(s). Optional when genuinely unknown. */
  artist?: string;
  /**
   * Direct YouTube video URL. Leave undefined until you have checked the link
   * yourself — the site then shows a "Find on YouTube" search link instead.
   * Never invent a video id.
   */
  youtubeUrl?: string;
  /**
   * Set to false when the video's owner blocks playback on other websites.
   * The song then opens on YouTube instead of the on-site player.
   */
  embeddable?: boolean;
  language: string;
  tags: string[];
  /** 1-based order within the playlist. */
  position: number;
}

export interface Playlist {
  id: string;
  /** Unique, URL-safe slug used in /playlists/[slug]. */
  slug: string;
  /** Main English-friendly title, e.g. "Salon Classics". */
  title: string;
  /** Hinglish sub-title, e.g. "Naai Ki Dukaan". */
  shortTitle: string;
  /** Hinglish description shown on cards and the playlist page. */
  description: string;
  /** Optional cover image path under /public. Falls back to generated art. */
  coverImage?: string;
  theme: PlaylistTheme;
  /** Main accent colour (hex) used for highlights on the playlist page. */
  accentColor: string;
  /** Primary situation. Must also be the first entry of `situations`. */
  category: SituationId;
  /** All situations this playlist fits; drives "Explore by situation". */
  situations: SituationId[];
  tags: string[];
  /** Languages featured in this playlist (drives Regional Music). */
  languages: string[];
  featured?: boolean;
  /**
   * Verified YouTube playlist URL (youtube.com/playlist?list=...).
   * Only set this to a real playlist you have created/checked.
   */
  youtubePlaylistUrl?: string;
  songs: Song[];
}

/** How a song's link should be treated by the UI. */
export type SongLinkStatus =
  /** Well-formed YouTube video URL — shown as "Open on YouTube". */
  | "linked"
  /** No URL yet — shown as a clearly-labelled YouTube search link. */
  | "search"
  /** URL present but malformed / not YouTube — never treated as playable. */
  | "invalid"
  /** Template/placeholder entry — hidden from the public site. */
  | "placeholder";

export interface ResolvedSong extends Song {
  status: SongLinkStatus;
  /** Where clicking the song goes (video URL or YouTube search URL). */
  href: string;
  videoId?: string;
}

export interface PlaylistStats {
  /** Songs shown publicly (excludes placeholders). */
  total: number;
  /** Songs with a well-formed direct YouTube video link. */
  linked: number;
  /** Songs listed with a search link because no video link exists yet. */
  pendingLink: number;
  /** Songs whose URL failed validation. */
  invalid: number;
}

export interface ResolvedPlaylist extends Omit<Playlist, "songs"> {
  songs: ResolvedSong[];
  stats: PlaylistStats;
  /** Validated YouTube playlist URL, or undefined if none/invalid. */
  validPlaylistUrl?: string;
}

/** Lightweight playlist shape for cards, grids and client components. */
export type PlaylistSummary = Omit<ResolvedPlaylist, "songs">;

export interface Situation {
  id: SituationId;
  label: string;
  hinglish: string;
  description: string;
  icon: IconKey;
}
