import type { Playlist } from "../../types/music.ts";

/**
 * Highway Anthems — Truck Aur Highway
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const highwayAnthems: Playlist = {
  id: "pl-highway-anthems",
  slug: "highway-anthems",
  title: "Highway Anthems",
  shortTitle: "Truck Aur Highway",
  description:
    "Lambi sadak, dhaba stops aur raat bhar ka safar. Punjabi beats, desi josh aur highway pe chalne wale energetic tracks.",
  theme: { from: "#0F172A", via: "#C2410C", to: "#FBBF24", pattern: "rays", icon: "truck", emoji: "🛣️" },
  accentColor: "#FB923C",
  category: "road-trips",
  situations: ["road-trips"],
  tags: ["road trip", "highway", "punjabi", "desi beats", "safar", "truck"],
  languages: ["Punjabi", "Hindi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "mundian-to-bach-ke", title: "Mundian To Bach Ke", artist: "Panjabi MC, Labh Janjua", language: "Punjabi", tags: ["bhangra", "dhol", "classic"], position: 1 },
    { id: "brown-munde", title: "Brown Munde", artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 2 },
    { id: "lehanga", title: "Lehanga", artist: "Jass Manak", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 3 },
    { id: "excuses", title: "Excuses", artist: "AP Dhillon, Gurinder Gill", language: "Punjabi", tags: ["punjabi-pop", "chill"], position: 4 },
    { id: "do-you-know", title: "Do You Know", artist: "Diljit Dosanjh", language: "Punjabi", tags: ["punjabi-pop", "romantic"], position: 5 },
    { id: "zinda", title: "Zinda", artist: "Siddharth Mahadevan", language: "Hindi", tags: ["bollywood", "motivational", "rock"], position: 6 },
    { id: "safarnama", title: "Safarnama", artist: "Lucky Ali", language: "Hindi", tags: ["bollywood", "travel", "soft"], position: 7 },
    { id: "ilahi", title: "Ilahi", artist: "Arijit Singh", language: "Hindi", tags: ["bollywood", "travel", "road-trip"], position: 8 },
  ],
};
