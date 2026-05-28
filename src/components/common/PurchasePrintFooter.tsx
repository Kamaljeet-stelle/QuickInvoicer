/**
 * Single Print action for purchase old view / preview screens.
 * @format
 */

import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MessageConstants from '../../utils/MessageConstants';
import { printInvoice } from '../../utils/pdf/invoicePdfActions';
import { AppButton } from './AppButton';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export function PurchasePrintFooter() {
  const { t } = useTranslation();
  const [printing, setPrinting] = useState(false);

  const handlePrint = useCallback(async () => {
    if (printing) {
      return;
    }
    setPrinting(true);
    try {
      await printInvoice(t);
    } catch {
      Alert.alert(
        t(MessageConstants.PDF_ERROR_TITLE),
        t(MessageConstants.PDF_PRINT_ERROR),
      );
    } finally {
      setPrinting(false);
    }
  }, [printing, t]);

  return (
    <View style={styles.footer}>
      <AppButton
        title={t(MessageConstants.PDF_PRINT)}
        style={styles.printBtn}
        textStyle={styles.printText}
        loading={printing}
        disabled={printing}
        onPress={handlePrint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
  },
  printBtn: {
    backgroundColor: colors.header,
    borderRadius: 40,
    width: 150,
    paddingVertical: 12,
  },
  printText: {
    color: colors.whiteColor,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
});
