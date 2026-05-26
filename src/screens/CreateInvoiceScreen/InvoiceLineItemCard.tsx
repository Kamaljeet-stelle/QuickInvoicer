/**
 * Single gray "item" block on the create invoice form.
 * @format
 */

import React from 'react';
import { Pressable, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { FormLabeledTextInput } from '../../components/forms/FormLabeledTextInput';
import { FormSelectField } from '../../components/forms/FormSelectField';
import type { CreateInvoiceTranslationKey } from '../../locales';
import { styles } from './styles';

export type LineItemValues = {
  itemName: string;
  itemDescription: string;
  itemType: string;
  hsn: string;
  price: string;
  qty: string;
  taxCategory: string;
  discount: string;
  taxable: string;
  cgst: string;
  sgst: string;
  igst: string;
  lineTotal: string;
};

type TFn = (key: CreateInvoiceTranslationKey) => string;

type InvoiceLineItemCardProps = {
  item: LineItemValues;
  onChange: (patch: Partial<LineItemValues>) => void;
  onRemove: () => void;
  canRemove: boolean;
  t: TFn;
};

export function InvoiceLineItemCard({
  item,
  onChange,
  onRemove,
  canRemove,
  t,
}: InvoiceLineItemCardProps) {
  return (
    <View style={styles.itemCard}>
      <FormLabeledTextInput
        label={t('labelItemName')}
        placeholder={t('phItemName')}
        value={item.itemName}
        onChangeText={(v) => onChange({ itemName: v })}
        containerStyle={styles.fullField}
      />
      <FormLabeledTextInput
        label={t('labelItemDescription')}
        placeholder={t('phItemDescription')}
        value={item.itemDescription}
        onChangeText={(v) => onChange({ itemDescription: v })}
        multiline
        containerStyle={styles.fullField}
      />
      <View style={styles.itemRow}>
        <FormSelectField
          label={t('labelItemType')}
          value={item.itemType}
          placeholder={t('phItemType')}
          containerStyle={styles.itemFieldGrow}
        />
        <FormLabeledTextInput
          label={t('labelHsnSac')}
          placeholder={t('phHsn')}
          value={item.hsn}
          onChangeText={(v) => onChange({ hsn: v })}
          containerStyle={styles.itemFieldGrow}
        />
      </View>
      <View style={styles.itemRow}>
        <FormLabeledTextInput
          label={t('labelPrice')}
          placeholder={t('phPrice')}
          value={item.price}
          onChangeText={(v) => onChange({ price: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
        <FormLabeledTextInput
          label={t('labelQty')}
          placeholder={t('phQty')}
          value={item.qty}
          onChangeText={(v) => onChange({ qty: v })}
          keyboardType="number-pad"
          containerStyle={styles.itemFieldGrow}
        />
      </View>
      <FormSelectField
        label={t('labelTaxCategory')}
        value={item.taxCategory}
        placeholder={t('phTaxSelect')}
      />
      <View style={styles.itemRow}>
        <FormLabeledTextInput
          label={t('labelDiscount')}
          placeholder={t('phDiscount')}
          value={item.discount}
          onChangeText={(v) => onChange({ discount: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
        <FormLabeledTextInput
          label={t('labelTaxable')}
          placeholder={t('phTaxable')}
          value={item.taxable}
          onChangeText={(v) => onChange({ taxable: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
      </View>
      <View style={styles.itemRow}>
        <FormLabeledTextInput
          label={t('labelCgst')}
          placeholder={t('phCgst')}
          value={item.cgst}
          onChangeText={(v) => onChange({ cgst: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
        <FormLabeledTextInput
          label={t('labelSgst')}
          placeholder={t('phSgst')}
          value={item.sgst}
          onChangeText={(v) => onChange({ sgst: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
      </View>
      <View style={styles.itemLastRow}>
        <FormLabeledTextInput
          label={t('labelIgst')}
          placeholder={t('phIgst')}
          value={item.igst}
          onChangeText={(v) => onChange({ igst: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
        <FormLabeledTextInput
          label={t('labelLineTotal')}
          placeholder={t('phLineTotal')}
          value={item.lineTotal}
          onChangeText={(v) => onChange({ lineTotal: v })}
          keyboardType="decimal-pad"
          containerStyle={styles.itemFieldGrow}
        />
        {canRemove ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('removeItemA11y')}
            style={styles.deleteItemBtn}
            onPress={onRemove}>
            <MaterialDesignIcons name="delete-outline" size={22} color="#FFFFFF" />
          </Pressable>
        ) : (
          <View style={styles.deleteItemBtn} />
        )}
      </View>
    </View>
  );
}

export function emptyLineItem(): LineItemValues {
  return {
    itemName: '',
    itemDescription: '',
    itemType: '',
    hsn: '',
    price: '',
    qty: '',
    taxCategory: '',
    discount: '',
    taxable: '',
    cgst: '',
    sgst: '',
    igst: '',
    lineTotal: '',
  };
}
