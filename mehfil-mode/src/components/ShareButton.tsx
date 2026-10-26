"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Check, Copy, Mail, MessageCircle, Share2, X as XIcon } from "lucide-react";

interface Props {
  /** Canonical, absolute public URL (computed on the server). */
  url: string;
  title: string;
  text?: string;
}

const noopSubscribe = () => () => {};

function useCanNativeShare(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => typeof navigator !== "undefined" && typeof navigator.share === "function",
    () => false,
  );
}

async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    /* fall through to legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = value;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Share + Copy link controls.
 * - Uses the native Web Share sheet when available (most phones).
 * - Otherwise opens a small menu with WhatsApp / X / Email / Copy.
 * - Copy shows a confirmation, or the raw URL to copy manually if blocked.
 */
export function ShareButton({ url, title, text }: Props) {
  const canShare = useCanNativeShare();
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const message = text ? `${text}` : title;

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const onCopy = async () => {
    const ok = await copyText(url);
    setStatus(ok ? "copied" : "failed");
    if (timer.current) clearTimeout(timer.current);
    if (ok) timer.current = setTimeout(() => setStatus("idle"), 2500);
  };

  const onShare = async () => {
    if (canShare) {
      try {
        await navigator.share({ title, text: message, url });
      } catch (err) {
        // AbortError = user closed the sheet; anything else → show fallback menu.
        if ((err as DOMException)?.name !== "AbortError") setMenuOpen(true);
      }
      return;
    }
    setMenuOpen((v) => !v);
  };

  const enc = encodeURIComponent;
  const fallbackLinks = [
    { label: "WhatsApp", href: `https://wa.me/?text=${enc(`${message} ${url}`)}`, icon: MessageCircle },
    { label: "X (Twitter)", href: `https://twitter.com/intent/tweet?text=${enc(message)}&url=${enc(url)}`, icon: XIcon },
    { label: "Email", href: `mailto:?subject=${enc(title)}&body=${enc(`${message}\n\n${url}`)}`, icon: Mail },
  ];

  const btn =
    "inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-white/5 px-4 text-sm font-semibold text-fg transition hover:bg-white/10";

  return (
    <div ref={wrapRef} className="relative flex flex-wrap items-center gap-2">
      <button
        type="button"
        className={btn}
        onClick={onShare}
        aria-haspopup={canShare ? undefined : "true"}
        aria-expanded={canShare ? undefined : menuOpen}
        aria-controls={canShare ? undefined : menuId}
      >
        <Share2 className="size-4" aria-hidden />
        Share playlist
      </button>
      <button type="button" className={btn} onClick={onCopy}>
        {status === "copied" ? <Check className="size-4 text-emerald-400" aria-hidden /> : <Copy className="size-4" aria-hidden />}
        {status === "copied" ? "Copied!" : "Copy link"}
      </button>

      <p role="status" aria-live="polite" className="w-full text-sm">
        {status === "copied" ? <span className="text-emerald-400">Link copied to clipboard.</span> : null}
        {status === "failed" ? (
          <span className="flex flex-col gap-1 text-amber-soft">
            Couldn&apos;t copy automatically — select and copy this link:
            <input
              readOnly
              value={url}
              onFocus={(e) => e.currentTarget.select()}
              aria-label="Playlist link"
              className="w-full max-w-md rounded-lg border border-line-strong bg-ink px-3 py-2 text-fg"
            />
          </span>
        ) : null}
      </p>

      {menuOpen ? (
        <div
          id={menuId}
          className="absolute left-0 top-12 z-30 w-60 rounded-2xl border border-line-strong bg-ink-3 p-2 shadow-2xl shadow-black/50"
        >
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-dim">Share via</p>
          <ul>
            {fallbackLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-fg hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon className="size-4 text-muted" aria-hidden />
                  {label}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-fg hover:bg-white/5"
                onClick={() => {
                  void onCopy();
                  setMenuOpen(false);
                }}
              >
                <Copy className="size-4 text-muted" aria-hidden />
                Copy link
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
