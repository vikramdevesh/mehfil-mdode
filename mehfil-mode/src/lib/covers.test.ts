import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { findCoverImage } from "./data-provider.ts";

describe("drop-in covers", () => {
  it("returns undefined when no cover file exists", () => {
    assert.equal(findCoverImage("salon-classics", path.join(tmpdir(), "no-such-dir")), undefined);
  });

  it("finds public/covers/<slug>.<ext>", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "mm-"));
    mkdirSync(path.join(dir, "covers"));
    writeFileSync(path.join(dir, "covers", "drive-mode.webp"), "x");
    assert.equal(findCoverImage("drive-mode", dir), "/covers/drive-mode.webp");
    assert.equal(findCoverImage("party-mode", dir), undefined);
  });
});
