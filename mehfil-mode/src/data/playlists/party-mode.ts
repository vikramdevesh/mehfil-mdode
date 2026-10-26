import type { Playlist } from "../../types/music.ts";

/**
 * Party Mode — College Aur House Party
 *
 * 35 songs; 35 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
  languages: ["Hindi", "Punjabi", "Telugu", "Tamil"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "london-thumakda", title: "London Thumakda", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=udra3Mfw2oo", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 1 },
    { id: "badtameez-dil", title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", youtubeUrl: "https://www.youtube.com/watch?v=N0uDmkTV08Y", language: "Hindi", tags: ["bollywood", "dance", "2010s"], position: 2 },
    { id: "kala-chashma", title: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=4WRJHbL4dAk", language: "Punjabi", tags: ["bollywood", "dance", "party"], position: 3 },
    { id: "the-breakup-song", title: "The Breakup Song", artist: "Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz", youtubeUrl: "https://www.youtube.com/watch?v=hAB2MptEqWQ", language: "Hindi", tags: ["bollywood", "dance", "party"], position: 4 },
    { id: "desi-girl", title: "Desi Girl", artist: "Shankar Mahadevan, Sunidhi Chauhan, Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=wDIrpvH8MzE", language: "Hindi", tags: ["bollywood", "dance", "2000s"], position: 5 },
    { id: "tunak-tunak-tun", title: "Tunak Tunak Tun", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=QoEONbxXWIQ", language: "Punjabi", tags: ["bhangra", "dance", "90s"], position: 6 },
    { id: "sheila-ki-jawani", title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=wNGZXBd2NhY", language: "Hindi", tags: ["bollywood", "dance", "2010s"], position: 7 },
    { id: "abhi-toh-party-shuru-hui-hai", title: "Abhi Toh Party Shuru Hui Hai", artist: "Badshah, Aastha Gill", youtubeUrl: "https://www.youtube.com/watch?v=2GMAmutnVPw", language: "Hindi", tags: ["bollywood", "party", "2010s"], position: 8 },
    { id: "nashe-si-chadh-gayi", title: "Nashe Si Chadh Gayi", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=Wd2B8OAotU8", language: "Hindi", tags: ["bollywood", "dance"], position: 9 },
    { id: "gallan-goodiyaan", title: "Gallan Goodiyaan", artist: "Shankar Mahadevan, Farhan Akhtar, Yashita Sharma", youtubeUrl: "https://www.youtube.com/watch?v=9fxfKaTOAV0", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 10 },
    { id: "balam-pichkari", title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", youtubeUrl: "https://www.youtube.com/watch?v=OW0zhR5xtlE", language: "Hindi", tags: ["holi", "festive", "dance"], position: 11 },
    { id: "swag-se-swagat", title: "Swag Se Swagat", artist: "Vishal Dadlani, Neha Bhasin", youtubeUrl: "https://www.youtube.com/watch?v=7TRFf7uUfhQ", language: "Hindi", tags: ["bollywood", "dance"], position: 12 },
    { id: "ghungroo", title: "Ghungroo", artist: "Arijit Singh, Shilpa Rao", youtubeUrl: "https://www.youtube.com/watch?v=qFkNATtc3mc", language: "Hindi", tags: ["bollywood", "dance"], position: 13 },
    { id: "malhari", title: "Malhari", artist: "Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=l_MyUGq7pgs", language: "Hindi", tags: ["bollywood", "dance"], position: 14 },
    { id: "aankh-marey", title: "Aankh Marey", artist: "Neha Kakkar, Mika Singh, Kumar Sanu", youtubeUrl: "https://www.youtube.com/watch?v=_KhQT-LGb-4", language: "Hindi", tags: ["bollywood", "dance", "party"], position: 15 },
    { id: "dilbar", title: "Dilbar", artist: "Neha Kakkar, Dhvani Bhanushali, Ikka", youtubeUrl: "https://www.youtube.com/watch?v=JFcgOboQZ08", language: "Hindi", tags: ["bollywood", "dance"], position: 16 },
    { id: "garmi", title: "Garmi", artist: "Badshah, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=IE8OD5FbU-c", language: "Hindi", tags: ["bollywood", "dance"], position: 17 },
    { id: "tamma-tamma-again", title: "Tamma Tamma Again", artist: "Badshah, Bappi Lahiri, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=EEX_XM6SxmY", language: "Hindi", tags: ["bollywood", "dance"], position: 18 },
    { id: "lungi-dance", title: "Lungi Dance", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=fbwCgt1hMD4", language: "Hindi", tags: ["bollywood", "party"], position: 19 },
    { id: "chaar-botal-vodka", title: "Chaar Botal Vodka", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=x8F5dz8kv1w", language: "Hindi", tags: ["bollywood", "party"], position: 20 },
    { id: "saturday-saturday", title: "Saturday Saturday", artist: "Badshah, Indeep Bakshi, Akriti Kakar", youtubeUrl: "https://www.youtube.com/watch?v=0fXlZ3vnQd0", language: "Hindi", tags: ["bollywood", "party"], position: 21 },
    { id: "baby-ko-bass", title: "Baby Ko Bass Pasand Hai", artist: "Vishal Dadlani, Badshah, Shalmali Kholgade", youtubeUrl: "https://www.youtube.com/watch?v=p062GuAhsRs", language: "Hindi", tags: ["bollywood", "party"], position: 22 },
    { id: "ude-dil-befikre", title: "Ude Dil Befikre", artist: "Benny Dayal", youtubeUrl: "https://www.youtube.com/watch?v=gXe-KWe-YMs", language: "Hindi", tags: ["bollywood", "party"], position: 23 },
    { id: "matargashti", title: "Matargashti", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=Vkcki2dRCxM", language: "Hindi", tags: ["bollywood", "fun"], position: 24 },
    { id: "jhoome-jo-pathaan", title: "Jhoome Jo Pathaan", artist: "Arijit Singh, Sukriti Kakar", youtubeUrl: "https://www.youtube.com/watch?v=YxWlaYCA8MU", language: "Hindi", tags: ["bollywood", "dance"], position: 25 },
    { id: "what-jhumka", title: "What Jhumka?", artist: "Arijit Singh, Jonita Gandhi", youtubeUrl: "https://www.youtube.com/watch?v=P1fIdFRnfqw", language: "Hindi", tags: ["bollywood", "dance"], position: 26 },
    { id: "naatu-naatu", title: "Naatu Naatu", artist: "Rahul Sipligunj, Kaala Bhairava", youtubeUrl: "https://www.youtube.com/watch?v=4_eEgJhsBMo", language: "Telugu", tags: ["tollywood", "dance"], position: 27 },
    { id: "oo-antava", title: "Oo Antava", artist: "Indravathi Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=u_wB6byrl5k", language: "Telugu", tags: ["tollywood", "dance"], position: 28 },
    { id: "why-this-kolaveri-di", title: "Why This Kolaveri Di", artist: "Dhanush", youtubeUrl: "https://www.youtube.com/watch?v=YR12Z8f1Dh8", language: "Tamil", tags: ["kollywood", "fun"], position: 29 },
    { id: "arabic-kuthu", title: "Arabic Kuthu", artist: "Anirudh Ravichander, Jonita Gandhi", youtubeUrl: "https://www.youtube.com/watch?v=rZHGVsTZL3o", language: "Tamil", tags: ["kollywood", "dance"], position: 30 },
    { id: "rowdy-baby", title: "Rowdy Baby", artist: "Dhanush, Dhee", youtubeUrl: "https://www.youtube.com/watch?v=x6Q7c9RyMzk", language: "Tamil", tags: ["kollywood", "dance"], position: 31 },
    { id: "bom-diggy-diggy", title: "Bom Diggy Diggy", artist: "Zack Knight, Jasmin Walia", youtubeUrl: "https://www.youtube.com/watch?v=yIIGQB6EMAM", language: "Hindi", tags: ["party", "dance"], position: 32 },
    { id: "hookah-bar", title: "Hookah Bar", artist: "Himesh Reshammiya, Vineet Singh, Aman Trikha", youtubeUrl: "https://www.youtube.com/watch?v=b4b1cMVZOUU", embeddable: false, language: "Hindi", tags: ["bollywood", "party"], position: 33 },
    { id: "sooraj-dooba-hain", title: "Sooraj Dooba Hain", artist: "Arijit Singh, Aditi Singh Sharma", youtubeUrl: "https://www.youtube.com/watch?v=nJZcbidTutE", language: "Hindi", tags: ["bollywood", "party"], position: 34 },
    { id: "kar-gayi-chull", title: "Kar Gayi Chull", artist: "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=NTHz9ephYTw", language: "Hindi", tags: ["bollywood", "dance"], position: 35 },
  ],
};
