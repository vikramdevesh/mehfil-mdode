import type { Playlist } from "../../types/music.ts";

/**
 * Sophisticated Sounds — Elite Lounge
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const sophisticatedSounds: Playlist = {
  id: "pl-sophisticated-sounds",
  slug: "sophisticated-sounds",
  title: "Sophisticated Sounds",
  shortTitle: "Elite Lounge",
  description:
    "Ek refined shaam: jazz standards, Hindustani classical, soft Sufi aur lounge — dheemi roshni aur achhi baat-cheet ke saath.",
  theme: { from: "#0B1020", via: "#1F2A44", to: "#D4A24C", pattern: "grid", icon: "wine", emoji: "🎷" },
  accentColor: "#E2B860",
  category: "chill-lounge",
  situations: ["chill-lounge"],
  tags: ["jazz", "lounge", "classical", "sufi", "evening", "instrumental"],
  languages: ["Instrumental", "Hindi", "Urdu"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "take-five", title: "Take Five", artist: "The Dave Brubeck Quartet", language: "Instrumental", tags: ["jazz", "lounge"], position: 1 },
    { id: "so-what", title: "So What", artist: "Miles Davis", language: "Instrumental", tags: ["jazz", "lounge"], position: 2 },
    { id: "aaoge-jab-tum", title: "Aaoge Jab Tum", artist: "Ustad Rashid Khan", language: "Hindi", tags: ["hindustani-classical", "bollywood"], position: 3 },
    { id: "afreen-afreen-coke-studio", title: "Afreen Afreen", artist: "Rahat Fateh Ali Khan, Momina Mustehsan", language: "Urdu", tags: ["sufi", "coke-studio"], position: 4 },
    { id: "moh-moh-ke-dhaage", title: "Moh Moh Ke Dhaage", artist: "Papon", language: "Hindi", tags: ["bollywood", "soft"], position: 5 },
    { id: "kasoor", title: "Kasoor", artist: "Prateek Kuhad", language: "Hindi", tags: ["indie", "soft"], position: 6 },
    { id: "tajdar-e-haram", title: "Tajdar-e-Haram", artist: "Atif Aslam", language: "Urdu", tags: ["qawwali", "coke-studio"], position: 7 },
    { id: "babul-mora", title: "Babul Mora", artist: "K. L. Saigal", language: "Hindi", tags: ["thumri", "classic"], position: 8 },
  ],
};
