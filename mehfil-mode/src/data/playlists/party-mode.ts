import type { Playlist } from "../../types/music.ts";

/**
 * Party Mode — College Aur House Party
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const partyMode: Playlist = {
  id: "pl-party-mode",
  slug: "party-mode",
  title: "Party Mode",
  shortTitle: "College Aur House Party",
  description:
    "College fest se lekar ghar ki house party tak — Bollywood dance numbers, Punjabi party tracks aur dance floor favourites.",
  theme: { from: "#2E1065", via: "#7C3AED", to: "#EC4899", pattern: "dots", icon: "party", emoji: "🪩" },
  accentColor: "#C084FC",
  category: "party-mode",
  situations: ["party-mode"],
  tags: ["party", "dance", "college", "house party", "bollywood", "punjabi"],
  languages: ["Hindi", "Punjabi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "london-thumakda", title: "London Thumakda", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 1 },
    { id: "badtameez-dil", title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", language: "Hindi", tags: ["bollywood", "dance", "2010s"], position: 2 },
    { id: "kala-chashma", title: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", language: "Punjabi", tags: ["bollywood", "dance", "party"], position: 3 },
    { id: "the-breakup-song", title: "The Breakup Song", artist: "Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz", language: "Hindi", tags: ["bollywood", "dance", "party"], position: 4 },
    { id: "desi-girl", title: "Desi Girl", artist: "Shankar Mahadevan, Sunidhi Chauhan, Vishal Dadlani", language: "Hindi", tags: ["bollywood", "dance", "2000s"], position: 5 },
    { id: "tunak-tunak-tun", title: "Tunak Tunak Tun", artist: "Daler Mehndi", language: "Punjabi", tags: ["bhangra", "dance", "90s"], position: 6 },
    { id: "sheila-ki-jawani", title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", language: "Hindi", tags: ["bollywood", "dance", "2010s"], position: 7 },
    { id: "abhi-toh-party-shuru-hui-hai", title: "Abhi Toh Party Shuru Hui Hai", artist: "Badshah, Aastha Gill", language: "Hindi", tags: ["bollywood", "party", "2010s"], position: 8 },
  ],
};
