import type { Metadata } from "next";
import Link from "next/link";
import { Globe2 } from "lucide-react";
import { getAllPlaylists, getLanguageGroups } from "@/lib/data-provider";
import { PlaylistGrid } from "@/components/PlaylistGrid";
import { EmptyState } from "@/components/EmptyState";

export const metadata: Metadata = {
  title: "Regional Music",
  description: "Discover Hindi, Punjabi, Haryanvi, Bhojpuri, Rajasthani, Gujarati and Urdu songs across Mehfil Mode playlists.",
  alternates: { canonical: "/regional" },
};

export default async function RegionalPage() {
  const [groups, playlists] = await Promise.all([getLanguageGroups({ regionalOnly: true }), getAllPlaylists()]);

  return (
    <div className="container-page pt-12 sm:pt-16">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Regional music</p>
        <h1 className="mt-2 text-4xl font-extrabold text-fg sm:text-5xl">Desh ki har boli</h1>
        <p className="mt-3 text-lg text-muted">
          Every language here comes from the songs currently listed in our playlists — nothing is padded. As more songs are
          added (Marathi, Tamil, Bengali, Assamese and beyond), new languages appear automatically.
        </p>
      </header>

      {groups.length ? (
        <>
          <nav aria-label="Jump to language" className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {groups.map((g) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 py-2 text-sm font-medium text-muted hover:text-fg"
              >
                {g.language}
                <span className="rounded-full bg-white/10 px-1.5 text-xs text-fg">{g.songCount}</span>
              </a>
            ))}
          </nav>

          <div className="mt-12 grid gap-16">
            {groups.map((g) => {
              const songs = playlists
                .flatMap((p) => p.songs.filter((s) => s.language === g.language).map((s) => ({ song: s, playlist: p })))
                .filter((x, i, arr) => arr.findIndex((y) => y.song.id === x.song.id) === i);
              return (
                <section key={g.slug} id={g.slug} aria-labelledby={`${g.slug}-title`} className="scroll-mt-24">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-amber/15 text-amber">
                      <Globe2 className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h2 id={`${g.slug}-title`} className="text-2xl font-extrabold text-fg sm:text-3xl">{g.language}</h2>
                      <p className="text-sm text-muted">
                        {g.songCount} song{g.songCount === 1 ? "" : "s"} across {g.playlists.length} playlist{g.playlists.length === 1 ? "" : "s"}
                      </p>
                    </div>
                  </div>

                  <ul className="mb-8 flex flex-wrap gap-2">
                    {songs.map(({ song, playlist }) => (
                      <li key={song.id}>
                        <Link
                          href={`/playlists/${playlist.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/70 px-3 py-1.5 text-sm text-fg hover:border-line-strong"
                        >
                          {song.title}
                          {song.artist ? <span className="text-dim">· {song.artist.split(",")[0]}</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <PlaylistGrid playlists={g.playlists} />
                </section>
              );
            })}
          </div>
        </>
      ) : (
        <div className="mt-10">
          <EmptyState title="No regional songs yet" description="Regional collections will appear here as songs are added." />
        </div>
      )}
    </div>
  );
}
