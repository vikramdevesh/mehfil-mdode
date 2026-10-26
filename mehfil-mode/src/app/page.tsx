import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, Lightbulb } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  getCatalogStats,
  getFeaturedPlaylists,
  getLanguageGroups,
  getPlaylistSummaries,
  getRandomPool,
  getSearchIndex,
  getSituationGroups,
} from "@/lib/data-provider";
import { getHeroImage } from "@/lib/hero";
import { playlistPath } from "@/lib/url";
import { PlaylistArt } from "@/components/PlaylistArt";
import { PlaylistGrid } from "@/components/PlaylistGrid";
import { RandomDiscoveryButton } from "@/components/RandomDiscoveryButton";
import { SearchPanel } from "@/components/SearchPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { DataIcon } from "@/components/icons";

export default async function HomePage() {
  const [featured, all, groups, languages, pool, index, stats, heroImage] = await Promise.all([
    getFeaturedPlaylists(),
    getPlaylistSummaries(),
    getSituationGroups(),
    getLanguageGroups({ regionalOnly: true }),
    getRandomPool(),
    getSearchIndex(),
    getCatalogStats(),
    getHeroImage(),
  ]);

  const collage = featured.slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section aria-labelledby="hero-title" className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pb-24 lg:pt-24">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="size-1.5 rounded-full bg-amber" aria-hidden />
              {siteConfig.supportingLine}
            </p>
            <h1 id="hero-title" className="mt-6 text-balance text-5xl font-extrabold leading-[0.95] text-fg sm:text-6xl lg:text-7xl">
              Har{" "}
              <span className="bg-gradient-to-r from-amber via-amber-soft to-violet bg-clip-text text-transparent">Mehfil</span>{" "}
              Ka Apna Music.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{siteConfig.heroText}</p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-start">
              <Link
                href="/playlists"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 text-base font-bold text-white shadow-lg shadow-electric/25 transition hover:brightness-110"
              >
                Explore Playlists <ArrowRight className="size-5" aria-hidden />
              </Link>
              <RandomDiscoveryButton pool={pool} />
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-dim">Scenes</dt>
                <dd className="font-display text-2xl font-bold text-fg">{stats.playlists}</dd>
              </div>
              <div>
                <dt className="text-dim">Songs listed so far</dt>
                <dd className="font-display text-2xl font-bold text-fg">{stats.uniqueSongs}</dd>
              </div>
              <div>
                <dt className="text-dim">Plays on</dt>
                <dd className="font-display text-2xl font-bold text-fg">YouTube</dd>
              </div>
            </dl>
          </div>

          {heroImage ? (
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-electric/30 via-violet/25 to-amber/25 blur-3xl" />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/50 ring-1 ring-white/10">
                <Image
                  src={heroImage}
                  alt="An Indian street at dusk — a chai tapri, a barber shop, a painted truck and a baraat with fireworks"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
          ) : (
            <div className="relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none">
              <div className="grid grid-cols-2 gap-4">
                {collage.map((p, i) => (
                  <Link
                    key={p.id}
                    href={playlistPath(p.slug)}
                    className={`block overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10 transition hover:-translate-y-1 ${
                      i % 2 === 1 ? "translate-y-8" : ""
                    }`}
                  >
                    <PlaylistArt
                      slug={p.slug}
                      title={p.title}
                      shortTitle={p.shortTitle}
                      theme={p.theme}
                      coverImage={p.coverImage}
                      className="aspect-[4/5] w-full"
                      decorative
                    />
                    <span className="sr-only">Open {p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Search ── */}
      <section aria-labelledby="search-title" className="container-page">
        <div className="rounded-[2rem] border border-line bg-gradient-to-br from-ink-2 to-ink-3/60 p-5 sm:p-8 lg:p-10">
          <h2 id="search-title" className="text-2xl font-extrabold text-fg sm:text-3xl">
            Kya sunna hai aaj?
          </h2>
          <p className="mb-5 mt-2 text-muted">Search playlists, songs, singers, languages or a vibe — English ya Hinglish, dono chalega.</p>
          <SearchPanel index={index} compact />
        </div>
      </section>

      {/* ── Featured ── */}
      <section aria-labelledby="featured-title" className="container-page mt-24">
        <SectionHeading
          id="featured-title"
          eyebrow="Featured"
          title="Aaj ki mehfil ke liye"
          description="Hand-picked scenes to start with — from the salon radio to the baraat dhol."
          href="/playlists"
          linkLabel={`All ${all.length} playlists`}
        />
        <PlaylistGrid playlists={featured.slice(0, 8)} />
      </section>

      {/* ── Explore by situation ── */}
      <section aria-labelledby="situations-title" className="container-page mt-24">
        <SectionHeading
          id="situations-title"
          eyebrow="Explore by situation"
          title="Apna scene chuno"
          description="Every playlist belongs to one or more everyday scenes. Pick yours."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ situation, playlists }) => (
            <li key={situation.id} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-ink-2/70 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-electric/25 to-violet/25 text-amber-soft">
                  <DataIcon name={situation.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-fg">{situation.label}</h3>
                  <p className="text-sm text-dim">{situation.hinglish}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{situation.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {playlists.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={playlistPath(p.slug)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white/5 px-3 py-1.5 text-sm text-fg transition hover:bg-white/10"
                    >
                      <span className="size-2 rounded-full" style={{ backgroundColor: p.accentColor }} aria-hidden />
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/playlists?scene=${situation.id}`}
                className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-electric-soft hover:text-fg"
              >
                Explore {situation.label}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Regional ── */}
      <section aria-labelledby="regional-title" className="container-page mt-24">
        <SectionHeading
          id="regional-title"
          eyebrow="Regional music"
          title="Desh ki har boli"
          description="Languages below come straight from the songs currently listed — more will appear as the collection grows."
          href="/regional"
          linkLabel="Regional music"
        />
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {languages.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/regional#${l.slug}`}
                className="group flex h-full flex-col justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-gradient-to-br from-ink-2 to-ink-3/70 p-5 transition hover:border-amber/40"
              >
                <Globe2 className="size-5 text-amber" aria-hidden />
                <span>
                  <span className="block font-display text-xl font-bold text-fg">{l.language}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {l.songCount} song{l.songCount === 1 ? "" : "s"} · {l.playlists.length} playlist{l.playlists.length === 1 ? "" : "s"}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Suggest CTA ── */}
      <section className="container-page mt-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-amber/25 bg-gradient-to-r from-amber/10 via-violet/10 to-electric/10 p-6 sm:flex-row sm:items-center sm:p-10">
          <div className="flex gap-4">
            <Lightbulb className="mt-1 size-6 shrink-0 text-amber" aria-hidden />
            <div>
              <h2 className="text-2xl font-extrabold text-fg">Koi gaana miss ho gaya?</h2>
              <p className="mt-1 text-muted">Every playlist is growing towards {siteConfig.targetSongsPerPlaylist.min}–{siteConfig.targetSongsPerPlaylist.max} songs. Tell us what belongs in your mehfil.</p>
            </div>
          </div>
          <Link href="/suggest" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-fg px-5 text-sm font-bold text-ink hover:bg-white">
            Suggest a Song <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
