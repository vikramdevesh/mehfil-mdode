import Link from "next/link";
import { EmptyState } from "@/components/EmptyState";

export default function NotFound() {
  return (
    <div className="container-page max-w-2xl pt-20">
      <EmptyState
        title="Yeh mehfil nahi mili"
        description="The page or playlist you're looking for doesn't exist (or has moved). Try exploring all playlists or searching for a song."
      >
        <Link href="/playlists" className="rounded-full bg-fg px-5 py-2.5 text-sm font-bold text-ink hover:bg-white">
          Explore Playlists
        </Link>
        <Link href="/search" className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-fg hover:bg-white/5">
          Search
        </Link>
      </EmptyState>
    </div>
  );
}
