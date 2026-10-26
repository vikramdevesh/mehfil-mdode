import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getCatalogStats } from "@/lib/data-provider";

export const metadata: Metadata = {
  title: "About",
  description: `What ${siteConfig.name} is, how songs are chosen, and how links work.`,
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  const stats = await getCatalogStats();
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const { min, max } = siteConfig.targetSongsPerPlaylist;

  return (
    <article className="container-page max-w-3xl pt-12 sm:pt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">About</p>
      <h1 className="mt-2 text-4xl font-extrabold text-fg sm:text-5xl">{siteConfig.tagline}</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          Music in India is rarely about a mood in isolation — it&apos;s about <em className="text-fg not-italic">where you are</em> and{" "}
          <em className="text-fg not-italic">who you&apos;re with</em>. The radio at the naai ki dukaan, the speaker on a highway truck, the
          dholak at a sangeet, the old songs that come out when purane yaar meet again.
        </p>
        <p>
          {siteConfig.name} organises music around those situations. Pick a scene, open a playlist, and hit play — songs play right
          here through YouTube&apos;s official embedded player, and keep playing while you browse. No login, no app.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-fg">How the collection works</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            There are <strong className="text-fg">{stats.playlists} playlists</strong> with{" "}
            <strong className="text-fg">{stats.uniqueSongs} songs</strong> listed so far. Each playlist is being curated by hand towards {min}–{max} songs.
          </li>
          <li>
            Songs with a checked YouTube video link ({stats.linkedSongs} so far) play on the site, or open on YouTube when the video&apos;s
            owner doesn&apos;t allow playback elsewhere. Songs still waiting for a checked link open a YouTube search for the title and artist
            instead — and are labelled that way.
          </li>
          <li>We never invent video links, and we only show a &quot;Play playlist on YouTube&quot; button when a real YouTube playlist has been added.</li>
          <li>
            No sign-up and no tracking pixels. Videos load from YouTube&apos;s privacy-enhanced (youtube-nocookie.com) player, and any ads you
            see are YouTube&apos;s own — we don&apos;t add or remove any.
          </li>
        </ul>

        <h2 className="pt-4 text-2xl font-bold text-fg">Music &amp; rights</h2>
        <p>
          {siteConfig.name} doesn&apos;t host, download or re-stream any audio or video. Playback happens inside YouTube&apos;s own player,
          so views count for the artists and labels who uploaded them. Song titles and artist names belong to their respective owners. {siteConfig.name} is independent and not affiliated with YouTube,
          Google or any record label.
        </p>

        <h2 id="contact" className="pt-4 text-2xl font-bold text-fg">Contact</h2>
        {email ? (
          <p>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 font-semibold text-electric-soft hover:text-fg">
              <Mail className="size-5" aria-hidden /> {email}
            </a>
          </p>
        ) : (
          <p>
            A contact address will be published here soon. Meanwhile, see{" "}
            <Link href="/suggest" className="font-semibold text-electric-soft hover:text-fg">
              Suggest a Song
            </Link>{" "}
            for how song suggestions will work.
          </p>
        )}
      </div>
    </article>
  );
}
