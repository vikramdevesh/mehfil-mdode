import type { Playlist } from "../../types/music.ts";

/**
 * Salon Classics — Naai Ki Dukaan
 *
 * 38 songs; 37 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
    { id: "chura-liya-hai-tumne", title: "Chura Liya Hai Tumne Jo Dil Ko", artist: "Asha Bhosle, Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=mFNNKeunEeY", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 1 },
    { id: "pal-pal-dil-ke-paas", title: "Pal Pal Dil Ke Paas", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=QwLQ4_gkvsE", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 2 },
    { id: "lag-jaa-gale", title: "Lag Jaa Gale", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=A9arc2hWNOw", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 3 },
    { id: "yeh-shaam-mastani", title: "Yeh Shaam Mastani", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=tNrpDUn9vxI", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 4 },
    { id: "gulabi-aankhen", title: "Gulabi Aankhen", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=Xsn0QjMN3fM", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 5 },
    { id: "ek-ladki-ko-dekha", title: "Ek Ladki Ko Dekha To Aisa Laga", artist: "Kumar Sanu", youtubeUrl: "https://www.youtube.com/watch?v=htMvfOfixuM", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 6 },
    { id: "mere-sapno-ki-rani", title: "Mere Sapno Ki Rani", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=6BBz4BxZmw0", embeddable: false, language: "Hindi", tags: ["bollywood", "60s", "retro"], position: 7 },
    { id: "tujhe-dekha-to", title: "Tujhe Dekha To", artist: "Kumar Sanu, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=cNV5hLSa9H8", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 8 },
    { id: "yeh-raatein-yeh-mausam", title: "Yeh Raatein Yeh Mausam", artist: "Kishore Kumar, Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=ouNb2s33ioQ", language: "Hindi", tags: ["bollywood", "50s", "evergreen"], position: 9 },
    { id: "chalte-chalte-1976", title: "Chalte Chalte", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=7WQ7spaISYw", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 10 },
    { id: "o-mere-dil-ke-chain", title: "O Mere Dil Ke Chain", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=5eyflIV8pzM", language: "Hindi", tags: ["bollywood", "70s", "romantic"], position: 11 },
    { id: "roop-tera-mastana", title: "Roop Tera Mastana", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=TgMqJQ_6ToI", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 12 },
    { id: "zindagi-ek-safar", title: "Zindagi Ek Safar Hai Suhana", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=mzxHflxI-es", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 13 },
    { id: "ek-ajnabee-haseena-se", title: "Ek Ajnabee Haseena Se", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=b6WLXTkei_k", language: "Hindi", tags: ["bollywood", "70s", "romantic"], position: 14 },
    { id: "kya-hua-tera-wada", title: "Kya Hua Tera Wada", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=Z5D1dhTMclI", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 15 },
    { id: "badan-pe-sitare", title: "Badan Pe Sitare Lapete Huye", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=MkABeVCv4lw", language: "Hindi", tags: ["bollywood", "60s", "retro"], position: 16 },
    { id: "aaj-mausam-bada-beimaan", title: "Aaj Mausam Bada Beimaan Hai", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=opABbsJaRLQ", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 17 },
    { id: "teri-bindiya-re", title: "Teri Bindiya Re", artist: "Mohammed Rafi, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=E8CMFRFUlu4", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 18 },
    { id: "abhi-na-jao-chhod-kar", title: "Abhi Na Jao Chhod Kar", artist: "Mohammed Rafi, Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=oDfK3RfSlKk", language: "Hindi", tags: ["bollywood", "60s", "romantic"], position: 19 },
    { id: "dum-maro-dum", title: "Dum Maro Dum", artist: "Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=GUn3P5QyLRY", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 20 },
    { id: "piya-tu-ab-to-aaja", title: "Piya Tu Ab To Aaja", artist: "Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=wHeS5s8zQLU", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 21 },
    { id: "mehbooba-mehbooba", title: "Mehbooba Mehbooba", artist: "R. D. Burman", youtubeUrl: "https://www.youtube.com/watch?v=E22-45q0vD4", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 22 },
    { id: "tere-bina-zindagi-se", title: "Tere Bina Zindagi Se Koi", artist: "Lata Mangeshkar, Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=otSbGQIYgpQ", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 23 },
    { id: "hum-dono-do-premi", title: "Hum Dono Do Premi", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=tBgquvIYD-I", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 24 },
    { id: "kora-kagaz-tha", title: "Kora Kagaz Tha Yeh Man Mera", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=TnLnqmiOx4g", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 25 },
    { id: "mere-naina-sawan-bhadon", title: "Mere Naina Sawan Bhadon", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=_4Ccxj_A4UU", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 26 },
    { id: "gata-rahe-mera-dil", title: "Gata Rahe Mera Dil", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=dbZW8Dral8o", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 27 },
    { id: "khoya-khoya-chand", title: "Khoya Khoya Chand", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=8PcdM46pQCE", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 28 },
    { id: "yeh-mera-deewanapan-hai", title: "Yeh Mera Deewanapan Hai", artist: "Mukesh", youtubeUrl: "https://www.youtube.com/watch?v=jBxDcoFVdVQ", language: "Hindi", tags: ["bollywood", "50s", "evergreen"], position: 29 },
    { id: "kahin-door-jab-din-dhal-jaye", title: "Kahin Door Jab Din Dhal Jaye", artist: "Mukesh", youtubeUrl: "https://www.youtube.com/watch?v=6N4a-qPs6C0", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 30 },
    { id: "main-shayar-to-nahin", title: "Main Shayar To Nahin", artist: "Shailendra Singh", youtubeUrl: "https://www.youtube.com/watch?v=3rpVOeCFyWk", language: "Hindi", tags: ["bollywood", "70s", "romantic"], position: 31 },
    { id: "hum-tum-ek-kamre-mein", title: "Hum Tum Ek Kamre Mein Band Ho", artist: "Shailendra Singh, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=Lf01ajBUpu0", language: "Hindi", tags: ["bollywood", "70s", "retro"], position: 32 },
    { id: "jab-koi-baat-bigad-jaye", title: "Jab Koi Baat Bigad Jaye", artist: "Kumar Sanu, Sadhana Sargam", youtubeUrl: "https://www.youtube.com/watch?v=mNSYPtzpfd4", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 33 },
    { id: "tu-cheez-badi-hai-mast", title: "Tu Cheez Badi Hai Mast Mast", artist: "Udit Narayan, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=fT4vP4PnLxg", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 34 },
    { id: "dheere-dheere-se", title: "Dheere Dheere Se Meri Zindagi", artist: "Kumar Sanu, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=Mcs2xEZ6K8o", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 35 },
    { id: "gali-mein-aaj-chand", title: "Gali Mein Aaj Chand Nikla", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=azEOf5PuqNA", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 36 },
    { id: "mera-joota-hai-japani", title: "Mera Joota Hai Japani", artist: "Mukesh", youtubeUrl: "https://www.youtube.com/watch?v=AdjVZ2XLPHs", language: "Hindi", tags: ["bollywood", "50s", "evergreen"], position: 37 },
    { id: "ae-mere-zohra-jabeen", title: "Ae Meri Zohra Jabeen", artist: "Manna Dey", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 38 },
  ],
};
