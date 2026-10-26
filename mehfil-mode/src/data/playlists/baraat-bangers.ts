import type { Playlist } from "../../types/music.ts";

/**
 * Baraat Bangers — Band Baaja
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const baraatBangers: Playlist = {
  id: "pl-baraat-bangers",
  slug: "baraat-bangers",
  title: "Baraat Bangers",
  shortTitle: "Band Baaja",
  description:
    "Dhol bajega, ghodi chalegi, aur sab naachenge. Baraat ke high-energy dance tracks aur celebration anthems.",
  theme: { from: "#450A0A", via: "#B91C1C", to: "#F59E0B", pattern: "rays", icon: "drum", emoji: "🥁" },
  accentColor: "#FBBF24",
  category: "shaadi-celebrations",
  situations: ["shaadi-celebrations", "party-mode"],
  tags: ["baraat", "dhol", "wedding", "dance", "band baaja", "celebration"],
  languages: ["Hindi", "Punjabi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "aaj-mere-yaar-ki-shaadi-hai", title: "Aaj Mere Yaar Ki Shaadi Hai", artist: "Mohammed Rafi", language: "Hindi", tags: ["baraat", "wedding", "classic"], position: 1 },
    { id: "morni-banke", title: "Morni Banke", artist: "Guru Randhawa, Neha Kakkar", language: "Punjabi", tags: ["baraat", "dance", "wedding"], position: 2 },
    { id: "lak-28-kudi-da", title: "Lak 28 Kudi Da", artist: "Diljit Dosanjh, Yo Yo Honey Singh", language: "Punjabi", tags: ["bhangra", "dance", "wedding"], position: 3 },
    { id: "kala-chashma", title: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", language: "Punjabi", tags: ["bollywood", "dance", "party"], position: 4 },
    { id: "nachde-ne-saare", title: "Nachde Ne Saare", artist: "Jasleen Royal, Harshdeep Kaur, Siddharth Mahadevan", language: "Punjabi", tags: ["wedding", "dance"], position: 5 },
    { id: "dhating-naach", title: "Dhating Naach", artist: "Nakash Aziz, Neha Kakkar", language: "Hindi", tags: ["baraat", "dance"], position: 6 },
    { id: "tunak-tunak-tun", title: "Tunak Tunak Tun", artist: "Daler Mehndi", language: "Punjabi", tags: ["bhangra", "dance", "90s"], position: 7 },
    { id: "mundian-to-bach-ke", title: "Mundian To Bach Ke", artist: "Panjabi MC, Labh Janjua", language: "Punjabi", tags: ["bhangra", "dhol", "classic"], position: 8 },
  ],
};
