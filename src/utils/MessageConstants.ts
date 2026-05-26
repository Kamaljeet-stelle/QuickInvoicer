import type { CreateInvoiceTranslationKey } from '../locales';

/** i18n namespace names — top-level keys in `src/locales/en.json`. */
export const I18N_NAMESPACES = {
  createInvoice: 'createInvoice',
  home: 'home',
  login: 'login',
} as const;

/** Translation keys for the createInvoice namespace (`useTranslation()` default). */
const MessageConstants = {
  SCREEN_TITLE: 'SCREEN_TITLE',
  LABEL_ITEM_NAME: 'labelItemName',
  LABEL_ITEM_DESCRIPTION: 'labelItemDescription',
  LABEL_ITEM_TYPE: 'labelItemType',
  LABEL_HSN_SAC: 'labelHsnSac',
  LABEL_PRICE: 'labelPrice',
  LABEL_QTY: 'labelQty',
  LABEL_DISCOUNT: 'labelDiscount',
  LABEL_TAXABLE: 'labelTaxable',
  LABEL_CGST: 'labelCgst',
  LABEL_SGST: 'labelSgst',
  LABEL_IGST: 'labelIgst',
  LABEL_LINE_TOTAL: 'labelLineTotal',
  PRINT_SCREEN_TITLE: 'printScreenTitle',
  PRINT_ACTIVITY_TITLE: 'printActivityTitle',
  PRINT_ACTIVITY_CREATED: 'printActivityCreated',
  PRINT_ACTIVITY_TIMESTAMP: 'printActivityTimestamp',
  PDF_SCREEN_TITLE: 'pdfScreenTitle',
  PDF_DOWNLOAD: 'pdfDownload',
  PDF_PRINT: 'pdfPrint',
  PDF_ERROR_TITLE: 'pdfErrorTitle',
  PDF_DOWNLOAD_ERROR: 'pdfDownloadError',
  PDF_PRINT_ERROR: 'pdfPrintError',
  DUPLICATE_BILL: 'duplicateBill',
  DUPLICATE_INVOICE: 'duplicateInvoice',
} as const satisfies Record<string, CreateInvoiceTranslationKey>;

export type CreateInvoiceMessageKey =
  (typeof MessageConstants)[keyof typeof MessageConstants];

export default MessageConstants;
