"use client";

import { useSearchParams } from "next/navigation";
import { SearchPanel, type SearchIndex } from "@/components/SearchPanel";

/** Reads ?q= from the URL so search results are linkable/shareable. */
export function SearchFromUrl({ index }: { index: SearchIndex }) {
  const q = useSearchParams().get("q") ?? "";
  return <SearchPanel index={index} initialQuery={q} syncUrl autoFocus={!q} />;
}
