import type { CreateInvoiceTranslationKey } from '../../locales';

export type EditPurchaseFieldDef = {
  id: string;
  labelKey: CreateInvoiceTranslationKey;
  half?: boolean;
  showDropdown?: boolean;
};

type EditPurchaseInitialSeed = {
  purchaseNumber?: string;
  customerName?: string;
  contactMasked?: string;
  dateIso?: string;
  amount?: number;
  balance?: number;
};

export const PURCHASE_META_ROWS: EditPurchaseFieldDef[][] = [
  [{ id: 'purchaseId', labelKey: 'labelPurchaseId' }],
  [{ id: 'purchaseDate', labelKey: 'labelPurchaseDate' }],
  [{ id: 'poNo', labelKey: 'labelPoNo' }],
  [{ id: 'transporterName', labelKey: 'labelTransporterName' }],
  [{ id: 'grRrNo', labelKey: 'labelGrRrNo' }],
  [{ id: 'searchVendor', labelKey: 'labelSearchVendor' }],
];

export const PURCHASE_VENDOR_ROWS: EditPurchaseFieldDef[][] = [
  [{ id: 'vendorName', labelKey: 'labelVendorName' }],
  [{ id: 'vendorContact', labelKey: 'labelVendorContact' }],
  [{ id: 'vendorGstin', labelKey: 'labelVendorGstin' }],
  [{ id: 'state', labelKey: 'labelClientState' }],
  [{ id: 'taxType', labelKey: 'labelTaxType', showDropdown: true }],
];

export const PURCHASE_ITEM_ROWS: EditPurchaseFieldDef[][] = [
  [
    { id: 'item', labelKey: 'labelItemName', half: true },
    { id: 'barcode', labelKey: 'labelBarcodeReader', half: true },
  ],
  [
    { id: 'code', labelKey: 'labelCode', half: true },
    { id: 'hsnSac', labelKey: 'labelHsnSac', half: true },
  ],
  [
    { id: 'purchasePrice', labelKey: 'labelPurchasePrice', half: true },
    { id: 'salePrice', labelKey: 'labelSalePrice', half: true },
  ],
  [
    { id: 'qty', labelKey: 'labelQty', half: true },
    { id: 'unit', labelKey: 'labelUnit', half: true },
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
    { id: 'total', labelKey: 'labelLineTotal', half: true },
  ],
];

export const PURCHASE_SUMMARY_ROWS: EditPurchaseFieldDef[][] = [
  [{ id: 'courierCharges', labelKey: 'labelCourierCharges' }],
  [{ id: 'packingForwarding', labelKey: 'labelPackingForwarding' }],
  [{ id: 'transportCharges', labelKey: 'labelTransportCharges' }],
  [{ id: 'grandTotal', labelKey: 'labelGrandTotal' }],
  [{ id: 'paid', labelKey: 'labelPaid' }],
  [{ id: 'balance', labelKey: 'labelBalance' }],
];

function collectRows(values: Record<string, string>, rows: EditPurchaseFieldDef[][]) {
  for (const row of rows) {
    for (const field of row) {
      if (values[field.id] === undefined) {
        values[field.id] = '';
      }
    }
  }
}

function formatEditDate(iso?: string): string {
  if (!iso) {
    return '';
  }
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return '';
  }
  const dd = String(parsed.getDate()).padStart(2, '0');
  const mm = String(parsed.getMonth() + 1).padStart(2, '0');
  const yyyy = parsed.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

function formatRs(amount?: number): string {
  return amount === undefined ? '' : amount.toFixed(2);
}

export function buildInitialEditPurchaseValues(
  seed?: EditPurchaseInitialSeed,
): Record<string, string> {
  const values: Record<string, string> = {
    purchaseId: seed?.purchaseNumber ?? '',
    purchaseDate: formatEditDate(seed?.dateIso),
    searchVendor: '',
    vendorName: seed?.customerName ?? '',
    vendorContact: '',
    taxType: 'Tax Type',
    grandTotal: formatRs(seed?.amount),
    paid: formatRs(seed?.amount !== undefined && seed?.balance !== undefined ? seed.amount - seed.balance : undefined),
    balance: formatRs(seed?.balance),
    total: formatRs(seed?.amount),
  };

  collectRows(values, PURCHASE_META_ROWS);
  collectRows(values, PURCHASE_VENDOR_ROWS);
  collectRows(values, PURCHASE_ITEM_ROWS);
  collectRows(values, PURCHASE_SUMMARY_ROWS);
  return values;
}
