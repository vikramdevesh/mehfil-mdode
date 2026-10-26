import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { getAllSlugs, getPlaylistBySlug } from "@/lib/data-provider";

export const alt = "Playlist cover";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return (await getAllSlugs()).map((slug) => ({ slug }));
}

/** Social share preview generated from the playlist's theme — no external images. */
export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getPlaylistBySlug(slug);
  const title = p?.title ?? siteConfig.name;
  const short = p?.shortTitle ?? siteConfig.tagline;
  const theme = p?.theme ?? { from: "#0a0c17", via: "#5b86ff", to: "#f6b23e" };
  const count = p?.stats.total ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          backgroundImage: `linear-gradient(135deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 120%)`,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700, opacity: 0.92 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.9)", display: "flex" }} />
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, fontWeight: 600, opacity: 0.85 }}>{short}</div>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -2, marginTop: 8 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, opacity: 0.9 }}>
          <span>{siteConfig.tagline}</span>
          <span>{count > 0 ? `${count} songs · opens on YouTube` : "Opens on YouTube"}</span>
        </div>
      </div>
    ),
    size,
  );
}
