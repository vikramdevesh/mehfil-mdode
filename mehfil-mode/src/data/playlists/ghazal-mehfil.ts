import type { Playlist } from "../../types/music.ts";

/**
 * Ghazal Mehfil — Ghazal Aur Shayari
 *
 * STATUS: 8 starter suggestions — real, well-known songs listed by
 * title and artist only. No YouTube video links have been added yet, so the site
 * shows a clearly-labelled "Find on YouTube" search link for each one.
 * Target: 50–60 songs. See src/data/playlists/_template.ts for how to add songs.
 * Add `youtubeUrl: "https://www.youtube.com/watch?v=..."` to a song only after
 * checking the official video yourself.
 */
export const ghazalMehfil: Playlist = {
  id: "pl-ghazal-mehfil",
  slug: "ghazal-mehfil",
  title: "Ghazal Mehfil",
  shortTitle: "Ghazal Aur Shayari",
  description:
    "Shayari, sukoon aur dil se nikli awaaz. Ghazalein aur nazmein — dheemi shaamon aur khaas mehfilon ke liye.",
  theme: { from: "#1E1B4B", via: "#4338CA", to: "#A78BFA", pattern: "waves", icon: "feather", emoji: "🌙" },
  accentColor: "#A5B4FC",
  category: "chill-lounge",
  situations: ["chill-lounge", "friends-mehfil"],
  tags: ["ghazal", "shayari", "nazm", "urdu", "jagjit singh", "sukoon"],
  languages: ["Urdu", "Hindi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "chupke-chupke-raat-din", title: "Chupke Chupke Raat Din", artist: "Ghulam Ali", language: "Urdu", tags: ["ghazal", "classic"], position: 1 },
    { id: "hoshwalon-ko-khabar-kya", title: "Hoshwalon Ko Khabar Kya", artist: "Jagjit Singh", language: "Urdu", tags: ["ghazal", "classic"], position: 2 },
    { id: "tum-itna-jo-muskura-rahe-ho", title: "Tum Itna Jo Muskura Rahe Ho", artist: "Jagjit Singh", language: "Urdu", tags: ["ghazal", "classic"], position: 3 },
    { id: "ranjish-hi-sahi", title: "Ranjish Hi Sahi", artist: "Mehdi Hassan", language: "Urdu", tags: ["ghazal", "classic"], position: 4 },
    { id: "aaj-jaane-ki-zid-na-karo", title: "Aaj Jaane Ki Zid Na Karo", artist: "Farida Khanum", language: "Urdu", tags: ["ghazal", "classic"], position: 5 },
    { id: "chitthi-na-koi-sandes", title: "Chitthi Na Koi Sandes", artist: "Jagjit Singh", language: "Hindi", tags: ["ghazal", "emotional"], position: 6 },
    { id: "hothon-se-chhoo-lo-tum", title: "Hothon Se Chhoo Lo Tum", artist: "Jagjit Singh", language: "Hindi", tags: ["ghazal", "romantic"], position: 7 },
    { id: "chandi-jaisa-rang-hai-tera", title: "Chandi Jaisa Rang Hai Tera", artist: "Pankaj Udhas", language: "Hindi", tags: ["ghazal", "romantic"], position: 8 },
  ],
};
