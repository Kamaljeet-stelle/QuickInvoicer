import type { CreateInvoiceTranslationKey } from '../../locales';
import {
  PDF_CLIENT_KEYS,
  PDF_COMPANY_KEYS,
  PDF_INVOICE_META_KEYS,
  PDF_LINE_ITEMS,
  PDF_LINE_ITEM_KEYS,
  PDF_TABLE_COLUMNS,
  PDF_TERMS,
  PDF_TOTALS,
} from '../../screens/PDFScreen/pdfPreviewData';

export type InvoicePdfTranslate = (key: CreateInvoiceTranslationKey) => string;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Builds printable HTML matching the on-screen invoice preview. */
export function buildInvoiceHtml(t: InvoicePdfTranslate): string {
  const companyBlock = PDF_COMPANY_KEYS.map(k => escapeHtml(t(k))).join('<br/>');

  const tableHead = PDF_TABLE_COLUMNS.map(col => `<th>${escapeHtml(col)}</th>`).join('');
  const tableBody = PDF_LINE_ITEMS.map(row => {
    const cells = PDF_LINE_ITEM_KEYS.map(key => `<td>${escapeHtml(row[key])}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  const totalsRows = PDF_TOTALS.map(({ label, value, highlight }) => {
    const rowClass = highlight ? ' class="total-highlight"' : '';
    return `<tr${rowClass}><td>${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`;
  }).join('');

  const termsHtml = PDF_TERMS.map(line => `<p class="term">${escapeHtml(line)}</p>`).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      font-size: 11px;
      color: #000;
      margin: 0;
      padding: 16px;
      line-height: 1.4;
    }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
    .brand { font-size: 18px; font-weight: 700; }
    .brand-quick { color: #002573; }
    .brand-invoicer { color: #0d9488; }
    .invoice-title { font-size: 22px; font-weight: 800; text-align: right; margin: 0 0 4px; }
    .tagline { color: #5D5D5D; text-align: right; margin: 0 0 8px; }
    .company { text-align: right; font-size: 10px; }
    .meta-row { display: flex; justify-content: space-between; margin-bottom: 12px; gap: 16px; }
    .meta-col { flex: 1; }
    .meta-col.right { text-align: right; }
    .section-heading { font-weight: 700; margin: 0 0 6px; font-size: 11px; }
    .meta-line { margin: 0 0 2px; }
    table.items { width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 9px; }
    table.items th, table.items td {
      border: 1px solid #ccc;
      padding: 4px 6px;
      text-align: left;
      vertical-align: top;
    }
    table.items th { background: #f3f3f3; font-weight: 700; }
    .bottom { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
    .bottom-col { flex: 1; }
    table.totals { width: 100%; border-collapse: collapse; font-size: 10px; }
    table.totals td { padding: 3px 0; }
    table.totals td:last-child { text-align: right; }
    tr.total-highlight td { font-weight: 700; }
    .term { margin: 0 0 4px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="brand">
      <span class="brand-quick">Quick</span><span class="brand-invoicer">Invoicer</span>
    </div>
    <div>
      <h1 class="invoice-title">${escapeHtml(t('pdfInvoiceHeading'))}</h1>
      <p class="tagline">${escapeHtml(t('pdfTagline'))}</p>
      <div class="company">${companyBlock}</div>
    </div>
  </div>

  <div class="meta-row">
    <div class="meta-col">
      <p class="section-heading">${escapeHtml(t('pdfInvoiceTo'))}</p>
      ${PDF_CLIENT_KEYS.map(k => `<p class="meta-line">${escapeHtml(t(k))}</p>`).join('')}
    </div>
    <div class="meta-col right">
      ${PDF_INVOICE_META_KEYS.map(k => `<p class="meta-line">${escapeHtml(t(k))}</p>`).join('')}
    </div>
  </div>

  <table class="items">
    <thead><tr>${tableHead}</tr></thead>
    <tbody>${tableBody}</tbody>
  </table>

  <div class="bottom">
    <div class="bottom-col">
      <p class="section-heading">${escapeHtml(t('pdfPaymentDetails'))}</p>
      <p class="meta-line">${escapeHtml(t('pdfPaymentPlaceholder'))}</p>
    </div>
    <div class="bottom-col">
      <table class="totals">${totalsRows}</table>
    </div>
  </div>

  <div>
    <p class="section-heading">${escapeHtml(t('pdfTermsHeading'))}</p>
    ${termsHtml}
  </div>
</body>
</html>`;
}

/** Safe filename stem for generated PDFs (no extension). */
export function invoicePdfFileName(t: InvoicePdfTranslate): string {
  const digits = t('pdfInvoiceNo').replace(/\D/g, '');
  return `invoice-${digits || 'preview'}`;
}
