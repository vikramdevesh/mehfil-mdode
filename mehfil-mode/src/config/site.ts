/**
 * Central brand + site configuration.
 * Rename the product, change the tagline or contact details here — every
 * page, metadata tag and share preview reads from this file.
 */
export const siteConfig = {
  name: "Mehfil Mode",
  /** Short Devanagari accent shown next to the wordmark. Set to "" to hide. */
  nameAccent: "महफ़िल",
  tagline: "Har Mehfil Ka Apna Music.",
  supportingLine: "Choose your scene. Discover your sound.",
  heroText:
    "Chai ki tapri ho, doston ki mehfil, shaadi ki baraat ya long drive — apna scene chuno aur perfect playlist dhoondo.",
  description:
    "Mehfil Mode helps you discover music for Indian social situations — chai tapri, salon, highway, shaadi, baraat, long drives and doston ki mehfil. Songs play free through YouTube — no login.",
  /** Target number of songs per playlist once curation is complete. */
  targetSongsPerPlaylist: { min: 30, max: 50 },
  locale: "en_IN",
  keywords: [
    "Indian playlists",
    "Bollywood songs",
    "Punjabi songs",
    "Haryanvi songs",
    "Bhojpuri songs",
    "ghazal",
    "shaadi songs",
    "baraat songs",
    "road trip songs",
    "music discovery",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
