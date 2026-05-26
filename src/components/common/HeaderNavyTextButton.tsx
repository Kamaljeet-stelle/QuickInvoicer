/**
 * Compact navy header action (icon + label), used on Create Invoice.
 * @format
 */

import React from 'react';
import { Pressable, StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';
import type { ComponentProps } from 'react';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type IconName = ComponentProps<typeof MaterialDesignIcons>['name'];

type HeaderNavyTextButtonProps = {
  label: string;
  icon: IconName;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel: string;
};

export function HeaderNavyTextButton({
  label,
  icon,
  onPress,
  style,
  accessibilityLabel,
}: HeaderNavyTextButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed, style]}>
      <MaterialDesignIcons name={icon} size={18} color="#FFFFFF" />
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#143B8A',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 6,
    minHeight: 44,
  },
  btnPressed: {
    opacity: 0.9,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    flexShrink: 1,
  },
});
