/**
 * Download PDF + native print actions for invoice preview screens.
 * @format
 */

import React, { useCallback, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import MessageConstants from '../../utils/MessageConstants';
import { downloadInvoicePdf, printInvoice } from '../../utils/pdf/invoicePdfActions';
import { AppButton } from './AppButton';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export function InvoicePdfFooter() {
  const { t } = useTranslation();
  const [busyAction, setBusyAction] = useState<'download' | 'print' | null>(null);

  const handleDownload = useCallback(async () => {
    if (busyAction) {
      return;
    }
    setBusyAction('download');
    try {
      await downloadInvoicePdf(t);
    } catch {
      Alert.alert(
        t(MessageConstants.PDF_ERROR_TITLE),
        t(MessageConstants.PDF_DOWNLOAD_ERROR),
      );
    } finally {
      setBusyAction(null);
    }
  }, [busyAction, t]);

  const handlePrint = useCallback(async () => {
    if (busyAction) {
      return;
    }
    setBusyAction('print');
    try {
      await printInvoice(t);
    } catch {
      Alert.alert(
        t(MessageConstants.PDF_ERROR_TITLE),
        t(MessageConstants.PDF_PRINT_ERROR),
      );
    } finally {
      setBusyAction(null);
    }
  }, [busyAction, t]);

  return (
    <View style={styles.footerActions}>
      <AppButton
        title={t(MessageConstants.PDF_DOWNLOAD)}
        style={styles.downloadBtn}
        textStyle={styles.footerBtnText}
        loading={busyAction === 'download'}
        disabled={busyAction !== null}
        onPress={handleDownload}
      />
      <AppButton
        title={t(MessageConstants.PDF_PRINT)}
        style={styles.printBtn}
        textStyle={styles.footerBtnText}
        loading={busyAction === 'print'}
        disabled={busyAction !== null}
        onPress={handlePrint}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerActions: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 50,
    backgroundColor: colors.bgColor,
  },
  downloadBtn: {
    flex: 1,
    backgroundColor: '#E54D4D',
    borderRadius: 40,
    paddingVertical: 12,
  },
  printBtn: {
    flex: 1,
    backgroundColor: colors.header,
    borderRadius: 40,
    paddingVertical: 12,
  },
  footerBtnText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
});
