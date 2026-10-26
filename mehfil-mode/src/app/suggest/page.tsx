import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Suggest a Song",
  description: `Help grow ${siteConfig.name} — suggest songs for your favourite scenes.`,
  alternates: { canonical: "/suggest" },
};

export default function SuggestPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const subject = encodeURIComponent(`Song suggestion for ${siteConfig.name}`);
  const body = encodeURIComponent("Song title:\nArtist:\nPlaylist / scene:\nYouTube link (optional):\n");

  return (
    <div className="container-page max-w-3xl pt-12 sm:pt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Suggest a Song</p>
      <h1 className="mt-2 text-4xl font-extrabold text-fg sm:text-5xl">Koi gaana miss ho gaya?</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Every playlist is growing towards {siteConfig.targetSongsPerPlaylist.min}–{siteConfig.targetSongsPerPlaylist.max} songs, and
        we&apos;d love your picks.
      </p>

      <div className="mt-8 rounded-[var(--radius-card)] border border-line-strong bg-ink-2/70 p-6">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 size-5 shrink-0 text-amber" aria-hidden />
          <div className="text-muted">
            <h2 className="text-lg font-bold text-fg">Suggestion form — coming soon</h2>
            <p className="mt-2 leading-relaxed">
              We&apos;re building a simple form where you can suggest a song, pick the playlist it belongs to, and optionally paste a YouTube
              link. Every suggestion will be reviewed by a person before it&apos;s added, and links will be checked by hand — no automated
              scraping.
            </p>
          </div>
        </div>

        {email ? (
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-bold text-ink hover:bg-white"
          >
            <Mail className="size-4" aria-hidden /> Email a suggestion instead
          </a>
        ) : (
          <p className="mt-6 text-sm text-dim">Until then, keep exploring — new songs are added regularly.</p>
        )}
      </div>

      <Link href="/playlists" className="mt-8 inline-flex text-sm font-semibold text-electric-soft hover:text-fg">
        ← Back to playlists
      </Link>
    </div>
  );
}
