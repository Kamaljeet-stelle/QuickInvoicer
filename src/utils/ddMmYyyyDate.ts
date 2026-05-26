/**
 * Display dates as DD-MM-YYYY (matches Create Invoice defaults).
 */

export function formatDdMmYyyy(d: Date): string {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

export function parseDdMmYyyy(s: string): Date | null {
  const trimmed = s.trim();
  if (!trimmed) {
    return null;
  }
  const m = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(trimmed);
  if (!m) {
    return null;
  }
  const d = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const y = Number(m[3]);
  const date = new Date(y, mo, d);
  if (date.getFullYear() !== y || date.getMonth() !== mo || date.getDate() !== d) {
    return null;
  }
  return date;
}
