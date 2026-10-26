import Image from "next/image";
import type { ArtPattern, PlaylistTheme } from "@/types/music";
import { DataIcon } from "./icons";

interface Props {
  slug: string;
  title: string;
  shortTitle: string;
  theme: PlaylistTheme;
  coverImage?: string;
  size?: "card" | "hero";
  className?: string;
  /** Load eagerly (above-the-fold hero art). */
  priority?: boolean;
  /** Hide from assistive tech when a visible title already describes it. */
  decorative?: boolean;
}

/**
 * Generated playlist artwork: themed gradient + pattern + icon. No external
 * images, so nothing can break. If `coverImage` (a file in /public) is set it
 * is layered on top, with the generated art as the fallback underneath.
 */
export function PlaylistArt({ slug, title, shortTitle, theme, coverImage, size = "card", className = "", priority, decorative = false }: Props) {
  const hero = size === "hero";
  return (
    <div
      className={`relative isolate overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(140deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 120%)` }}
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": `${title} — ${shortTitle} cover art` })}
    >
      <Pattern kind={theme.pattern} id={`${slug}-${size}`} />

      {/* soft light + vignette */}
      <div aria-hidden className="absolute -right-1/4 -top-1/3 size-[90%] rounded-full bg-white/15 blur-3xl" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

      <DataIcon
        name={theme.icon}
        strokeWidth={1.25}
        className={`absolute text-white/90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] ${
          hero ? "right-6 top-6 size-24 sm:size-32" : "right-4 top-4 size-14 sm:size-16"
        }`}
      />
      {theme.emoji ? (
        <span aria-hidden className={`absolute select-none ${hero ? "bottom-6 right-8 text-5xl" : "bottom-3 right-4 text-3xl"} opacity-90`}>
          {theme.emoji}
        </span>
      ) : null}

      {coverImage ? (
        <Image
          src={coverImage}
          alt=""
          fill
          priority={priority}
          sizes={hero ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"}
          className="object-cover"
        />
      ) : null}
      {coverImage ? (
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      ) : null}

      <div className={`absolute inset-x-0 bottom-0 ${hero ? "p-6 pr-24" : "p-4 pr-14"}`}>
        <p className={`font-display font-bold leading-[0.95] text-white ${hero ? "text-3xl sm:text-4xl" : "text-xl"}`} aria-hidden>
          {shortTitle}
        </p>
      </div>
    </div>
  );
}

function Pattern({ kind, id }: { kind: ArtPattern; id: string }) {
  const pid = `pat-${id}`;
  const common = "absolute inset-0 h-full w-full text-white";
  switch (kind) {
    case "dots":
      return (
        <svg aria-hidden className={`${common} opacity-[0.18]`}>
          <defs>
            <pattern id={pid} width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.6" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      );
    case "stripes":
      return (
        <svg aria-hidden className={`${common} opacity-[0.14]`}>
          <defs>
            <pattern id={pid} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
              <rect width="9" height="22" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      );
    case "waves":
      return (
        <svg aria-hidden className={`${common} opacity-[0.16]`}>
          <defs>
            <pattern id={pid} width="60" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 Q15 0 30 10 T60 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      );
    case "grid":
      return (
        <svg aria-hidden className={`${common} opacity-[0.12]`}>
          <defs>
            <pattern id={pid} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      );
    case "rings":
      return (
        <svg aria-hidden viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={`${common} opacity-[0.16]`}>
          {[20, 40, 60, 80, 100, 120, 140].map((r) => (
            <circle key={r} cx="30" cy="170" r={r} fill="none" stroke="currentColor" strokeWidth="1.2" />
          ))}
        </svg>
      );
    case "rays":
      return (
        <svg aria-hidden viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" className={`${common} opacity-[0.14]`}>
          {Array.from({ length: 18 }, (_, i) => {
            const a = (Math.PI * i) / 17;
            return (
              <line
                key={i}
                x1="100"
                y1="210"
                x2={100 + Math.cos(a) * 260}
                y2={210 - Math.sin(a) * 260}
                stroke="currentColor"
                strokeWidth="5"
              />
            );
          })}
        </svg>
      );
  }
}
