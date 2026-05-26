import type { CreateInvoiceTranslationKey } from '../../locales';

/** Mock invoice preview content (matches reference layout). */

export const PDF_TABLE_COLUMNS = [
  'Description', 'HSN/SAC', 'Qty', 'Unit Price', 'Dis (INR ₹)', 'Taxable Amt',
  'CGST %', 'CGST (INR ₹)', 'SGST %', 'SGST (INR ₹)', 'IGST %', 'IGST (INR ₹)', 'Amount',
] as const;

export const PDF_LINE_ITEM_KEYS = [
  'description', 'hsn', 'qty', 'unitPrice', 'discount', 'taxable',
  'cgstPct', 'cgst', 'sgstPct', 'sgst', 'igstPct', 'igst', 'amount',
] as const;

export const PDF_LINE_ITEMS: Array<Record<(typeof PDF_LINE_ITEM_KEYS)[number], string>> = [
  {
    description: 'dummy', hsn: '', qty: '45', unitPrice: '74.00', discount: '0.00',
    taxable: '3330.00', cgstPct: '0', cgst: '0.00', sgstPct: '0', sgst: '0.00',
    igstPct: '0', igst: '0.00', amount: '3330.00',
  },
];

export type PdfTotalRow = { label: string; value: string; highlight?: boolean };

export const PDF_TOTALS: PdfTotalRow[] = [
  { label: 'Amount', value: '₹3330.00' },
  { label: 'CGST', value: '₹0.00' },
  { label: 'SGST', value: '₹0.00' },
  { label: 'IGST', value: '₹0.00' },
  { label: 'Total Amount', value: '₹3330', highlight: true },
  { label: 'Paid Amount', value: '₹0', highlight: true },
  { label: 'Due Amount', value: '₹3330', highlight: true },
];

export const PDF_TERMS = [
  '1. Payment is due within 15 days.',
  '2. Please make checks payable to Stellen Infotech Pvt. Ltd.',
  '3. Goods sold in INR currency only.',
  '4. Late payments are subject to a service fee.',
] as const;

export const PDF_COMPANY_KEYS = [
  'pdfCompanyName', 'pdfCompanyAddress', 'pdfCompanyEmail', 'pdfCompanyGstin',
] as const satisfies readonly CreateInvoiceTranslationKey[];

export const PDF_CLIENT_KEYS = [
  'pdfClientName', 'pdfClientContact', 'pdfClientEmail',
  'pdfClientAddress', 'pdfClientState', 'pdfClientGstin',
] as const satisfies readonly CreateInvoiceTranslationKey[];

export const PDF_INVOICE_META_KEYS = [
  'pdfInvoiceNo', 'pdfInvoiceDate',
] as const satisfies readonly CreateInvoiceTranslationKey[];
