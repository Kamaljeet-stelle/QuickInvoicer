import type { ComponentProps } from 'react';
import type MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import type { HomeTranslationKey } from '../../locales';

export type MenuTabIconName = ComponentProps<typeof MaterialDesignIcons>['name'];

export type MenuTabItem = {
  id: string;
  labelKey: HomeTranslationKey;
  icon: MenuTabIconName;
  active?: boolean;
};

export const MENU_TAB_ITEMS: MenuTabItem[] = [
  {
    id: 'purchasesList',
    labelKey: 'purchasesList',
    icon: 'view-list-outline',
    active: true,
  },
  {
    id: 'vendors',
    labelKey: 'menuVendors',
    icon: 'account-outline',
  },
  {
    id: 'creditDebitNotes',
    labelKey: 'purchasesCreditDebitNotes',
    icon: 'wallet-outline',
  },
];
