import type { Playlist } from "../../types/music.ts";

/**
 * Drive Mode — Long Drive
 *
 * 34 songs; 31 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
 */
export const driveMode: Playlist = {
  id: "pl-drive-mode",
  slug: "drive-mode",
  title: "Drive Mode",
  shortTitle: "Long Drive",
  description:
    "Shaam ki long drive, khuli khidki aur soft music. Romantic Bollywood, indie aur safar ke favourite gaane.",
  theme: { from: "#0C1445", via: "#4F46E5", to: "#22D3EE", pattern: "waves", icon: "car", emoji: "🌆" },
  accentColor: "#67E8F9",
  category: "road-trips",
  situations: ["road-trips", "chill-lounge"],
  tags: ["long drive", "romantic", "indie", "road trip", "night drive", "soft"],
  languages: ["Hindi", "English"],
  featured: true,
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "phir-se-ud-chala", title: "Phir Se Ud Chala", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=-3gQ6HIkRys", language: "Hindi", tags: ["bollywood", "travel"], position: 1 },
    { id: "iktara", title: "Iktara", artist: "Kavita Seth, Amitabh Bhattacharya", youtubeUrl: "https://www.youtube.com/watch?v=ZlOZktsODpA", language: "Hindi", tags: ["bollywood", "soft"], position: 2 },
    { id: "kho-gaye-hum-kahan", title: "Kho Gaye Hum Kahan", artist: "Jasleen Royal, Prateek Kuhad", youtubeUrl: "https://www.youtube.com/watch?v=vt4jX0iRgCg", language: "Hindi", tags: ["bollywood", "indie", "soft"], position: 3 },
    { id: "ilahi", title: "Ilahi", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=hG7dg7dX4hg", language: "Hindi", tags: ["bollywood", "travel", "road-trip"], position: 4 },
    { id: "tum-ho", title: "Tum Ho", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=gkCKTuR-ECI", language: "Hindi", tags: ["bollywood", "romantic"], position: 5 },
    { id: "jeene-laga-hoon", title: "Jeene Laga Hoon", artist: "Atif Aslam, Shreya Ghoshal", youtubeUrl: "https://www.youtube.com/watch?v=pkzOBl1p7y4", language: "Hindi", tags: ["bollywood", "romantic"], position: 6 },
    { id: "cold-mess", title: "cold/mess", artist: "Prateek Kuhad", youtubeUrl: "https://www.youtube.com/watch?v=Il7Nv270zNk", language: "English", tags: ["indie", "soft"], position: 7 },
    { id: "khaabon-ke-parinday", title: "Khaabon Ke Parinday", artist: "Mohit Chauhan, Alyssa Mendonsa", youtubeUrl: "https://www.youtube.com/watch?v=xZAXVM1rSbk", language: "Hindi", tags: ["bollywood", "travel"], position: 8 },
    { id: "raataan-lambiyan", title: "Raataan Lambiyan", artist: "Jubin Nautiyal, Asees Kaur", youtubeUrl: "https://www.youtube.com/watch?v=gvyUuxdRdR4", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 9 },
    { id: "safarnama", title: "Safarnama", artist: "Lucky Ali", youtubeUrl: "https://www.youtube.com/watch?v=TRfosj3JvOo", language: "Hindi", tags: ["bollywood", "travel", "soft"], position: 10 },
    { id: "kesariya", title: "Kesariya", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=g6fnFALEseI", language: "Hindi", tags: ["bollywood", "2020s", "romantic"], position: 11 },
    { id: "tum-se-hi", title: "Tum Se Hi", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=Cb6wuzOurPc", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 12 },
    { id: "hawayein", title: "Hawayein", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=cYOB941gyXI", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 13 },
    { id: "pee-loon", title: "Pee Loon", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=ovR_7R9I_vI", language: "Hindi", tags: ["bollywood", "2010s", "romantic"], position: 14 },
    { id: "baarishein", title: "Baarishein", artist: "Anuv Jain", youtubeUrl: "https://www.youtube.com/watch?v=PJWemSzExXs", language: "Hindi", tags: ["indie", "soft"], position: 15 },
    { id: "choo-lo", title: "Choo Lo", artist: "The Local Train", youtubeUrl: "https://www.youtube.com/watch?v=sFMRqxCexDk", language: "Hindi", tags: ["indie", "rock"], position: 16 },
    { id: "jo-bhi-main", title: "Jo Bhi Main", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=yz-he6EgoOc", language: "Hindi", tags: ["bollywood", "rock"], position: 17 },
    { id: "sadda-haq", title: "Sadda Haq", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=p9DQINKZxWE", language: "Hindi", tags: ["bollywood", "rock"], position: 18 },
    { id: "matargashti", title: "Matargashti", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=Vkcki2dRCxM", language: "Hindi", tags: ["bollywood", "fun"], position: 19 },
    { id: "subhanallah", title: "Subhanallah", artist: "Sreeram Chandra, Shilpa Rao", youtubeUrl: "https://www.youtube.com/watch?v=QYO6AlxiRE4", language: "Hindi", tags: ["bollywood", "romantic"], position: 20 },
    { id: "kabira", title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", youtubeUrl: "https://www.youtube.com/watch?v=jHNNMj5bNQw", language: "Hindi", tags: ["bollywood", "2010s", "soulful"], position: 21 },
    { id: "shaam-aisha", title: "Shaam", artist: "Nikhil D'Souza", youtubeUrl: "https://www.youtube.com/watch?v=fFyXcX-s0C8", language: "Hindi", tags: ["bollywood", "soft"], position: 22 },
    { id: "yeh-dooriyan", title: "Yeh Dooriyan", artist: "Mohit Chauhan", youtubeUrl: "https://www.youtube.com/watch?v=WkkLuQQ_IgY", language: "Hindi", tags: ["bollywood", "romantic"], position: 23 },
    { id: "aaj-din-chadheya", title: "Aaj Din Chadheya", artist: "Rahat Fateh Ali Khan", youtubeUrl: "https://www.youtube.com/watch?v=IImcBEHuDRI", language: "Hindi", tags: ["bollywood", "romantic"], position: 24 },
    { id: "main-tenu-samjhawan-ki", title: "Main Tenu Samjhawan Ki", artist: "Arijit Singh", language: "Hindi", tags: ["bollywood", "romantic"], position: 25 },
    { id: "o-saathi", title: "O Saathi", artist: "Atif Aslam", language: "Hindi", tags: ["bollywood", "romantic"], position: 26 },
    { id: "teri-galliyan", title: "Galliyan", artist: "Ankit Tiwari", youtubeUrl: "https://www.youtube.com/watch?v=QPE6WHhX7HQ", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 27 },
    { id: "sunn-raha-hai", title: "Sunn Raha Hai", artist: "Ankit Tiwari", youtubeUrl: "https://www.youtube.com/watch?v=14dey5w13us", language: "Hindi", tags: ["bollywood", "heartbreak"], position: 28 },
    { id: "tu-hi-re", title: "Tu Hi Re", artist: "Hariharan", youtubeUrl: "https://www.youtube.com/watch?v=V9mN0qBgEzQ", language: "Hindi", tags: ["bollywood", "90s", "romantic"], position: 29 },
    { id: "kaun-tujhe", title: "Kaun Tujhe", artist: "Palak Muchhal", youtubeUrl: "https://www.youtube.com/watch?v=Ov0YGGSY6gY", language: "Hindi", tags: ["bollywood", "romantic"], position: 30 },
    { id: "mann-mera", title: "Mann Mera", artist: "Gajendra Verma", youtubeUrl: "https://www.youtube.com/watch?v=HP2zqQsrsyg", language: "Hindi", tags: ["bollywood", "romantic"], position: 31 },
    { id: "phir-le-aya-dil", title: "Phir Le Aya Dil", artist: "Arijit Singh", youtubeUrl: "https://www.youtube.com/watch?v=k6BnSIs3XUQ", language: "Hindi", tags: ["bollywood", "romantic"], position: 32 },
    { id: "moh-moh-ke-dhaage", title: "Moh Moh Ke Dhaage", artist: "Papon", language: "Hindi", tags: ["bollywood", "soft"], position: 33 },
    { id: "tum-jab-paas", title: "Tum Jab Paas", artist: "Prateek Kuhad", youtubeUrl: "https://www.youtube.com/watch?v=-BpDVIv_860", language: "Hindi", tags: ["indie", "soft"], position: 34 },
  ],
};
