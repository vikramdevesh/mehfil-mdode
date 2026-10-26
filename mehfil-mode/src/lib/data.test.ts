import { describe, it } from "node:test";
import assert from "node:assert/strict";
import type { Playlist, Song } from "../types/music.ts";
import { playlistSources } from "../data/playlists/index.ts";
import { situations } from "../data/situations.ts";
import {
  getAllPlaylists,
  getLanguageGroups,
  getPlaylistBySlug,
  getRandomPool,
  getSituationGroups,
} from "./data-provider.ts";
import { getSongLinkStatus, resolvePlaylist, resolveSong } from "./songs.ts";
import { validatePlaylists } from "./validate.ts";
import { pickRandom, pickRandomExcept } from "./random.ts";
import { absoluteUrl, getBaseUrl } from "./url.ts";

/** The MVP spec requires exactly 15 playlists. Update when you add/remove one. */
const EXPECTED_PLAYLIST_COUNT = 15;

const REQUIRED_SLUGS = [
  "salon-classics",
  "highway-anthems",
  "chai-tapri-mix",
  "bus-wale-hits",
  "full-volume-mode",
  "party-mode",
  "purane-yaar",
  "ghazal-mehfil",
  "sophisticated-sounds",
  "mahila-sangeet",
  "girls-night-in",
  "family-function-hits",
  "drive-mode",
  "desi-folk-festive",
  "baraat-bangers",
];

describe("playlist data", () => {
  it(`has exactly ${EXPECTED_PLAYLIST_COUNT} playlists`, () => {
    assert.equal(playlistSources.length, EXPECTED_PLAYLIST_COUNT);
  });

  it("has unique ids and slugs", () => {
    assert.equal(new Set(playlistSources.map((p) => p.slug)).size, playlistSources.length);
    assert.equal(new Set(playlistSources.map((p) => p.id)).size, playlistSources.length);
  });

  it("contains every playlist from the spec", () => {
    const slugs = playlistSources.map((p) => p.slug);
    for (const s of REQUIRED_SLUGS) assert.ok(slugs.includes(s), s);
  });

  it("passes validation with no errors", () => {
    const errors = validatePlaylists(playlistSources).filter((i) => i.level === "error");
    assert.deepEqual(errors, []);
  });

  it("every playlist resolves by slug", async () => {
    for (const p of playlistSources) {
      const found = await getPlaylistBySlug(p.slug);
      assert.ok(found, p.slug);
    }
    assert.equal(await getPlaylistBySlug("does-not-exist"), undefined);
  });

  it("makes no false claims: stats match the actual song list", async () => {
    for (const p of await getAllPlaylists()) {
      assert.equal(p.stats.total, p.songs.length, p.slug);
      assert.equal(p.stats.linked, p.songs.filter((s) => s.status === "linked").length);
      // No playlist URL is configured yet, so none may be shown as valid.
      if (!p.youtubePlaylistUrl) assert.equal(p.validPlaylistUrl, undefined);
    }
  });

  it("only links songs with well-formed YouTube URLs", async () => {
    for (const p of await getAllPlaylists()) {
      for (const s of p.songs) {
        if (s.status === "linked") assert.match(s.href, /^https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}$/);
        else assert.match(s.href, /^https:\/\/www\.youtube\.com\/results\?search_query=/);
      }
    }
  });
});

describe("song link status", () => {
  const base: Song = { id: "t", title: "Test Song", artist: "Test Artist", language: "Hindi", tags: [], position: 1 };

  it("linked when URL is well-formed", () => {
    const s = resolveSong({ ...base, youtubeUrl: "https://youtu.be/Ab3_dE-6gH9" });
    assert.equal(s.status, "linked");
    assert.equal(s.href, "https://www.youtube.com/watch?v=Ab3_dE-6gH9");
  });

  it("search fallback when URL is missing", () => {
    assert.equal(getSongLinkStatus(base), "search");
  });

  it("invalid when URL is malformed or not YouTube", () => {
    assert.equal(getSongLinkStatus({ ...base, youtubeUrl: "https://vimeo.com/123" }), "invalid");
    const s = resolveSong({ ...base, youtubeUrl: "https://youtube.com/watch?v=bad" });
    assert.equal(s.status, "invalid");
    assert.doesNotMatch(s.href, /watch\?v=/);
  });

  it("placeholder template entries are hidden and never playable", () => {
    const template: Song = {
      id: "song-001",
      title: "Replace with actual song title",
      artist: "Replace with actual artist",
      youtubeUrl: "https://www.youtube.com/watch?v=REPLACE_WITH_REAL_VIDEO_ID",
      language: "Hindi",
      tags: ["classic", "bollywood"],
      position: 1,
    };
    assert.equal(getSongLinkStatus(template), "placeholder");
    const pl: Playlist = { ...playlistSources[0], songs: [template, { ...base, position: 2 }] };
    const resolved = resolvePlaylist(pl);
    assert.equal(resolved.songs.length, 1);
    assert.equal(resolved.stats.total, 1);
    const warnings = validatePlaylists([pl]).filter((i) => i.message.startsWith("Placeholder"));
    assert.equal(warnings.length, 1);
  });

  it("validator flags malformed URLs, duplicate slugs and inconsistent shared songs", () => {
    const a: Playlist = { ...playlistSources[0], songs: [{ ...base, youtubeUrl: "https://vimeo.com/12345" }] };
    const b: Playlist = { ...playlistSources[0], id: "other", songs: [{ ...base, title: "Different" }] };
    const msgs = validatePlaylists([a, b]).filter((i) => i.level === "error").map((i) => i.message);
    assert.ok(msgs.some((m) => m.startsWith("Bad YouTube URL")));
    assert.ok(msgs.some((m) => m.startsWith("Duplicate slug")));
    assert.ok(msgs.some((m) => m.includes("differs from its entry")));
  });
});

describe("groupings", () => {
  it("situation groups are derived from playlist data", async () => {
    const groups = await getSituationGroups();
    assert.equal(groups.length, situations.length);
    for (const g of groups) {
      for (const p of g.playlists) assert.ok(p.situations.includes(g.situation.id));
    }
  });

  it("regional languages come only from real song data", async () => {
    const langs = await getLanguageGroups({ regionalOnly: true });
    const songLangs = new Set(playlistSources.flatMap((p) => p.songs.map((s) => s.language)));
    for (const g of langs) {
      assert.ok(songLangs.has(g.language));
      assert.ok(g.songCount > 0);
    }
    assert.ok(!langs.some((g) => g.language === "Instrumental"));
  });
});

describe("random discovery", () => {
  it("only picks from actual data", async () => {
    const pool = await getRandomPool();
    assert.equal(pool.playlists.length, EXPECTED_PLAYLIST_COUNT);
    const slugs = new Set(playlistSources.map((p) => p.slug));
    for (let i = 0; i < 50; i++) assert.ok(slugs.has(pickRandom(pool.playlists)!.slug));
    // No direct links exist yet, so no song may be offered as playable.
    for (const s of pool.linkedSongs) assert.match(s.href, /watch\?v=/);
  });

  it("pickRandom handles bounds and empty lists", () => {
    assert.equal(pickRandom([]), undefined);
    assert.equal(pickRandom([1, 2, 3], () => 0), 1);
    assert.equal(pickRandom([1, 2, 3], () => 0.9999999), 3);
    assert.equal(pickRandomExcept([1, 2], 1, () => 0), 2);
  });
});

describe("canonical URLs", () => {
  it("prefers NEXT_PUBLIC_SITE_URL and strips trailing slashes", () => {
    assert.equal(getBaseUrl({ NEXT_PUBLIC_SITE_URL: "https://mehfil.in/" }), "https://mehfil.in");
    assert.equal(absoluteUrl("/playlists/drive-mode", { NEXT_PUBLIC_SITE_URL: "mehfil.in" }), "https://mehfil.in/playlists/drive-mode");
  });
  it("falls back to the Vercel production URL, then localhost", () => {
    assert.equal(getBaseUrl({ VERCEL_PROJECT_PRODUCTION_URL: "mehfil.vercel.app" }), "https://mehfil.vercel.app");
    assert.equal(getBaseUrl({}), "http://localhost:3000");
  });
});
