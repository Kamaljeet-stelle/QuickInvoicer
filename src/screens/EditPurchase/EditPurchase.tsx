/**
 * Edit Purchase / Duplicate Invoice form screen.
 * @format
 */

import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components/common/AppButton';
import { Header } from '../../components/common/Header';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import { images } from '../../theme/images';
import type { RootStackParamList } from '../../types/navigation';
import MessageConstants from '../../utils/MessageConstants';
import {
  buildInitialEditPurchaseValues,
  PURCHASE_ITEM_ROWS,
  PURCHASE_META_ROWS,
  PURCHASE_SUMMARY_ROWS,
  PURCHASE_VENDOR_ROWS,
  type EditPurchaseFieldDef,
} from './editPurchaseFieldRows';
import { styles } from './styles';

export function EditPurchaseScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'EditPurchase'>>();
  const route = useRoute();
  const { t } = useTranslation();
  const seededPurchase = (route.params as RootStackParamList['EditPurchase'])?.purchase;
  const [values, setValues] = useState(() =>
    buildInitialEditPurchaseValues({
      purchaseNumber: seededPurchase?.purchaseNumber,
      customerName: seededPurchase?.customerName,
      contactMasked: seededPurchase?.contactMasked,
      dateIso: seededPurchase?.dateIso,
      amount: seededPurchase?.amount,
      balance: seededPurchase?.balance,
    }),
  );

  const setField = useCallback((id: string, text: string) => {
    setValues(prev => ({ ...prev, [id]: text }));
  }, []);

  const renderRows = (rows: EditPurchaseFieldDef[][]) =>
    rows.map((row, index) => (
      <View
        key={`row-${index}`}
        style={row.some(field => field.half) ? styles.fieldRow : undefined}>
        {row.map(field => (
          <View
            key={field.id}
            style={field.half ? styles.fieldHalf : styles.fieldFull}>
            <FloatingLabelInput
              textStyle={styles.labelText}
              label={t(field.labelKey)}
              value={values[field.id] ?? ''}
              onChangeText={text => setField(field.id, text)}
              onBlur={() => { }}
              isDropdown={field.showDropdown}
              rightAccessory={
                field.showDropdown ? (
                  <Image
                    source={images.DropDown_Img}
                    style={styles.rightAccessoryIcon}
                  />
                ) : null
              }
            />
          </View>
        ))}
      </View>
    ));

  return (
    <View style={styles.safeRoot}>
      <Header
        title={t(MessageConstants.DUPLICATE_INVOICE)}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {renderRows(PURCHASE_META_ROWS)}
        {renderRows(PURCHASE_VENDOR_ROWS)}
        <View style={styles.itemSection}>{renderRows(PURCHASE_ITEM_ROWS)}</View>
        <View style={styles.deleteBtnContainer}>
          <AppButton
            title={t('delete')}
            style={styles.deleteBtn}
            textStyle={styles.deleteText}
            onPress={() => { }}
          />
        </View>
        <View style={styles.summarySection}>{renderRows(PURCHASE_SUMMARY_ROWS)}</View>
        {/* <View style={styles.saveBtnContainer}> */}
        <AppButton
          title={t('saveInvoice')}
          style={styles.saveBtn}
          textStyle={styles.saveText}
          onPress={() => { }}
        />
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
