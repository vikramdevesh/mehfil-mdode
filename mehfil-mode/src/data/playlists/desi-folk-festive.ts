import type { Playlist } from "../../types/music.ts";

/**
 * Desi Folk & Festive — Tyohar Aur Lokgeet
 *
 * 32 songs; 27 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const desiFolkFestive: Playlist = {
  id: "pl-desi-folk-festive",
  slug: "desi-folk-festive",
  title: "Desi Folk & Festive",
  shortTitle: "Tyohar Aur Lokgeet",
  description:
    "Holi ke rang, Diwali ki roshni, Garba ki taal aur Bhangra ka josh. Lokgeet aur tyohar ke gaane, desh ke alag-alag kone se.",
  theme: { from: "#3F0D12", via: "#C026D3", to: "#FACC15", pattern: "rings", icon: "flame", emoji: "🪔" },
  accentColor: "#FACC15",
  category: "shaadi-celebrations",
  situations: ["shaadi-celebrations"],
  tags: ["folk", "lokgeet", "holi", "diwali", "garba", "bhangra", "teej", "tyohar"],
  languages: ["Hindi", "Rajasthani", "Punjabi", "Bhojpuri", "Gujarati", "Marathi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "rang-barse", title: "Rang Barse", artist: "Amitabh Bachchan", youtubeUrl: "https://www.youtube.com/watch?v=Jf92MOkrbEw", language: "Hindi", tags: ["holi", "festive", "classic"], position: 1 },
    { id: "balam-pichkari", title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", youtubeUrl: "https://www.youtube.com/watch?v=OW0zhR5xtlE", language: "Hindi", tags: ["holi", "festive", "dance"], position: 2 },
    { id: "chogada", title: "Chogada", artist: "Darshan Raval, Asees Kaur", language: "Hindi", tags: ["garba", "navratri", "festive"], position: 3 },
    { id: "kesariya-balam", title: "Kesariya Balam", artist: "Allah Jilai Bai", youtubeUrl: "https://www.youtube.com/watch?v=hWOH_yqZvl4", language: "Rajasthani", tags: ["folk", "rajasthani", "classic"], position: 4 },
    { id: "gur-nalon-ishq-mitha", title: "Gur Nalon Ishq Mitha", artist: "Malkit Singh", youtubeUrl: "https://www.youtube.com/watch?v=_rGz16v3CUM", language: "Punjabi", tags: ["bhangra", "folk", "festive"], position: 5 },
    { id: "kaanch-hi-baans-ke-bahangiya", title: "Kaanch Hi Baans Ke Bahangiya", artist: "Sharda Sinha", youtubeUrl: "https://www.youtube.com/watch?v=Eyq7vfxu4iA", language: "Bhojpuri", tags: ["chhath", "folk", "festive"], position: 6 },
    { id: "ghoomar", title: "Ghoomar", artist: "Shreya Ghoshal, Swaroop Khan", youtubeUrl: "https://www.youtube.com/watch?v=CU1tFtk_NFY", language: "Hindi", tags: ["rajasthani-folk", "festive", "dance"], position: 7 },
    { id: "moti-veraana", title: "Moti Veraana", artist: "Amit Trivedi, Osman Mir", language: "Gujarati", tags: ["garba", "folk", "festive"], position: 8 },
    { id: "holi-khele-raghuveera", title: "Holi Khele Raghuveera", artist: "Amitabh Bachchan, Alka Yagnik, Udit Narayan, Sukhwinder Singh", youtubeUrl: "https://www.youtube.com/watch?v=qq5Ud7JDIZ0", language: "Hindi", tags: ["holi", "festive"], position: 9 },
    { id: "holi-ke-din", title: "Holi Ke Din", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=eGMeAabrDWo", language: "Hindi", tags: ["holi", "festive", "70s"], position: 10 },
    { id: "aaj-na-chhodenge", title: "Aaj Na Chhodenge", artist: "Kishore Kumar, Lata Mangeshkar", youtubeUrl: "https://www.youtube.com/watch?v=VGQRMUqya3s", embeddable: false, language: "Hindi", tags: ["holi", "festive", "70s"], position: 11 },
    { id: "jai-jai-shivshankar", title: "Jai Jai Shivshankar", artist: "Vishal Dadlani, Benny Dayal", youtubeUrl: "https://www.youtube.com/watch?v=oGneAab3e88", language: "Hindi", tags: ["holi", "festive", "dance"], position: 12 },
    { id: "char-char-bangdi", title: "Char Char Bangdi Wali Gadi", artist: "Kinjal Dave", youtubeUrl: "https://www.youtube.com/watch?v=xkR9KqFwPsA", language: "Gujarati", tags: ["garba", "folk", "festive"], position: 13 },
    { id: "shubhaarambh", title: "Shubhaarambh", artist: "Shruti Pathak, Divya Kumar", language: "Hindi", tags: ["garba", "festive"], position: 14 },
    { id: "udi-udi-jaye", title: "Udi Udi Jaye", artist: "Sukhwinder Singh, Bhoomi Trivedi, Karsan Sagathia", youtubeUrl: "https://www.youtube.com/watch?v=xTxQtctY1Ik", language: "Hindi", tags: ["garba", "festive"], position: 15 },
    { id: "dholi-taro-dhol-baaje", title: "Dholi Taro Dhol Baaje", artist: "Kavita Krishnamurthy, Vinod Rathod, Karsan Sagathia", language: "Hindi", tags: ["garba", "wedding"], position: 16 },
    { id: "kamariya-mitron", title: "Kamariya", artist: "Darshan Raval", youtubeUrl: "https://www.youtube.com/watch?v=i0_m90T04uw", language: "Hindi", tags: ["garba", "navratri"], position: 17 },
    { id: "bolo-ta-ra-ra", title: "Bolo Ta Ra Ra", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=rM8Cr5ZSCbU", language: "Punjabi", tags: ["bhangra", "festive"], position: 18 },
    { id: "ho-jayegi-balle-balle", title: "Ho Jayegi Balle Balle", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=KTE6S-Pmhpw", language: "Punjabi", tags: ["bhangra", "festive"], position: 19 },
    { id: "nach-punjaban-abrar", title: "Nach Punjaban", artist: "Abrar-ul-Haq", youtubeUrl: "https://www.youtube.com/watch?v=BJi1_eQ-JRY", language: "Punjabi", tags: ["bhangra", "folk"], position: 20 },
    { id: "jugni-coke-studio", title: "Jugni", artist: "Arif Lohar, Meesha Shafi", language: "Punjabi", tags: ["folk", "coke-studio"], position: 21 },
    { id: "nimbooda", title: "Nimbooda", artist: "Kavita Krishnamurthy, Karsan Sagathia", youtubeUrl: "https://www.youtube.com/watch?v=wf6A7WFYzpE", language: "Hindi", tags: ["rajasthani-folk", "festive"], position: 22 },
    { id: "pahile-pahil", title: "Pahile Pahil Hum Kaini Chhathi Maiya", artist: "Sharda Sinha", youtubeUrl: "https://www.youtube.com/watch?v=nZwcCabd-1E", language: "Bhojpuri", tags: ["chhath", "folk", "festive"], position: 23 },
    { id: "ho-dinanath", title: "Ho Dinanath", artist: "Sharda Sinha", youtubeUrl: "https://www.youtube.com/watch?v=f-WsraDBPnY", language: "Bhojpuri", tags: ["chhath", "folk", "festive"], position: 24 },
    { id: "sawan-ka-mahina", title: "Sawan Ka Mahina", artist: "Lata Mangeshkar, Mukesh", youtubeUrl: "https://www.youtube.com/watch?v=xE91nT64sT0", language: "Hindi", tags: ["teej", "monsoon", "60s"], position: 25 },
    { id: "zingaat", title: "Zingaat", artist: "Ajay-Atul", youtubeUrl: "https://www.youtube.com/watch?v=2gcsgfzqN8k", language: "Marathi", tags: ["marathi", "dance", "festive"], position: 26 },
    { id: "deva-shree-ganesha", title: "Deva Shree Ganesha", artist: "Ajay Gogavale", youtubeUrl: "https://www.youtube.com/watch?v=RCCYorPLJmQ", language: "Hindi", tags: ["ganesh-chaturthi", "festive"], position: 27 },
    { id: "gajanana", title: "Gajanana", artist: "Sukhwinder Singh", youtubeUrl: "https://www.youtube.com/watch?v=KJF8t-BWVRM", language: "Hindi", tags: ["ganesh-chaturthi", "festive"], position: 28 },
    { id: "morya-re", title: "Morya Re", artist: "Shankar Mahadevan", youtubeUrl: "https://www.youtube.com/watch?v=GrVOG4POsko", language: "Hindi", tags: ["ganesh-chaturthi", "festive"], position: 29 },
    { id: "mundian-to-bach-ke", title: "Mundian To Bach Ke", artist: "Panjabi MC, Labh Janjua", youtubeUrl: "https://www.youtube.com/watch?v=H2gmeNH_oZ0", language: "Punjabi", tags: ["bhangra", "dhol", "classic"], position: 30 },
    { id: "nagada-sang-dhol", title: "Nagada Sang Dhol", artist: "Shreya Ghoshal, Osman Mir", youtubeUrl: "https://www.youtube.com/watch?v=cLIQzxgFeNE", language: "Hindi", tags: ["bollywood", "garba", "dance"], position: 31 },
    { id: "tunak-tunak-tun", title: "Tunak Tunak Tun", artist: "Daler Mehndi", youtubeUrl: "https://www.youtube.com/watch?v=QoEONbxXWIQ", language: "Punjabi", tags: ["bhangra", "dance", "90s"], position: 32 },
  ],
};
