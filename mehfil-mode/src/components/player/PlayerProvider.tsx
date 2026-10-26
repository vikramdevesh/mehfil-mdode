"use client";

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { Track } from "@/lib/player";
import { describePlayerError, nextIndex, prevIndex } from "@/lib/player";
import { MiniPlayer } from "./MiniPlayer";
import { loadYouTubeApi, type YTPlayer } from "./youtube-api";

export type PlayerStatus = "idle" | "loading" | "playing" | "paused" | "ended" | "error";

interface PlayerApi {
  queue: Track[];
  index: number;
  current: Track | undefined;
  status: PlayerStatus;
  notice: string | null;
  /** Replace the queue and start playing at `startIndex`. */
  playQueue: (tracks: Track[], startIndex?: number) => void;
  playAt: (index: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  close: () => void;
}

const PlayerContext = createContext<PlayerApi | null>(null);

export function usePlayer(): PlayerApi {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside <PlayerProvider>");
  return ctx;
}

/**
 * Site-wide YouTube player. Lives in the root layout so music keeps playing
 * while people browse between pages. Uses YouTube's official IFrame Player
 * API — the video stays visible (YouTube requires a 200×200 minimum), ads and
 * YouTube branding are untouched, and no login is needed.
 */
export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [queue, setQueue] = useState<Track[]>([]);
  const [index, setIndex] = useState(-1);
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [notice, setNotice] = useState<string | null>(null);
  /** Bumped on every explicit play request so re-playing the same video works. */
  const [nonce, setNonce] = useState(0);

  const hostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const readyRef = useRef(false);
  const errorStreak = useRef(0);
  const state = useRef({ queue, index });
  useLayoutEffect(() => {
    state.current = { queue, index };
  }, [queue, index]);

  const current = index >= 0 ? queue[index] : undefined;
  const open = queue.length > 0;

  const advance = useCallback((auto: boolean) => {
    const { queue: q, index: i } = state.current;
    const n = nextIndex(i, q.length);
    if (n === -1) {
      if (auto) setStatus("ended");
      return;
    }
    setStatus("loading");
    setIndex(n);
    setNonce((x) => x + 1);
  }, []);

  // Create the player on first use, then load each new track into it.
  useEffect(() => {
    if (!current) return;
    let cancelled = false;

    if (playerRef.current && readyRef.current) {
      playerRef.current.loadVideoById(current.videoId);
      return;
    }
    if (playerRef.current) return; // still initialising; onReady will load the latest track

    loadYouTubeApi()
      .then((YT) => {
        if (cancelled || !hostRef.current || playerRef.current) return;
        const mount = document.createElement("div");
        hostRef.current.replaceChildren(mount);
        playerRef.current = new YT.Player(mount, {
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          videoId: current.videoId,
          playerVars: { autoplay: 1, playsinline: 1, rel: 0, origin: window.location.origin },
          events: {
            onReady: (e) => {
              readyRef.current = true;
              const latest = state.current.queue[state.current.index];
              if (latest && latest.videoId !== current.videoId) e.target.loadVideoById(latest.videoId);
              else e.target.playVideo();
            },
            onStateChange: (e) => {
              if (e.data === 1) {
                errorStreak.current = 0;
                setStatus("playing");
              } else if (e.data === 2) setStatus("paused");
              else if (e.data === 3) setStatus("loading");
              else if (e.data === 0) advance(true);
            },
            onError: (e) => {
              const { queue: q, index: i } = state.current;
              const bad = q[i];
              errorStreak.current += 1;
              setNotice(`Skipped “${bad?.title ?? "a song"}” — ${describePlayerError(e.data)}.`);
              if (errorStreak.current >= q.length) {
                setStatus("error");
                return;
              }
              advance(true);
            },
          },
        });
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
        setNotice("Couldn't load YouTube's player (an ad-blocker may be blocking it). Use “Open on YouTube” instead.");
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- reload only when the track or play request changes
  }, [current?.videoId, nonce]);

  // Clear a notice after a few seconds.
  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), 6000);
    return () => window.clearTimeout(t);
  }, [notice]);

  const playQueue = useCallback((tracks: Track[], startIndex = 0) => {
    if (!tracks.length) return;
    errorStreak.current = 0;
    setNotice(null);
    setStatus("loading");
    setQueue(tracks);
    setIndex(Math.min(Math.max(0, startIndex), tracks.length - 1));
    setNonce((x) => x + 1);
  }, []);

  const playAt = useCallback((i: number) => {
    if (i < 0 || i >= state.current.queue.length) return;
    errorStreak.current = 0;
    setStatus("loading");
    setIndex(i);
    setNonce((x) => x + 1);
  }, []);

  const toggle = useCallback(() => {
    const p = playerRef.current;
    if (!p || !readyRef.current) return;
    if (p.getPlayerState() === 1) p.pauseVideo();
    else if (p.getPlayerState() === 0) {
      setStatus("loading");
      setNonce((x) => x + 1);
    }
    else p.playVideo();
  }, []);

  const next = useCallback(() => advance(false), [advance]);
  const prev = useCallback(() => {
    const p = playerRef.current;
    // Like most players: "previous" restarts the song if we're a few seconds in.
    if (p && readyRef.current && p.getCurrentTime() > 4) {
      p.seekTo(0, true);
      return;
    }
    const { queue: q, index: i } = state.current;
    setStatus("loading");
    setIndex(prevIndex(i, q.length));
    setNonce((x) => x + 1);
  }, []);

  const close = useCallback(() => {
    playerRef.current?.destroy();
    playerRef.current = null;
    readyRef.current = false;
    hostRef.current?.replaceChildren();
    setQueue([]);
    setIndex(-1);
    setStatus("idle");
    setNotice(null);
  }, []);

  // Lock-screen / headphone controls where the browser supports them.
  useEffect(() => {
    if (!("mediaSession" in navigator)) return;
    const ms = navigator.mediaSession;
    if (!current) {
      ms.metadata = null;
      return;
    }
    try {
      ms.metadata = new MediaMetadata({
        title: current.title,
        artist: current.artist ?? "",
        album: current.context?.label ?? "Mehfil Mode",
        artwork: [{ src: `https://i.ytimg.com/vi/${current.videoId}/hqdefault.jpg`, sizes: "480x360", type: "image/jpeg" }],
      });
      ms.setActionHandler("nexttrack", next);
      ms.setActionHandler("previoustrack", prev);
    } catch {
      /* unsupported action — ignore */
    }
  }, [current, next, prev]);

  const api = useMemo<PlayerApi>(
    () => ({ queue, index, current, status, notice, playQueue, playAt, toggle, next, prev, close }),
    [queue, index, current, status, notice, playQueue, playAt, toggle, next, prev, close],
  );

  return (
    <PlayerContext.Provider value={api}>
      {children}
      <MiniPlayer open={open} hostRef={hostRef} />
    </PlayerContext.Provider>
  );
}
