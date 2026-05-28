/**
 * Purchases list — cards, search, FAB.
 * @format
 */

import type { CompositeNavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Header } from '../../components/common/Header';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { MenuStackParamList } from '../../navigation/MenuStack';
import type { RootStackParamList } from '../../types/navigation';
import { colors } from '../../theme/colors';
import { PurchaseCard } from './PurchaseCard';
import {
  PURCHASE_MENU_LABEL_KEYS,
  type PurchaseMenuItem,
} from './purchaseMenuData';
import { MOCK_PURCHASES, type PurchaseListItem } from './purchasesListData';
import { styles } from './styles';

type PurchasesListNavigation = CompositeNavigationProp<
  NativeStackNavigationProp<MenuStackParamList, 'PurchasesList'>,
  NativeStackNavigationProp<RootStackParamList>
>;

function matchesSearch(item: PurchaseListItem, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) {
    return true;
  }
  const hay = [item.purchaseNumber, item.customerName, item.contactMasked]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

export function PurchasesListScreen() {
  const navigation = useNavigation<PurchasesListNavigation>();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const filteredPurchases = useMemo(
    () => MOCK_PURCHASES.filter(row => matchesSearch(row, searchQuery)),
    [searchQuery],
  );

  const menuItems = useMemo<PurchaseMenuItem[]>(
    () =>
      PURCHASE_MENU_LABEL_KEYS.map(item => ({
        id: item.id,
        title: t(item.labelKey),
      })),
    [t],
  );

  const handleMenuItemPress = useCallback(
    (item: PurchaseMenuItem, purchase: PurchaseListItem) => {
      if (item.id === '1') {
        navigation.navigate('OldView');
      } else if (item.id === '2') {
        navigation.navigate('PurchasePreview');
      } else if (item.id === '3') {
        navigation.navigate('EditPurchase', {
          purchase: {
            id: purchase.id,
            purchaseNumber: purchase.purchaseNumber,
            customerName: purchase.customerName,
            contactMasked: purchase.contactMasked,
            dateIso: purchase.date.toISOString(),
            amount: purchase.amount,
            balance: purchase.balance,
          },
        });
      } else if (item.id === '4') {
        navigation.navigate('AddPayment');
      } else if (item.id === '5') {
        navigation.navigate('SaleReturn');
      } else if (item.id === '6') {
        navigation.navigate('CancelBill');
      } else if (item.id === '7') {
        navigation.navigate('DeleteBill');
      }
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Header
        title={t('purchasesList')}
        isSearch
        onBackPress={() => navigation.goBack()}
        onSearchChange={setSearchQuery}
      />

      <FlatList
        bounces={false}
        data={filteredPurchases}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PurchaseCard
            purchase={item}
            menuItems={menuItems}
            onMenuItemPress={handleMenuItemPress}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      <TouchableOpacity
        style={[styles.fab, { bottom: Math.max(16, insets.bottom + 12) }]}
        accessibilityRole="button"
        accessibilityLabel={t('addNew')}
        activeOpacity={0.9}>
        <AntDesign name="plus" size={28} color={colors.whiteColor} />
      </TouchableOpacity>
    </View>
  );
}
