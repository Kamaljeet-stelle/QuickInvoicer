/**
 * Return Sale Items — sale return form.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components/common/AppButton';
import { Header } from '../../components/common/Header';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { RootStackParamList } from '../../types/navigation';
import { images } from '../../theme/images';
import {
  buildInitialSaleReturnValues,
  ITEM_TYPE_OPTIONS,
  SALE_RETURN_HEADER_ROWS,
  SALE_RETURN_ITEM_ROWS,
  SALE_RETURN_SUMMARY_ROWS,
  type SaleReturnFieldDef,
} from './saleReturnFieldRows';
import { styles } from './styles';

export function SaleReturnScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'SaleReturn'>>();
  const { t } = useTranslation();
  const tHome = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );
  const [values, setValues] = useState(buildInitialSaleReturnValues);

  const setField = useCallback((id: string, text: string) => {
    setValues(prev => ({ ...prev, [id]: text }));
  }, []);

  const renderField = (field: SaleReturnFieldDef) => {
    if (field.id === 'clientContact') {
      return (
        <View key={field.id} style={styles.contactRow}>
          <View style={styles.countryPrefix}>
            <Text style={styles.countryFlag}>🇦🇪</Text>
            <Text style={styles.countryCode}>+971</Text>
            <Image source={images.DropDown_Img} style={styles.rightAccessoryIcon} />
          </View>
          <View style={styles.contactInput}>
            <FloatingLabelInput
              label={t(field.labelKey)}
              value={values[field.id] ?? ''}
              onChangeText={text => setField(field.id, text)}
              onBlur={() => {}}
              keyboardType="phone-pad"
            />
          </View>
        </View>
      );
    }

    return (
      <FloatingLabelInput
        key={field.id}
        label={t(field.labelKey)}
        value={values[field.id] ?? ''}
        onChangeText={text => setField(field.id, text)}
        onBlur={() => {}}
        isDropdown={field.showDropdown}
        dropdownOptions={field.showDropdown ? ITEM_TYPE_OPTIONS : undefined}
        multiline={field.multiline}
        numberOfLines={field.multiline ? 4 : undefined}
        textAlignVertical={field.multiline ? 'top' : undefined}
        rightAccessory={
          field.showDropdown ? (
            <Image source={images.DropDown_Img} style={styles.rightAccessoryIcon} />
          ) : null
        }
      />
    );
  };

  const renderRows = (rows: SaleReturnFieldDef[][]) =>
    rows.map((row, index) => (
      <View
        key={`row-${index}`}
        style={row.some(f => f.half) ? styles.fieldRow : undefined}>
        {row.map(field => (
          <View
            key={field.id}
            style={field.half ? styles.fieldHalf : styles.fieldFull}>
            {renderField(field)}
          </View>
        ))}
      </View>
    ));

  return (
    <View style={styles.safeRoot}>
      <Header
        title={tHome('returnSaleItemsTitle')}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {renderRows(SALE_RETURN_HEADER_ROWS)}
        {renderRows(SALE_RETURN_ITEM_ROWS)}
        {renderRows(SALE_RETURN_SUMMARY_ROWS)}

        <View style={styles.submitContainer}>
          <AppButton
            title={tHome('send')}
            style={styles.submitButton}
            textStyle={styles.submitText}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}
