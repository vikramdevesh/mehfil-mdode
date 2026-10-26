import type { Metadata } from "next";
import { Suspense } from "react";
import { getSearchIndex } from "@/lib/data-provider";
import { SearchPanel } from "@/components/SearchPanel";
import { SearchFromUrl } from "./SearchFromUrl";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Mehfil Mode playlists, songs, singers, languages and scenes.",
  alternates: { canonical: "/search" },
};

export default async function SearchPage() {
  const index = await getSearchIndex();
  return (
    <div className="container-page max-w-4xl pt-12 sm:pt-16">
      <h1 className="text-4xl font-extrabold text-fg sm:text-5xl">Search</h1>
      <p className="mb-6 mt-3 text-muted">Playlists, songs, singers, languages ya vibe — sab yahan milega.</p>
      <Suspense fallback={<SearchPanel index={index} />}>
        <SearchFromUrl index={index} />
      </Suspense>
    </div>
  );
}
