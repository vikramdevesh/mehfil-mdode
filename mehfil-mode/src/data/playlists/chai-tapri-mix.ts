import type { Playlist } from "../../types/music.ts";

/**
 * Chai Tapri Mix — Chai Ki Tapri
 *
 * 36 songs; 35 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const chaiTapriMix: Playlist = {
  id: "pl-chai-tapri-mix",
  slug: "chai-tapri-mix",
  title: "Chai Tapri Mix",
  shortTitle: "Chai Ki Tapri",
  description:
    "Kulhad wali chai, garam pakode aur doston ke saath sing-along. Familiar Bollywood hits aur nostalgic gaane jo tapri pe sab gungunate hain.",
  theme: { from: "#3B1F0E", via: "#B45309", to: "#FCD34D", pattern: "rings", icon: "coffee", emoji: "☕" },
  accentColor: "#F59E0B",
  category: "chai-tapri",
  situations: ["chai-tapri", "friends-mehfil"],
  tags: ["chai", "tapri", "sing-along", "nostalgia", "bollywood", "tea"],
  languages: ["Hindi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "tum-se-hi", title: "Tum Se Hi", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=Cb6wuzOurPc", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 1 },
    { id: "kal-ho-naa-ho", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", youtubeUrl: "https://www.youtube.com/watch?v=oq5Ocx_rEv8", language: "Hindi", tags: ["bollywood", "2000s", "sing-along"], position: 2 },
    { id: "kabira", title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", youtubeUrl: "https://www.youtube.com/watch?v=jHNNMj5bNQw", language: "Hindi", tags: ["bollywood", "2010s", "soulful"], position: 3 },
    { id: "tera-hone-laga-hoon", title: "Tera Hone Laga Hoon", artist: "Atif Aslam, Alisha Chinai", youtubeUrl: "https://www.youtube.com/watch?v=useznoRhrWU", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 4 },
    { id: "pehla-nasha", title: "Pehla Nasha", artist: "Udit Narayan, Sadhana Sargam", youtubeUrl: "https://www.youtube.com/watch?v=Ki41AKu0iHc", language: "Hindi", tags: ["bollywood", "90s", "nostalgia"], position: 5 },
    { id: "kun-faya-kun", title: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali, Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=T94PHkuydcw", language: "Hindi", tags: ["bollywood", "sufi", "soulful"], position: 6 },
    { id: "agar-tum-saath-ho", title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", language: "Hindi", tags: ["bollywood", "2010s", "emotional"], position: 7 },
    { id: "zindagi-kaisi-hai-paheli", title: "Zindagi Kaisi Hai Paheli", artist: "Manna Dey", youtubeUrl: "https://www.youtube.com/watch?v=fHuiDdxEaOk", language: "Hindi", tags: ["bollywood", "70s", "philosophical"], position: 8 },
    { id: "tum-hi-ho", title: "Tum Hi Ho", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=BjL7AuPsmEk", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 9 },
    { id: "tujh-mein-rab-dikhta-hai", title: "Tujh Mein Rab Dikhta Hai", artist: "Roop Kumar Rathod", youtubeUrl: "https://www.youtube.com/watch?v=qoq8B8ThgEM", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 10 },
    { id: "kaise-mujhe", title: "Kaise Mujhe", artist: "Benny Dayal, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=uC1iJcYOyeY", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 11 },
    { id: "muskurane", title: "Muskurane", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=2ltGXfmI6mk", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 12 },
    { id: "tera-ban-jaunga", title: "Tera Ban Jaunga", artist: "Akhil Sachdeva, Tulsi Kumar", youtubeUrl: "https://www.youtube.com/watch?v=Qdz5n1Xe5Qo", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 13 },
    { id: "bekhayali", title: "Bekhayali", artist: "Sachet Tandon", youtubeUrl: "https://www.youtube.com/watch?v=VOLKJJvfAbg", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 14 },
    { id: "kesariya", title: "Kesariya", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=g6fnFALEseI", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 15 },
    { id: "apna-bana-le", title: "Apna Bana Le", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=u2NAuswnTKs", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 16 },
    { id: "raataan-lambiyan", title: "Raataan Lambiyan", artist: "Jubin Nautiyal, Asees Kaur", youtubeUrl: "https://www.youtube.com/watch?v=gvyUuxdRdR4", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 17 },
    { id: "ranjha", title: "Ranjha", artist: "B Praak, Jasleen Royal", youtubeUrl: "https://www.youtube.com/watch?v=V7LwfY5U5WI", language: "Hindi", tags: ["bollywood", "2020s", "emotional"], position: 18 },
    { id: "shayad", title: "Shayad", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=MJyKN-8UncM", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 19 },
    { id: "hawayein", title: "Hawayein", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=cYOB941gyXI", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 20 },
    { id: "phir-bhi-tumko-chaahunga", title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh, Shashaa Tirupati", youtubeUrl: "https://www.youtube.com/watch?v=6-ZYY1pudI0", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 21 },
    { id: "gerua", title: "Gerua", artist: "Arijit Singh, Antara Mitra", youtubeUrl: "https://www.youtube.com/watch?v=AEIVhBS6baE", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 22 },
    { id: "main-rang-sharbaton-ka", title: "Main Rang Sharbaton Ka", artist: "Atif Aslam", youtubeUrl: "https://www.youtube.com/watch?v=aKdqQ5BC_S4", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 23 },
    { id: "tum-mile", title: "Tum Mile", artist: "Neeraj Shridhar", youtubeUrl: "https://www.youtube.com/watch?v=odVptmgIcD0", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 24 },
    { id: "pee-loon", title: "Pee Loon", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=ovR_7R9I_vI", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 25 },
    { id: "saiyaara", title: "Saiyaara", artist: "Mohit Chauhan, Tarannum Mallik", youtubeUrl: "https://www.youtube.com/watch?v=A5pSnIwbpaM", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 26 },
    { id: "tujhe-kitna-chahne-lage", title: "Tujhe Kitna Chahne Lage", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=AgX2II9si7w", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 27 },
    { id: "mitwa", title: "Mitwa", artist: "Shafqat Amanat Ali, Shankar Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=ru_5PA8cwkE", language: "Hindi", tags: ["bollywood", "2000s", "soulful"], position: 28 },
    { id: "aankhon-mein-teri", title: "Aankhon Mein Teri", artist: "KK", youtubeUrl: "https://www.youtube.com/watch?v=7KKVb0_IdD4", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 29 },
    { id: "khuda-jaane", title: "Khuda Jaane", artist: "KK, Shilpa Rao", youtubeUrl: "https://www.youtube.com/watch?v=cmMiyZaSELo", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 30 },
    { id: "zara-sa", title: "Zara Sa", artist: "KK", youtubeUrl: "https://www.youtube.com/watch?v=-8C_2BBVWk8", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 31 },
    { id: "tu-jaane-na", title: "Tu Jaane Na", artist: "Atif Aslam", youtubeUrl: "https://www.youtube.com/watch?v=53l2DkivxJs", language: "Hindi", tags: ["bollywood", "2000s", "emotional"], position: 32 },
    { id: "pehli-nazar-mein", title: "Pehli Nazar Mein", artist: "Atif Aslam", youtubeUrl: "https://www.youtube.com/watch?v=JBCx0QyP8VQ", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 33 },
    { id: "dil-diyan-gallan", title: "Dil Diyan Gallan", artist: "Atif Aslam", youtubeUrl: "https://www.youtube.com/watch?v=SAcpESN_Fk4", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 34 },
    { id: "tere-bina-guru", title: "Tere Bina", artist: "A.R. Rahman, Chinmayi", youtubeUrl: "https://www.youtube.com/watch?v=_mwqXnTEHSc", language: "Hindi", tags: ["bollywood", "2000s", "sufi"], position: 35 },
    { id: "ae-dil-hai-mushkil", title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=6FURuLYrR_Q", language: "Hindi", tags: ["bollywood", "2010s", "heartbreak"], position: 36 },
  ],
};
