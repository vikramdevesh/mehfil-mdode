/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD SONGS  (this file is documentation only — it is not imported)
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * 1. Open the playlist file, e.g. src/data/playlists/salon-classics.ts
 * 2. Add a song object to its `songs` array:
 *
 *    {
 *      id: "song-001",                          // unique, lowercase-with-dashes
 *      title: "Replace with actual song title",
 *      artist: "Replace with actual artist",
 *      youtubeUrl: "https://www.youtube.com/watch?v=REPLACE_WITH_REAL_VIDEO_ID",
 *      language: "Hindi",
 *      tags: ["classic", "bollywood"],
 *      position: 1,
 *    },
 *
 *    ⚠️ The values above are PLACEHOLDERS. The URL is NOT a real video.
 *    The validator (`npm run validate:data`) flags any entry that still contains
 *    "Replace with…" / "REPLACE_…", and the website hides such entries — they are
 *    never shown or treated as playable songs.
 *
 * 3. Getting a real link: open the official video on YouTube (label / artist
 *    channel preferred), click Share → Copy, and paste it. Supported formats:
 *      https://www.youtube.com/watch?v=VIDEO_ID
 *      https://youtu.be/VIDEO_ID
 *      https://www.youtube.com/shorts/VIDEO_ID
 *    VIDEO_ID is always 11 characters. Never type or guess an id.
 *
 * 4. No link yet? Leave `youtubeUrl` out. The site will show the song with a
 *    clearly-labelled "Find on YouTube" search link instead.
 *
 * 5. Same song in two playlists? Reuse the SAME id, title, artist, language and
 *    youtubeUrl in both. The validator checks they match.
 *
 * 6. Keep `position` as 1, 2, 3… in the order you want songs listed.
 *
 * 7. Run `npm run validate:data` — it reports duplicates, malformed URLs,
 *    placeholders and how many songs each playlist still needs (target 50–60).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  HOW TO ADD A NEW PLAYLIST
 * ─────────────────────────────────────────────────────────────────────────────
 * 1. Copy any existing playlist file, e.g. drive-mode.ts → monsoon-mood.ts
 * 2. Change id ("pl-monsoon-mood"), slug ("monsoon-mood"), the exported
 *    variable name, title, shortTitle, description, theme, accentColor,
 *    category/situations, tags, languages and songs.
 * 3. Import it in src/data/playlists/index.ts and add it to `playlistSources`.
 * 4. The page /playlists/monsoon-mood, its share preview and the sitemap entry
 *    are generated automatically.
 *
 * NOTE: tests currently assert exactly 15 playlists (the MVP spec). Update
 * EXPECTED_PLAYLIST_COUNT in src/lib/data.test.ts when you add or remove one.
 */
export {};
