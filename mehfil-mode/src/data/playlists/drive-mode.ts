import type { Playlist } from "../../types/music.ts";

/**
 * Drive Mode — Long Drive
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const driveMode: Playlist = {
  id: "pl-drive-mode",
  slug: "drive-mode",
  title: "Drive Mode",
  shortTitle: "Long Drive",
  description:
    "Shaam ki long drive, khuli khidki aur soft music. Romantic Bollywood, indie aur safar ke favourite gaane.",
  theme: { from: "#0C1445", via: "#4F46E5", to: "#22D3EE", pattern: "waves", icon: "car", emoji: "🌆" },
  accentColor: "#67E8F9",
  category: "road-trips",
  situations: ["road-trips", "chill-lounge"],
  tags: ["long drive", "romantic", "indie", "road trip", "night drive", "soft"],
  languages: ["Hindi", "English"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "phir-se-ud-chala", title: "Phir Se Ud Chala", artist: "Mohit Chauhan", language: "Hindi", tags: ["bollywood", "travel"], position: 1 },
    { id: "iktara", title: "Iktara", artist: "Kavita Seth, Amitabh Bhattacharya", language: "Hindi", tags: ["bollywood", "soft"], position: 2 },
    { id: "kho-gaye-hum-kahan", title: "Kho Gaye Hum Kahan", artist: "Jasleen Royal, Prateek Kuhad", language: "Hindi", tags: ["bollywood", "indie", "soft"], position: 3 },
    { id: "ilahi", title: "Ilahi", artist: "Arijit Singh", language: "Hindi", tags: ["bollywood", "travel", "road-trip"], position: 4 },
    { id: "tum-ho", title: "Tum Ho", artist: "Mohit Chauhan", language: "Hindi", tags: ["bollywood", "romantic"], position: 5 },
    { id: "jeene-laga-hoon", title: "Jeene Laga Hoon", artist: "Atif Aslam, Shreya Ghoshal", language: "Hindi", tags: ["bollywood", "romantic"], position: 6 },
    { id: "cold-mess", title: "cold/mess", artist: "Prateek Kuhad", language: "English", tags: ["indie", "soft"], position: 7 },
    { id: "khaabon-ke-parinday", title: "Khaabon Ke Parinday", artist: "Mohit Chauhan, Alyssa Mendonsa", language: "Hindi", tags: ["bollywood", "travel"], position: 8 },
  ],
};
