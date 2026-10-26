import type { Playlist } from "../../types/music.ts";

/**
 * Full Volume Mode — Desi Swag
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const fullVolumeMode: Playlist = {
  id: "pl-full-volume-mode",
  slug: "full-volume-mode",
  title: "Full Volume Mode",
  shortTitle: "Desi Swag",
  description:
    "Bass full, speaker full, josh full. Haryanvi, Punjabi aur desi hip-hop — jab volume kam karna mana ho.",
  theme: { from: "#111827", via: "#DC2626", to: "#F97316", pattern: "waves", icon: "volume", emoji: "🔊" },
  accentColor: "#F87171",
  category: "party-mode",
  situations: ["party-mode", "road-trips"],
  tags: ["haryanvi", "punjabi", "desi hip-hop", "rap", "bass", "swag"],
  languages: ["Haryanvi", "Hindi", "Punjabi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "52-gaj-ka-daman", title: "52 Gaj Ka Daman", artist: "Renuka Panwar", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 1 },
    { id: "chatak-matak", title: "Chatak Matak", artist: "Renuka Panwar", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 2 },
    { id: "mere-gully-mein", title: "Mere Gully Mein", artist: "DIVINE, Naezy", language: "Hindi", tags: ["desi-hip-hop", "rap", "mumbai"], position: 3 },
    { id: "apna-time-aayega", title: "Apna Time Aayega", artist: "Ranveer Singh, DIVINE", language: "Hindi", tags: ["desi-hip-hop", "rap", "bollywood"], position: 4 },
    { id: "kaam-25", title: "Kaam 25", artist: "DIVINE", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 5 },
    { id: "machayenge", title: "Machayenge", artist: "Emiway Bantai", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 6 },
    { id: "295", title: "295", artist: "Sidhu Moose Wala", language: "Punjabi", tags: ["punjabi", "bass", "desi"], position: 7 },
    { id: "bambiha-bole", title: "Bambiha Bole", artist: "Amrit Maan, Sidhu Moose Wala", language: "Punjabi", tags: ["punjabi", "bass", "desi"], position: 8 },
  ],
};
