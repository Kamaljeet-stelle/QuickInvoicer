import type { CreateInvoiceTranslationKey } from '../../locales';

export type InvoiceTextFieldDef = {
  id: string;
  labelKey: CreateInvoiceTranslationKey;
  placeholderKey: CreateInvoiceTranslationKey;
  half?: boolean;
  /** Opens system calendar instead of keyboard */
  inputKind?: 'text' | 'date';
  /** Shows dropdown chevron (e.g. Type field) */
  showDropdown?: boolean;
};

/** Invoice ID / date / reference / transport header block */
export const INVOICE_META_ROWS: InvoiceTextFieldDef[][] = [
  [
    { id: 'invoiceId', labelKey: 'labelInvoiceId', placeholderKey: 'phEmpty', half: true },
    {
      id: 'invoiceDate',
      labelKey: 'labelInvoiceDate',
      placeholderKey: 'phEmpty',
      half: true,
      inputKind: 'date',
    },
  ],
  [{ id: 'searchClient', labelKey: 'labelSearchClient', placeholderKey: 'phSearchClient' }],
  [{ id: 'clientName', labelKey: 'labelClientName', placeholderKey: 'phClientName' }],
  [{ id: 'clientContact', labelKey: 'labelClientContact', placeholderKey: 'phClientContact' }],
  [{ id: 'clientGstin', labelKey: 'labelClientGstin', placeholderKey: 'phClientGstin' }],
  [{ id: 'clientState', labelKey: 'labelClientState', placeholderKey: 'phClientState' }],
  [{ id: 'taxType', labelKey: 'labelTaxType', placeholderKey: 'phTaxType', showDropdown: true }],
];

/** Line item block — Item / Description / Type / HSN / Price / tax rows (reference layout). */
export const ITEM_LINE_ROWS: InvoiceTextFieldDef[][] = [
  [
    { id: 'itemName', labelKey: 'labelItemName', placeholderKey: 'phItemName', half: true },
    { id: 'itemDescription', labelKey: 'labelItemDescription', placeholderKey: 'phItemDescription', half: true },
  ],
  [
    { id: 'itemType', labelKey: 'labelItemType', placeholderKey: 'phItemType', half: true, showDropdown: true },
    { id: 'hsnSac', labelKey: 'labelHsnSac', placeholderKey: 'phHsn', half: true },
  ],
  [
    { id: 'price', labelKey: 'labelPrice', placeholderKey: 'phPrice', half: true },
    { id: 'qty', labelKey: 'labelQty', placeholderKey: 'phQty', half: true },
  ],
  [
    { id: 'discount', labelKey: 'labelDiscount', placeholderKey: 'phDiscount', half: true },
    { id: 'taxable', labelKey: 'labelTaxable', placeholderKey: 'phTaxable', half: true },
  ],
  [
    { id: 'cgst', labelKey: 'labelCgst', placeholderKey: 'phCgst', half: true },
    { id: 'sgst', labelKey: 'labelSgst', placeholderKey: 'phSgst', half: true },
  ],
  [
    { id: 'igst', labelKey: 'labelIgst', placeholderKey: 'phIgst', half: true },
    { id: 'lineTotal', labelKey: 'labelLineTotal', placeholderKey: 'phLineTotal', half: true },
  ],
];

export const CLIENT_DETAIL_ROWS: InvoiceTextFieldDef[][] = [
  [{ id: 'shippingAddress', labelKey: 'labelShippingAddress', placeholderKey: 'phShipping' }],
];

export const CHARGE_FULL_FIELDS: InvoiceTextFieldDef[] = [
  { id: 'barcodeReader', labelKey: 'labelBarcodeReader', placeholderKey: 'phBarcode' },
  { id: 'courierCharges', labelKey: 'labelCourierCharges', placeholderKey: 'phCourier' },
  { id: 'packingForwarding', labelKey: 'labelPackingForwarding', placeholderKey: 'phPacking' },
  { id: 'transportCharges', labelKey: 'labelTransportCharges', placeholderKey: 'phTransport' },
];

/** Totals, payment, note — full-width rows below Add New (reference layout). */
export const PAYMENT_SUMMARY_ROWS: InvoiceTextFieldDef[][] = [
  [{ id: 'grandTotal', labelKey: 'labelGrandTotal', placeholderKey: 'phGrandTotal' }],
  [{ id: 'payingNow', labelKey: 'labelPayingNow', placeholderKey: 'phPayingNow' }],
  [{ id: 'balance', labelKey: 'labelBalance', placeholderKey: 'phBalance' }],
  [
    {
      id: 'paymentMethod',
      labelKey: 'labelPaymentMethod',
      placeholderKey: 'phPaymentMethod',
      showDropdown: true,
    },
  ],
  [{ id: 'currency', labelKey: 'labelCurrency', placeholderKey: 'phCurrency', showDropdown: true }],
  [{ id: 'note', labelKey: 'labelNote', placeholderKey: 'phNote' }],
  [{ id: 'termsConditions', labelKey: 'labelTermsConditions', placeholderKey: 'phTermPreset' }],
];

function collectRows(values: Record<string, string>, rows: InvoiceTextFieldDef[][]) {
  for (const row of rows) {
    for (const f of row) {
      if (values[f.id] === undefined) {
        values[f.id] = '';
      }
    }
  }
}

export function buildInitialFieldValues(): Record<string, string> {
  const values: Record<string, string> = {
    invoiceId: '44',
    invoiceDate: '09-04-2026',
    itemType: 'Item',
  };
  collectRows(values, INVOICE_META_ROWS);
  collectRows(values, ITEM_LINE_ROWS);
  collectRows(values, CLIENT_DETAIL_ROWS);
  for (const f of CHARGE_FULL_FIELDS) {
    values[f.id] = '';
  }
  collectRows(values, PAYMENT_SUMMARY_ROWS);
  values.paymentMethod = 'Cash';
  values.currency = 'India - INR - ₹';
  return values;
}
