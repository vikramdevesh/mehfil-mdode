import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Wordmark } from "./Wordmark";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink-2/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Wordmark />
          <p className="mt-4 font-display text-xl font-semibold text-fg">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.supportingLine}</p>
        </div>

        <nav aria-label="Footer: explore">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="text-muted hover:text-fg" href="/playlists">Explore Playlists</Link></li>
            <li><Link className="text-muted hover:text-fg" href="/regional">Regional Music</Link></li>
            <li><Link className="text-muted hover:text-fg" href="/search">Search</Link></li>
          </ul>
        </nav>

        <nav aria-label="Footer: about">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-dim">Mehfil</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="text-muted hover:text-fg" href="/suggest">Suggest a Song</Link></li>
            <li><Link className="text-muted hover:text-fg" href="/about">About &amp; Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-xs leading-relaxed text-dim md:flex-row md:items-start md:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">
            {siteConfig.name} is an independent discovery guide. We don&apos;t host, stream or download music —
            every song opens on YouTube. Song titles and artist names belong to their respective owners. Not
            affiliated with YouTube, Google or any music label.
          </p>
        </div>
      </div>
    </footer>
  );
}
