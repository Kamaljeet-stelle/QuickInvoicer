/**
 * Shared confirmation modal for bill actions (delete, cancel, etc.).
 * @format
 */

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppButton } from './AppButton';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

type BillConfirmationModalProps = {
  illustration: React.ReactNode;
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  closeA11y: string;
  onPrimary: () => void;
  onClose: () => void;
};

export function BillConfirmationModal({
  illustration,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  closeA11y,
  onPrimary,
  onClose,
}: BillConfirmationModalProps) {
  return (
    <View style={styles.overlay}>
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel={closeA11y}
      />

      <View style={styles.card}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel={closeA11y}>
          <MaterialDesignIcons name="close" size={22} color={colors.textColor} />
        </TouchableOpacity>

        <View style={styles.illustration}>{illustration}</View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.actionsRow}>
          <AppButton
            title={primaryLabel}
            style={styles.primaryButton}
            textStyle={styles.primaryText}
            onPress={onPrimary}
          />
          <AppButton
            title={secondaryLabel}
            style={styles.secondaryButton}
            textStyle={styles.secondaryText}
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  card: {
    width: '100%',
    maxWidth: 340,
    zIndex: 1,
    backgroundColor: colors.whiteColor,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 22,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  illustration: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.neueHaasRoman,
    color: colors.greyColor,
    textAlign: 'center',
    marginBottom: 22,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: colors.red,
    borderRadius: 40,
    paddingVertical: 12,
  },
  primaryText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: colors.header,
    borderRadius: 40,
    paddingVertical: 12,
  },
  secondaryText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
});
