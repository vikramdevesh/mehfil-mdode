import type { Playlist } from "../../types/music.ts";

/**
 * Purane Yaar — 30+ Doston Ki Mehfil
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const puraneYaar: Playlist = {
  id: "pl-purane-yaar",
  slug: "purane-yaar",
  title: "Purane Yaar",
  shortTitle: "30+ Doston Ki Mehfil",
  description:
    "Wahi purane dost, wahi purani baatein. 90s ke hits, dosti ke gaane aur yaadon wali mehfil ke liye.",
  theme: { from: "#172554", via: "#2563EB", to: "#38BDF8", pattern: "rings", icon: "users", emoji: "🫂" },
  accentColor: "#60A5FA",
  category: "friends-mehfil",
  situations: ["friends-mehfil"],
  tags: ["friendship", "dosti", "90s", "nostalgia", "yaari", "old friends"],
  languages: ["Hindi", "Urdu"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "yeh-dosti", title: "Yeh Dosti", artist: "Kishore Kumar, Manna Dey", language: "Hindi", tags: ["bollywood", "friendship", "70s"], position: 1 },
    { id: "dil-chahta-hai", title: "Dil Chahta Hai", artist: "Shankar Mahadevan", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 2 },
    { id: "yaaron", title: "Yaaron", artist: "KK", language: "Hindi", tags: ["indipop", "friendship", "90s"], position: 3 },
    { id: "purani-jeans", title: "Purani Jeans", artist: "Ali Haider", language: "Urdu", tags: ["pop", "nostalgia", "90s"], position: 4 },
    { id: "tere-jaisa-yaar-kahan", title: "Tere Jaisa Yaar Kahan", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "friendship", "80s"], position: 5 },
    { id: "pal", title: "Pal", artist: "KK", language: "Hindi", tags: ["indipop", "nostalgia", "90s"], position: 6 },
    { id: "jaane-kyun", title: "Jaane Kyun", artist: "Vishal Dadlani", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 7 },
    { id: "kuch-kuch-hota-hai", title: "Kuch Kuch Hota Hai", artist: "Udit Narayan, Alka Yagnik", language: "Hindi", tags: ["bollywood", "90s", "nostalgia"], position: 8 },
  ],
};
