import type { Playlist } from "../../types/music.ts";

/**
 * Desi Folk & Festive — Tyohar Aur Lokgeet
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const desiFolkFestive: Playlist = {
  id: "pl-desi-folk-festive",
  slug: "desi-folk-festive",
  title: "Desi Folk & Festive",
  shortTitle: "Tyohar Aur Lokgeet",
  description:
    "Holi ke rang, Diwali ki roshni, Garba ki taal aur Bhangra ka josh. Lokgeet aur tyohar ke gaane, desh ke alag-alag kone se.",
  theme: { from: "#3F0D12", via: "#C026D3", to: "#FACC15", pattern: "rings", icon: "flame", emoji: "🪔" },
  accentColor: "#FACC15",
  category: "shaadi-celebrations",
  situations: ["shaadi-celebrations"],
  tags: ["folk", "lokgeet", "holi", "diwali", "garba", "bhangra", "teej", "tyohar"],
  languages: ["Hindi", "Rajasthani", "Punjabi", "Bhojpuri", "Gujarati"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "rang-barse", title: "Rang Barse", artist: "Amitabh Bachchan", language: "Hindi", tags: ["holi", "festive", "classic"], position: 1 },
    { id: "balam-pichkari", title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", language: "Hindi", tags: ["holi", "festive", "dance"], position: 2 },
    { id: "chogada", title: "Chogada", artist: "Darshan Raval, Asees Kaur", language: "Hindi", tags: ["garba", "navratri", "festive"], position: 3 },
    { id: "kesariya-balam", title: "Kesariya Balam", artist: "Allah Jilai Bai", language: "Rajasthani", tags: ["folk", "rajasthani", "classic"], position: 4 },
    { id: "gur-nalon-ishq-mitha", title: "Gur Nalon Ishq Mitha", artist: "Malkit Singh", language: "Punjabi", tags: ["bhangra", "folk", "festive"], position: 5 },
    { id: "kaanch-hi-baans-ke-bahangiya", title: "Kaanch Hi Baans Ke Bahangiya", artist: "Sharda Sinha", language: "Bhojpuri", tags: ["chhath", "folk", "festive"], position: 6 },
    { id: "ghoomar", title: "Ghoomar", artist: "Shreya Ghoshal, Swaroop Khan", language: "Hindi", tags: ["rajasthani-folk", "festive", "dance"], position: 7 },
    { id: "moti-veraana", title: "Moti Veraana", artist: "Amit Trivedi, Osman Mir", language: "Gujarati", tags: ["garba", "folk", "festive"], position: 8 },
  ],
};
