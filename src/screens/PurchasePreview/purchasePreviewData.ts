import type { CreateInvoiceTranslationKey } from '../../locales';

export const PURCHASE_TABLE_COLUMNS = [
  'Item',
  'Qty',
  'Unit',
  'Price',
  'Taxable',
  'CGST',
  'SGST',
  'IGST',
  'Amount',
] as const;

export const PURCHASE_LINE_ITEM_KEYS = [
  'item',
  'qty',
  'unit',
  'price',
  'taxable',
  'cgst',
  'sgst',
  'igst',
  'amount',
] as const;

export const PURCHASE_LINE_ITEMS: Array<
  Record<(typeof PURCHASE_LINE_ITEM_KEYS)[number], string>
> = [
  {
    item: 'Sample Item',
    qty: '1',
    unit: 'Pcs',
    price: '1000.00',
    taxable: '1000.00',
    cgst: '90.00',
    sgst: '90.00',
    igst: '0.00',
    amount: '1180.00',
  },
];

export type PurchaseTotalRow = { label: string; value: string; highlight?: boolean };

export const PURCHASE_TOTALS: PurchaseTotalRow[] = [
  { label: 'Total Amount before Tax', value: '₹1000.00' },
  { label: 'CGST', value: '₹90.00' },
  { label: 'SGST', value: '₹90.00' },
  { label: 'IGST', value: '₹0.00' },
  { label: 'Total', value: '₹1180.00', highlight: true },
];

export const PURCHASE_VENDOR_KEYS = [
  'pdfPurchaseVendorName',
  'pdfPurchaseVendorContact',
  'pdfPurchaseVendorGstin',
] as const satisfies readonly CreateInvoiceTranslationKey[];

export const PURCHASE_META_KEYS = [
  'pdfPurchaseNo',
  'pdfPurchaseDate',
] as const satisfies readonly CreateInvoiceTranslationKey[];
