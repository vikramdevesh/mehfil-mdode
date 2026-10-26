"use client";

import { forwardRef } from "react";
import { AlertTriangle, AudioLines, ExternalLink, Pause, Play, Search } from "lucide-react";
import type { ResolvedSong } from "@/types/music";
import { PlayGlyph } from "./PlayGlyph";

interface Props {
  song: ResolvedSong;
  index: number;
  highlighted?: boolean;
  accentColor: string;
  /** Present when the song can play in the on-site player. */
  onPlay?: () => void;
  /** This song is the player's current track. */
  isCurrent?: boolean;
  isPlaying?: boolean;
}

/**
 * One track.
 * - Playable songs: the row plays the song in the on-site player, and a
 *   separate button opens the same video on YouTube.
 * - Everything else: the whole row opens YouTube in a new tab — the video if
 *   its owner blocks embedding, or a clearly labelled *search* if no checked
 *   link exists yet. Search results are never presented as a specific video.
 */
export const SongRow = forwardRef<HTMLElement, Props>(function SongRow(
  { song, index, highlighted = false, accentColor, onPlay, isCurrent = false, isPlaying = false },
  ref,
) {
  const linked = song.status === "linked";
  const rowClass = `group grid w-full grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-2xl px-3 py-3 text-left transition sm:grid-cols-[2.5rem_1fr_auto] sm:gap-4 sm:px-4 ${
    highlighted || isCurrent ? "bg-white/10" : "hover:bg-white/[0.06]"
  } ${highlighted ? "ring-2" : ""}`;
  const ringStyle = highlighted ? ({ "--tw-ring-color": accentColor } as React.CSSProperties) : undefined;
  const who = `${song.title}${song.artist ? ` by ${song.artist}` : ""}`;

  const meta = (
    <span className="min-w-0">
      <span className="block truncate font-semibold text-fg" style={isCurrent ? { color: accentColor } : undefined}>
        {song.title}
      </span>
      <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {song.artist ? <span className="truncate">{song.artist}</span> : <span className="italic text-dim">Artist unknown</span>}
        <span aria-hidden className="text-dim">·</span>
        <span className="text-dim">{song.language}</span>
        {song.status === "search" ? (
          <span className="rounded-full border border-line-strong px-2 py-px text-[11px] font-medium text-dim">Video link pending</span>
        ) : null}
        {linked && !onPlay ? (
          <span className="rounded-full border border-line-strong px-2 py-px text-[11px] font-medium text-dim">Plays on YouTube</span>
        ) : null}
        {song.status === "invalid" ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber/40 px-2 py-px text-[11px] font-medium text-amber-soft">
            <AlertTriangle className="size-3" aria-hidden /> Link needs fixing
          </span>
        ) : null}
      </span>
    </span>
  );

  if (onPlay) {
    return (
      <div className="relative">
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          onClick={onPlay}
          aria-label={`${isCurrent && isPlaying ? "Now playing" : "Play"}: ${who}`}
          aria-current={isCurrent ? "true" : undefined}
          data-song-id={song.id}
          className={`${rowClass} pr-14 sm:pr-16`}
          style={ringStyle}
        >
          <span className="grid justify-items-end font-display text-sm tabular-nums text-dim">
            {isCurrent && isPlaying ? (
              <AudioLines className="size-4 animate-pulse" style={{ color: accentColor }} aria-hidden />
            ) : (
              <>
                <span className="group-hover:hidden">{index}</span>
                <Play className="hidden size-4 text-fg group-hover:block" aria-hidden />
              </>
            )}
          </span>
          {meta}
          <span
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-ink sm:inline-flex"
            style={{ backgroundColor: accentColor }}
            aria-hidden
          >
            {isCurrent && isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            {isCurrent && isPlaying ? "Playing" : "Play"}
          </span>
        </button>
        <a
          href={song.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${who} on YouTube (opens in a new tab)`}
          title="Open on YouTube"
          className="absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-[#ff8a8d] transition hover:bg-[#e5252a]/20 sm:right-3"
        >
          <PlayGlyph className="size-5 text-[#e5252a]" />
        </a>
      </div>
    );
  }

  const actionLabel = linked ? "Open on YouTube" : "Find on YouTube";
  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      href={song.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${who} — ${linked ? "open on YouTube" : "search on YouTube"} (opens in a new tab)`}
      data-song-id={song.id}
      className={rowClass}
      style={ringStyle}
    >
      <span className="text-right font-display text-sm tabular-nums text-dim group-hover:text-fg">{index}</span>
      {meta}
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
          linked
            ? "bg-[#e5252a]/15 text-[#ff8a8d] group-hover:bg-[#e5252a]/25"
            : "border border-line-strong text-muted group-hover:text-fg"
        }`}
      >
        {linked ? <PlayGlyph className="size-4 text-[#e5252a]" /> : <Search className="size-3.5" aria-hidden />}
        <span className="hidden sm:inline">{actionLabel}</span>
        <ExternalLink className="size-3.5 opacity-70" aria-hidden />
      </span>
    </a>
  );
});
