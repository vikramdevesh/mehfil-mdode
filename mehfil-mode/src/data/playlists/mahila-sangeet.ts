import type { Playlist } from "../../types/music.ts";

/**
 * Mahila Sangeet — Shaadi Special
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const mahilaSangeet: Playlist = {
  id: "pl-mahila-sangeet",
  slug: "mahila-sangeet",
  title: "Mahila Sangeet",
  shortTitle: "Shaadi Special",
  description:
    "Mehendi ki khushboo, dholak ki thaap aur ghar ki mehfil. Sangeet, mehendi aur haldi ke liye shaadi ke pyaare gaane.",
  theme: { from: "#4A044E", via: "#BE185D", to: "#FBBF24", pattern: "dots", icon: "flower", emoji: "🌼" },
  accentColor: "#F472B6",
  category: "shaadi-celebrations",
  situations: ["shaadi-celebrations"],
  tags: ["sangeet", "mehendi", "haldi", "wedding", "shaadi", "dholak"],
  languages: ["Hindi", "Punjabi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "mehendi-hai-rachne-wali", title: "Mehendi Hai Rachne Wali", artist: "Alka Yagnik", language: "Hindi", tags: ["wedding", "mehendi"], position: 1 },
    { id: "mehndi-laga-ke-rakhna", title: "Mehndi Laga Ke Rakhna", artist: "Lata Mangeshkar, Udit Narayan", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 2 },
    { id: "banno", title: "Banno", artist: "Brijesh Shandilya, Swati Sharma", language: "Hindi", tags: ["wedding", "sangeet"], position: 3 },
    { id: "sajan-ji-ghar-aaye", title: "Saajanji Ghar Aaye", artist: "Kumar Sanu, Alka Yagnik, Kavita Krishnamurthy", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 4 },
    { id: "mere-haathon-mein", title: "Mere Haathon Mein Nau Nau Chudiyan Hai", artist: "Lata Mangeshkar", language: "Hindi", tags: ["wedding", "sangeet", "80s"], position: 5 },
    { id: "laathe-di-chadar", title: "Laathe Di Chadar", artist: "Quratulain Balouch, Farhan Saeed", language: "Punjabi", tags: ["folk", "coke-studio", "wedding"], position: 6 },
    { id: "sasural-genda-phool", title: "Sasural Genda Phool", artist: "Rekha Bhardwaj", language: "Hindi", tags: ["wedding", "folk"], position: 7 },
    { id: "bole-chudiyan", title: "Bole Chudiyan", artist: "Kavita Krishnamurthy, Sonu Nigam, Alka Yagnik, Udit Narayan, Amit Kumar", language: "Hindi", tags: ["wedding", "sangeet", "2000s"], position: 8 },
  ],
};
