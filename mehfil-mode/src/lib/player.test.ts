import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getAllPlaylists } from "./data-provider.ts";
import { buildQueue, isPlayable, nextIndex, prevIndex, shuffleTracks, toTrack } from "./player.ts";
import { resolveSong } from "./songs.ts";

const base = { title: "T", artist: "A", language: "Hindi", tags: [], position: 1 };

describe("player queue", () => {
  it("only queues linked, embeddable songs", () => {
    const linked = resolveSong({ ...base, id: "a", youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
    const blocked = resolveSong({ ...base, id: "b", youtubeUrl: "https://youtu.be/dQw4w9WgXcQ", embeddable: false });
    const search = resolveSong({ ...base, id: "c" });
    const broken = resolveSong({ ...base, id: "d", youtubeUrl: "https://vimeo.com/123" });
    assert.equal(isPlayable(linked), true);
    assert.equal(isPlayable(blocked), false);
    assert.equal(isPlayable(search), false);
    assert.equal(isPlayable(broken), false);
    assert.deepEqual(buildQueue([linked, blocked, search, broken, linked]).map((t) => t.id), ["a"]);
    assert.equal(toTrack(search), undefined);
    assert.equal(toTrack(linked)?.videoId, "dQw4w9WgXcQ");
  });

  it("every real playlist has a playable queue built only from checked links", async () => {
    for (const p of await getAllPlaylists()) {
      const q = buildQueue(p.songs);
      assert.ok(q.length >= 20, `${p.slug} has only ${q.length} playable tracks`);
      for (const t of q) {
        assert.match(t.videoId, /^[\w-]{11}$/);
        assert.equal(t.href, `https://www.youtube.com/watch?v=${t.videoId}`);
      }
    }
  });

  it("next/prev handle bounds and repeat", () => {
    assert.equal(nextIndex(0, 3), 1);
    assert.equal(nextIndex(2, 3), -1);
    assert.equal(nextIndex(2, 3, true), 0);
    assert.equal(nextIndex(0, 0), -1);
    assert.equal(prevIndex(0, 3), 0);
    assert.equal(prevIndex(2, 3), 1);
  });

  it("shuffle keeps every track once and can pin the first", () => {
    const tracks = ["a", "b", "c", "d", "e"].map((id) => ({ id, title: id, videoId: "dQw4w9WgXcQ", href: "x" }));
    let seed = 7;
    const rng = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const s = shuffleTracks(tracks, rng, "d");
    assert.equal(s[0].id, "d");
    assert.deepEqual(s.map((t) => t.id).sort(), ["a", "b", "c", "d", "e"]);
  });
});
