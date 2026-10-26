import { createElement } from "react";
import {
  Bus,
  Car,
  Coffee,
  Drum,
  Feather,
  Flame,
  Flower2,
  House,
  Music2,
  PartyPopper,
  Scissors,
  Sparkles,
  Truck,
  Users,
  Volume2,
  Wine,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types/music";

/** Maps data-layer icon keys to Lucide components (keeps data UI-agnostic). */
export const ICONS: Record<IconKey, LucideIcon> = {
  scissors: Scissors,
  truck: Truck,
  coffee: Coffee,
  bus: Bus,
  volume: Volume2,
  party: PartyPopper,
  users: Users,
  feather: Feather,
  wine: Wine,
  flower: Flower2,
  sparkles: Sparkles,
  home: House,
  car: Car,
  flame: Flame,
  drum: Drum,
  music: Music2,
};

/** Decorative icon resolved from a data key. Always aria-hidden. */
export function DataIcon({ name, className, strokeWidth }: { name: IconKey; className?: string; strokeWidth?: number }) {
  return createElement(ICONS[name] ?? Music2, { className, strokeWidth, "aria-hidden": true });
}
