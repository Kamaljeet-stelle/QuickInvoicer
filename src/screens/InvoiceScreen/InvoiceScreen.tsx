/**
 * Invoice tab: list + filters + FAB.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import type { RootStackParamList } from '../../types/navigation';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

import { Header } from '../../components/common/Header';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { colors } from '../../theme/colors';
import { InvoiceCard, type InvoiceListItem, type InvoiceMenuItem } from './InvoiceCard';
import { styles } from './styles';

const MOCK_INVOICES: InvoiceListItem[] = [
  {
    id: '1',
    invoiceNumber: '310',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    total: 0,
    balance: 0,
    status: 'paid',
  },
  {
    id: '2',
    invoiceNumber: '310',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    total: 0,
    balance: 0,
    status: 'paid',
  },
  {
    id: '3',
    invoiceNumber: '310',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    total: 0,
    balance: 0,
    status: 'paid',
  },
];



function matchesSearch(item: InvoiceListItem, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) {
    return true;
  }
  const hay = [item.invoiceNumber, item.customerName, item.contactMasked]
    .join(' ')
    .toLowerCase();
  return hay.includes(q);
}

type InvoiceScreenProps = {
  onCreateInvoice?: () => void;
};

export function InvoiceScreen({ onCreateInvoice }: InvoiceScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const insets = useSafeAreaInsets();

  const openCreateInvoice = useCallback(() => {
    if (onCreateInvoice) {
      onCreateInvoice();
    } else {
      navigation.navigate('CreateInvoice');
    }
  }, [navigation, onCreateInvoice]);

  const handleMenuItemPress = useCallback(
    (item: InvoiceMenuItem) => {
      if (item.id === '2') {
        navigation.navigate('PDFPreview');
      } else if (item.id === '3') {
        navigation.navigate('PrintInvoice');
      } else if (item.id === '4') {
        navigation.navigate('AddPayment');
      } else if (item.id === '5') {
        navigation.navigate('CreateInvoice', { isDuplicate: true });
      } else if (item.id === '6') {
        navigation.navigate('EmailInvoice');
      } else if (item.id === '7') {
        navigation.navigate('SMSInvoice');
      } else if (item.id === '8') {
        navigation.navigate('RecurringInvoice');
      } else if (item.id === '9') {
        navigation.navigate('SaleReturn');
      } else if (item.id === '10') {
        navigation.navigate('CancelBill');
      } else if (item.id === '11') {
        navigation.navigate('DeleteBill');
      }
    },
    [navigation],
  );
  const [selectedInvoice, setSelectedInvoice] = useState<string>('invoices');
  const [searchQuery, setSearchQuery] = useState('');
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const filteredInvoices = useMemo(() => {
    return MOCK_INVOICES.filter((row) => matchesSearch(row, searchQuery));
  }, [searchQuery]);

  const listData = useMemo<InvoiceMenuItem[]>(
    () => [
      {
        id: '1',
        title: t('edit'),
      },
      {
        id: '2',
        title: t('preview'),
      },
      {
        id: '3',
        title: t('print'),
      },
      {
        id: '4',
        title: t('addPayment'),
      },
      {
        id: '5',
        title: t('duplicateBill'),
      },
      {
        id: '6',
        title: t('emailInvoice'),
      },
      {
        id: '7',
        title: t('smsInvoice'),
      },
      {
        id: '8',
        title: t('recurringInvoice'),
      },
      {
        id: '9',
        title: t('saleReturn'),
      },
      {
        id: '10',
        title: t('cancelBill'),
      },
      {
        id: '11',
        title: t('deleteBill'),
      },
    ],
    [t],
  );

  return (
    <View style={styles.container}>
      <Header
        title={t('menuInvoice')}
        isSearch={true}
        onSearchChange={setSearchQuery}
      />
      <View style={styles.invoiceHeaderContainer}>
        <View style={styles.invoicesContainer}>
          <TouchableOpacity
            style={[
              styles.invoiceItem,
              selectedInvoice === 'invoices' && styles.selectedInvoiceItem,
            ]}
            onPress={() => setSelectedInvoice('invoices')}>
            <Text style={styles.invoiceItemText}>{t('invoices')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.invoiceItem,
              selectedInvoice === 'recurringInvoices' && styles.selectedInvoiceItem,
            ]}
            onPress={() => setSelectedInvoice('recurringInvoices')}>
            <Text style={styles.invoiceItemText}>{t('recurringInvoices')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buyDateContainer}>
          <Text style={styles.invoiceItemText}>{t('BuyDate')}</Text>
          <MaterialDesignIcons name="chevron-down" size={20} color={colors.textColor} />
        </View>
      </View>

      <FlatList
        data={filteredInvoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InvoiceCard
            invoice={item}
            menuItems={listData}
            onMenuItemPress={handleMenuItemPress}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />

      <TouchableOpacity
        onPress={openCreateInvoice}
        style={[styles.fab, { bottom: Math.max(16, insets.bottom + 12) }]}
        accessibilityRole="button"
        accessibilityLabel={t('addNew')}
        activeOpacity={0.9}>
        <AntDesign name="plus" size={28} color={colors.whiteColor} />
      </TouchableOpacity>

    </View>
  );
}
