import { forwardRef } from "react";
import { AlertTriangle, ExternalLink, Search } from "lucide-react";
import type { ResolvedSong } from "@/types/music";
import { PlayGlyph } from "./PlayGlyph";

interface Props {
  song: ResolvedSong;
  index: number;
  highlighted?: boolean;
  accentColor: string;
}

/**
 * One track. The whole row is a single external link that opens YouTube in a
 * new tab. Songs without a verified video link open a YouTube *search* and say
 * so — they are never presented as a specific video.
 */
export const SongRow = forwardRef<HTMLAnchorElement, Props>(function SongRow(
  { song, index, highlighted = false, accentColor },
  ref,
) {
  const linked = song.status === "linked";
  const actionLabel = linked ? "Open on YouTube" : "Find on YouTube";
  const srLabel = `${song.title}${song.artist ? ` by ${song.artist}` : ""} — ${
    linked ? "open on YouTube" : "search on YouTube"
  } (opens in a new tab)`;

  return (
    <a
      ref={ref}
      href={song.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={srLabel}
      data-song-id={song.id}
      className={`group grid grid-cols-[2rem_1fr_auto] items-center gap-3 rounded-2xl px-3 py-3 transition sm:grid-cols-[2.5rem_1fr_auto] sm:gap-4 sm:px-4 ${
        highlighted ? "bg-white/10 ring-2" : "hover:bg-white/[0.06]"
      }`}
      style={highlighted ? ({ "--tw-ring-color": accentColor } as React.CSSProperties) : undefined}
    >
      <span className="text-right font-display text-sm tabular-nums text-dim group-hover:text-fg">{index}</span>

      <span className="min-w-0">
        <span className="block truncate font-semibold text-fg">{song.title}</span>
        <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
          {song.artist ? <span className="truncate">{song.artist}</span> : <span className="italic text-dim">Artist unknown</span>}
          <span aria-hidden className="text-dim">·</span>
          <span className="text-dim">{song.language}</span>
          {song.status === "search" ? (
            <span className="rounded-full border border-line-strong px-2 py-px text-[11px] font-medium text-dim">
              Video link pending
            </span>
          ) : null}
          {song.status === "invalid" ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber/40 px-2 py-px text-[11px] font-medium text-amber-soft">
              <AlertTriangle className="size-3" aria-hidden /> Link needs fixing
            </span>
          ) : null}
        </span>
      </span>

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
