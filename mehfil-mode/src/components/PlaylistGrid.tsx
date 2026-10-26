import type { PlaylistSummary } from "@/types/music";
import { PlaylistCard } from "./PlaylistCard";
import { EmptyState } from "./EmptyState";

export function PlaylistGrid({ playlists, headingLevel = 3 }: { playlists: PlaylistSummary[]; headingLevel?: 2 | 3 }) {
  if (!playlists.length) {
    return <EmptyState title="No playlists here yet" description="Try another scene or search for a song." />;
  }
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {playlists.map((p) => (
        <li key={p.id}>
          <PlaylistCard playlist={p} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
