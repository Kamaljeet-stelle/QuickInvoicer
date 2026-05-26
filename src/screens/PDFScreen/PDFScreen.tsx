/**
 * Invoice PDF preview — document layout + download / print actions.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header } from '../../components/common/Header';
import { InvoicePdfFooter } from '../../components/common/InvoicePdfFooter';
import type { RootStackParamList } from '../../types/navigation';
import MessageConstants from '../../utils/MessageConstants';
import { InvoicePreviewDocument } from './InvoicePreviewDocument';
import { styles } from './styles';

type PDFScreenProps = { onBack?: () => void };

export function PDFScreen({ onBack }: PDFScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'PDFPreview'>>();
  const { t } = useTranslation();

  const handleBack = useCallback(() => {
    onBack ? onBack() : navigation.goBack();
  }, [navigation, onBack]);

  return (
    <View style={styles.safeRoot}>
      <Header title={t(MessageConstants.PDF_SCREEN_TITLE)} onBackPress={handleBack} />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <InvoicePreviewDocument t={t} />
      </ScrollView>

      <InvoicePdfFooter />
    </View>
  );
}
