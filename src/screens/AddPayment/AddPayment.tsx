/**
 * Add Payment — amount fields and submit.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { AppButton } from '../../components/common/AppButton';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { Header } from '../../components/common/Header';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import { images } from '../../theme/images';
import {
  ADD_PAYMENT_FIELD_ROWS,
  buildInitialAddPaymentValues,
  PAYMENT_METHOD_OPTIONS,
} from './AddPaymentFieldRows';
import { styles } from './styles';

export function AddPayment() {
  const navigation = useNavigation();
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );
  const [values, setValues] = useState(buildInitialAddPaymentValues);

  const setField = useCallback((id: keyof typeof values, text: string) => {
    setValues(prev => ({ ...prev, [id]: text }));
  }, []);

  return (
    <View style={styles.safeRoot}>
      <Header title={t('addPayment')} onBackPress={() => navigation.goBack()} />

      <ScrollView
        style={styles.scroll}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
          {ADD_PAYMENT_FIELD_ROWS.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.fieldGroup}>
              {row.map(field => (
                <View key={field.id} style={styles.fieldFull}>
                  <FloatingLabelInput
                    label={t(field.labelKey)}
                    value={values[field.id]}
                    onChangeText={text => setField(field.id, text)}
                    onBlur={() => {}}
                    isDropdown={field.showDropdown}
                    dropdownOptions={
                      field.showDropdown ? PAYMENT_METHOD_OPTIONS : undefined
                    }
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
          ))}

          <View style={styles.submitButtonContainer}>
            <AppButton
              title={t('addPaymentSubmit')}
              style={styles.submitButton}
              textStyle={styles.submitButtonText}
              onPress={() => {}}
            />
          </View>
      </ScrollView>
    </View>
  );
}
