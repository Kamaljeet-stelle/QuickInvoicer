import type { HomeTranslationKey } from '../../locales';

export type PurchaseMenuItem = {
  id: string;
  title: string;
};

export const PURCHASE_MENU_LABEL_KEYS: Array<{ id: string; labelKey: HomeTranslationKey }> = [
  { id: '1', labelKey: 'purchaseOldView' },
  { id: '2', labelKey: 'preview' },
  { id: '3', labelKey: 'edit' },
  { id: '4', labelKey: 'addPayment' },
  { id: '5', labelKey: 'purchaseReturn' },
  { id: '6', labelKey: 'cancelBill' },
  { id: '7', labelKey: 'deleteBill' },
];
