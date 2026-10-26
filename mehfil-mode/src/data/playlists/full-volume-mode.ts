import type { Playlist } from "../../types/music.ts";

/**
 * Full Volume Mode — Desi Swag
 *
 * 36 songs; 33 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const fullVolumeMode: Playlist = {
  id: "pl-full-volume-mode",
  slug: "full-volume-mode",
  title: "Full Volume Mode",
  shortTitle: "Desi Swag",
  description:
    "Bass full, speaker full, josh full. Haryanvi, Punjabi aur desi hip-hop — jab volume kam karna mana ho.",
  theme: { from: "#111827", via: "#DC2626", to: "#F97316", pattern: "waves", icon: "volume", emoji: "🔊" },
  accentColor: "#F87171",
  category: "party-mode",
  situations: ["party-mode", "road-trips"],
  tags: ["haryanvi", "punjabi", "desi hip-hop", "rap", "bass", "swag"],
  languages: ["Haryanvi", "Hindi", "Punjabi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "52-gaj-ka-daman", title: "52 Gaj Ka Daman", artist: "Renuka Panwar", youtubeUrl: "https://www.youtube.com/watch?v=CZt-rVn2BJs", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 1 },
    { id: "chatak-matak", title: "Chatak Matak", artist: "Renuka Panwar", youtubeUrl: "https://www.youtube.com/watch?v=s9AICwTKgOg", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 2 },
    { id: "mere-gully-mein", title: "Mere Gully Mein", artist: "DIVINE, Naezy", youtubeUrl: "https://www.youtube.com/watch?v=pGmbUdf6lEM", language: "Hindi", tags: ["desi-hip-hop", "rap", "mumbai"], position: 3 },
    { id: "apna-time-aayega", title: "Apna Time Aayega", artist: "Ranveer Singh, DIVINE", youtubeUrl: "https://www.youtube.com/watch?v=jFGKJBPFdUA", language: "Hindi", tags: ["desi-hip-hop", "rap", "bollywood"], position: 4 },
    { id: "kaam-25", title: "Kaam 25", artist: "DIVINE", youtubeUrl: "https://www.youtube.com/watch?v=NU3xm6N7tzw", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 5 },
    { id: "machayenge", title: "Machayenge", artist: "Emiway Bantai", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 6 },
    { id: "295", title: "295", artist: "Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=n_FCrCQ6-bA", language: "Punjabi", tags: ["punjabi", "bass", "desi"], position: 7 },
    { id: "bambiha-bole", title: "Bambiha Bole", artist: "Amrit Maan, Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=hpVNMjpjiJc", language: "Punjabi", tags: ["punjabi", "bass", "desi"], position: 8 },
    { id: "gajban", title: "Gajban", artist: "Vishvajeet Choudhary", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 9 },
    { id: "tu-cheez-lajawab", title: "Tu Cheez Lajawab", artist: "Raju Punjabi", youtubeUrl: "https://www.youtube.com/watch?v=fxoUNjl2PFE", language: "Haryanvi", tags: ["haryanvi", "dance", "desi"], position: 10 },
    { id: "asli-hip-hop", title: "Asli Hip Hop", artist: "Ranveer Singh", youtubeUrl: "https://www.youtube.com/watch?v=U39GgfIgtn8", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 11 },
    { id: "doori-gully-boy", title: "Doori", artist: "Ranveer Singh", youtubeUrl: "https://www.youtube.com/watch?v=QPGmwRNkffc", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 12 },
    { id: "azadi", title: "Azadi", artist: "DIVINE, Dub Sharma", youtubeUrl: "https://www.youtube.com/watch?v=4nCshJBODT4", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 13 },
    { id: "jungli-sher", title: "Jungli Sher", artist: "DIVINE", youtubeUrl: "https://www.youtube.com/watch?v=9Wsi7YTI2nY", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 14 },
    { id: "mirchi-divine", title: "Mirchi", artist: "DIVINE", youtubeUrl: "https://www.youtube.com/watch?v=w5Aioq5VYF0", language: "Hindi", tags: ["desi-hip-hop", "rap", "bass"], position: 15 },
    { id: "firse-machayenge", title: "Firse Machayenge", artist: "Emiway Bantai", youtubeUrl: "https://www.youtube.com/watch?v=zaCbuB3w0kg", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 16 },
    { id: "malum-hai-na", title: "Malum Hai Na", artist: "Emiway Bantai", youtubeUrl: "https://www.youtube.com/watch?v=ZePfl9q8rMM", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 17 },
    { id: "kodak", title: "Kodak", artist: "King, Seedhe Maut", youtubeUrl: "https://www.youtube.com/watch?v=Ecs-foVS74Q", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 18 },
    { id: "nanchaku", title: "Nanchaku", artist: "Seedhe Maut, MC STAN", youtubeUrl: "https://www.youtube.com/watch?v=VjJtH7xM8G4", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 19 },
    { id: "insaan", title: "Insaan", artist: "MC STAN", youtubeUrl: "https://www.youtube.com/watch?v=_luvbjUrwLI", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 20 },
    { id: "tadipaar", title: "Tadipaar", artist: "MC STAN", youtubeUrl: "https://www.youtube.com/watch?v=AKd-3Asq60M", language: "Hindi", tags: ["desi-hip-hop", "rap"], position: 21 },
    { id: "tu-aake-dekhle", title: "Tu Aake Dekhle", artist: "King", language: "Hindi", tags: ["desi-hip-hop"], position: 22 },
    { id: "old-skool", title: "Old Skool", artist: "Prem Dhillon, Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=hBlO1i_WTiY", language: "Punjabi", tags: ["punjabi", "bass"], position: 23 },
    { id: "legend-sidhu", title: "Legend", artist: "Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=YZAFd9o3RYQ", language: "Punjabi", tags: ["punjabi", "bass"], position: 24 },
    { id: "the-last-ride", title: "The Last Ride", artist: "Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=6xoB4ZiKKn0", language: "Punjabi", tags: ["punjabi", "bass"], position: 25 },
    { id: "same-beef", title: "Same Beef", artist: "Bohemia, Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=qk2WMmiiVFE", language: "Punjabi", tags: ["punjabi", "rap"], position: 26 },
    { id: "bachke-bachke", title: "Bachke Bachke", artist: "Karan Aujla", youtubeUrl: "https://www.youtube.com/watch?v=fRJ03btNsao", language: "Punjabi", tags: ["punjabi", "bass"], position: 27 },
    { id: "softly", title: "Softly", artist: "Karan Aujla", youtubeUrl: "https://www.youtube.com/watch?v=cWMxCE2HTag", language: "Punjabi", tags: ["punjabi", "bass"], position: 28 },
    { id: "players", title: "Players", artist: "Badshah, Karan Aujla", youtubeUrl: "https://www.youtube.com/watch?v=CeFQO9MQNqs", language: "Punjabi", tags: ["punjabi", "party"], position: 29 },
    { id: "dont-look", title: "Don't Look", artist: "Karan Aujla", youtubeUrl: "https://www.youtube.com/watch?v=YeiV39P09QQ", language: "Punjabi", tags: ["punjabi", "bass"], position: 30 },
    { id: "chitta-kurta", title: "Chitta Kurta", artist: "Karan Aujla", youtubeUrl: "https://www.youtube.com/watch?v=nBrBwGgY-Kg", language: "Punjabi", tags: ["punjabi", "bass"], position: 31 },
    { id: "paani-paani", title: "Paani Paani", artist: "Badshah, Aastha Gill", youtubeUrl: "https://www.youtube.com/watch?v=nFjVlf2r9_Q", language: "Hindi", tags: ["desi-pop", "party"], position: 32 },
    { id: "genda-phool", title: "Genda Phool", artist: "Badshah, Payal Dev", youtubeUrl: "https://www.youtube.com/watch?v=VkAuRcpuxuo", language: "Hindi", tags: ["desi-pop", "party"], position: 33 },
    { id: "mercy-badshah", title: "Mercy", artist: "Badshah", youtubeUrl: "https://www.youtube.com/watch?v=Jyst8oIHOAY", language: "Hindi", tags: ["desi-pop", "party"], position: 34 },
    { id: "dope-shope", title: "Dope Shope", artist: "Yo Yo Honey Singh, Deep Money", youtubeUrl: "https://www.youtube.com/watch?v=NrXdauEv9HY", language: "Punjabi", tags: ["punjabi", "party"], position: 35 },
    { id: "millionaire", title: "Millionaire", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=uiNBqLphO2Y", language: "Hindi", tags: ["desi-pop", "party"], position: 36 },
  ],
};
