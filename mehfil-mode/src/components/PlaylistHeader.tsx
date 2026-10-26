import Link from "next/link";
import { ChevronLeft, Info, ListMusic } from "lucide-react";
import type { ResolvedPlaylist, Situation } from "@/types/music";
import { siteConfig } from "@/config/site";
import { PlaylistArt } from "./PlaylistArt";
import { ShareButton } from "./ShareButton";
import { Tag } from "./Tag";
import { PlayGlyph } from "./PlayGlyph";

interface Props {
  playlist: ResolvedPlaylist;
  situations: Situation[];
  shareUrl: string;
}

export function PlaylistHeader({ playlist, situations, shareUrl }: Props) {
  const { stats } = playlist;
  const target = siteConfig.targetSongsPerPlaylist;
  const playlistSituations = situations.filter((s) => playlist.situations.includes(s.id));

  return (
    <section
      className="relative overflow-hidden border-b border-line"
      style={{ backgroundImage: `radial-gradient(60rem 26rem at 20% -20%, ${playlist.theme.via}55, transparent 70%)` }}
    >
      <div className="container-page pb-10 pt-6 sm:pb-14">
        <Link href="/playlists" className="inline-flex items-center gap-1 rounded-full py-1 pr-2 text-sm text-muted hover:text-fg">
          <ChevronLeft className="size-4" aria-hidden /> All playlists
        </Link>

        <div className="mt-6 grid items-end gap-8 md:grid-cols-[minmax(0,26rem)_1fr] lg:gap-12">
          <PlaylistArt
            slug={playlist.slug}
            title={playlist.title}
            shortTitle={playlist.shortTitle}
            theme={playlist.theme}
            coverImage={playlist.coverImage}
            size="hero"
            priority
            className="aspect-[4/3] w-full max-w-md rounded-[1.75rem] shadow-2xl shadow-black/50 ring-1 ring-white/10"
          />

          <div className="animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: playlist.accentColor }}>
              Playlist · {playlist.shortTitle}
            </p>
            <h1 className="mt-2 text-balance text-4xl font-extrabold leading-[1.02] text-fg sm:text-5xl lg:text-6xl">
              {playlist.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{playlist.description}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-fg">
                <ListMusic className="size-4" aria-hidden />
                {stats.total} song{stats.total === 1 ? "" : "s"}
              </span>
              {playlist.languages.map((l) => (
                <Tag key={l} tone="electric">{l}</Tag>
              ))}
              {playlistSituations.map((s) => (
                <Tag key={s.id} tone="amber">{s.label}</Tag>
              ))}
              {playlist.tags.slice(0, 4).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-start gap-3">
              {playlist.validPlaylistUrl ? (
                <a
                  href={playlist.validPlaylistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-[#e5252a] px-5 text-sm font-bold text-white transition hover:brightness-110"
                >
                  <PlayGlyph className="size-5 text-white/30" />
                  Play playlist on YouTube
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              ) : null}
              <ShareButton
                url={shareUrl}
                title={`${playlist.title} — ${playlist.shortTitle} | ${siteConfig.name}`}
                text={`${playlist.title} (${playlist.shortTitle}) — ${siteConfig.tagline}`}
              />
            </div>

            <div className="mt-5 flex max-w-2xl gap-2.5 rounded-2xl border border-line bg-white/[0.03] p-3.5 text-sm leading-relaxed text-muted">
              <Info className="mt-0.5 size-4 shrink-0 text-electric-soft" aria-hidden />
              <p>
                {stats.linked > 0
                  ? `${stats.linked} of ${stats.total} songs open their YouTube video directly. `
                  : ""}
                {stats.pendingLink > 0
                  ? `${stats.linked > 0 ? "The rest" : "These songs"} don't have a checked video link yet, so they open a YouTube search instead. `
                  : ""}
                {playlist.validPlaylistUrl
                  ? ""
                  : "A full YouTube playlist hasn't been added for this collection yet — open tracks one by one below. "}
                This collection is being curated towards {target.min}–{target.max} songs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
