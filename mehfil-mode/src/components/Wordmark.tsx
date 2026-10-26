import Link from "next/link";
import { siteConfig } from "@/config/site";

/** Custom text wordmark: an equaliser glyph + brand name + Devanagari accent. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        aria-hidden
        className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-electric via-violet to-amber shadow-lg shadow-violet/20"
      >
        <svg viewBox="0 0 24 24" className="size-5 text-ink" fill="currentColor">
          <rect x="3" y="10" width="3" height="8" rx="1.5" />
          <rect x="8" y="5" width="3" height="13" rx="1.5" />
          <rect x="13" y="8" width="3" height="10" rx="1.5" />
          <rect x="18" y="12" width="3" height="6" rx="1.5" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-fg">{siteConfig.name}</span>
        {siteConfig.nameAccent ? (
          <span aria-hidden className="mt-0.5 font-[family-name:var(--font-deva)] text-[11px] text-amber-soft/80">
            {siteConfig.nameAccent}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
