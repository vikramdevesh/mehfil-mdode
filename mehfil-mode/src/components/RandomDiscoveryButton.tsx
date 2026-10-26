"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Dices, ExternalLink, Play, RefreshCw } from "lucide-react";
import type { RandomPool } from "@/lib/data-provider";
import { pickRandomExcept } from "@/lib/random";
import { playlistPath } from "@/lib/url";
import { usePlayer } from "./player/PlayerProvider";

type Choice =
  | { kind: "playlist"; item: RandomPool["playlists"][number] }
  | { kind: "song"; item: RandomPool["linkedSongs"][number] };

const key = (p: Choice) => `${p.kind}:${p.kind === "playlist" ? p.item.slug : p.item.id}`;

/**
 * Picks a random playlist — or, once direct video links exist, sometimes a
 * random linked song. Only ever chooses from real data passed in by the server.
 */
export function RandomDiscoveryButton({ pool, className = "" }: { pool: RandomPool; className?: string }) {
  const [pick, setPick] = useState<Choice | null>(null);
  const player = usePlayer();

  const options: Choice[] = [
    ...pool.playlists.map((item) => ({ kind: "playlist" as const, item })),
    ...pool.linkedSongs.map((item) => ({ kind: "song" as const, item })),
  ];

  const roll = () => setPick(pickRandomExcept(options, pick ?? undefined, Math.random, (a, b) => key(a) === key(b)) ?? null);

  if (!options.length) return null;

  return (
    <div className={className}>
      <button
        type="button"
        onClick={roll}
        className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-6 text-base font-semibold text-fg transition hover:border-amber/60 hover:bg-white/10"
      >
        <Dices className="size-5 text-amber" aria-hidden />
        {pick ? "Try another" : "Discover Something Random"}
      </button>

      <div role="status" aria-live="polite" className="mt-4 min-h-0">
        {pick ? (
          <div
            key={key(pick)}
            className="animate-fade-up flex max-w-md flex-wrap items-center justify-between gap-3 rounded-2xl border border-line-strong bg-ink-2/90 p-4 shadow-xl shadow-black/30"
          >
            {pick.kind === "playlist" ? (
              <>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-dim">Aaj ka scene</p>
                  <p className="mt-1 truncate font-display text-lg font-bold" style={{ color: pick.item.accentColor }}>
                    {pick.item.title}
                  </p>
                  <p className="truncate text-sm text-muted">{pick.item.shortTitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={roll} aria-label="Shuffle again" className="grid size-10 place-items-center rounded-full border border-line-strong text-muted hover:text-fg">
                    <RefreshCw className="size-4" aria-hidden />
                  </button>
                  <Link href={playlistPath(pick.item.slug)} className="inline-flex h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-bold text-ink hover:bg-white">
                    Open <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-dim">Random song · from {pick.item.playlistTitle}</p>
                  <p className="mt-1 truncate font-display text-lg font-bold text-fg">{pick.item.title}</p>
                  {pick.item.artist ? <p className="truncate text-sm text-muted">{pick.item.artist}</p> : null}
                </div>
                {pick.item.videoId ? (
                  <button
                    type="button"
                    onClick={() => {
                      const s = pick.item;
                      if (!s.videoId) return;
                      player.playQueue([
                        {
                          id: s.id,
                          title: s.title,
                          artist: s.artist,
                          videoId: s.videoId,
                          href: s.href,
                          context: { label: s.playlistTitle, path: playlistPath(s.playlistSlug) },
                        },
                      ]);
                    }}
                    className="inline-flex h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-bold text-ink hover:bg-white"
                  >
                    <Play className="size-4" aria-hidden /> Play
                  </button>
                ) : (
                  <a
                    href={pick.item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#e5252a] px-4 text-sm font-bold text-white hover:brightness-110"
                  >
                    Open on YouTube <ExternalLink className="size-4" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                )}
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
