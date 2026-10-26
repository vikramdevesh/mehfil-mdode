import type { Playlist } from "../../types/music.ts";

/**
 * Girls' Night In — Girls Ki Baithak
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const girlsNightIn: Playlist = {
  id: "pl-girls-night-in",
  slug: "girls-night-in",
  title: "Girls' Night In",
  shortTitle: "Girls Ki Baithak",
  description:
    "Saheliyon ki baithak — sing-along, dosti ke anthems, karaoke favourites aur thode heartbreak wale gaane bhi.",
  theme: { from: "#3B0764", via: "#A21CAF", to: "#FB7185", pattern: "rays", icon: "sparkles", emoji: "✨" },
  accentColor: "#F0ABFC",
  category: "friends-mehfil",
  situations: ["friends-mehfil", "party-mode"],
  tags: ["girls night", "karaoke", "sing-along", "heartbreak", "saheli", "dance"],
  languages: ["Hindi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "tareefan", title: "Tareefan", artist: "Badshah, Lisa Mishra, QARAN", language: "Hindi", tags: ["bollywood", "party", "girls-night"], position: 1 },
    { id: "kar-gayi-chull", title: "Kar Gayi Chull", artist: "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", language: "Hindi", tags: ["bollywood", "dance"], position: 2 },
    { id: "dola-re-dola", title: "Dola Re Dola", artist: "Shreya Ghoshal, Kavita Krishnamurthy, KK", language: "Hindi", tags: ["bollywood", "dance", "2000s"], position: 3 },
    { id: "ghagra", title: "Ghagra", artist: "Rekha Bhardwaj, Vishal Dadlani", language: "Hindi", tags: ["bollywood", "dance"], position: 4 },
    { id: "nagada-sang-dhol", title: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", language: "Hindi", tags: ["bollywood", "garba", "dance"], position: 5 },
    { id: "channa-mereya", title: "Channa Mereya", artist: "Arijit Singh", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 6 },
    { id: "tujhe-bhula-diya", title: "Tujhe Bhula Diya", artist: "Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 7 },
    { id: "ainvayi-ainvayi", title: "Ainvayi Ainvayi", artist: "Sunidhi Chauhan, Salim Merchant", language: "Hindi", tags: ["bollywood", "dance", "sing-along"], position: 8 },
  ],
};
