import { Music2 } from "lucide-react";

export function EmptyState({
  title,
  description,
  children,
  icon,
}: {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center rounded-[var(--radius-card)] border border-dashed border-line-strong bg-white/[0.02] px-6 py-12 text-center">
      <div className="grid size-12 place-items-center rounded-2xl bg-white/5 text-electric-soft">
        {icon ?? <Music2 className="size-6" aria-hidden />}
      </div>
      <h3 className="mt-4 text-lg font-bold text-fg">{title}</h3>
      {description ? <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{description}</p> : null}
      {children ? <div className="mt-5 flex flex-wrap justify-center gap-3">{children}</div> : null}
    </div>
  );
}
