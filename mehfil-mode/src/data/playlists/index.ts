import type { Playlist } from "../../types/music.ts";
import { salonClassics } from "./salon-classics.ts";
import { highwayAnthems } from "./highway-anthems.ts";
import { chaiTapriMix } from "./chai-tapri-mix.ts";
import { busWaleHits } from "./bus-wale-hits.ts";
import { fullVolumeMode } from "./full-volume-mode.ts";
import { partyMode } from "./party-mode.ts";
import { puraneYaar } from "./purane-yaar.ts";
import { ghazalMehfil } from "./ghazal-mehfil.ts";
import { sophisticatedSounds } from "./sophisticated-sounds.ts";
import { mahilaSangeet } from "./mahila-sangeet.ts";
import { girlsNightIn } from "./girls-night-in.ts";
import { familyFunctionHits } from "./family-function-hits.ts";
import { driveMode } from "./drive-mode.ts";
import { desiFolkFestive } from "./desi-folk-festive.ts";
import { baraatBangers } from "./baraat-bangers.ts";

/**
 * The ordered list of all playlists. To add a playlist: create a new file in
 * this folder (copy _template.ts), import it here and add it to the array.
 * To remove one: delete it from this array (and optionally delete the file).
 */
export const playlistSources: Playlist[] = [
  salonClassics,
  highwayAnthems,
  chaiTapriMix,
  busWaleHits,
  fullVolumeMode,
  partyMode,
  puraneYaar,
  ghazalMehfil,
  sophisticatedSounds,
  mahilaSangeet,
  girlsNightIn,
  familyFunctionHits,
  driveMode,
  desiFolkFestive,
  baraatBangers,
];
