/** Generic "play on video site" glyph (rounded screen + play triangle). */
export function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor" />
      <path d="M10 8.75v6.5l5.5-3.25z" fill="#fff" />
    </svg>
  );
}
