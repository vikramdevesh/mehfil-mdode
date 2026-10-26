"use client";

import { useRef, useState } from "react";
import { Shuffle } from "lucide-react";
import type { ResolvedSong } from "@/types/music";
import { pickRandomExcept } from "@/lib/random";
import { SongRow } from "./SongRow";
import { EmptyState } from "./EmptyState";

interface Props {
  songs: ResolvedSong[];
  accentColor: string;
  playlistTitle: string;
}

/** Numbered track list with a "random song" picker. */
export function SongList({ songs, accentColor, playlistTitle }: Props) {
  const [picked, setPicked] = useState<string | null>(null);
  const rowRefs = useRef(new Map<string, HTMLAnchorElement>());

  if (!songs.length) {
    return (
      <EmptyState
        title="Songs are on the way"
        description={`We're still hand-picking tracks for ${playlistTitle}. Check back soon — or suggest a song you think belongs here.`}
      />
    );
  }

  const pickedSong = songs.find((s) => s.id === picked);

  const onRandom = () => {
    const next = pickRandomExcept(songs, pickedSong, Math.random, (a, b) => a.id === b.id);
    if (!next) return;
    setPicked(next.id);
    const el = rowRefs.current.get(next.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    }
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-fg sm:text-2xl">Tracklist</h2>
        <button
          type="button"
          onClick={onRandom}
          className="inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-ink transition hover:brightness-110"
          style={{ backgroundColor: accentColor }}
        >
          <Shuffle className="size-4" aria-hidden />
          Random song
        </button>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {pickedSong ? `Random pick: ${pickedSong.title}${pickedSong.artist ? ` by ${pickedSong.artist}` : ""}. Press Enter to open on YouTube.` : ""}
      </p>
      {pickedSong ? (
        <p className="mb-3 text-sm text-muted" aria-hidden>
          Random pick: <span className="font-semibold text-fg">{pickedSong.title}</span> — press Enter or tap it to open.
        </p>
      ) : null}

      <ol className="flex flex-col gap-1 rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-1.5 sm:p-2">
        {songs.map((s, i) => (
          <li key={s.id}>
            <SongRow
              ref={(el) => {
                if (el) rowRefs.current.set(s.id, el);
                else rowRefs.current.delete(s.id);
              }}
              song={s}
              index={i + 1}
              highlighted={s.id === picked}
              accentColor={accentColor}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
