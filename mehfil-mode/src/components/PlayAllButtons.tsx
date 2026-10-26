"use client";

import { Pause, Play, Shuffle } from "lucide-react";
import type { Track } from "@/lib/player";
import { shuffleTracks } from "@/lib/player";
import { usePlayer } from "./player/PlayerProvider";

interface Props {
  tracks: Track[];
  accentColor: string;
}

/** "Play all" + "Shuffle" for a playlist. Renders nothing if no song can play on-site. */
export function PlayAllButtons({ tracks, accentColor }: Props) {
  const player = usePlayer();
  if (!tracks.length) return null;

  const label = tracks[0].context?.label;
  const active = player.current?.context?.label === label && label !== undefined;
  const playing = active && player.status === "playing";

  return (
    <>
      <button
        type="button"
        onClick={() => (active ? player.toggle() : player.playQueue(tracks, 0))}
        className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-bold text-ink transition hover:brightness-110"
        style={{ backgroundColor: accentColor }}
      >
        {playing ? <Pause className="size-5" aria-hidden /> : <Play className="size-5" aria-hidden />}
        {playing ? "Pause" : active ? "Resume" : "Play all"}
      </button>
      <button
        type="button"
        onClick={() => player.playQueue(shuffleTracks(tracks), 0)}
        className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-5 text-sm font-semibold text-fg transition hover:bg-white/10"
      >
        <Shuffle className="size-4" aria-hidden />
        Shuffle
      </button>
    </>
  );
}
