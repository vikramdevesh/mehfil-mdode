import type { Playlist } from "../../types/music.ts";

/**
 * Girls' Night In — Girls Ki Baithak
 *
 * 32 songs; 31 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
  languages: ["Hindi", "Punjabi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "tareefan", title: "Tareefan", artist: "Badshah, Lisa Mishra, QARAN", youtubeUrl: "https://www.youtube.com/watch?v=3SWc5G8Gx7E", language: "Hindi", tags: ["bollywood", "party", "girls-night"], position: 1 },
    { id: "kar-gayi-chull", title: "Kar Gayi Chull", artist: "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=NTHz9ephYTw", language: "Hindi", tags: ["bollywood", "dance"], position: 2 },
    { id: "dola-re-dola", title: "Dola Re Dola", artist: "Shreya Ghoshal, Kavita Krishnamurthy, KK", youtubeUrl: "https://www.youtube.com/watch?v=B4HbUt58eFU", language: "Hindi", tags: ["bollywood", "dance", "2000s"], position: 3 },
    { id: "ghagra", title: "Ghagra", artist: "Rekha Bhardwaj, Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=T0BQ86ejaGg", language: "Hindi", tags: ["bollywood", "dance"], position: 4 },
    { id: "nagada-sang-dhol", title: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", youtubeUrl: "https://www.youtube.com/watch?v=cLIQzxgFeNE", language: "Hindi", tags: ["bollywood", "garba", "dance"], position: 5 },
    { id: "channa-mereya", title: "Channa Mereya", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=284Ov7ysmfA", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 6 },
    { id: "tujhe-bhula-diya", title: "Tujhe Bhula Diya", artist: "Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak", youtubeUrl: "https://www.youtube.com/watch?v=03O-cYh8sEw", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 7 },
    { id: "ainvayi-ainvayi", title: "Ainvayi Ainvayi", artist: "Sunidhi Chauhan, Salim Merchant", youtubeUrl: "https://www.youtube.com/watch?v=pElk1ShPrcE", language: "Hindi", tags: ["bollywood", "dance", "sing-along"], position: 8 },
    { id: "sun-saathiya", title: "Sun Saathiya", artist: "Priya Saraiya, Divya Kumar", youtubeUrl: "https://www.youtube.com/watch?v=TGpG56pg3UU", language: "Hindi", tags: ["bollywood", "romantic"], position: 9 },
    { id: "bhaage-re-mann", title: "Bhaage Re Mann", artist: "Sunidhi Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=pkV4VbjIcCo", language: "Hindi", tags: ["bollywood", "soulful"], position: 10 },
    { id: "yeh-ishq-hai", title: "Yeh Ishq Hai", artist: "Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=b_sCZbYyuO4", language: "Hindi", tags: ["bollywood", "sing-along"], position: 11 },
    { id: "mauja-hi-mauja", title: "Mauja Hi Mauja", artist: "Mika Singh", youtubeUrl: "https://www.youtube.com/watch?v=PaDaoNnOQaM", language: "Hindi", tags: ["bollywood", "dance"], position: 12 },
    { id: "ishq-bulaava", title: "Ishq Bulaava", artist: "Sanam Puri, Shipra Goyal", youtubeUrl: "https://www.youtube.com/watch?v=c2gSzYLJ8sY", language: "Hindi", tags: ["bollywood", "romantic"], position: 13 },
    { id: "teri-meri", title: "Teri Meri", artist: "Rahat Fateh Ali Khan, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=KjFofSnbjGQ", language: "Hindi", tags: ["bollywood", "romantic"], position: 14 },
    { id: "saibo", title: "Saibo", artist: "Shreya Ghoshal, Tochi Raina", youtubeUrl: "https://www.youtube.com/watch?v=GtNrQy90Ih4", language: "Hindi", tags: ["bollywood", "romantic"], position: 15 },
    { id: "ishq-sufiyana", title: "Ishq Sufiyana", artist: "Kamal Khan", youtubeUrl: "https://www.youtube.com/watch?v=QghZFauvXYM", language: "Hindi", tags: ["bollywood", "sufi"], position: 16 },
    { id: "chikni-chameli", title: "Chikni Chameli", artist: "Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=QcQpqWhTBCE", language: "Hindi", tags: ["bollywood", "dance"], position: 17 },
    { id: "ooh-la-la", title: "Ooh La La", artist: "Bappi Lahiri, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=BFMzpC5PNCU", language: "Hindi", tags: ["bollywood", "dance"], position: 18 },
    { id: "jiya-jale", title: "Jiya Jale", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=qaMQNwBhghA", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 19 },
    { id: "bahara", title: "Bahara", artist: "Shreya Ghoshal, Sona Mohapatra", youtubeUrl: "https://www.youtube.com/watch?v=7N74i_rAfFE", language: "Hindi", tags: ["bollywood", "sing-along"], position: 20 },
    { id: "deewani-mastani", title: "Deewani Mastani", artist: "Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=h6lHUn20J5g", language: "Hindi", tags: ["bollywood", "dance"], position: 21 },
    { id: "dil-dooba", title: "Dil Dooba", artist: "Sonu Nigam, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=SAiyopkF22M", language: "Hindi", tags: ["bollywood", "2000s"], position: 22 },
    { id: "hasi-female", title: "Hasi", artist: "Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=pGcbthDbU_k", language: "Hindi", tags: ["bollywood", "emotional"], position: 23 },
    { id: "kabhi-jo-baadal-barse", title: "Kabhi Jo Baadal Barse", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=YIzjWBa0-eI", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 24 },
    { id: "hamari-adhuri-kahani", title: "Hamari Adhuri Kahani", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=sVRwZEkXepg", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 25 },
    { id: "main-agar-kahoon", title: "Main Agar Kahoon", artist: "Sonu Nigam, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=DAYszemgPxc", language: "Hindi", tags: ["bollywood", "romantic"], position: 26 },
    { id: "kudi-nu-nachne-de", title: "Kudi Nu Nachne De", artist: "Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=oSpMspvMkSQ", language: "Hindi", tags: ["bollywood", "dance", "girls-night"], position: 27 },
    { id: "girls-like-to-swing", title: "Girls Like to Swing", artist: "Sunidhi Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=dZ6EWt8ti2c", language: "Hindi", tags: ["bollywood", "dance", "girls-night"], position: 28 },
    { id: "london-thumakda", title: "London Thumakda", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=udra3Mfw2oo", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 29 },
    { id: "kala-chashma", title: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=4WRJHbL4dAk", language: "Punjabi", tags: ["bollywood", "dance", "party"], position: 30 },
    { id: "tum-hi-ho", title: "Tum Hi Ho", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=BjL7AuPsmEk", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 31 },
    { id: "agar-tum-saath-ho", title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", language: "Hindi", tags: ["bollywood", "2010s", "emotional"], position: 32 },
  ],
};
