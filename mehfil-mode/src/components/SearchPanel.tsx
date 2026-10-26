"use client";

import Link from "next/link";
import { useDeferredValue, useId, useMemo, useState } from "react";
import { ArrowRight, ExternalLink, ListMusic, Search, X } from "lucide-react";
import { search, type PlaylistDoc, type SongDoc } from "@/lib/search";
import { playlistPath } from "@/lib/url";
import { EmptyState } from "./EmptyState";
import { PlayGlyph } from "./PlayGlyph";

export interface SearchIndex {
  playlists: PlaylistDoc[];
  songs: SongDoc[];
}

interface Props {
  index: SearchIndex;
  initialQuery?: string;
  /** Compact mode (homepage): fewer results + "see all" link. */
  compact?: boolean;
  autoFocus?: boolean;
  /** Keep ?q= in the address bar in sync (search page). */
  syncUrl?: boolean;
}

const SUGGESTIONS = ["shaadi", "chai", "Kishore Kumar", "Punjabi", "ghazal", "long drive", "Bhojpuri", "dosti"];

export function SearchPanel({ index, initialQuery = "", compact = false, autoFocus = false, syncUrl = false }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const deferred = useDeferredValue(query);
  const inputId = useId();

  const results = useMemo(() => {
    const q = deferred.trim();
    if (!q) return null;
    return {
      playlists: search(index.playlists, q),
      songs: search(index.songs, q),
    };
  }, [deferred, index]);

  const update = (value: string) => {
    setQuery(value);
    if (syncUrl) {
      const url = new URL(window.location.href);
      if (value.trim()) url.searchParams.set("q", value);
      else url.searchParams.delete("q");
      window.history.replaceState(window.history.state, "", url);
    }
  };

  const playlistLimit = compact ? 4 : 20;
  const songLimit = compact ? 6 : 40;
  const total = results ? results.playlists.length + results.songs.length : 0;
  const q = deferred.trim();

  return (
    <div>
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="relative"
      >
        <label htmlFor={inputId} className="sr-only">
          Search playlists, songs, singers, languages
        </label>
        <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-electric-soft" aria-hidden />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => update(e.target.value)}
          autoFocus={autoFocus}
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder="Try “shaadi”, “Kishore Kumar”, “chai”…"
          className="h-14 w-full rounded-full border border-line-strong bg-ink-2/90 pl-14 pr-14 text-base text-fg shadow-xl shadow-black/20 outline-none transition placeholder:text-dim focus:border-electric focus:ring-4 focus:ring-electric/20 [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => update("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-white/10 hover:text-fg"
          >
            <X className="size-4" aria-hidden />
          </button>
        ) : null}
      </form>

      <p role="status" aria-live="polite" className="sr-only">
        {results ? `${results.playlists.length} playlists and ${results.songs.length} songs found for ${q}` : ""}
      </p>

      {!results ? (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-dim">Popular:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => update(s)}
              className="rounded-full border border-line-strong bg-white/5 px-3 py-1.5 text-sm text-muted transition hover:border-electric/50 hover:text-fg"
            >
              {s}
            </button>
          ))}
        </div>
      ) : total === 0 ? (
        <div className="mt-6">
          <EmptyState
            title={`Kuch nahi mila for “${q}”`}
            description="Try a simpler word, a singer's name, a language like Punjabi, or a scene like shaadi, chai or drive."
          >
            {SUGGESTIONS.slice(0, 4).map((s) => (
              <button key={s} type="button" onClick={() => update(s)} className="rounded-full border border-line-strong px-3 py-1.5 text-sm text-muted hover:text-fg">
                {s}
              </button>
            ))}
          </EmptyState>
        </div>
      ) : (
        <div className={`mt-6 grid gap-8 ${compact ? "lg:grid-cols-2" : ""}`}>
          {results.playlists.length ? (
            <section aria-labelledby={`${inputId}-pl`}>
              <h2 id={`${inputId}-pl`} className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dim">
                Playlists <span className="text-muted">({results.playlists.length})</span>
              </h2>
              <ul className="grid gap-2">
                {results.playlists.slice(0, playlistLimit).map(({ doc }) => (
                  <li key={doc.id}>
                    <Link
                      href={playlistPath(doc.slug)}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-2/70 p-3 transition hover:border-line-strong hover:bg-ink-3"
                    >
                      <span
                        aria-hidden
                        className="grid size-12 shrink-0 place-items-center rounded-xl"
                        style={{ background: `linear-gradient(140deg, ${doc.accentColor}, ${doc.accentColor}33)` }}
                      >
                        <ListMusic className="size-5 text-ink" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold text-fg">{doc.title}</span>
                        <span className="block truncate text-sm text-muted">
                          {doc.shortTitle} · {doc.songCount} songs
                        </span>
                      </span>
                      <ArrowRight className="size-4 text-dim transition group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {results.songs.length ? (
            <section aria-labelledby={`${inputId}-songs`}>
              <h2 id={`${inputId}-songs`} className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-dim">
                Songs <span className="text-muted">({results.songs.length})</span>
              </h2>
              <ul className="grid gap-2">
                {results.songs.slice(0, songLimit).map(({ doc }) => (
                  <li key={doc.id} className="flex items-center gap-3 rounded-2xl border border-line bg-ink-2/70 p-3">
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-w-0 flex-1 items-center gap-3 rounded-xl"
                      aria-label={`${doc.title}${doc.artist ? ` by ${doc.artist}` : ""} — ${doc.status === "linked" ? "open on YouTube" : "search on YouTube"} (opens in a new tab)`}
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/5">
                        {doc.status === "linked" ? <PlayGlyph className="size-5 text-[#e5252a]" /> : <Search className="size-4 text-muted" aria-hidden />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold text-fg group-hover:underline">{doc.title}</span>
                        <span className="block truncate text-sm text-muted">
                          {doc.artist ?? "Unknown artist"} · {doc.language}
                          {doc.status !== "linked" ? " · search link" : ""}
                        </span>
                      </span>
                      <ExternalLink className="size-4 shrink-0 text-dim" aria-hidden />
                    </a>
                    <Link
                      href={playlistPath(doc.playlists[0].slug)}
                      className="hidden shrink-0 rounded-full border border-line-strong px-2.5 py-1 text-xs text-muted hover:text-fg sm:inline-block"
                      title={`In ${doc.playlists.map((p) => p.title).join(", ")}`}
                    >
                      {doc.playlists[0].title}
                      {doc.playlists.length > 1 ? ` +${doc.playlists.length - 1}` : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {compact && (results.playlists.length > playlistLimit || results.songs.length > songLimit) ? (
            <Link
              href={`/search?q=${encodeURIComponent(q)}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-soft hover:text-fg lg:col-span-2"
            >
              See all {total} results <ArrowRight className="size-4" aria-hidden />
            </Link>
          ) : null}
        </div>
      )}
    </div>
  );
}
