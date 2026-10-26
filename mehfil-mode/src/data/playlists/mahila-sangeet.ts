import type { Playlist } from "../../types/music.ts";

/**
 * Mahila Sangeet — Shaadi Special
 *
 * 31 songs; 30 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
    { id: "mehendi-hai-rachne-wali", title: "Mehendi Hai Rachne Wali", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=ZTpxYgX6RPU", language: "Hindi", tags: ["wedding", "mehendi"], position: 1 },
    { id: "mehndi-laga-ke-rakhna", title: "Mehndi Laga Ke Rakhna", artist: "Lata Mangeshkar, Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=pLVyyGEQ0Uk", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 2 },
    { id: "banno", title: "Banno", artist: "Brijesh Shandilya, Swati Sharma", youtubeUrl: "https://www.youtube.com/watch?v=Oju9kp8tLpY", language: "Hindi", tags: ["wedding", "sangeet"], position: 3 },
    { id: "sajan-ji-ghar-aaye", title: "Saajanji Ghar Aaye", artist: "Kumar Sanu, Alka Yagnik, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=8XtXLVylOoU", language: "Hindi", tags: ["wedding", "sangeet", "90s"], position: 4 },
    { id: "mere-haathon-mein", title: "Mere Haathon Mein Nau Nau Chudiyan Hai", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=2yG2e6F0-I0", language: "Hindi", tags: ["wedding", "sangeet", "80s"], position: 5 },
    { id: "laathe-di-chadar", title: "Laathe Di Chadar", artist: "Quratulain Balouch, Farhan Saeed", youtubeUrl: "https://www.youtube.com/watch?v=SCOKysMnH50", language: "Punjabi", tags: ["folk", "coke-studio", "wedding"], position: 6 },
    { id: "sasural-genda-phool", title: "Sasural Genda Phool", artist: "Rekha Bhardwaj", youtubeUrl: "https://www.youtube.com/watch?v=rjKU6Gk9b7A", language: "Hindi", tags: ["wedding", "folk"], position: 7 },
    { id: "bole-chudiyan", title: "Bole Chudiyan", artist: "Kavita Krishnamurthy, Sonu Nigam, Alka Yagnik, Udit Narayan, Amit Kumar", youtubeUrl: "https://www.youtube.com/watch?v=IBvg3WeqP1U", language: "Hindi", tags: ["wedding", "sangeet", "2000s"], position: 8 },
    { id: "madhaniya", title: "Madhaniya", artist: "Neha Bhasin", youtubeUrl: "https://www.youtube.com/watch?v=UFYSJ5arOyE", language: "Punjabi", tags: ["folk", "wedding"], position: 9 },
    { id: "navrai-majhi", title: "Navrai Majhi", artist: "Sunidhi Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=bfam02NlPBQ", language: "Hindi", tags: ["wedding", "sangeet"], position: 10 },
    { id: "london-thumakda", title: "London Thumakda", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=udra3Mfw2oo", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 11 },
    { id: "mehendi-wale-haath", title: "Mehendi Wale Haath", artist: "Guru Randhawa", youtubeUrl: "https://www.youtube.com/watch?v=uJ6WU-u4i3w", language: "Punjabi", tags: ["wedding", "mehendi"], position: 12 },
    { id: "chunar", title: "Chunar", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=reej07pEHBU", language: "Hindi", tags: ["wedding", "emotional"], position: 13 },
    { id: "din-shagna-da", title: "Din Shagna Da", artist: "Jasleen Royal", youtubeUrl: "https://www.youtube.com/watch?v=1LVpuWpRs3I", language: "Punjabi", tags: ["wedding", "emotional"], position: 14 },
    { id: "kudmayi", title: "Kudmayi", artist: "Shahid Mallya", youtubeUrl: "https://www.youtube.com/watch?v=nFmSK6eSINU", language: "Punjabi", tags: ["wedding", "romantic"], position: 15 },
    { id: "ghar-more-pardesiya", title: "Ghar More Pardesiya", artist: "Shreya Ghoshal, Vaishali Mhade", youtubeUrl: "https://www.youtube.com/watch?v=Fdk3brbEkPw", language: "Hindi", tags: ["wedding", "classical"], position: 16 },
    { id: "dholida", title: "Dholida", artist: "Neha Kakkar, Udit Narayan, Palak Muchhal, Raja Hasan", youtubeUrl: "https://www.youtube.com/watch?v=rz1hAo3Hiy4", language: "Hindi", tags: ["garba", "wedding"], position: 17 },
    { id: "laung-laachi", title: "Laung Laachi", artist: "Mannat Noor", youtubeUrl: "https://www.youtube.com/watch?v=YpkJO_GrCo0", language: "Punjabi", tags: ["punjabi", "folk-pop"], position: 18 },
    { id: "gallan-goodiyaan", title: "Gallan Goodiyaan", artist: "Shankar Mahadevan, Farhan Akhtar, Yashita Sharma", youtubeUrl: "https://www.youtube.com/watch?v=9fxfKaTOAV0", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 19 },
    { id: "hawa-hawai", title: "Hawa Hawai", artist: "Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=IgKdXLfxgQQ", language: "Hindi", tags: ["bollywood", "80s", "dance"], position: 20 },
    { id: "morni-baga-ma-bole", title: "Morni Baga Ma Bole", artist: "Lata Mangeshkar, Ila Arun", youtubeUrl: "https://www.youtube.com/watch?v=7PBpaR9Skhk", language: "Hindi", tags: ["folk", "wedding"], position: 21 },
    { id: "kajra-mohabbat-wala", title: "Kajra Mohabbat Wala", artist: "Asha Bhosle, Shamshad Begum", youtubeUrl: "https://www.youtube.com/watch?v=L81ovh40chw", language: "Hindi", tags: ["bollywood", "60s", "sangeet"], position: 22 },
    { id: "dholi-taro-dhol-baaje", title: "Dholi Taro Dhol Baaje", artist: "Kavita Krishnamurthy, Vinod Rathod, Karsan Sagathia", language: "Hindi", tags: ["garba", "wedding"], position: 23 },
    { id: "tenu-leke", title: "Tenu Leke", artist: "Sonu Nigam, Mahalakshmi Iyer", youtubeUrl: "https://www.youtube.com/watch?v=Cu3QpWEfqgg", language: "Hindi", tags: ["wedding", "romantic"], position: 24 },
    { id: "kajra-re", title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali", youtubeUrl: "https://www.youtube.com/watch?v=4dsFQFCvVGU", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 25 },
    { id: "ghagra", title: "Ghagra", artist: "Rekha Bhardwaj, Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=T0BQ86ejaGg", language: "Hindi", tags: ["bollywood", "dance"], position: 26 },
    { id: "nagada-sang-dhol", title: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", youtubeUrl: "https://www.youtube.com/watch?v=cLIQzxgFeNE", language: "Hindi", tags: ["bollywood", "garba", "dance"], position: 27 },
    { id: "sauda-khara-khara", title: "Sauda Khara Khara", artist: "Diljit Dosanjh, Sukhbir, Dhvani Bhanushali", youtubeUrl: "https://www.youtube.com/watch?v=4pNwmsxXuZA", language: "Punjabi", tags: ["wedding", "dance"], position: 28 },
    { id: "radha-soty", title: "Radha", artist: "Shreya Ghoshal, Udit Narayan, Vishal Dadlani, Shekhar Ravjiani", youtubeUrl: "https://www.youtube.com/watch?v=52deq20h6Q4", language: "Hindi", tags: ["wedding", "dance"], position: 29 },
    { id: "lak-28-kudi-da", title: "Lak 28 Kudi Da", artist: "Diljit Dosanjh, Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=LUXrfuOugnA", language: "Punjabi", tags: ["bhangra", "dance", "wedding"], position: 30 },
    { id: "morni-banke", title: "Morni Banke", artist: "Guru Randhawa, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=1EadhOBcfI0", language: "Punjabi", tags: ["baraat", "dance", "wedding"], position: 31 },
  ],
};
