/**
 * Invoice-friendly amount formatting. Pass `locale` when you support multi-region.
 */
export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale?: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
