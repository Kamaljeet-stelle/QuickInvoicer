/**
 * Main bottom tabs: Home / Invoice / Report / Menu.
 * @format
 */

import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { InvoiceScreen } from '../screens/InvoiceScreen/InvoiceScreen';
import { MenuScreen } from '../screens/MenuScreen/MenuScreen';
import { ReportScreen } from '../screens/ReportScreen/ReportScreen';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../locales';

type TabKey = 'home' | 'invoice' | 'report' | 'menu';

export function BottomTabs() {
  const [tab, setTab] = useState<TabKey>('home');

  const t = (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key;

  const screen = useMemo(() => {
    if (tab === 'invoice') {
      return <InvoiceScreen />;
    }
    if (tab === 'report') {
      return <ReportScreen />;
    }
    if (tab === 'menu') {
      return <MenuScreen />;
    }
    return <HomeScreen />;
  }, [tab]);

  return (
    <View style={styles.root}>
      <View style={styles.screen}>{screen}</View>
      <View style={styles.bar}>
        <TabButton
          active={tab === 'home'}
          label={t('menuHome')}
          icon="home-outline"
          onPress={() => setTab('home')}
        />
        <TabButton
          active={tab === 'invoice'}
          label={t('menuInvoice')}
          icon="file-document-outline"
          onPress={() => setTab('invoice')}
        />
        <TabButton
          active={tab === 'report'}
          label={t('menuReports')}
          icon="chart-box-outline"
          onPress={() => setTab('report')}
        />
        <TabButton
          active={tab === 'menu'}
          label={t('menuTitle')}
          icon="menu"
          onPress={() => setTab('menu')}
        />
      </View>
    </View>
  );
}

function TabButton({
  active,
  label,
  icon,
  onPress,
}: {
  active: boolean;
  label: string;
  icon: React.ComponentProps<typeof MaterialDesignIcons>['name'];
  onPress: () => void;
}) {
  const color = active ? '#1F9A8E' : '#737373';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={styles.tab}>
      <MaterialDesignIcons name={icon} size={30} color={color} />
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  screen: { flex: 1 },
  bar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 6,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    minWidth: 68,
    marginBottom: 20
  },
  tabLabel: {
    fontSize: 16,
    color: '#737373',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#1F9A8E',
  },
});

