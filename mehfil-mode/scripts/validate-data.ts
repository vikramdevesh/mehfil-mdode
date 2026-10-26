/**
 * Validate playlist data:  npm run validate:data
 *
 * Errors (exit code 1): duplicate ids/slugs, malformed YouTube URLs,
 * inconsistent shared songs, bad colours, unknown situations…
 * Warnings: placeholder entries, missing languages, songs still needed.
 */
import { playlistSources } from "../src/data/playlists/index.ts";
import { siteConfig } from "../src/config/site.ts";
import { validatePlaylists } from "../src/lib/validate.ts";
import { resolvePlaylist } from "../src/lib/songs.ts";

const target = siteConfig.targetSongsPerPlaylist.min;
const issues = validatePlaylists(playlistSources, { targetMin: target });
const errors = issues.filter((i) => i.level === "error");
const warnings = issues.filter((i) => i.level === "warning");

console.log(`\nMehfil Mode data check — ${playlistSources.length} playlists\n`);
console.log("Playlist".padEnd(26) + "Songs".padStart(6) + "Linked".padStart(8) + "No link".padStart(9) + "Invalid".padStart(9));
for (const p of playlistSources) {
  const r = resolvePlaylist(p);
  console.log(
    p.slug.padEnd(26) +
      String(r.stats.total).padStart(6) +
      String(r.stats.linked).padStart(8) +
      String(r.stats.pendingLink).padStart(9) +
      String(r.stats.invalid).padStart(9),
  );
}

const fmt = (i: (typeof issues)[number]) =>
  `  [${i.playlist ?? "-"}${i.songId ? ` / ${i.songId}` : ""}] ${i.message}`;

const progress = warnings.filter((w) => w.message.includes("to reach target"));
const otherWarnings = warnings.filter((w) => !progress.includes(w));

if (otherWarnings.length) {
  console.log(`\n⚠️  ${otherWarnings.length} warning(s):`);
  otherWarnings.forEach((w) => console.log(fmt(w)));
}
if (progress.length) {
  console.log(`\nℹ️  ${progress.length} playlist(s) below the ${target}-song target (expected while curating).`);
}
if (errors.length) {
  console.log(`\n❌ ${errors.length} error(s):`);
  errors.forEach((e) => console.log(fmt(e)));
  process.exit(1);
}
console.log("\n✅ No errors.\n");
