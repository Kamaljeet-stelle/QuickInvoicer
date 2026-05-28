import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Root stack routes — auth, main tabs, and pushed flows.
 */
export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  MainTabs: undefined;
  CreateInvoice: { isDuplicate?: boolean } | undefined;
  PDFPreview: undefined;
  PrintInvoice: undefined;
  AddPayment: undefined;
  EmailInvoice: undefined;
  SMSInvoice: undefined;
  RecurringInvoice: undefined;
  SaleReturn: undefined;
  DeleteBill: undefined;
  CancelBill: undefined;
  OldView: undefined;
  PurchasePreview: undefined;
  EditPurchase:
    | {
        purchase?: {
          id: string;
          purchaseNumber: string;
          customerName: string;
          contactMasked: string;
          dateIso: string;
          amount: number;
          balance: number;
        };
      }
    | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
