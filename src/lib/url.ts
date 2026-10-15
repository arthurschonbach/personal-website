export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path.startsWith('/')) return path;
  if (path === '/') return base;
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}
