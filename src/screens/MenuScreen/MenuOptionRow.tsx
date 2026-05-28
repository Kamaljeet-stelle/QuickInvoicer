/**
 * Pill-shaped menu row with leading icon and trailing chevron.
 * @format
 */

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import type { MenuTabIconName } from './menuTabData';
import { styles } from './styles';

type MenuOptionRowProps = {
  label: string;
  icon: MenuTabIconName;
  active?: boolean;
  onPress?: () => void;
};

export function MenuOptionRow({ label, icon, active = false, onPress }: MenuOptionRowProps) {
  const accent = colors.header;
  const borderColor = active ? accent : '#D1D5DB';
  const labelColor = active ? accent : colors.textColor;
  const iconColor = active ? accent : colors.textColor;

  return (
    <Pressable
      style={[styles.menuOptionRow, { borderColor }]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}>
      <View style={styles.menuOptionIconWrap}>
        <MaterialDesignIcons name={icon} size={22} color={iconColor} />
      </View>
      <Text style={[styles.menuOptionLabel, { color: labelColor }]}>{label}</Text>
      <View style={styles.menuOptionChevron}>
        <MaterialDesignIcons name="chevron-right" size={20} color={colors.whiteColor} />
      </View>
    </Pressable>
  );
}
