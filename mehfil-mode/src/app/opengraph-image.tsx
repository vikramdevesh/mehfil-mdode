import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "#f3f4fa",
          background: "#0a0c17",
          backgroundImage:
            "radial-gradient(800px 400px at 90% 0%, rgba(91,134,255,0.45), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(155,107,255,0.4), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#f6b23e" }}>{siteConfig.name}</div>
        <div style={{ fontSize: 100, fontWeight: 800, lineHeight: 1, letterSpacing: -3, marginTop: 18 }}>{siteConfig.tagline}</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#a6abc6" }}>{siteConfig.supportingLine}</div>
      </div>
    ),
    size,
  );
}
