import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">{eyebrow}</p> : null}
        <h2 id={id} className="mt-2 text-balance text-3xl font-extrabold text-fg sm:text-4xl">
          {title}
        </h2>
        {description ? <p className="mt-3 text-base leading-relaxed text-muted">{description}</p> : null}
      </div>
      {href && linkLabel ? (
        <Link href={href} className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-electric-soft hover:text-fg">
          {linkLabel}
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
        </Link>
      ) : null}
    </div>
  );
}
