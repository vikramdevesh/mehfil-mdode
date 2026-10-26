"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { PlaylistSummary, Situation, SituationId } from "@/types/music";
import { DataIcon } from "./icons";
import { PlaylistGrid } from "./PlaylistGrid";

interface Props {
  playlists: PlaylistSummary[];
  situations: Situation[];
}

/** Explore page: filter all playlists by situation; filter is kept in ?scene=. */
export function PlaylistExplorer({ playlists, situations }: Props) {
  const params = useSearchParams();
  const fromUrl = params.get("scene");
  const valid = situations.some((s) => s.id === fromUrl) ? (fromUrl as SituationId) : null;
  const [scene, setScene] = useState<SituationId | null>(valid);

  const choose = (id: SituationId | null) => {
    setScene(id);
    const url = new URL(window.location.href);
    if (id) url.searchParams.set("scene", id);
    else url.searchParams.delete("scene");
    window.history.replaceState(window.history.state, "", url);
  };

  const visible = scene ? playlists.filter((p) => p.situations.includes(scene)) : playlists;
  const active = situations.find((s) => s.id === scene);

  const chip = (selected: boolean) =>
    `inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
      selected ? "border-amber bg-amber text-ink" : "border-line-strong bg-white/5 text-muted hover:text-fg"
    }`;

  return (
    <div>
      <div role="group" aria-label="Filter by situation" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        <button type="button" aria-pressed={scene === null} className={chip(scene === null)} onClick={() => choose(null)}>
          All scenes
        </button>
        {situations.map((s) => (
          <button key={s.id} type="button" aria-pressed={scene === s.id} className={chip(scene === s.id)} onClick={() => choose(s.id)}>
            <DataIcon name={s.icon} className="size-4" />
            {s.label}
          </button>
        ))}
      </div>

      <p role="status" aria-live="polite" className="mb-6 mt-3 text-sm text-muted">
        {active ? (
          <>
            <span className="font-semibold text-fg">{active.label}</span> — {active.hinglish}. {visible.length} playlist
            {visible.length === 1 ? "" : "s"}.
          </>
        ) : (
          <>Showing all {visible.length} playlists.</>
        )}
      </p>

      <PlaylistGrid playlists={visible} headingLevel={2} />
    </div>
  );
}
