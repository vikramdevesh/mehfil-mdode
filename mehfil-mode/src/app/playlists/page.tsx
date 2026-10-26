import type { Metadata } from "next";
import { Suspense } from "react";
import { getPlaylistSummaries, getSituations } from "@/lib/data-provider";
import { PlaylistExplorer } from "@/components/PlaylistExplorer";
import { PlaylistGrid } from "@/components/PlaylistGrid";

export const metadata: Metadata = {
  title: "Explore Playlists",
  description: "Browse every Mehfil Mode playlist by situation — chai tapri, road trips, friends, party, shaadi and chill.",
  alternates: { canonical: "/playlists" },
};

export default async function PlaylistsPage() {
  const [playlists, situations] = await Promise.all([getPlaylistSummaries(), getSituations()]);
  return (
    <div className="container-page pt-12 sm:pt-16">
      <header className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Explore</p>
        <h1 className="mt-2 text-4xl font-extrabold text-fg sm:text-5xl">Har scene ki playlist</h1>
        <p className="mt-3 text-lg text-muted">
          {playlists.length} playlists for everyday Indian moments. Filter by situation, open a playlist, and every song plays on YouTube.
        </p>
      </header>
      <Suspense fallback={<PlaylistGrid playlists={playlists} headingLevel={2} />}>
        <PlaylistExplorer playlists={playlists} situations={situations} />
      </Suspense>
    </div>
  );
}
