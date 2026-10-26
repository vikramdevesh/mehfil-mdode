"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { NAV_LINKS, isActive } from "./nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-xl supports-[backdrop-filter]:bg-ink/65">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active ? "bg-white/10 text-fg" : "text-muted hover:bg-white/5 hover:text-fg"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-3 text-sm text-muted transition-colors hover:border-electric/60 hover:text-fg sm:px-4 md:min-w-52"
          >
            <Search className="size-4 text-electric-soft" aria-hidden />
            <span className="hidden sm:inline">Search songs, scenes…</span>
            <span className="sr-only sm:hidden">Search</span>
          </Link>

          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-ink-2/95 md:hidden"
      >
        <ul className="container-page flex flex-col py-2">
          {NAV_LINKS.map((l) => {
            const active = isActive(pathname, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-medium ${
                    active ? "bg-white/10 text-fg" : "text-muted hover:bg-white/5 hover:text-fg"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
