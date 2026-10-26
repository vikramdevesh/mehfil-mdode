import type { Playlist } from "../../types/music.ts";

/**
 * Ghazal Mehfil — Ghazal Aur Shayari
 *
 * 34 songs; 31 with a YouTube link found via YouTube search and checked
 * with YouTube's oEmbed endpoint (video exists; `embeddable: false` = the owner
 * blocks playback on other sites). Songs without `youtubeUrl` open a YouTube search.
 * Spot-check links before launch — see YOUTUBE_MATCHES.md for what was matched.
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
  languages: ["Urdu", "Hindi", "Punjabi"],
  // youtubePlaylistUrl: "https://www.youtube.com/playlist?list=...", // add only a real, checked playlist
  songs: [
    { id: "chupke-chupke-raat-din", title: "Chupke Chupke Raat Din", artist: "Ghulam Ali", youtubeUrl: "https://www.youtube.com/watch?v=MWjaK_nW72E", language: "Urdu", tags: ["ghazal", "classic"], position: 1 },
    { id: "hoshwalon-ko-khabar-kya", title: "Hoshwalon Ko Khabar Kya", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=vum0wT9hjO4", language: "Urdu", tags: ["ghazal", "classic"], position: 2 },
    { id: "tum-itna-jo-muskura-rahe-ho", title: "Tum Itna Jo Muskura Rahe Ho", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=In3yneec2hk", language: "Urdu", tags: ["ghazal", "classic"], position: 3 },
    { id: "ranjish-hi-sahi", title: "Ranjish Hi Sahi", artist: "Mehdi Hassan", youtubeUrl: "https://www.youtube.com/watch?v=Ux7jQVb96Ts", language: "Urdu", tags: ["ghazal", "classic"], position: 4 },
    { id: "aaj-jaane-ki-zid-na-karo", title: "Aaj Jaane Ki Zid Na Karo", artist: "Farida Khanum", youtubeUrl: "https://www.youtube.com/watch?v=KDJL2FyRDeA", language: "Urdu", tags: ["ghazal", "classic"], position: 5 },
    { id: "chitthi-na-koi-sandes", title: "Chitthi Na Koi Sandes", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=HbOCFkEdrbI", language: "Hindi", tags: ["ghazal", "emotional"], position: 6 },
    { id: "hothon-se-chhoo-lo-tum", title: "Hothon Se Chhoo Lo Tum", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=X0gB9jcgXxg", language: "Hindi", tags: ["ghazal", "romantic"], position: 7 },
    { id: "chandi-jaisa-rang-hai-tera", title: "Chandi Jaisa Rang Hai Tera", artist: "Pankaj Udhas", youtubeUrl: "https://www.youtube.com/watch?v=6UiwXthbtZs", language: "Hindi", tags: ["ghazal", "romantic"], position: 8 },
    { id: "woh-kaagaz-ki-kashti", title: "Woh Kaagaz Ki Kashti", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=xEdAiJiwkDE", language: "Hindi", tags: ["ghazal", "nostalgia"], position: 9 },
    { id: "tumko-dekha-to", title: "Tumko Dekha To Ye Khayal Aaya", artist: "Jagjit Singh, Chitra Singh", youtubeUrl: "https://www.youtube.com/watch?v=WtPbNKk9XpU", language: "Urdu", tags: ["ghazal", "romantic"], position: 10 },
    { id: "jhuki-jhuki-si-nazar", title: "Jhuki Jhuki Si Nazar", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=Eat7bbGgSa0", language: "Urdu", tags: ["ghazal", "romantic"], position: 11 },
    { id: "koi-fariyaad", title: "Koi Fariyaad", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=8MN2bxMiB9A", language: "Urdu", tags: ["ghazal", "emotional"], position: 12 },
    { id: "kal-chaudhvin-ki-raat", title: "Kal Chaudhvin Ki Raat Thi", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=JzaVoULkZNM", language: "Urdu", tags: ["ghazal", "classic"], position: 13 },
    { id: "baat-niklegi", title: "Baat Niklegi To Phir", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=1MKdWpE_724", language: "Urdu", tags: ["ghazal", "classic"], position: 14 },
    { id: "hazaron-khwahishen", title: "Hazaron Khwahishen Aisi", artist: "Jagjit Singh", youtubeUrl: "https://www.youtube.com/watch?v=Y3sjcbtr6U0", language: "Urdu", tags: ["ghazal", "ghalib"], position: 15 },
    { id: "patta-patta-boota-boota", title: "Patta Patta Boota Boota", artist: "Mehdi Hassan", youtubeUrl: "https://www.youtube.com/watch?v=ivAJV9B3Y4Y", language: "Urdu", tags: ["ghazal", "classic"], position: 16 },
    { id: "gulon-mein-rang-bhare", title: "Gulon Mein Rang Bhare", artist: "Mehdi Hassan", youtubeUrl: "https://www.youtube.com/watch?v=Ds8nabK0vE8", language: "Urdu", tags: ["ghazal", "faiz"], position: 17 },
    { id: "zindagi-mein-to-sabhi", title: "Zindagi Mein To Sabhi Pyaar Kiya Karte Hain", artist: "Mehdi Hassan", youtubeUrl: "https://www.youtube.com/watch?v=4dcIvP8_sRk", language: "Urdu", tags: ["ghazal", "classic"], position: 18 },
    { id: "ab-ke-hum-bichhde", title: "Ab Ke Hum Bichhde", artist: "Mehdi Hassan", youtubeUrl: "https://www.youtube.com/watch?v=Lt7Z_ky2iQM", language: "Urdu", tags: ["ghazal", "faraz"], position: 19 },
    { id: "hungama-hai-kyon-barpa", title: "Hungama Hai Kyon Barpa", artist: "Ghulam Ali", youtubeUrl: "https://www.youtube.com/watch?v=xQsMn1kmJs4", language: "Urdu", tags: ["ghazal", "classic"], position: 20 },
    { id: "dil-mein-ek-lehar", title: "Dil Mein Ek Lehar Si Uthi Hai Abhi", artist: "Ghulam Ali", youtubeUrl: "https://www.youtube.com/watch?v=1dqCcxW8UGk", language: "Urdu", tags: ["ghazal", "classic"], position: 21 },
    { id: "awargi", title: "Awargi", artist: "Ghulam Ali", youtubeUrl: "https://www.youtube.com/watch?v=pZWqn3BC17Q", language: "Urdu", tags: ["ghazal", "classic"], position: 22 },
    { id: "chitthi-aayi-hai", title: "Chitthi Aayi Hai", artist: "Pankaj Udhas", youtubeUrl: "https://www.youtube.com/watch?v=v0_IRIFYC0k", language: "Hindi", tags: ["ghazal", "emotional"], position: 23 },
    { id: "aur-ahista-kijiye-baatein", title: "Aur Ahista Kijiye Baatein", artist: "Pankaj Udhas", language: "Urdu", tags: ["ghazal", "romantic"], position: 24 },
    { id: "na-kajre-ki-dhaar", title: "Na Kajre Ki Dhaar", artist: "Pankaj Udhas, Sadhana Sargam", youtubeUrl: "https://www.youtube.com/watch?v=C_wxaIOPMZk", language: "Hindi", tags: ["ghazal", "romantic"], position: 25 },
    { id: "ae-mohabbat", title: "Ae Mohabbat Tere Anjaam Pe Rona Aaya", artist: "Begum Akhtar", youtubeUrl: "https://www.youtube.com/watch?v=PrTXeyhRpOA", language: "Urdu", tags: ["ghazal", "classic"], position: 26 },
    { id: "yaar-ko-hamne", title: "Yaar Ko Hamne Ja Baja Dekha", artist: "Abida Parveen", youtubeUrl: "https://www.youtube.com/watch?v=DNEVvqcSHsc", language: "Urdu", tags: ["sufi", "ghazal"], position: 27 },
    { id: "tumhe-dillagi", title: "Tumhe Dillagi Bhool Jani Padegi", artist: "Nusrat Fateh Ali Khan", language: "Urdu", tags: ["qawwali", "sufi"], position: 28 },
    { id: "mere-rashke-qamar", title: "Mere Rashke Qamar", artist: "Nusrat Fateh Ali Khan", youtubeUrl: "https://www.youtube.com/watch?v=q8gilwzNQEA", language: "Urdu", tags: ["qawwali", "sufi"], position: 29 },
    { id: "sanu-ek-pal-chain", title: "Sanu Ek Pal Chain Na Aave", artist: "Nusrat Fateh Ali Khan", youtubeUrl: "https://www.youtube.com/watch?v=z9hPMnf52Io", language: "Punjabi", tags: ["qawwali", "sufi"], position: 30 },
    { id: "dasht-e-tanhai", title: "Dasht-e-Tanhai", artist: "Iqbal Bano", youtubeUrl: "https://www.youtube.com/watch?v=y0HEUP44Z1Y", language: "Urdu", tags: ["ghazal", "faiz"], position: 31 },
    { id: "dil-cheez-kya-hai", title: "Dil Cheez Kya Hai", artist: "Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=eFcs3p1moMA", language: "Urdu", tags: ["ghazal", "bollywood"], position: 32 },
    { id: "in-aankhon-ki-masti", title: "In Aankhon Ki Masti", artist: "Asha Bhosle", youtubeUrl: "https://www.youtube.com/watch?v=KjJWcs3uo6k", language: "Urdu", tags: ["ghazal", "bollywood"], position: 33 },
    { id: "zindagi-jab-bhi", title: "Zindagi Jab Bhi Teri Bazm Mein", artist: "Talat Aziz", language: "Urdu", tags: ["ghazal", "bollywood"], position: 34 },
  ],
};
