import type { Playlist } from "../../types/music.ts";

/**
 * Bus Wale Hits — Desi Bus Aur Local Safar
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const busWaleHits: Playlist = {
  id: "pl-bus-wale-hits",
  slug: "bus-wale-hits",
  title: "Bus Wale Hits",
  shortTitle: "Desi Bus Aur Local Safar",
  description:
    "Window seat, earphones aadhe-aadhe share, aur conductor ka radio. Rozmarra ke safar ke Hindi aur regional hits.",
  theme: { from: "#14532D", via: "#16A34A", to: "#FDE047", pattern: "grid", icon: "bus", emoji: "🚌" },
  accentColor: "#A3E635",
  category: "road-trips",
  situations: ["road-trips", "chai-tapri"],
  tags: ["bus", "local travel", "safar", "bhojpuri", "90s", "regional"],
  languages: ["Bhojpuri", "Hindi", "Punjabi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "lollipop-lagelu", title: "Lollipop Lagelu", artist: "Pawan Singh", language: "Bhojpuri", tags: ["bhojpuri", "dance", "classic"], position: 1 },
    { id: "tip-tip-barsa-paani", title: "Tip Tip Barsa Paani", artist: "Alka Yagnik, Udit Narayan", language: "Hindi", tags: ["bollywood", "90s", "monsoon"], position: 2 },
    { id: "ankhiyon-se-goli-maare", title: "Ankhiyon Se Goli Maare", artist: "Sonu Nigam, Jaspinder Narula", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 3 },
    { id: "saat-samundar-paar", title: "Saat Samundar Paar", artist: "Sadhana Sargam", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 4 },
    { id: "dil-to-pagal-hai", title: "Dil To Pagal Hai", artist: "Lata Mangeshkar, Udit Narayan", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 5 },
    { id: "laung-laachi", title: "Laung Laachi", artist: "Mannat Noor", language: "Punjabi", tags: ["punjabi", "folk-pop"], position: 6 },
    { id: "chamma-chamma", title: "Chamma Chamma", artist: "Alka Yagnik", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 7 },
    { id: "kajra-re", title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 8 },
  ],
};
