import type { Playlist } from "../../types/music.ts";

/**
 * Family Function Hits — Sabke Favourite
 *
 * 32 songs; 30 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
    { id: "ude-jab-jab-zulfein-teri", title: "Ude Jab Jab Zulfein Teri", artist: "Mohammed Rafi, Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=unDLLU81UXw", language: "Hindi", tags: ["bollywood", "50s", "evergreen"], position: 2 },
    { id: "didi-tera-devar-deewana", title: "Didi Tera Devar Deewana", artist: "Lata Mangeshkar, S. P. Balasubrahmanyam", youtubeUrl: "https://www.youtube.com/watch?v=tEKi6vnPApI", language: "Hindi", tags: ["bollywood", "90s", "family"], position: 3 },
    { id: "wah-wah-ramji", title: "Wah Wah Ramji", artist: "Lata Mangeshkar, S. P. Balasubrahmanyam", youtubeUrl: "https://www.youtube.com/watch?v=o1tIvfplhHc", language: "Hindi", tags: ["bollywood", "90s", "wedding"], position: 4 },
    { id: "chaiyya-chaiyya", title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", youtubeUrl: "https://www.youtube.com/watch?v=9MX-QejdVaQ", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 5 },
    { id: "mere-khwabon-mein", title: "Mere Khwabon Mein Jo Aaye", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=Zxgvob1Ew0c", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 6 },
    { id: "say-shava-shava", title: "Say Shava Shava", artist: "Udit Narayan, Alka Yagnik, Sudesh Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=WRSeV_27z6k", language: "Hindi", tags: ["bollywood", "2000s", "family"], position: 7 },
    { id: "ek-do-teen", title: "Ek Do Teen", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=dx57HiK1wUg", language: "Hindi", tags: ["bollywood", "80s", "dance"], position: 8 },
    { id: "le-gayi-le-gayi", title: "Le Gayi Le Gayi", artist: "Asha Bhosle, Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=dGZb1kv5zW0", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 9 },
    { id: "koi-mil-gaya-kkhh", title: "Koi Mil Gaya", artist: "Udit Narayan, Alka Yagnik, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=Foh01tG09Nk", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 10 },
    { id: "yeh-ladka-hai-allah", title: "Yeh Ladka Hai Allah", artist: "Udit Narayan, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=BE8_rNJOQ-0", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 11 },
    { id: "suraj-hua-maddham", title: "Suraj Hua Maddham", artist: "Sonu Nigam, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=L0zKs8i7Nc8", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 12 },
    { id: "k3g-title", title: "Kabhi Khushi Kabhie Gham", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=2wn3RHVpfxE", language: "Hindi", tags: ["bollywood", "2000s", "family"], position: 13 },
    { id: "ladki-badi-anjani-hai", title: "Ladki Badi Anjani Hai", artist: "Kumar Sanu, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=oJcE_QPFAng", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 14 },
    { id: "main-yahan-hoon", title: "Main Yahan Hoon", artist: "Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=m6Y8xEfyXTs", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 15 },
    { id: "tujhe-dekha-to", title: "Tujhe Dekha To", artist: "Kumar Sanu, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=cNV5hLSa9H8", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 16 },
    { id: "pehla-pehla-pyar", title: "Pehla Pehla Pyar Hai", artist: "S. P. Balasubrahmanyam", youtubeUrl: "https://www.youtube.com/watch?v=dh_M17DyUBA", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 17 },
    { id: "joote-do-paise-lo", title: "Joote Do Paise Lo", artist: "Lata Mangeshkar, S. P. Balasubrahmanyam", youtubeUrl: "https://www.youtube.com/watch?v=cTfqLSmsxt0", language: "Hindi", tags: ["bollywood", "90s", "wedding"], position: 18 },
    { id: "maye-ni-maye", title: "Maye Ni Maye", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=ruSCf1VUp1o", language: "Hindi", tags: ["bollywood", "90s", "wedding"], position: 19 },
    { id: "mehndi-laga-ke-rakhna", title: "Mehndi Laga Ke Rakhna", artist: "Lata Mangeshkar, Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=pLVyyGEQ0Uk", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 20 },
    { id: "bole-chudiyan", title: "Bole Chudiyan", artist: "Kavita Krishnamurthy, Sonu Nigam, Alka Yagnik, Udit Narayan, Amit Kumar", youtubeUrl: "https://www.youtube.com/watch?v=IBvg3WeqP1U", language: "Hindi", tags: ["wedding", "sangeet", "2000s"], position: 21 },
    { id: "you-are-my-soniya", title: "You Are My Soniya", artist: "Sonu Nigam, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=Y9Hl39U71iE", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 22 },
    { id: "kal-ho-naa-ho", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", youtubeUrl: "https://www.youtube.com/watch?v=oq5Ocx_rEv8", language: "Hindi", tags: ["bollywood", "2000s", "sing-along"], position: 23 },
    { id: "its-the-time-to-disco", title: "It's the Time to Disco", artist: "Shaan, Vasundhara Das, KK", youtubeUrl: "https://www.youtube.com/watch?v=AQjLV-6xpnk", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 24 },
    { id: "badi-mushkil-baba", title: "Badi Mushkil Baba Badi Mushkil", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=lXidzm8Ruxg", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 25 },
    { id: "aaj-mere-yaar-ki-shaadi-hai", title: "Aaj Mere Yaar Ki Shaadi Hai", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=Yw7AEZetZ0A", language: "Hindi", tags: ["baraat", "wedding", "classic"], position: 26 },
    { id: "chunari-chunari", title: "Chunari Chunari", artist: "Abhijeet, Anuradha Sriram", youtubeUrl: "https://www.youtube.com/watch?v=daYw_z5Oe5o", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 27 },
    { id: "bachna-ae-haseeno-1977", title: "Bachna Ae Haseeno", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "70s", "dance"], position: 28 },
    { id: "sajan-ji-ghar-aaye", title: "Saajanji Ghar Aaye", artist: "Kumar Sanu, Alka Yagnik, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=8XtXLVylOoU", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 29 },
    { id: "mere-haathon-mein", title: "Mere Haathon Mein Nau Nau Chudiyan Hai", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=2yG2e6F0-I0", language: "Hindi", tags: ["wedding", "sangeet", "80s"], position: 30 },
    { id: "gali-mein-aaj-chand", title: "Gali Mein Aaj Chand Nikla", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=azEOf5PuqNA", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 31 },
    { id: "kajra-re", title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali", youtubeUrl: "https://www.youtube.com/watch?v=4dsFQFCvVGU", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 32 },
  ],
};
