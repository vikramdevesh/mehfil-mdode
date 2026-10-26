import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import {
  getAllSlugs,
  getPlaylistBySlug,
  getPlaylistSummaries,
  getSituations,
} from "@/lib/data-provider";
import { absoluteUrl, playlistPath } from "@/lib/url";
import { PlaylistHeader } from "@/components/PlaylistHeader";
import { SongList } from "@/components/SongList";
import { PlaylistGrid } from "@/components/PlaylistGrid";
import { SectionHeading } from "@/components/SectionHeading";

type Params = { slug: string };

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Params[]> {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const playlist = await getPlaylistBySlug(slug);
  if (!playlist) return { title: "Playlist not found" };

  const title = `${playlist.title} — ${playlist.shortTitle}`;
  const description = playlist.description;
  const path = playlistPath(playlist.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "music.playlist",
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
    },
    twitter: { card: "summary_large_image", title: `${title} | ${siteConfig.name}`, description },
  };
}

export default async function PlaylistPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const [playlist, situations, all] = await Promise.all([getPlaylistBySlug(slug), getSituations(), getPlaylistSummaries()]);
  if (!playlist) notFound();

  const related = all
    .filter((p) => p.slug !== playlist.slug && p.situations.some((s) => playlist.situations.includes(s)))
    .slice(0, 4);

  return (
    <>
      <PlaylistHeader playlist={playlist} situations={situations} shareUrl={absoluteUrl(playlistPath(playlist.slug))} />

      <div className="container-page mt-10 grid gap-12">
        <section aria-label="Songs">
          <SongList
            songs={playlist.songs}
            accentColor={playlist.accentColor}
            playlistTitle={playlist.title}
            playlistHref={playlistPath(playlist.slug)}
          />
          <p className="mt-4 text-xs leading-relaxed text-dim">
            Songs play through YouTube&apos;s official embedded player, with YouTube&apos;s own ads and branding. {siteConfig.name} doesn&apos;t host, download or re-stream any audio.{" "}
            <Link href="/suggest" className="underline underline-offset-2 hover:text-fg">
              Suggest a song for this playlist
            </Link>
            .
          </p>
        </section>

        {related.length ? (
          <section aria-labelledby="related-title">
            <SectionHeading id="related-title" eyebrow="Same scene" title="Yeh bhi try karo" href="/playlists" linkLabel="All playlists" />
            <PlaylistGrid playlists={related} />
          </section>
        ) : null}
      </div>
    </>
  );
}
