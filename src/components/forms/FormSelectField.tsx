/**
 * Read-only row that looks like a dropdown (opens via onPress when wired).
 * @format
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type FormSelectFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export function FormSelectField({
  label,
  value,
  placeholder,
  onPress,
  containerStyle,
}: FormSelectFieldProps) {
  const display = value || placeholder;
  const isPlaceholder = !value;

  return (
    <View style={[styles.wrap, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.row, pressed && onPress && styles.rowPressed]}>
        <Text style={[styles.valueText, isPlaceholder && styles.placeholderText]} numberOfLines={1}>
          {display}
        </Text>
        <MaterialDesignIcons name="chevron-down" size={22} color="#6B7280" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 12,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4B5563',
    textTransform: 'uppercase',
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 44,
  },
  rowPressed: {
    opacity: 0.85,
  },
  valueText: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    marginRight: 8,
  },
  placeholderText: {
    color: '#9CA3AF',
  },
});
