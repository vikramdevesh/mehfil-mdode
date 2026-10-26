import type { Playlist } from "../../types/music.ts";

/**
 * Purane Yaar — 30+ Doston Ki Mehfil
 *
 * 33 songs; 28 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const puraneYaar: Playlist = {
  id: "pl-purane-yaar",
  slug: "purane-yaar",
  title: "Purane Yaar",
  shortTitle: "30+ Doston Ki Mehfil",
  description:
    "Wahi purane dost, wahi purani baatein. 90s ke hits, dosti ke gaane aur yaadon wali mehfil ke liye.",
  theme: { from: "#172554", via: "#2563EB", to: "#38BDF8", pattern: "rings", icon: "users", emoji: "🫂" },
  accentColor: "#60A5FA",
  category: "friends-mehfil",
  situations: ["friends-mehfil"],
  tags: ["friendship", "dosti", "90s", "nostalgia", "yaari", "old friends"],
  languages: ["Hindi", "Urdu"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "yeh-dosti", title: "Yeh Dosti", artist: "Kishore Kumar, Manna Dey", youtubeUrl: "https://www.youtube.com/watch?v=ZCkJosuRsms", language: "Hindi", tags: ["bollywood", "friendship", "70s"], position: 1 },
    { id: "dil-chahta-hai", title: "Dil Chahta Hai", artist: "Shankar Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=HoDgYV1NzAI", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 2 },
    { id: "yaaron", title: "Yaaron", artist: "KK", youtubeUrl: "https://www.youtube.com/watch?v=LCfvYo3ILG0", language: "Hindi", tags: ["indipop", "friendship", "90s"], position: 3 },
    { id: "purani-jeans", title: "Purani Jeans", artist: "Ali Haider", youtubeUrl: "https://www.youtube.com/watch?v=oOydbzen5Ks", language: "Urdu", tags: ["pop", "nostalgia", "90s"], position: 4 },
    { id: "tere-jaisa-yaar-kahan", title: "Tere Jaisa Yaar Kahan", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=6D9c7YfXx-8", language: "Hindi", tags: ["bollywood", "friendship", "80s"], position: 5 },
    { id: "pal", title: "Pal", artist: "KK", language: "Hindi", tags: ["indipop", "nostalgia", "90s"], position: 6 },
    { id: "jaane-kyun", title: "Jaane Kyun", artist: "Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=n0PoVxBMUyE", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 7 },
    { id: "kuch-kuch-hota-hai", title: "Kuch Kuch Hota Hai", artist: "Udit Narayan, Alka Yagnik", youtubeUrl: "https://www.youtube.com/watch?v=bKZTnnFU9HA", language: "Hindi", tags: ["bollywood", "90s", "nostalgia"], position: 8 },
    { id: "tera-mujhse-hai-pehle-ka", title: "Tera Mujhse Hai Pehle Ka Naata Koi", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "70s", "nostalgia"], position: 9 },
    { id: "yaari-hai-imaan-mera", title: "Yaari Hai Imaan Mera", artist: "Manna Dey", language: "Hindi", tags: ["bollywood", "friendship", "70s"], position: 10 },
    { id: "diye-jalte-hain", title: "Diye Jalte Hain", artist: "Kishore Kumar", language: "Hindi", tags: ["bollywood", "friendship", "70s"], position: 11 },
    { id: "kabhi-kabhi-aditi", title: "Kabhi Kabhi Aditi", artist: "Rashid Ali", youtubeUrl: "https://www.youtube.com/watch?v=AX7t8ZwroHQ", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 12 },
    { id: "pappu-cant-dance", title: "Pappu Can't Dance", artist: "Benny Dayal", youtubeUrl: "https://www.youtube.com/watch?v=IzV0V5GvjQU", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 13 },
    { id: "give-me-some-sunshine", title: "Give Me Some Sunshine", artist: "Suraj Jagan, Sharman Joshi", youtubeUrl: "https://www.youtube.com/watch?v=lbCRtrrMvSw", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 14 },
    { id: "behti-hawa-sa-tha-woh", title: "Behti Hawa Sa Tha Woh", artist: "Shaan, Shantanu Moitra", youtubeUrl: "https://www.youtube.com/watch?v=ewvddSUEONQ", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 15 },
    { id: "all-izz-well", title: "All Izz Well", artist: "Sonu Nigam, Shaan, Swanand Kirkire", youtubeUrl: "https://www.youtube.com/watch?v=7PzwOiW8-n0", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 16 },
    { id: "zoobi-doobi", title: "Zoobi Doobi", artist: "Sonu Nigam, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=V056WNg3ECo", language: "Hindi", tags: ["bollywood", "2000s", "fun"], position: 17 },
    { id: "masti-ki-paathshaala", title: "Masti Ki Paathshaala", artist: "Naresh Iyer, Mohammed Aslam", youtubeUrl: "https://www.youtube.com/watch?v=aBetY7w04S8", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 18 },
    { id: "rang-de-basanti", title: "Rang De Basanti", artist: "Daler Mehndi, K. S. Chithra", youtubeUrl: "https://www.youtube.com/watch?v=c769V25pX08", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 19 },
    { id: "khalbali", title: "Khalbali", artist: "A.R. Rahman, Mohammed Aslam, Nacim", youtubeUrl: "https://www.youtube.com/watch?v=NvxCMwEaGHI", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 20 },
    { id: "tu-bin-bataye", title: "Tu Bin Bataye", artist: "Madhushree, Naresh Iyer", youtubeUrl: "https://www.youtube.com/watch?v=ZL145CrnJkU", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 21 },
    { id: "senorita-znmd", title: "Senorita", artist: "Farhan Akhtar, Hrithik Roshan, Abhay Deol, María del Mar Fernández", youtubeUrl: "https://www.youtube.com/watch?v=2Z0Put0teCM", language: "Hindi", tags: ["bollywood", "friendship", "2010s"], position: 22 },
    { id: "woh-ladki-hai-kahan", title: "Woh Ladki Hai Kahan", artist: "Shaan, Kavita Krishnamurthy", youtubeUrl: "https://www.youtube.com/watch?v=LFTV1zLv9B4", language: "Hindi", tags: ["bollywood", "2000s", "fun"], position: 23 },
    { id: "koi-kahe-kehta-rahe", title: "Koi Kahe Kehta Rahe", artist: "Shankar Mahadevan, Shaan, KK", youtubeUrl: "https://www.youtube.com/watch?v=y4PoxvRSTcc", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 24 },
    { id: "tanha-dil", title: "Tanha Dil", artist: "Shaan", youtubeUrl: "https://www.youtube.com/watch?v=1Wm3NB6lYjs", language: "Hindi", tags: ["indipop", "nostalgia", "2000s"], position: 25 },
    { id: "bhaag-dk-bose", title: "Bhaag D.K. Bose", artist: "Ram Sampath", language: "Hindi", tags: ["bollywood", "rock", "2010s"], position: 26 },
    { id: "pyaar-ke-pal", title: "Pyaar Ke Pal", artist: "KK", youtubeUrl: "https://www.youtube.com/watch?v=HLGxI6WIHuI", language: "Hindi", tags: ["indipop", "nostalgia", "90s"], position: 27 },
    { id: "ae-zindagi-gale-laga-le", title: "Ae Zindagi Gale Laga Le", artist: "Suresh Wadkar", youtubeUrl: "https://www.youtube.com/watch?v=8A30PWazxMU", language: "Hindi", tags: ["bollywood", "80s", "philosophical"], position: 28 },
    { id: "sayonee", title: "Sayonee", artist: "Junoon", youtubeUrl: "https://www.youtube.com/watch?v=Ciim7-hZPb0", language: "Urdu", tags: ["rock", "90s", "nostalgia"], position: 29 },
    { id: "chhoo-kar-mere-mann-ko", title: "Chhoo Kar Mere Mann Ko", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=4w9FBmbCfws", language: "Hindi", tags: ["bollywood", "80s", "romantic"], position: 30 },
    { id: "dekha-ek-khwab", title: "Dekha Ek Khwab", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=qJy5GFoQSPg", language: "Hindi", tags: ["bollywood", "80s", "romantic"], position: 31 },
    { id: "ek-pyar-ka-nagma-hai", title: "Ek Pyar Ka Nagma Hai", artist: "Lata Mangeshkar, Mukesh", youtubeUrl: "https://www.youtube.com/watch?v=H2BTCPW3Hw8", language: "Hindi", tags: ["bollywood", "70s", "evergreen"], position: 32 },
    { id: "musafir-hoon-yaaron", title: "Musafir Hoon Yaaron", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=1DwROkoAAcI", language: "Hindi", tags: ["bollywood", "70s", "travel"], position: 33 },
  ],
};
