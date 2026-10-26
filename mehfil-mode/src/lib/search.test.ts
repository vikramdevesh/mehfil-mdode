import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { getSearchIndex } from "./data-provider.ts";
import { normalize, search, tokenize } from "./search.ts";

const index = await getSearchIndex();
const all = [...index.playlists, ...index.songs];
const titles = (q: string) => search(all, q).map((r) => r.doc.title);

describe("normalize/tokenize", () => {
  it("lowercases, strips punctuation and collapses repeated letters", () => {
    assert.equal(normalize("SHAADI!!"), "shadi");
    assert.equal(normalize("Girls' Night  In"), "girls night in");
    assert.equal(normalize("Yaaron"), normalize("yaron"));
  });
  it("drops stop words but keeps meaningful terms", () => {
    assert.deepEqual(tokenize("songs for the shaadi"), ["shadi"]);
    assert.deepEqual(tokenize("songs"), ["songs"]);
  });
});

describe("search", () => {
  it("finds playlists by title, case-insensitively", () => {
    assert.ok(titles("salon").includes("Salon Classics"));
    assert.ok(titles("SALON").includes("Salon Classics"));
    assert.ok(titles("SaLoN ClAsSiCs")[0] === "Salon Classics");
  });

  it("finds playlists by Hinglish short title and description", () => {
    assert.ok(titles("naai ki dukaan").includes("Salon Classics"));
    assert.ok(titles("kulhad").includes("Chai Tapri Mix"));
  });

  it("supports Hinglish ↔ English aliases and spelling variants", () => {
    assert.ok(titles("wedding").includes("Mahila Sangeet"));
    assert.ok(titles("shadi").includes("Mahila Sangeet"));
    assert.ok(titles("barat").includes("Baraat Bangers"));
    assert.ok(titles("tea").includes("Chai Tapri Mix"));
    assert.ok(titles("dosti").includes("Purane Yaar"));
  });

  it("finds songs by title and singer", () => {
    assert.ok(titles("lag jaa gale").includes("Lag Jaa Gale"));
    const jagjit = search(index.songs, "jagjit singh");
    assert.ok(jagjit.length >= 3);
    assert.ok(jagjit.every((r) => r.doc.artist?.includes("Jagjit Singh")));
  });

  it("finds by language and tags", () => {
    const bhojpuri = search(all, "bhojpuri");
    assert.ok(bhojpuri.some((r) => r.doc.kind === "song" && r.doc.language === "Bhojpuri"));
    assert.ok(titles("garba").includes("Desi Folk & Festive"));
  });

  it("requires every term to match", () => {
    assert.equal(search(all, "ghazal haryanvi").length, 0);
  });

  it("returns nothing for empty or nonsense queries", () => {
    assert.equal(search(all, "").length, 0);
    assert.equal(search(all, "   ").length, 0);
    assert.equal(search(all, "zzqxjv").length, 0);
  });

  it("de-duplicates songs shared between playlists", () => {
    const kala = index.songs.filter((s) => s.id === "kala-chashma");
    assert.equal(kala.length, 1);
    assert.deepEqual(kala[0].playlists.map((p) => p.slug).sort(), ["baraat-bangers", "party-mode"]);
  });
});
