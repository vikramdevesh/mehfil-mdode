# Mehfil Mode — *Har Mehfil Ka Apna Music.*

A situation-first music discovery site for Indian everyday life: salon radio, chai tapri,
highway trucks, baraat, sangeet, purane yaar, long drives. Pick a scene, open a playlist,
hit play — songs play right on the site through YouTube's official embedded player
(no login), with a mini player that keeps going while you browse.

- **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Lucide icons**
- Local TypeScript data files, no database, no login, no API keys
- Vercel-ready

---

## Quick start

Requires **Node.js 22.6+** (Node 24 recommended) and npm.

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / serve it |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | Generates Next route types, then `tsc --noEmit` |
| `npm test` | Unit tests (Node's built-in test runner — no extra deps) |
| `npm run validate:data` | Checks all playlist data; prints a progress table |
| `npm run check` | All of the above + production build (what Vercel runs) |

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended in production | Canonical public URL, e.g. `https://mehfilmode.in`. Used for share links, canonical tags, Open Graph, sitemap, robots. Falls back to Vercel's production domain, then `http://localhost:3000`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Shows a contact address on About and an “Email a suggestion” button on Suggest. Hidden when empty. |

## Deploy on Vercel

1. Push this folder to a GitHub/GitLab repo.
2. In Vercel: **Add New → Project → Import** the repo. Framework is detected as Next.js.
3. (Optional, recommended) Settings → Build & Deployment → **Build Command**: `npm run vercel-build`
   — runs data validation, lint, type-check and tests before `next build`, so bad data never ships.
4. Settings → Environment Variables → add `NEXT_PUBLIC_SITE_URL` (Production) once you have a domain.
5. Deploy. Every playlist page, its OG image and the sitemap are generated at build time.

A project named **mehfil-mode** already exists on your Vercel account from the build verification;
you can connect it to your repo (Settings → Git) instead of creating a new one.

## Project structure

```
src/
  app/                       routes (App Router)
    page.tsx                 homepage: hero, search, featured, situations, regional
    playlists/page.tsx       explore + situation filter (?scene=)
    playlists/[slug]/        playlist page + generated OG image
    regional/  search/  about/  suggest/
    sitemap.ts  robots.ts  opengraph-image.tsx  icon.svg  not-found.tsx
  components/                Header, Footer, SearchPanel, PlaylistCard, PlaylistGrid,
                             PlaylistArt, PlaylistHeader, SongList, SongRow, ShareButton,
                             EmptyState, RandomDiscoveryButton, PlaylistExplorer, …
  config/site.ts             brand name, tagline, copy, song targets  ← rename here
  data/
    situations.ts            the 6 situation groups
    playlists/*.ts           one file per playlist (15)
    playlists/index.ts       ordered list of playlists
    playlists/_template.ts   how to add songs / playlists (docs only)
  lib/
    data-provider.ts         the ONLY data access layer used by pages
    youtube.ts               YouTube URL parsing/validation
    songs.ts                 link status, stats, playlist resolution
    search.ts                Hinglish-aware client search
    validate.ts              data validation rules
    url.ts  random.ts
  types/music.ts             Playlist / Song types
scripts/validate-data.ts
```

## Managing music data

### Song status — how the site stays honest

| Data | What the site shows |
| --- | --- |
| `youtubeUrl` is a well-formed YouTube video URL | **Plays on the site** (mini player + queue) and offers **Open on YouTube** |
| …and `embeddable: false` | Owner blocks playback on other sites → row opens the video on YouTube, labelled “Plays on YouTube” |
| no `youtubeUrl` | **Find on YouTube** — a YouTube *search* for title + artist, labelled “Video link pending” |
| `youtubeUrl` malformed / not YouTube | Search fallback + “Link needs fixing”; `validate:data` fails |
| title/artist/url still contain template text (“Replace with…”) | Hidden from the site; flagged as placeholder |

A well-formed URL is **not** proof the video exists — always open it yourself before adding.

**Current state:** 15 playlists with 31–38 songs each (439 unique songs). 407 songs have a
YouTube link that was found via YouTube search, scored for official uploads (label / artist /
“Topic” channels; covers, remakes, live and reprise versions rejected) and confirmed to exist
with YouTube's oEmbed endpoint — see [`YOUTUBE_MATCHES.md`](YOUTUBE_MATCHES.md) for every match.
The 32 songs without a confident official match open a YouTube search instead. 5 linked videos
block embedding and are marked `embeddable: false`. No YouTube playlist URLs are configured,
so the “Play playlist on YouTube” button is hidden.

### Add songs (target 30–50 per playlist)

Open e.g. `src/data/playlists/salon-classics.ts` and add entries to `songs`:

```ts
{ id: "chaudhvin-ka-chand", title: "Chaudhvin Ka Chand", artist: "Mohammed Rafi",
  youtubeUrl: "https://www.youtube.com/watch?v=<11-char id you copied>",
  language: "Hindi", tags: ["bollywood", "60s"], position: 9 },
```

Rules:
- `id`: unique, lowercase-with-dashes. Reusing a song in another playlist? Use the **same id,
  title, artist, language and URL** — the validator enforces it (ready for a future DB).
- `youtubeUrl`: copy from YouTube → Share. Supported: `watch?v=`, `youtu.be/`, `shorts/`. Omit it if unsure.
- `embeddable: false`: add this if the video shows “Video unavailable — playback on other websites
  has been disabled” when embedded. (If you forget, the player skips it automatically and says why.)
- `position`: 1, 2, 3 … in display order.
- Run `npm run validate:data` — it shows songs / linked / pending per playlist and how many
  more each needs to hit 30.

### The on-site player

`src/components/player/` — `PlayerProvider` (in the root layout, so playback survives page
navigation) wraps YouTube's official [IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
using the privacy-enhanced `youtube-nocookie.com` host. Queue logic is pure and tested in
`src/lib/player.ts`.

- Play all / Shuffle per playlist, tap any song to start the queue there, next / previous, autoplay next.
- Songs that fail to play (owner disabled embedding, removed, private) are skipped with a notice.
- The video stays visible at ≥200 px tall, as YouTube's embed terms require; “minimise” pauses it.
  Ads and YouTube branding are left untouched. No login or OAuth — none is needed to play public videos.
- Lock-screen / headphone next & previous via the Media Session API where supported.

### Add a full YouTube playlist

Set `youtubePlaylistUrl: "https://www.youtube.com/playlist?list=PL..."` on the playlist — only for
a real playlist you created/checked. The red **Play playlist on YouTube** button then appears.

### Add / edit / remove a playlist

- **Edit:** change fields in its file (title, Hinglish description, theme colours/pattern/icon, tags, situations).
- **Add:** copy a playlist file, change `id`, `slug`, export name and content, then import it in
  `src/data/playlists/index.ts`. The route, OG image and sitemap entry appear automatically.
- **Remove:** delete it from the array in `index.ts`.
- Tests assert exactly 15 playlists (the MVP spec) — update `EXPECTED_PLAYLIST_COUNT` in
  `src/lib/data.test.ts` when the count changes.
- **Cover images (drop-in):** save a square image as `public/covers/<slug>.webp` (or .jpg/.png/.avif) —
  e.g. `public/covers/salon-classics.webp`. It's used automatically on the next build, no code change.
  Ready-made prompts for Gemini or any image model are in **`COVER_PROMPTS.md`**. You can also point
  `coverImage` at any file in `public/` explicitly. Without a cover, a generated gradient + pattern +
  icon cover is used (never a broken image).
- **Homepage hero image:** `public/hero.webp` (16:9). If it's missing, the homepage shows a collage of
  playlist covers instead.

## Moving to a database later

Pages and components only call the async functions in `src/lib/data-provider.ts`
(`getAllPlaylists`, `getPlaylistBySlug`, `getSearchIndex`, …). To move to Supabase/Postgres/a CMS,
re-implement those functions against the new source; the UI doesn't change. Songs already have
stable ids and cross-playlist consistency checks, so a `songs` + `playlist_songs(position)` schema
maps directly.

## Known limitations

- Song links are search links until verified video URLs are added (by design — no invented ids).
- Playlists hold 8 songs each today vs the 50–60 target.
- “Suggest a Song” is an explained placeholder (optional mailto if `NEXT_PUBLIC_CONTACT_EMAIL` is set).
- Search is client-side over local data; fine for thousands of songs, swap for DB/full-text search later.
- Not affiliated with YouTube or any label; no audio is hosted or streamed.
