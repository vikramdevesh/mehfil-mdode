import type { Playlist } from "../../types/music.ts";

/**
 * Baraat Bangers — Band Baaja
 *
 * 36 songs; 35 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
    { id: "aaj-mere-yaar-ki-shaadi-hai", title: "Aaj Mere Yaar Ki Shaadi Hai", artist: "Mohammed Rafi", youtubeUrl: "https://www.youtube.com/watch?v=Yw7AEZetZ0A", language: "Hindi", tags: ["baraat", "wedding", "classic"], position: 1 },
    { id: "morni-banke", title: "Morni Banke", artist: "Guru Randhawa, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=1EadhOBcfI0", language: "Punjabi", tags: ["baraat", "dance", "wedding"], position: 2 },
    { id: "lak-28-kudi-da", title: "Lak 28 Kudi Da", artist: "Diljit Dosanjh, Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=LUXrfuOugnA", language: "Punjabi", tags: ["bhangra", "dance", "wedding"], position: 3 },
    { id: "kala-chashma", title: "Kala Chashma", artist: "Amar Arshi, Badshah, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=4WRJHbL4dAk", language: "Punjabi", tags: ["bollywood", "dance", "party"], position: 4 },
    { id: "nachde-ne-saare", title: "Nachde Ne Saare", artist: "Jasleen Royal, Harshdeep Kaur, Siddharth Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=HgIW7P4dsXU", language: "Punjabi", tags: ["wedding", "dance"], position: 5 },
    { id: "dhating-naach", title: "Dhating Naach", artist: "Nakash Aziz, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=1j5aaDOA9XQ", language: "Hindi", tags: ["baraat", "dance"], position: 6 },
    { id: "tunak-tunak-tun", title: "Tunak Tunak Tun", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=QoEONbxXWIQ", language: "Punjabi", tags: ["bhangra", "dance", "90s"], position: 7 },
    { id: "mundian-to-bach-ke", title: "Mundian To Bach Ke", artist: "Panjabi MC, Labh Janjua", youtubeUrl: "https://www.youtube.com/watch?v=H2gmeNH_oZ0", language: "Punjabi", tags: ["bhangra", "dhol", "classic"], position: 8 },
    { id: "gallan-goodiyaan", title: "Gallan Goodiyaan", artist: "Shankar Mahadevan, Farhan Akhtar, Yashita Sharma", youtubeUrl: "https://www.youtube.com/watch?v=9fxfKaTOAV0", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 9 },
    { id: "london-thumakda", title: "London Thumakda", artist: "Labh Janjua, Sonu Kakkar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=udra3Mfw2oo", language: "Hindi", tags: ["bollywood", "dance", "wedding"], position: 10 },
    { id: "chaar-botal-vodka", title: "Chaar Botal Vodka", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=x8F5dz8kv1w", language: "Hindi", tags: ["bollywood", "party"], position: 11 },
    { id: "abhi-toh-party-shuru-hui-hai", title: "Abhi Toh Party Shuru Hui Hai", artist: "Badshah, Aastha Gill", youtubeUrl: "https://www.youtube.com/watch?v=2GMAmutnVPw", language: "Hindi", tags: ["bollywood", "party", "2010s"], position: 12 },
    { id: "proper-patola", title: "Proper Patola", artist: "Diljit Dosanjh, Badshah", youtubeUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 13 },
    { id: "swag-se-swagat", title: "Swag Se Swagat", artist: "Vishal Dadlani, Neha Bhasin", youtubeUrl: "https://www.youtube.com/watch?v=7TRFf7uUfhQ", language: "Hindi", tags: ["bollywood", "dance"], position: 14 },
    { id: "tamma-tamma-again", title: "Tamma Tamma Again", artist: "Badshah, Bappi Lahiri, Anuradha Paudwal", youtubeUrl: "https://www.youtube.com/watch?v=EEX_XM6SxmY", language: "Hindi", tags: ["bollywood", "dance"], position: 15 },
    { id: "bom-diggy-diggy", title: "Bom Diggy Diggy", artist: "Zack Knight, Jasmin Walia", youtubeUrl: "https://www.youtube.com/watch?v=yIIGQB6EMAM", language: "Hindi", tags: ["party", "dance"], position: 16 },
    { id: "kar-gayi-chull", title: "Kar Gayi Chull", artist: "Badshah, Fazilpuria, Sukriti Kakar, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=NTHz9ephYTw", language: "Hindi", tags: ["bollywood", "dance"], position: 17 },
    { id: "saturday-saturday", title: "Saturday Saturday", artist: "Badshah, Indeep Bakshi, Akriti Kakar", youtubeUrl: "https://www.youtube.com/watch?v=0fXlZ3vnQd0", language: "Hindi", tags: ["bollywood", "party"], position: 18 },
    { id: "ho-jayegi-balle-balle", title: "Ho Jayegi Balle Balle", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=KTE6S-Pmhpw", language: "Punjabi", tags: ["bhangra", "festive"], position: 19 },
    { id: "bolo-ta-ra-ra", title: "Bolo Ta Ra Ra", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=rM8Cr5ZSCbU", language: "Punjabi", tags: ["bhangra", "festive"], position: 20 },
    { id: "mere-yaar-ki-shaadi-hai", title: "Mere Yaar Ki Shaadi Hai", artist: "Udit Narayan, Alka Yagnik, Sonu Nigam, Jaspinder Narula", language: "Hindi", tags: ["bollywood", "wedding", "2000s"], position: 21 },
    { id: "laung-laachi", title: "Laung Laachi", artist: "Mannat Noor", youtubeUrl: "https://www.youtube.com/watch?v=YpkJO_GrCo0", language: "Punjabi", tags: ["punjabi", "folk-pop"], position: 22 },
    { id: "ainvayi-ainvayi", title: "Ainvayi Ainvayi", artist: "Sunidhi Chauhan, Salim Merchant", youtubeUrl: "https://www.youtube.com/watch?v=pElk1ShPrcE", language: "Hindi", tags: ["bollywood", "dance", "sing-along"], position: 23 },
    { id: "badtameez-dil", title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", youtubeUrl: "https://www.youtube.com/watch?v=N0uDmkTV08Y", language: "Hindi", tags: ["bollywood", "dance", "2010s"], position: 24 },
    { id: "desi-girl", title: "Desi Girl", artist: "Shankar Mahadevan, Sunidhi Chauhan, Vishal Dadlani", youtubeUrl: "https://www.youtube.com/watch?v=wDIrpvH8MzE", language: "Hindi", tags: ["bollywood", "dance", "2000s"], position: 25 },
    { id: "patiala-peg", title: "Patiala Peg", artist: "Diljit Dosanjh", youtubeUrl: "https://www.youtube.com/watch?v=VL2mdsJ1TrI", language: "Punjabi", tags: ["punjabi", "party", "wedding"], position: 26 },
    { id: "lehanga", title: "Lehanga", artist: "Jass Manak", youtubeUrl: "https://www.youtube.com/watch?v=RKioDWlajvo", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 27 },
    { id: "high-rated-gabru", title: "High Rated Gabru", artist: "Guru Randhawa", youtubeUrl: "https://www.youtube.com/watch?v=hjWf8A0YNSE", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 28 },
    { id: "suit-suit", title: "Suit Suit", artist: "Guru Randhawa, Arjun", youtubeUrl: "https://www.youtube.com/watch?v=uQ763VvqiEM", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 29 },
    { id: "garmi", title: "Garmi", artist: "Badshah, Neha Kakkar", youtubeUrl: "https://www.youtube.com/watch?v=IE8OD5FbU-c", language: "Hindi", tags: ["bollywood", "dance"], position: 30 },
    { id: "paani-paani", title: "Paani Paani", artist: "Badshah, Aastha Gill", youtubeUrl: "https://www.youtube.com/watch?v=nFjVlf2r9_Q", language: "Hindi", tags: ["desi-pop", "party"], position: 31 },
    { id: "tareefan", title: "Tareefan", artist: "Badshah, Lisa Mishra, QARAN", youtubeUrl: "https://www.youtube.com/watch?v=3SWc5G8Gx7E", language: "Hindi", tags: ["bollywood", "party", "girls-night"], position: 32 },
    { id: "gal-ban-gayi", title: "Gal Ban Gayi", artist: "Sukhbir, Neha Kakkar, Yo Yo Honey Singh, Meet Bros", youtubeUrl: "https://www.youtube.com/watch?v=T7JQHM5Leao", language: "Punjabi", tags: ["punjabi", "party"], position: 33 },
    { id: "angreji-beat", title: "Angreji Beat", artist: "Gippy Grewal, Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=YEf_hnXBbyI", language: "Punjabi", tags: ["punjabi", "party"], position: 34 },
    { id: "mauja-hi-mauja", title: "Mauja Hi Mauja", artist: "Mika Singh", youtubeUrl: "https://www.youtube.com/watch?v=PaDaoNnOQaM", language: "Hindi", tags: ["bollywood", "dance"], position: 35 },
    { id: "lungi-dance", title: "Lungi Dance", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=fbwCgt1hMD4", language: "Hindi", tags: ["bollywood", "party"], position: 36 },
  ],
};
