/**
 * Uppercase label + bordered text field for invoice-style forms.
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';

type FormLabeledTextInputProps = {
  label?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  multiline?: boolean;
} & Pick<TextInputProps, 'keyboardType' | 'editable'>;

export function FormLabeledTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  containerStyle,
  multiline = false,
  keyboardType,
  editable = true,
}: FormLabeledTextInputProps) {
  return (
    <View style={[styles.wrap, !label && styles.wrapTight, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, multiline && styles.inputMultiline]}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 12,
  },
  wrapTight: {
    marginBottom: 0,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    textTransform: 'uppercase',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#111827',
    minHeight: 58,
  },
  inputMultiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
});
