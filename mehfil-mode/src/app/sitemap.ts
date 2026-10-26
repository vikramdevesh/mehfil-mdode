import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/data-provider";
import { absoluteUrl, playlistPath } from "@/lib/url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugs();
  const staticPaths = ["/", "/playlists", "/regional", "/about", "/suggest"];
  return [
    ...staticPaths.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...slugs.map((slug) => ({
      url: absoluteUrl(playlistPath(slug)),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
