import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  buildYouTubeSearchUrl,
  isValidYouTubeVideoUrl,
  parseYouTubePlaylistUrl,
  parseYouTubeVideoUrl,
} from "./youtube.ts";

// NOTE: ids below are syntactically valid test strings, not real videos.
const ID = "Ab3_dE-6gH9";

describe("parseYouTubeVideoUrl", () => {
  it("accepts watch?v= URLs", () => {
    const r = parseYouTubeVideoUrl(`https://www.youtube.com/watch?v=${ID}`);
    assert.equal(r.ok, true);
    if (r.ok) assert.equal(r.videoId, ID);
  });

  it("accepts watch URLs with extra params and without www / with m. and music.", () => {
    for (const u of [
      `https://youtube.com/watch?v=${ID}&t=42s`,
      `https://m.youtube.com/watch?v=${ID}`,
      `https://music.youtube.com/watch?v=${ID}&list=abc`,
      `http://www.youtube.com/watch?feature=share&v=${ID}`,
    ]) {
      assert.equal(isValidYouTubeVideoUrl(u), true, u);
    }
  });

  it("accepts youtu.be short links", () => {
    const r = parseYouTubeVideoUrl(`https://youtu.be/${ID}?si=xyz`);
    assert.equal(r.ok && r.videoId, ID);
  });

  it("accepts shorts, embed and live URLs", () => {
    assert.equal(isValidYouTubeVideoUrl(`https://www.youtube.com/shorts/${ID}`), true);
    assert.equal(isValidYouTubeVideoUrl(`https://www.youtube.com/embed/${ID}`), true);
    assert.equal(isValidYouTubeVideoUrl(`https://www.youtube.com/live/${ID}`), true);
  });

  it("returns a canonical watch URL", () => {
    const r = parseYouTubeVideoUrl(`https://youtu.be/${ID}`);
    assert.equal(r.ok && r.canonicalUrl, `https://www.youtube.com/watch?v=${ID}`);
  });

  it("rejects unrelated domains and look-alikes", () => {
    for (const u of [
      `https://vimeo.com/${ID}`,
      `https://youtube.com.evil.com/watch?v=${ID}`,
      `https://notyoutube.com/watch?v=${ID}`,
      `https://example.com/watch?v=${ID}`,
    ]) {
      const r = parseYouTubeVideoUrl(u);
      assert.equal(r.ok, false, u);
    }
  });

  it("rejects malformed URLs and ids", () => {
    const cases: [string, string][] = [
      ["", "empty"],
      ["not a url", "not-a-url"],
      [`ftp://youtube.com/watch?v=${ID}`, "bad-protocol"],
      ["javascript:alert(1)", "bad-protocol"],
      ["https://www.youtube.com/watch", "missing-id"],
      ["https://www.youtube.com/channel/UC123", "missing-id"],
      ["https://www.youtube.com/watch?v=short", "bad-id"],
      ["https://youtu.be/Zq9xLm2Wk7Rt5", "bad-id"],
      ["https://www.youtube.com/watch?v=has spaces!", "bad-id"],
    ];
    for (const [u, reason] of cases) {
      const r = parseYouTubeVideoUrl(u);
      assert.equal(r.ok, false, u);
      if (!r.ok) assert.equal(r.reason, reason, u);
    }
  });

  it("flags placeholder URLs from the template", () => {
    const r = parseYouTubeVideoUrl("https://www.youtube.com/watch?v=REPLACE_WITH_REAL_VIDEO_ID");
    assert.equal(r.ok, false);
    if (!r.ok) assert.equal(r.reason, "placeholder");
    const d = parseYouTubeVideoUrl("https://youtu.be/aaaaaaaaaaa");
    assert.equal(d.ok, false);
  });
});

describe("parseYouTubePlaylistUrl", () => {
  it("accepts playlist URLs", () => {
    const r = parseYouTubePlaylistUrl("https://www.youtube.com/playlist?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG");
    assert.equal(r.ok, true);
  });
  it("rejects video URLs, other domains and placeholders", () => {
    assert.equal(parseYouTubePlaylistUrl(`https://www.youtube.com/watch?v=${ID}`).ok, false);
    assert.equal(parseYouTubePlaylistUrl("https://example.com/playlist?list=PL123456789").ok, false);
    assert.equal(parseYouTubePlaylistUrl("https://www.youtube.com/playlist?list=REPLACE_ME_PLEASE").ok, false);
    assert.equal(parseYouTubePlaylistUrl(undefined).ok, false);
  });
});

describe("buildYouTubeSearchUrl", () => {
  it("encodes title and artist into a results URL", () => {
    const u = buildYouTubeSearchUrl("Lag Jaa Gale", "Lata Mangeshkar");
    assert.equal(u, "https://www.youtube.com/results?search_query=Lag%20Jaa%20Gale%20Lata%20Mangeshkar");
    // A search link is never mistaken for a video link.
    assert.equal(isValidYouTubeVideoUrl(u), false);
  });
});
