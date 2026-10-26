export function Tag({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "amber" | "electric" }) {
  const tones = {
    default: "border-line-strong bg-white/5 text-muted",
    amber: "border-amber/30 bg-amber/10 text-amber-soft",
    electric: "border-electric/30 bg-electric/10 text-electric-soft",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
