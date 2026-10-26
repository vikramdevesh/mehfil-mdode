import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = ["webp", "jpg", "jpeg", "png", "avif"];

/** Homepage hero image: `public/hero.webp|jpg|jpeg|png|avif` if present. */
export async function getHeroImage(publicDir = path.join(process.cwd(), "public")): Promise<string | undefined> {
  for (const ext of EXTENSIONS) {
    if (existsSync(path.join(publicDir, `hero.${ext}`))) return `/hero.${ext}`;
  }
  return undefined;
}
