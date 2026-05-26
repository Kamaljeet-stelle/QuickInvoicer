import type { CreateInvoiceTranslationKey } from '../../locales';

export type SaleReturnFieldDef = {
  id: string;
  labelKey: CreateInvoiceTranslationKey;
  half?: boolean;
  showDropdown?: boolean;
  inputKind?: 'text' | 'date';
  multiline?: boolean;
};

export const ITEM_TYPE_OPTIONS = ['Item'] as const;

export const SALE_RETURN_HEADER_ROWS: SaleReturnFieldDef[][] = [
  [{ id: 'invoiceId', labelKey: 'labelInvoiceId' }],
  [{ id: 'invoiceDate', labelKey: 'labelInvoiceDate', inputKind: 'date' }],
  [{ id: 'clientName', labelKey: 'labelClientName' }],
  [{ id: 'clientContact', labelKey: 'labelClientContact' }],
];

export const SALE_RETURN_ITEM_ROWS: SaleReturnFieldDef[][] = [
  [
    { id: 'itemName', labelKey: 'labelItemName', half: true },
    { id: 'itemDescription', labelKey: 'labelItemDescription', half: true },
  ],
  [
    { id: 'itemType', labelKey: 'labelItemType', half: true, showDropdown: true },
    { id: 'hsnSac', labelKey: 'labelHsnSac', half: true },
  ],
  [
    { id: 'price', labelKey: 'labelPrice', half: true },
    { id: 'qty', labelKey: 'labelQty', half: true },
  ],
  [
    { id: 'discount', labelKey: 'labelDiscount', half: true },
    { id: 'taxable', labelKey: 'labelTaxable', half: true },
  ],
  [
    { id: 'cgst', labelKey: 'labelCgst', half: true },
    { id: 'sgst', labelKey: 'labelSgst', half: true },
  ],
  [
    { id: 'igst', labelKey: 'labelIgst', half: true },
    { id: 'lineTotal', labelKey: 'labelLineTotal', half: true },
  ],
];

export const SALE_RETURN_SUMMARY_ROWS: SaleReturnFieldDef[][] = [
  [{ id: 'returnTotal', labelKey: 'labelReturnTotal' }],
  [{ id: 'paid', labelKey: 'labelPaid' }],
  [{ id: 'balance', labelKey: 'labelBalance' }],
  [{ id: 'writeNote', labelKey: 'labelWriteNote', multiline: true }],
];

function collectRows(values: Record<string, string>, rows: SaleReturnFieldDef[][]) {
  for (const row of rows) {
    for (const field of row) {
      if (values[field.id] === undefined) {
        values[field.id] = '';
      }
    }
  }
}

export function buildInitialSaleReturnValues(): Record<string, string> {
  const values: Record<string, string> = { itemType: 'Item' };
  collectRows(values, SALE_RETURN_HEADER_ROWS);
  collectRows(values, SALE_RETURN_ITEM_ROWS);
  collectRows(values, SALE_RETURN_SUMMARY_ROWS);
  return values;
}
