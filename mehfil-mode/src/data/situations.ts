import type { Situation, SituationId } from "../types/music.ts";

/**
 * Everyday Indian situations used to group playlists on the homepage and the
 * Explore page. Playlists opt in via their `situations` array — songs are
 * never duplicated here.
 */
export const situations: Situation[] = [
  {
    id: "chai-tapri",
    label: "Chai & Tapri",
    hinglish: "Nukkad ki baatein",
    description: "Tapri, salon, local dukaan — the everyday soundtrack of the gali.",
    icon: "coffee",
  },
  {
    id: "road-trips",
    label: "Road Trips",
    hinglish: "Safar ke saathi",
    description: "Highways, bus rides and long drives with the windows down.",
    icon: "car",
  },
  {
    id: "friends-mehfil",
    label: "Friends & Mehfil",
    hinglish: "Yaaron ki mehfil",
    description: "Old friends, new stories, and songs everyone knows by heart.",
    icon: "users",
  },
  {
    id: "party-mode",
    label: "Party Mode",
    hinglish: "Volume badhao",
    description: "Dance floors, house parties and full-volume desi energy.",
    icon: "party",
  },
  {
    id: "shaadi-celebrations",
    label: "Shaadi & Celebrations",
    hinglish: "Dhol, mehendi, tyohar",
    description: "Sangeet, baraat, family functions and festivals.",
    icon: "sparkles",
  },
  {
    id: "chill-lounge",
    label: "Chill & Lounge",
    hinglish: "Sukoon wali shaam",
    description: "Ghazals, lounge, jazz and slow evenings.",
    icon: "wine",
  },
];

export const SITUATION_IDS: SituationId[] = situations.map((s) => s.id);
