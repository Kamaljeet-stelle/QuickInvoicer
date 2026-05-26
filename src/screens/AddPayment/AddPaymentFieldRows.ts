import type { HomeTranslationKey } from '../../locales';

export type AddPaymentFieldId =
    | 'totalAmount'
    | 'paidAmount'
    | 'balanceAmount'
    | 'paymentAmount'
    | 'paymentMethod';

export type AddPaymentFormValues = Record<AddPaymentFieldId, string>;

export type AddPaymentTextFieldDef = {
    id: AddPaymentFieldId;
    labelKey: HomeTranslationKey;
    showDropdown?: boolean;
};

export function buildInitialAddPaymentValues(): AddPaymentFormValues {
    return {
        totalAmount: '',
        paidAmount: '',
        balanceAmount: '',
        paymentAmount: '',
        paymentMethod: '',
    };
}

export const PAYMENT_METHOD_OPTIONS = ['Cash', 'Card', 'UPI'] as const;

export const ADD_PAYMENT_FIELD_ROWS: AddPaymentTextFieldDef[][] = [
    [
        { id: 'totalAmount', labelKey: 'addPaymentTotalAmount' },
        { id: 'paidAmount', labelKey: 'addPaymentPaidAmount' },
        { id: 'balanceAmount', labelKey: 'addPaymentBalanceAmount' },
        { id: 'paymentAmount', labelKey: 'addPaymentPaymentAmount' },
        { id: 'paymentMethod', labelKey: 'addPaymentPaymentMethod', showDropdown: true },
    ],
];
