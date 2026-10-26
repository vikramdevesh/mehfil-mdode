import type { Playlist } from "../../types/music.ts";

/**
 * Highway Anthems — Truck Aur Highway
 *
 * 36 songs; 35 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const highwayAnthems: Playlist = {
  id: "pl-highway-anthems",
  slug: "highway-anthems",
  title: "Highway Anthems",
  shortTitle: "Truck Aur Highway",
  description:
    "Lambi sadak, dhaba stops aur raat bhar ka safar. Punjabi beats, desi josh aur highway pe chalne wale energetic tracks.",
  theme: { from: "#0F172A", via: "#C2410C", to: "#FBBF24", pattern: "rays", icon: "truck", emoji: "🛣️" },
  accentColor: "#FB923C",
  category: "road-trips",
  situations: ["road-trips"],
  tags: ["road trip", "highway", "punjabi", "desi beats", "safar", "truck"],
  languages: ["Punjabi", "Hindi"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "mundian-to-bach-ke", title: "Mundian To Bach Ke", artist: "Panjabi MC, Labh Janjua", youtubeUrl: "https://www.youtube.com/watch?v=H2gmeNH_oZ0", language: "Punjabi", tags: ["bhangra", "dhol", "classic"], position: 1 },
    { id: "brown-munde", title: "Brown Munde", artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon", youtubeUrl: "https://www.youtube.com/watch?v=VNs_cCtdbPc", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 2 },
    { id: "lehanga", title: "Lehanga", artist: "Jass Manak", youtubeUrl: "https://www.youtube.com/watch?v=RKioDWlajvo", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 3 },
    { id: "excuses", title: "Excuses", artist: "AP Dhillon, Gurinder Gill", youtubeUrl: "https://www.youtube.com/watch?v=vX2cDW8LUWk", language: "Punjabi", tags: ["punjabi-pop", "chill"], position: 4 },
    { id: "do-you-know", title: "Do You Know", artist: "Diljit Dosanjh", youtubeUrl: "https://www.youtube.com/watch?v=DT9fEmSL_Lw", language: "Punjabi", tags: ["punjabi-pop", "romantic"], position: 5 },
    { id: "zinda", title: "Zinda", artist: "Siddharth Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=Ax0G_P2dSBw", language: "Hindi", tags: ["bollywood", "motivational", "rock"], position: 6 },
    { id: "safarnama", title: "Safarnama", artist: "Lucky Ali", youtubeUrl: "https://www.youtube.com/watch?v=TRfosj3JvOo", language: "Hindi", tags: ["bollywood", "travel", "soft"], position: 7 },
    { id: "ilahi", title: "Ilahi", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=hG7dg7dX4hg", language: "Hindi", tags: ["bollywood", "travel", "road-trip"], position: 8 },
    { id: "jatt-da-muqabala", title: "Jatt Da Muqabala", artist: "Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=tBlaQCrNDwU", language: "Punjabi", tags: ["punjabi", "bass", "road-trip"], position: 9 },
    { id: "so-high", title: "So High", artist: "Sidhu Moose Wala", youtubeUrl: "https://www.youtube.com/watch?v=GgmFC8y8q3k", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 10 },
    { id: "lamberghini", title: "Lamberghini", artist: "The Doorbeen, Ragini Tandan", youtubeUrl: "https://www.youtube.com/watch?v=5X7WWVTrBvM", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 11 },
    { id: "gal-ban-gayi", title: "Gal Ban Gayi", artist: "Sukhbir, Neha Kakkar, Yo Yo Honey Singh, Meet Bros", youtubeUrl: "https://www.youtube.com/watch?v=T7JQHM5Leao", language: "Punjabi", tags: ["punjabi", "party"], position: 12 },
    { id: "insane", title: "Insane", artist: "AP Dhillon, Gurinder Gill, Shinda Kahlon", youtubeUrl: "https://www.youtube.com/watch?v=cqP8I5aaud8", language: "Punjabi", tags: ["punjabi-pop", "road-trip"], position: 13 },
    { id: "summer-high", title: "Summer High", artist: "AP Dhillon", youtubeUrl: "https://www.youtube.com/watch?v=nqUN530Rgtw", language: "Punjabi", tags: ["punjabi-pop", "chill"], position: 14 },
    { id: "with-you-ap", title: "With You", artist: "AP Dhillon", youtubeUrl: "https://www.youtube.com/watch?v=mZQH8CPQ-wo", language: "Punjabi", tags: ["punjabi-pop", "romantic"], position: 15 },
    { id: "elevated", title: "Elevated", artist: "Shubh", youtubeUrl: "https://www.youtube.com/watch?v=I1nX5EuvwzE", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 16 },
    { id: "we-rollin", title: "We Rollin", artist: "Shubh", youtubeUrl: "https://www.youtube.com/watch?v=hV8EGTjzD2s", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 17 },
    { id: "cheques", title: "Cheques", artist: "Shubh", youtubeUrl: "https://www.youtube.com/watch?v=4tywp83zkmk", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 18 },
    { id: "high-rated-gabru", title: "High Rated Gabru", artist: "Guru Randhawa", youtubeUrl: "https://www.youtube.com/watch?v=hjWf8A0YNSE", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 19 },
    { id: "lahore", title: "Lahore", artist: "Guru Randhawa", youtubeUrl: "https://www.youtube.com/watch?v=dZ0fwJojhrs", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 20 },
    { id: "suit-suit", title: "Suit Suit", artist: "Guru Randhawa, Arjun", youtubeUrl: "https://www.youtube.com/watch?v=uQ763VvqiEM", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 21 },
    { id: "proper-patola", title: "Proper Patola", artist: "Diljit Dosanjh, Badshah", youtubeUrl: "https://www.youtube.com/watch?v=GVhmynWOPoM", language: "Punjabi", tags: ["punjabi-pop", "dance"], position: 22 },
    { id: "goat-diljit", title: "G.O.A.T.", artist: "Diljit Dosanjh", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 23 },
    { id: "born-to-shine", title: "Born to Shine", artist: "Diljit Dosanjh", youtubeUrl: "https://www.youtube.com/watch?v=dCmp56tSSmA", language: "Punjabi", tags: ["punjabi", "road-trip"], position: 24 },
    { id: "lover-diljit", title: "Lover", artist: "Diljit Dosanjh", youtubeUrl: "https://www.youtube.com/watch?v=mH_LFkWxpI0", language: "Punjabi", tags: ["punjabi-pop", "romantic"], position: 25 },
    { id: "daru-badnaam", title: "Daru Badnaam", artist: "Kamal Kahlon, Param Singh", youtubeUrl: "https://www.youtube.com/watch?v=bzW9fmwcmG4", language: "Punjabi", tags: ["punjabi", "party"], position: 26 },
    { id: "yun-hi-chala-chal", title: "Yun Hi Chala Chal", artist: "Udit Narayan, Kailash Kher, Hariharan", youtubeUrl: "https://www.youtube.com/watch?v=eEeX2QMlSlo", language: "Hindi", tags: ["bollywood", "travel"], position: 27 },
    { id: "kar-har-maidaan-fateh", title: "Kar Har Maidaan Fateh", artist: "Sukhwinder Singh, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=RCgbE6eS-DU", language: "Hindi", tags: ["bollywood", "motivational"], position: 28 },
    { id: "chak-de-india", title: "Chak De India", artist: "Sukhwinder Singh", youtubeUrl: "https://www.youtube.com/watch?v=bnqLzCsffwY", language: "Hindi", tags: ["bollywood", "motivational"], position: 29 },
    { id: "ruk-jaana-nahin", title: "Ruk Jaana Nahin", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=bGZ3BfDfOvc", language: "Hindi", tags: ["bollywood", "70s", "travel"], position: 30 },
    { id: "musafir-hoon-yaaron", title: "Musafir Hoon Yaaron", artist: "Kishore Kumar", youtubeUrl: "https://www.youtube.com/watch?v=1DwROkoAAcI", language: "Hindi", tags: ["bollywood", "70s", "travel"], position: 31 },
    { id: "dil-chahta-hai", title: "Dil Chahta Hai", artist: "Shankar Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=HoDgYV1NzAI", language: "Hindi", tags: ["bollywood", "friendship", "2000s"], position: 32 },
    { id: "desi-kalakaar", title: "Desi Kalakaar", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=jTg15DrXhB0", language: "Hindi", tags: ["desi-pop", "party"], position: 33 },
    { id: "blue-eyes", title: "Blue Eyes", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=NbyHNASFi6U", language: "Hindi", tags: ["desi-pop", "party"], position: 34 },
    { id: "brown-rang", title: "Brown Rang", artist: "Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=MfY9YO3u7GM", language: "Punjabi", tags: ["punjabi", "party"], position: 35 },
    { id: "angreji-beat", title: "Angreji Beat", artist: "Gippy Grewal, Yo Yo Honey Singh", youtubeUrl: "https://www.youtube.com/watch?v=YEf_hnXBbyI", language: "Punjabi", tags: ["punjabi", "party"], position: 36 },
  ],
};
