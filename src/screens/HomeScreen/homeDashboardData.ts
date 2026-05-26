import type { ComponentProps } from 'react';
import type MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import type { HomeTranslationKey } from '../../locales';

export type HomeIconName = ComponentProps<typeof MaterialDesignIcons>['name'];
export type HomeStatImageKey =
  | 'TotalSales'
  | 'Collected'
  | 'DueAmount'
  | 'TotalDue'
  | 'TotalReports'
  | 'TotalCustomer';

export const TOP_STATS: Array<{
  value: string;
  labelKey: HomeTranslationKey;
  icon: HomeStatImageKey;
  iconBg: string;
}> = [
    { value: '100', labelKey: 'todaySales', icon: 'TotalSales', iconBg: '#1F9A8E' },
    { value: '25+', labelKey: 'collected', icon: 'Collected', iconBg: '#1F9A8E' },
    { value: '$250', labelKey: 'dueAmount', icon: 'DueAmount', iconBg: '#1F9A8E' },
    { value: '86243.36', labelKey: 'totalDue', icon: 'TotalDue', iconBg: '#1F9A8E' },
    { value: '192', labelKey: 'totalReports', icon: 'TotalReports', iconBg: '#1F9A8E' },
    { value: '192', labelKey: 'totalCustomer', icon: 'TotalCustomer', iconBg: '#1F9A8E' },
  ];

export const QUICK_LINKS: Array<{
  key: string;
  labelKey: HomeTranslationKey;
  icon: HomeIconName;
  bg: string;
  iconColor: string;
}> = [
    { key: 'invoice', labelKey: 'menuInvoice', icon: 'file-document-outline', bg: '#E7F6F3', iconColor: '#1F9A8E' },
    { key: 'purchase', labelKey: 'menuPurchases', icon: 'cart-outline', bg: '#FCF4DE', iconColor: '#E59D1A' },
    { key: 'estimate', labelKey: 'menuEstimate', icon: 'calculator-variant-outline', bg: '#E7ECFF', iconColor: '#4C6CD5' },
    { key: 'leads', labelKey: 'menuLeads', icon: 'microphone-outline', bg: '#FCE8ED', iconColor: '#D2567A' },
    { key: 'expenses', labelKey: 'menuExpenses', icon: 'credit-card-outline', bg: '#E9F7F5', iconColor: '#1F9A8E' },
    { key: 'product', labelKey: 'menuProduct', icon: 'cube-outline', bg: '#FFF6DF', iconColor: '#D59A21' },
    { key: 'customer', labelKey: 'menuCustomer', icon: 'account-group-outline', bg: '#EDF1FF', iconColor: '#4863CC' },
    { key: 'reports', labelKey: 'menuReports', icon: 'file-chart-outline', bg: '#FDECEF', iconColor: '#CF547B' },
  ];

export const SALES_CARDS: Array<{
  id: string;
  clientName: string;
}> = [
    { id: '#2', clientName: 'Julia' },
    { id: '#2', clientName: 'Julia' },
  ];

export const DRAWER_MENU = new Map<
  string,
  { icon: HomeIconName; labelKey: HomeTranslationKey }
>([
  ['home', { icon: 'home-outline', labelKey: 'menuHome' }],
  ['invoice', { icon: 'file-document-outline', labelKey: 'menuInvoice' }],
  ['purchases', { icon: 'cash-multiple', labelKey: 'menuPurchases' }],
  ['estimate', { icon: 'calculator-variant-outline', labelKey: 'menuEstimate' }],
  ['leads', { icon: 'account-group-outline', labelKey: 'menuLeads' }],
  ['receipt', { icon: 'receipt-text-outline', labelKey: 'menuPaymentReceipt' }],
  ['voucher', { icon: 'receipt-outline', labelKey: 'menuPaymentVoucher' }],
  ['expenses', { icon: 'credit-card-outline', labelKey: 'menuExpenses' }],
  ['product', { icon: 'cube-outline', labelKey: 'menuProduct' }],
  ['customer', { icon: 'account-multiple-outline', labelKey: 'menuCustomer' }],
  ['reports', { icon: 'file-chart-outline', labelKey: 'menuReports' }],
  ['settings', { icon: 'cog-outline', labelKey: 'menuSettings' }],
]);
