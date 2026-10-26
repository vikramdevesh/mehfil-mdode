import type { Playlist } from "../../types/music.ts";

/**
 * Sophisticated Sounds — Elite Lounge
 *
 * 32 songs; 30 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const sophisticatedSounds: Playlist = {
  id: "pl-sophisticated-sounds",
  slug: "sophisticated-sounds",
  title: "Sophisticated Sounds",
  shortTitle: "Elite Lounge",
  description:
    "Ek refined shaam: jazz standards, Hindustani classical, soft Sufi aur lounge — dheemi roshni aur achhi baat-cheet ke saath.",
  theme: { from: "#0B1020", via: "#1F2A44", to: "#D4A24C", pattern: "grid", icon: "wine", emoji: "🎷" },
  accentColor: "#E2B860",
  category: "chill-lounge",
  situations: ["chill-lounge"],
  tags: ["jazz", "lounge", "classical", "sufi", "evening", "instrumental"],
  languages: ["Instrumental", "Hindi", "Urdu", "English", "Punjabi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "take-five", title: "Take Five", artist: "The Dave Brubeck Quartet", youtubeUrl: "https://www.youtube.com/watch?v=-DHuW1h1wHw", language: "Instrumental", tags: ["jazz", "lounge"], position: 1 },
    { id: "so-what", title: "So What", artist: "Miles Davis", youtubeUrl: "https://www.youtube.com/watch?v=ylXk1LBvIqU", language: "Instrumental", tags: ["jazz", "lounge"], position: 2 },
    { id: "aaoge-jab-tum", title: "Aaoge Jab Tum", artist: "Ustad Rashid Khan", youtubeUrl: "https://www.youtube.com/watch?v=CNZMIhckaA0", language: "Hindi", tags: ["hindustani-classical", "bollywood"], position: 3 },
    { id: "afreen-afreen-coke-studio", title: "Afreen Afreen", artist: "Rahat Fateh Ali Khan, Momina Mustehsan", youtubeUrl: "https://www.youtube.com/watch?v=kw4tT7SCmaY", language: "Urdu", tags: ["sufi", "coke-studio"], position: 4 },
    { id: "moh-moh-ke-dhaage", title: "Moh Moh Ke Dhaage", artist: "Papon", language: "Hindi", tags: ["bollywood", "soft"], position: 5 },
    { id: "kasoor", title: "Kasoor", artist: "Prateek Kuhad", youtubeUrl: "https://www.youtube.com/watch?v=BmUe3-sfr7E", language: "Hindi", tags: ["indie", "soft"], position: 6 },
    { id: "tajdar-e-haram", title: "Tajdar-e-Haram", artist: "Atif Aslam", youtubeUrl: "https://www.youtube.com/watch?v=a18py61_F_w", language: "Urdu", tags: ["qawwali", "coke-studio"], position: 7 },
    { id: "babul-mora", title: "Babul Mora", artist: "K. L. Saigal", youtubeUrl: "https://www.youtube.com/watch?v=dUBIiLKnJ74", language: "Hindi", tags: ["thumri", "classic"], position: 8 },
    { id: "fly-me-to-the-moon", title: "Fly Me to the Moon", artist: "Frank Sinatra", youtubeUrl: "https://www.youtube.com/watch?v=JYuyWrkwpok", language: "English", tags: ["jazz", "lounge"], position: 9 },
    { id: "autumn-leaves", title: "Autumn Leaves", artist: "Nat King Cole", youtubeUrl: "https://www.youtube.com/watch?v=YVedK1VUfLM", language: "English", tags: ["jazz", "lounge"], position: 10 },
    { id: "my-funny-valentine", title: "My Funny Valentine", artist: "Chet Baker", youtubeUrl: "https://www.youtube.com/watch?v=QuMzUXPEPRM", language: "English", tags: ["jazz", "lounge"], position: 11 },
    { id: "blue-in-green", title: "Blue in Green", artist: "Miles Davis", youtubeUrl: "https://www.youtube.com/watch?v=TLDflhhdPCg", language: "Instrumental", tags: ["jazz", "lounge"], position: 12 },
    { id: "round-midnight", title: "'Round Midnight", artist: "Thelonious Monk", youtubeUrl: "https://www.youtube.com/watch?v=IrAfjW5qiyo", language: "Instrumental", tags: ["jazz", "lounge"], position: 13 },
    { id: "in-a-sentimental-mood", title: "In a Sentimental Mood", artist: "Duke Ellington, John Coltrane", youtubeUrl: "https://www.youtube.com/watch?v=gkdFmq4Nnmk", language: "Instrumental", tags: ["jazz", "lounge"], position: 14 },
    { id: "my-favorite-things", title: "My Favorite Things", artist: "John Coltrane", youtubeUrl: "https://www.youtube.com/watch?v=JQvc-Gkwhow", language: "Instrumental", tags: ["jazz", "lounge"], position: 15 },
    { id: "summertime", title: "Summertime", artist: "Ella Fitzgerald, Louis Armstrong", youtubeUrl: "https://www.youtube.com/watch?v=2HJCN3upMHE", language: "English", tags: ["jazz", "lounge"], position: 16 },
    { id: "what-a-wonderful-world", title: "What a Wonderful World", artist: "Louis Armstrong", youtubeUrl: "https://www.youtube.com/watch?v=rBrd_3VMC3c", language: "English", tags: ["jazz", "classic"], position: 17 },
    { id: "moanin", title: "Moanin'", artist: "Art Blakey and the Jazz Messengers", youtubeUrl: "https://www.youtube.com/watch?v=fsJ3JjpZyoA", language: "Instrumental", tags: ["jazz", "lounge"], position: 18 },
    { id: "girl-from-ipanema", title: "The Girl from Ipanema", artist: "Stan Getz, João Gilberto, Astrud Gilberto", youtubeUrl: "https://www.youtube.com/watch?v=kLO8XoNf5EM", language: "English", tags: ["bossa-nova", "lounge"], position: 19 },
    { id: "albela-sajan", title: "Albela Sajan Aayo Re", artist: "Kavita Krishnamurthy, Shankar Mahadevan, Ustad Sultan Khan", language: "Hindi", tags: ["hindustani-classical", "bollywood"], position: 20 },
    { id: "piya-basanti", title: "Piya Basanti", artist: "Ustad Sultan Khan, K. S. Chithra", youtubeUrl: "https://www.youtube.com/watch?v=XFT2niDEy28", language: "Hindi", tags: ["hindustani-classical", "soft"], position: 21 },
    { id: "tu-jhoom", title: "Tu Jhoom", artist: "Naseebo Lal, Abida Parveen", youtubeUrl: "https://www.youtube.com/watch?v=7D4vNcK6D38", language: "Urdu", tags: ["sufi", "coke-studio"], position: 22 },
    { id: "pasoori", title: "Pasoori", artist: "Ali Sethi, Shae Gill", youtubeUrl: "https://www.youtube.com/watch?v=5Eqb_-j3FDA", language: "Punjabi", tags: ["coke-studio", "fusion"], position: 23 },
    { id: "chaap-tilak", title: "Chaap Tilak", artist: "Abida Parveen, Rahat Fateh Ali Khan", youtubeUrl: "https://www.youtube.com/watch?v=7SDrjwtfKMk", language: "Urdu", tags: ["sufi", "coke-studio"], position: 24 },
    { id: "garaj-baras", title: "Garaj Baras", artist: "Ali Azmat", youtubeUrl: "https://www.youtube.com/watch?v=F0RrD53zHhg", language: "Urdu", tags: ["sufi-rock", "coke-studio"], position: 25 },
    { id: "kangna", title: "Kangna", artist: "Fareed Ayaz, Abu Muhammad", youtubeUrl: "https://www.youtube.com/watch?v=7yPlSaSwxyM", language: "Urdu", tags: ["qawwali", "coke-studio"], position: 26 },
    { id: "baarishein", title: "Baarishein", artist: "Anuv Jain", youtubeUrl: "https://www.youtube.com/watch?v=PJWemSzExXs", language: "Hindi", tags: ["indie", "soft"], position: 27 },
    { id: "gul-anuv", title: "Gul", artist: "Anuv Jain", youtubeUrl: "https://www.youtube.com/watch?v=SmaY7RfBgas", language: "Hindi", tags: ["indie", "soft"], position: 28 },
    { id: "husn", title: "Husn", artist: "Anuv Jain", youtubeUrl: "https://www.youtube.com/watch?v=gJLVTKhTnog", language: "Hindi", tags: ["indie", "soft"], position: 29 },
    { id: "choo-lo", title: "Choo Lo", artist: "The Local Train", youtubeUrl: "https://www.youtube.com/watch?v=sFMRqxCexDk", language: "Hindi", tags: ["indie", "rock"], position: 30 },
    { id: "aaoge-tum-kabhi", title: "Aaoge Tum Kabhi", artist: "The Local Train", youtubeUrl: "https://www.youtube.com/watch?v=i96UO8-GFvw", language: "Hindi", tags: ["indie", "rock"], position: 31 },
    { id: "alag-aasmaan", title: "Alag Aasmaan", artist: "Anuv Jain", youtubeUrl: "https://www.youtube.com/watch?v=vA86QFrXoho", language: "Hindi", tags: ["indie", "soft"], position: 32 },
  ],
};
