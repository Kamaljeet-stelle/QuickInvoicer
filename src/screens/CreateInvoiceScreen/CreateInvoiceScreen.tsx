/**
 * Create Invoice — full scrollable form (wired from Home).
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { RootStackParamList } from '../../types/navigation';
import { styles } from './styles';
import { Header } from '../../components/common/Header';
import MessageConstants from '../../utils/MessageConstants';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import {
  buildInitialFieldValues,
  INVOICE_META_ROWS,
  ITEM_LINE_ROWS,
  PAYMENT_SUMMARY_ROWS,
  type InvoiceTextFieldDef,
} from './createInvoiceFieldRows';
import { images } from '../../theme/images';
import { AppButton } from '../../components/common/AppButton';
import { colors } from '../../theme/colors';

type CreateInvoiceScreenProps = {
  onBack?: () => void;
};

export function CreateInvoiceScreen({ onBack }: CreateInvoiceScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'CreateInvoice'>>();
  const { t } = useTranslation();

  const handleBack = useCallback(() => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  }, [navigation, onBack]);
  const [values, setValues] = useState(buildInitialFieldValues);

  const setField = useCallback((id: string, text: string) => {
    setValues(prev => ({ ...prev, [id]: text }));
  }, []);



  const renderRows = (rows: InvoiceTextFieldDef[][]) =>
    rows.map((row, index) => (
      <View
        key={`row-${index}`}
        style={row.some(f => f.half) ? styles.fieldRow : undefined}>
        {row.map((field) => <View
          key={field.id}
          style={field.half ? styles.fieldHalf : styles.fieldFull}>
          <FloatingLabelInput
            label={t(field.labelKey)}
            value={values[field.id] ?? ''}
            onChangeText={text => setField(field.id, text)}
            onBlur={() => { }}
            rightAccessory={
              field.showDropdown ? <Image source={images.DropDown_Img} style={styles.rightAccessoryIcon} /> : null
            }
          />
        </View>)}
      </View>
    ));

  return (
    <View style={styles.safeRoot}>
      <Header
        title={t(MessageConstants.SCREEN_TITLE)}
        onBackPress={handleBack}
      />
      <ScrollView
        style={styles.scroll}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {renderRows(INVOICE_META_ROWS)}

        <View style={styles.itemSection}>{renderRows(ITEM_LINE_ROWS)}</View>
        <View style={styles.addNewBtnContainer}>
          <AppButton
            title={t('addMoreItems')}
            style={styles.addNewBtn}
            textStyle={styles.addNewText}
            onPress={() => { }}
          />
        </View>

        <View style={styles.summarySection}>
          {renderRows(PAYMENT_SUMMARY_ROWS)}
        </View>

        <View style={styles.footerActions}>
          <AppButton
            title={t('AddNew')}
            style={styles.footerAddNewBtn}
            textStyle={styles.footerBtnText}
            onPress={() => { }}
          />
          <AppButton
            title={t('saveInvoice')}
            style={styles.footerSaveBtn}
            textStyle={styles.footerBtnText}
            onPress={() => { }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
