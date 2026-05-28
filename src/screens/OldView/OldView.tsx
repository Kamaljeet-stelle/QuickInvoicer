/**
 * Old View — classic purchase / invoice document with print action.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header } from '../../components/common/Header';
import { PurchasePrintFooter } from '../../components/common/PurchasePrintFooter';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { RootStackParamList } from '../../types/navigation';
import { OldPurchaseDocument } from './OldPurchaseDocument';
import { styles } from './styles';

export function OldView() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'OldView'>>();
  const { t: tCreate } = useTranslation();

  const tHome = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  return (
    <View style={styles.safeRoot}>
      <Header title={tHome('purchaseOldView')} onBackPress={() => navigation.goBack()} />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <OldPurchaseDocument t={tCreate} />
      </ScrollView>
      <PurchasePrintFooter />
    </View>
  );
}
