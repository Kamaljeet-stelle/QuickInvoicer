/**
 * Primary CTA + profile shortcut row used on the home dashboard.
 * @format
 */

import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

type HomeQuickActionsRowProps = {
  createInvoiceLabel: string;
  onCreateInvoice?: () => void;
  onProfilePress?: () => void;
  profileAccessibilityLabel: string;
};

export function HomeQuickActionsRow({
  createInvoiceLabel,
  onCreateInvoice,
  onProfilePress,
  profileAccessibilityLabel,
}: HomeQuickActionsRowProps) {
  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={createInvoiceLabel}
        style={styles.createInvoiceButton}
        onPress={onCreateInvoice}>
        <MaterialDesignIcons name="plus" size={21} color="#FFFFFF" />
        <Text style={styles.createInvoiceText}>{createInvoiceLabel}</Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={profileAccessibilityLabel}
        style={styles.profileButton}
        onPress={onProfilePress}>
        <MaterialDesignIcons name="account-outline" size={23} color="#1F2937" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#D0D8E2',
    borderBottomWidth: 1,
    borderBottomColor: '#BCC8D4',
  },
  createInvoiceButton: {
    minHeight: 44,
    minWidth: 144,
    borderRadius: 5,
    backgroundColor: '#143B8A',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 8,
  },
  createInvoiceText: {
    color: '#FFFFFF',
    fontSize: 22 / 1.3,
    fontWeight: '700',
  },
  profileButton: {
    width: 54,
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1E3A8A',
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
