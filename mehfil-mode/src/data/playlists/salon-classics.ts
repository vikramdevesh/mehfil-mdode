import type { Playlist } from "../../types/music.ts";

/**
 * Salon Classics — Naai Ki Dukaan
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const salonClassics: Playlist = {
  id: "pl-salon-classics",
  slug: "salon-classics",
  title: "Salon Classics",
  shortTitle: "Naai Ki Dukaan",
  description:
    "Kainchi ki khach-khach aur radio pe Kishore da — woh evergreen gaane jo har local salon mein bajte hain. Purani Bollywood ki mithaas, ek haircut ke saath.",
  theme: { from: "#1E3A8A", via: "#3B5BDB", to: "#F59E0B", pattern: "stripes", icon: "scissors", emoji: "💈" },
  accentColor: "#F5B83D",
  category: "chai-tapri",
  situations: ["chai-tapri"],
  tags: ["old bollywood", "evergreen", "retro", "salon", "kishore kumar", "purane gaane"],
  languages: ["Hindi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "chura-liya-hai-tumne", title: "Chura Liya Hai Tumne Jo Dil Ko", artist: "Asha Bhosle, Mohammed Rafi", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 1 },
    { id: "pal-pal-dil-ke-paas", title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 2 },
    { id: "lag-jaa-gale", title: "Lag Jaa Gale", artist: "Lata Mangeshkar", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 3 },
    { id: "yeh-shaam-mastani", title: "Yeh Shaam Mastani", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 4 },
    { id: "gulabi-aankhen", title: "Gulabi Aankhen", artist: "Mohammed Rafi", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 5 },
    { id: "ek-ladki-ko-dekha", title: "Ek Ladki Ko Dekha To Aisa Laga", artist: "Kumar Sanu", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 6 },
    { id: "mere-sapno-ki-rani", title: "Mere Sapno Ki Rani", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "60s", "retro"], position: 7 },
    { id: "tujhe-dekha-to", title: "Tujhe Dekha To", artist: "Kumar Sanu, Lata Mangeshkar", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 8 },
  ],
};
