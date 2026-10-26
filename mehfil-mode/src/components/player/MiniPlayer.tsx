"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AudioLines,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ListMusic,
  LoaderCircle,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";
import { usePlayer } from "./PlayerProvider";

interface Props {
  open: boolean;
  hostRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Bottom dock with the YouTube video (kept at least 200px tall, as YouTube's
 * embed rules require) and simple queue controls. "Minimise" pauses the video
 * rather than hiding a playing player.
 */
export function MiniPlayer({ open, hostRef }: Props) {
  const { queue, index, current, status, notice, toggle, next, prev, close, playAt } = usePlayer();
  const [minimised, setMinimised] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const dockRef = useRef<HTMLDivElement | null>(null);

  // Reserve space at the bottom of the page so the dock never covers content.
  useEffect(() => {
    const root = document.documentElement;
    const el = dockRef.current;
    if (!open || !el) {
      root.style.removeProperty("--player-h");
      return;
    }
    const ro = new ResizeObserver(() => root.style.setProperty("--player-h", `${el.offsetHeight}px`));
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty("--player-h");
    };
  }, [open]);

  if (!open) return null;

  const playing = status === "playing";
  const busy = status === "loading";
  // If playback resumes from elsewhere (media keys, lock screen), show the video again.
  const isMin = minimised && !playing;

  const minimise = () => {
    if (playing) toggle();
    setMinimised(true);
    setShowQueue(false);
  };
  const restore = () => {
    setMinimised(false);
    if (!playing) toggle();
  };

  return (
    <div
      ref={dockRef}
      role="region"
      aria-label="Now playing"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line-strong bg-ink-2/95 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
    >
      <p role="status" aria-live="polite" className="sr-only">
        {current ? `${playing ? "Playing" : "Selected"}: ${current.title}${current.artist ? ` by ${current.artist}` : ""}` : ""}
      </p>

      {notice ? (
        <p className="border-b border-line bg-amber/10 px-4 py-1.5 text-center text-xs text-amber-soft">{notice}</p>
      ) : null}

      {showQueue && !isMin ? (
        <div className="container-page border-b border-line py-2">
          <ol className="max-h-56 overflow-y-auto pr-1" aria-label="Up next">
            {queue.map((t, i) => (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => playAt(i)}
                  aria-current={i === index ? "true" : undefined}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/[0.06] ${
                    i === index ? "bg-white/10 text-fg" : "text-muted"
                  }`}
                >
                  <span className="w-6 text-right tabular-nums text-dim">{i === index ? <AudioLines className="ml-auto size-4 text-amber" aria-hidden /> : i + 1}</span>
                  <span className="min-w-0 flex-1 truncate">
                    <span className="font-semibold text-fg">{t.title}</span>
                    {t.artist ? <span className="text-dim"> · {t.artist}</span> : null}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <div className={`container-page flex gap-3 py-3 ${isMin ? "items-center" : "flex-col sm:flex-row sm:items-center"}`}>
        {/* The video itself. Never shrunk below 200px tall while visible. */}
        <div
          className={
            isMin
              ? "pointer-events-none fixed -left-[9999px] top-0 h-[200px] w-[356px] opacity-0"
              : "relative h-[200px] w-full shrink-0 overflow-hidden rounded-xl bg-black sm:w-[356px]"
          }
          aria-hidden={isMin}
        >
          <div ref={hostRef} className="absolute inset-0 [&>iframe]:size-full" />
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-base font-bold text-fg">{current?.title ?? "—"}</p>
            <p className="truncate text-sm text-muted">
              {current?.artist}
              {current?.context ? (
                <>
                  <span className="text-dim"> · </span>
                  {current.context.path ? (
                    <Link href={current.context.path} className="text-dim hover:text-fg">
                      {current.context.label}
                    </Link>
                  ) : (
                    <span className="text-dim">{current.context.label}</span>
                  )}
                </>
              ) : null}
              {queue.length > 1 ? <span className="text-dim"> · {index + 1}/{queue.length}</span> : null}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <IconButton label="Previous song" onClick={prev} disabled={index <= 0 && !playing}>
              <SkipBack className="size-5" aria-hidden />
            </IconButton>
            <button
              type="button"
              onClick={isMin ? restore : toggle}
              aria-label={playing ? "Pause" : "Play"}
              className="grid size-12 place-items-center rounded-full bg-fg text-ink transition hover:bg-white"
            >
              {busy ? (
                <LoaderCircle className="size-5 animate-spin" aria-hidden />
              ) : playing ? (
                <Pause className="size-5" aria-hidden />
              ) : (
                <Play className="size-5 translate-x-px" aria-hidden />
              )}
            </button>
            <IconButton label="Next song" onClick={next} disabled={index >= queue.length - 1}>
              <SkipForward className="size-5" aria-hidden />
            </IconButton>
          </div>

          <div className="hidden shrink-0 items-center gap-1 md:flex">
            {current ? (
              <a
                href={current.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line-strong px-3 text-xs font-semibold text-muted hover:text-fg"
              >
                Open on YouTube <ExternalLink className="size-3.5" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {!isMin && queue.length > 1 ? (
              <IconButton label={showQueue ? "Hide queue" : "Show queue"} onClick={() => setShowQueue((v) => !v)} pressed={showQueue}>
                <ListMusic className="size-5" aria-hidden />
              </IconButton>
            ) : null}
            {isMin ? (
              <IconButton label="Show player" onClick={restore}>
                <ChevronUp className="size-5" aria-hidden />
              </IconButton>
            ) : (
              <IconButton label="Minimise player (pauses)" onClick={minimise}>
                <ChevronDown className="size-5" aria-hidden />
              </IconButton>
            )}
            <IconButton label="Close player" onClick={close}>
              <X className="size-5" aria-hidden />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({
  label,
  onClick,
  disabled,
  pressed,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  pressed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-white/10 hover:text-fg disabled:opacity-35 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  );
}
