export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/playlists", label: "Explore Playlists" },
  { href: "/regional", label: "Regional Music" },
  { href: "/about", label: "About" },
] as const;

export function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
