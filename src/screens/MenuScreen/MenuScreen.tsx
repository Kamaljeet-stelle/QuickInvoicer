/**
 * Menu tab screen (reuse DrawerScreen content).
 * @format
 */

import React, { useMemo, useRef } from 'react';
import { Animated, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { DrawerScreen } from '../DrawerScreen/DrawerScreen';
import { DRAWER_MENU } from '../HomeScreen/homeDashboardData';
import type { DrawerItem } from '../DrawerScreen/DrawerScreen';

export function MenuScreen() {
  const insets = useSafeAreaInsets();
  const translateX = useRef(new Animated.Value(0)).current;

  const t = (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key;

  const items: DrawerItem[] = useMemo(
    () =>
      Array.from(DRAWER_MENU, ([key, { icon, labelKey }]) => ({
        key,
        label: t(labelKey),
        icon,
      })),
    [],
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#0B2B27' }}>
      <DrawerScreen
        topPadding={Math.max(12, insets.top + 8)}
        translateX={translateX}
        title={t('menuTitle')}
        closeLabel={t('closeDrawer')}
        items={items}
        onClose={() => {}}
        onSelectItem={() => {}}
      />
    </View>
  );
}

