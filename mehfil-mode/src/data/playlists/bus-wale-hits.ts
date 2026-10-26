import type { Playlist } from "../../types/music.ts";

/**
 * Bus Wale Hits — Desi Bus Aur Local Safar
 *
 * 33 songs; 26 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
    { id: "lollipop-lagelu", title: "Lollipop Lagelu", artist: "Pawan Singh", youtubeUrl: "https://www.youtube.com/watch?v=Gr8G_ldltDE", language: "Bhojpuri", tags: ["bhojpuri", "dance", "classic"], position: 1 },
    { id: "tip-tip-barsa-paani", title: "Tip Tip Barsa Paani", artist: "Alka Yagnik, Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=BtlnpBb4O8E", language: "Hindi", tags: ["bollywood", "90s", "monsoon"], position: 2 },
    { id: "ankhiyon-se-goli-maare", title: "Ankhiyon Se Goli Maare", artist: "Sonu Nigam, Jaspinder Narula", youtubeUrl: "https://www.youtube.com/watch?v=rY_0SOlmrdY", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 3 },
    { id: "saat-samundar-paar", title: "Saat Samundar Paar", artist: "Sadhana Sargam", youtubeUrl: "https://www.youtube.com/watch?v=7TManB-eG_g", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 4 },
    { id: "dil-to-pagal-hai", title: "Dil To Pagal Hai", artist: "Lata Mangeshkar, Udit Narayan", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 5 },
    { id: "laung-laachi", title: "Laung Laachi", artist: "Mannat Noor", youtubeUrl: "https://www.youtube.com/watch?v=YpkJO_GrCo0", language: "Punjabi", tags: ["punjabi", "folk-pop"], position: 6 },
    { id: "chamma-chamma", title: "Chamma Chamma", artist: "Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=vwcjUyvLSZc", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 7 },
    { id: "kajra-re", title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali", youtubeUrl: "https://www.youtube.com/watch?v=4dsFQFCvVGU", language: "Hindi", tags: ["bollywood", "2000s", "dance"], position: 8 },
    { id: "mera-piya-ghar-aaya", title: "Mera Piya Ghar Aaya", artist: "Kavita Krishnamurthy", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 9 },
    { id: "ole-ole", title: "Ole Ole", artist: "Abhijeet", youtubeUrl: "https://www.youtube.com/watch?v=hcCvSmjHwGY", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 10 },
    { id: "choli-ke-peeche", title: "Choli Ke Peeche", artist: "Alka Yagnik, Ila Arun", youtubeUrl: "https://www.youtube.com/watch?v=3OXiqmUhB70", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 11 },
    { id: "kaanta-laga", title: "Kaanta Laga", artist: "Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=I-1Th8lsyiw", embeddable: false, language: "Hindi", tags: ["bollywood", "70s", "dance"], position: 12 },
    { id: "tamma-tamma-loge", title: "Tamma Tamma Loge", artist: "Bappi Lahiri, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=Xs5k7d6kzh8", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 13 },
    { id: "main-khiladi-tu-anari", title: "Main Khiladi Tu Anari", artist: "Abhijeet, Udit Narayan", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 14 },
    { id: "mungda", title: "Mungda", artist: "Usha Mangeshkar", language: "Hindi", tags: ["bollywood", "70s", "dance"], position: 15 },
    { id: "sarkai-lo-khatiya", title: "Sarkai Lo Khatiya", artist: "Kavita Krishnamurthy, Abhijeet", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 16 },
    { id: "aankh-maare-1996", title: "Aankh Maare", artist: "Kumar Sanu, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=0h7PM11RKBU", language: "Hindi", tags: ["bollywood", "90s", "dance"], position: 17 },
    { id: "raja-ko-rani-se", title: "Raja Ko Rani Se Pyar Ho Gaya", artist: "Udit Narayan, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=zzUPS0644Z8", embeddable: false, language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 18 },
    { id: "dekha-hai-pehli-baar", title: "Dekha Hai Pehli Baar", artist: "S. P. Balasubrahmanyam, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=bBjVLCAAM1A", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 19 },
    { id: "mujhe-neend-na-aaye", title: "Mujhe Neend Na Aaye", artist: "Udit Narayan, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=qjLPZsfA9Os", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 20 },
    { id: "pardesi-pardesi", title: "Pardesi Pardesi", artist: "Udit Narayan, Alka Yagnik, Sapna Awasthi", youtubeUrl: "https://www.youtube.com/watch?v=W5lusYuAW0s", language: "Hindi", tags: ["bollywood", "90s", "emotional"], position: 21 },
    { id: "raate-diya-butake", title: "Raate Diya Butake", artist: "Pawan Singh, Priyanka Singh", youtubeUrl: "https://www.youtube.com/watch?v=Q3sS5v2kQQU", language: "Bhojpuri", tags: ["bhojpuri", "dance"], position: 22 },
    { id: "lagavelu-jab-lipistic", title: "Lagavelu Jab Lipistic", artist: "Pawan Singh", language: "Bhojpuri", tags: ["bhojpuri", "dance"], position: 23 },
    { id: "kya-baat-ay", title: "Kya Baat Ay", artist: "Harrdy Sandhu", youtubeUrl: "https://www.youtube.com/watch?v=G0Hx6uN2AJE", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 24 },
    { id: "naah", title: "Naah", artist: "Harrdy Sandhu", youtubeUrl: "https://www.youtube.com/watch?v=8qs2dZO6wcc", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 25 },
    { id: "bijlee-bijlee", title: "Bijlee Bijlee", artist: "Harrdy Sandhu", youtubeUrl: "https://www.youtube.com/watch?v=NwdQx2P_ytk", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 26 },
    { id: "tu-pyar-hai-kisi-aur-ka", title: "Tu Pyar Hai Kisi Aur Ka", artist: "Kumar Sanu, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=47DstHmE-bE", language: "Hindi", tags: ["bollywood", "90s", "heartbreak"], position: 27 },
    { id: "bahut-pyar-karte-hain", title: "Bahut Pyar Karte Hain", artist: "S. P. Balasubrahmanyam", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 28 },
    { id: "jaadu-teri-nazar", title: "Jaadu Teri Nazar", artist: "Udit Narayan", youtubeUrl: "https://www.youtube.com/watch?v=n_oP9Onj0r0", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 29 },
    { id: "tujhe-yaad-na-meri-aayi", title: "Tujhe Yaad Na Meri Aayi", artist: "Udit Narayan, Alka Yagnik, Manpreet Akhtar", youtubeUrl: "https://www.youtube.com/watch?v=vzWWTX83C_Q", language: "Hindi", tags: ["bollywood", "90s", "heartbreak"], position: 30 },
    { id: "chura-ke-dil-mera", title: "Chura Ke Dil Mera", artist: "Kumar Sanu, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=Yqj1_V90KJo", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 31 },
    { id: "aaj-kal-tere-mere", title: "Aaj Kal Tere Mere Pyar Ke Charche", artist: "Mohammed Rafi, Suman Kalyanpur", youtubeUrl: "https://www.youtube.com/watch?v=ulEiyaxHx4s", language: "Hindi", tags: ["bollywood", "60s", "evergreen"], position: 32 },
    { id: "ankhiyon-ke-jharokhon-se", title: "Ankhiyon Ke Jharokhon Se", artist: "Hemlata", youtubeUrl: "https://www.youtube.com/watch?v=0lnynO3uT5w", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 33 },
  ],
};
