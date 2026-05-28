/**
 * Menu bottom tab — purchases submenu (pill rows).
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import type { MenuStackParamList } from '../../navigation/MenuStack';
import { Header } from '../../components/common/Header';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { MenuOptionRow } from './MenuOptionRow';
import { MENU_TAB_ITEMS } from './menuTabData';
import { styles } from './styles';

export function MenuScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<MenuStackParamList, 'MenuHome'>>();

  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const handleItemPress = useCallback(
    (id: string) => {
      console.log('id', id);
      if (id === 'purchasesList') {
        navigation.navigate('PurchasesList');
      }
    },
    [navigation],
  );

  return (
    <View style={styles.root}>
      <Header title={t('menuPurchases')} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        {MENU_TAB_ITEMS.map(item => (
          <MenuOptionRow
            key={item.id}
            label={t(item.labelKey)}
            icon={item.icon}
            active={item.active}
            onPress={() => handleItemPress(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
