/**
 * Invoice activity timeline card on the Print screen.
 * @format
 */

import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MessageConstants from '../../utils/MessageConstants';
import { styles } from './styles';

export function InvoiceActivityCard() {
  const { t } = useTranslation();

  return (
    <View style={styles.activityCard}>
      <Text style={styles.activityTitle}>
        {t(MessageConstants.PRINT_ACTIVITY_TITLE)}
      </Text>
      <View style={styles.activityEntry}>
        <View style={styles.activityIcon}>
          <MaterialDesignIcons name="plus" size={16} color="#FFFFFF" />
        </View>
        <View style={styles.activityTextCol}>
          <Text style={styles.activityMessage}>
            {t(MessageConstants.PRINT_ACTIVITY_CREATED)}
          </Text>
          <Text style={styles.activityTimestamp}>
            {t(MessageConstants.PRINT_ACTIVITY_TIMESTAMP)}
          </Text>
        </View>
      </View>
    </View>
  );
}
