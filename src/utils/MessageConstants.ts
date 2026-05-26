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
} as const satisfies Record<string, CreateInvoiceTranslationKey>;

export type CreateInvoiceMessageKey =
  (typeof MessageConstants)[keyof typeof MessageConstants];

export default MessageConstants;
