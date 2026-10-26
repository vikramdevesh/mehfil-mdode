"use client";

import { useMemo, useRef, useState } from "react";
import { Shuffle } from "lucide-react";
import type { ResolvedSong } from "@/types/music";
import { buildQueue } from "@/lib/player";
import { pickRandomExcept } from "@/lib/random";
import { SongRow } from "./SongRow";
import { EmptyState } from "./EmptyState";
import { usePlayer } from "./player/PlayerProvider";

interface Props {
  songs: ResolvedSong[];
  accentColor: string;
  playlistTitle: string;
  /** Link back to this playlist, shown in the player. */
  playlistHref?: string;
}

/** Numbered track list with a "random song" picker. Playable songs play in the on-site player. */
export function SongList({ songs, accentColor, playlistTitle, playlistHref }: Props) {
  const [picked, setPicked] = useState<string | null>(null);
  const rowRefs = useRef(new Map<string, HTMLElement>());
  const player = usePlayer();

  const queue = useMemo(
    () => buildQueue(songs, { label: playlistTitle, path: playlistHref }),
    [songs, playlistTitle, playlistHref],
  );
  const queuePos = useMemo(() => new Map(queue.map((t, i) => [t.id, i])), [queue]);

  if (!songs.length) {
    return (
      <EmptyState
        title="Songs are on the way"
        description={`We're still hand-picking tracks for ${playlistTitle}. Check back soon — or suggest a song you think belongs here.`}
      />
    );
  }

  const pickedSong = songs.find((s) => s.id === picked);
  const pickedPlayable = pickedSong ? queuePos.has(pickedSong.id) : false;

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

  // The player follows this playlist only if its queue came from here.
  const playingHere = player.current?.context?.label === playlistTitle;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-fg sm:text-2xl">Tracklist</h2>
        <button
          type="button"
          onClick={onRandom}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 text-sm font-semibold text-fg transition hover:bg-white/10"
        >
          <Shuffle className="size-4" aria-hidden />
          Random song
        </button>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {pickedSong
          ? `Random pick: ${pickedSong.title}${pickedSong.artist ? ` by ${pickedSong.artist}` : ""}. Press Enter to ${pickedPlayable ? "play it" : "open it on YouTube"}.`
          : ""}
      </p>
      {pickedSong ? (
        <p className="mb-3 text-sm text-muted" aria-hidden>
          Random pick: <span className="font-semibold text-fg">{pickedSong.title}</span> — press Enter or tap it to{" "}
          {pickedPlayable ? "play" : "open on YouTube"}.
        </p>
      ) : null}

      <ol className="flex flex-col gap-1 rounded-[var(--radius-card)] border border-line bg-ink-2/60 p-1.5 sm:p-2">
        {songs.map((s, i) => {
          const pos = queuePos.get(s.id);
          const isCurrent = Boolean(playingHere && player.current?.id === s.id);
          return (
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
                onPlay={
                  pos === undefined
                    ? undefined
                    : () => (isCurrent ? player.toggle() : player.playQueue(queue, pos))
                }
                isCurrent={isCurrent}
                isPlaying={isCurrent && player.status === "playing"}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
