import type { Playlist } from "../../types/music.ts";

/**
 * Chai Tapri Mix — Chai Ki Tapri
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
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
    { id: "tum-se-hi", title: "Tum Se Hi", artist: "Mohit Chauhan", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 1 },
    { id: "kal-ho-naa-ho", title: "Kal Ho Naa Ho", artist: "Sonu Nigam", language: "Hindi", tags: ["bollywood", "2000s", "sing-along"], position: 2 },
    { id: "kabira", title: "Kabira", artist: "Tochi Raina, Rekha Bhardwaj", language: "Hindi", tags: ["bollywood", "2010s", "soulful"], position: 3 },
    { id: "tera-hone-laga-hoon", title: "Tera Hone Laga Hoon", artist: "Atif Aslam, Alisha Chinai", language: "Hindi", tags: ["bollywood", "2000s", "romantic"], position: 4 },
    { id: "pehla-nasha", title: "Pehla Nasha", artist: "Udit Narayan, Sadhana Sargam", language: "Hindi", tags: ["bollywood", "90s", "nostalgia"], position: 5 },
    { id: "kun-faya-kun", title: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali, Mohit Chauhan", language: "Hindi", tags: ["bollywood", "sufi", "soulful"], position: 6 },
    { id: "agar-tum-saath-ho", title: "Agar Tum Saath Ho", artist: "Alka Yagnik, Arijit Singh", language: "Hindi", tags: ["bollywood", "2010s", "emotional"], position: 7 },
    { id: "zindagi-kaisi-hai-paheli", title: "Zindagi Kaisi Hai Paheli", artist: "Manna Dey", language: "Hindi", tags: ["bollywood", "70s", "philosophical"], position: 8 },
  ],
};
