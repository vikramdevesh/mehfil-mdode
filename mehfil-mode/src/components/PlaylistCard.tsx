import Link from "next/link";
import { ArrowUpRight, ListMusic } from "lucide-react";
import type { PlaylistSummary } from "@/types/music";
import { playlistPath } from "@/lib/url";
import { PlaylistArt } from "./PlaylistArt";
import { Tag } from "./Tag";

export function songCountLabel(p: Pick<PlaylistSummary, "stats">): string {
  const n = p.stats.total;
  return n === 0 ? "No songs yet" : `${n} song${n === 1 ? "" : "s"}`;
}

export function PlaylistCard({ playlist, headingLevel = 3 }: { playlist: PlaylistSummary; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const href = playlistPath(playlist.slug);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-ink-2 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-2xl hover:shadow-black/40 focus-within:border-line-strong">
      <PlaylistArt
        slug={playlist.slug}
        title={playlist.title}
        shortTitle={playlist.shortTitle}
        theme={playlist.theme}
        coverImage={playlist.coverImage}
        className="aspect-[4/3] w-full"
        decorative
      />
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <H className="text-lg font-bold leading-tight text-fg">
            {/* The stretched link makes the whole card clickable while keeping one tab stop. */}
            <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
              {playlist.title}
            </Link>
          </H>
          <ArrowUpRight
            aria-hidden
            className="mt-0.5 size-5 shrink-0 text-dim transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
          />
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted">{playlist.description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: playlist.accentColor }}>
            <ListMusic className="size-3.5" aria-hidden />
            {songCountLabel(playlist)}
          </span>
          {playlist.tags.slice(0, 2).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      {/* Visible focus ring for the stretched link */}
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] ring-amber ring-offset-0 group-has-[a:focus-visible]:ring-2" />
    </article>
  );
}
