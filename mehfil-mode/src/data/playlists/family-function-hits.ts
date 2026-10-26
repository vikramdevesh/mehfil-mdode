import type { Playlist } from "../../types/music.ts";

/**
 * Family Function Hits — Sabke Favourite
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const familyFunctionHits: Playlist = {
  id: "pl-family-function-hits",
  slug: "family-function-hits",
  title: "Family Function Hits",
  shortTitle: "Sabke Favourite",
  description:
    "Dadi se lekar chhote bhai tak, sabke favourite. Family functions ke liye har generation ke Bollywood gaane.",
  theme: { from: "#431407", via: "#EA580C", to: "#FDE68A", pattern: "stripes", icon: "home", emoji: "🏡" },
  accentColor: "#FDBA74",
  category: "shaadi-celebrations",
  situations: ["shaadi-celebrations"],
  tags: ["family", "all ages", "function", "bollywood", "evergreen", "ghar"],
  languages: ["Hindi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "mere-yaar-ki-shaadi-hai", title: "Mere Yaar Ki Shaadi Hai", artist: "Udit Narayan, Alka Yagnik, Sonu Nigam, Jaspinder Narula", language: "Hindi", tags: ["bollywood", "wedding", "2000s"], position: 1 },
    { id: "ude-jab-jab-zulfein-teri", title: "Ude Jab Jab Zulfein Teri", artist: "Mohammed Rafi, Asha Bhosle", language: "Hindi", tags: ["bollywood", "50s", "evergreen"], position: 2 },
    { id: "didi-tera-devar-deewana", title: "Didi Tera Devar Deewana", artist: "Lata Mangeshkar, S. P. Balasubrahmanyam", language: "Hindi", tags: ["bollywood", "90s", "family"], position: 3 },
    { id: "wah-wah-ramji", title: "Wah Wah Ramji", artist: "Lata Mangeshkar, S. P. Balasubrahmanyam", language: "Hindi", tags: ["bollywood", "90s", "wedding"], position: 4 },
    { id: "chaiyya-chaiyya", title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 5 },
    { id: "mere-khwabon-mein", title: "Mere Khwabon Mein Jo Aaye", artist: "Lata Mangeshkar", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 6 },
    { id: "say-shava-shava", title: "Say Shava Shava", artist: "Udit Narayan, Alka Yagnik, Sudesh Bhosle", language: "Hindi", tags: ["bollywood", "2000s", "family"], position: 7 },
    { id: "ek-do-teen", title: "Ek Do Teen", artist: "Alka Yagnik", language: "Hindi", tags: ["bollywood", "80s", "dance"], position: 8 },
  ],
};
