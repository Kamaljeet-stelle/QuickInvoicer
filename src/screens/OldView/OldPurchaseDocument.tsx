/**
 * Classic grid-style purchase / invoice document for Old View.
 * @format
 */

import React from 'react';
import { Image, Text, View } from 'react-native';
import type { CreateInvoiceTranslationKey } from '../../locales';
import { images } from '../../theme/images';
import { styles } from './styles';

type TFn = (key: CreateInvoiceTranslationKey) => string;

type OldPurchaseDocumentProps = { t: TFn };

const LINE_ITEMS = [
  ['1', 'Sample Product', '998314', 'Pcs', '10', '100.00', '0', '1000.00', '90.00', '90.00', '0.00', '1180.00'],
];

export function OldPurchaseDocument({ t }: OldPurchaseDocumentProps) {
  return (
    <View style={styles.documentCard}>
      <View style={styles.topBanner}>
        <View style={styles.logoRow}>
          <Image source={images.appLogo} style={styles.logoImage} />
          <Text>
            <Text style={styles.logoQuick}>Quick</Text>
            <Text style={styles.logoInvoicer}>Invoicer</Text>
          </Text>
        </View>
        <Text style={styles.taxInvoiceTitle}>{t('pdfOldViewTitle')}</Text>
      </View>

      <Text style={styles.companyName}>{t('pdfCompanyName')}</Text>
      <Text style={styles.companyLine}>{t('pdfCompanyAddress')}</Text>
      <Text style={styles.companyLine}>{t('pdfCompanyEmail')}</Text>
      <Text style={styles.companyLine}>{t('pdfCompanyGstin')}</Text>

      <View style={styles.infoGrid}>
        <View style={[styles.infoCell, styles.infoCellBorder]}>
          <Text style={styles.infoLabel}>{t('pdfOldViewBillTo')}</Text>
          <Text style={styles.infoValue}>{t('pdfClientName')}</Text>
          <Text style={styles.infoValue}>{t('pdfClientAddress')}</Text>
        </View>
        <View style={[styles.infoCell, styles.infoCellBorder]}>
          <Text style={styles.infoLabel}>{t('pdfPurchaseNo')}</Text>
          <Text style={styles.infoValue}>{t('pdfOldViewPurchaseNo')}</Text>
          <Text style={styles.infoLabel}>{t('pdfPurchaseDate')}</Text>
          <Text style={styles.infoValue}>{t('pdfOldViewPurchaseDate')}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeaderRow}>
          {[
            'S.No',
            'Description',
            'HSN',
            'Unit',
            'Qty',
            'Rate',
            'Disc',
            'Taxable',
            'CGST',
            'SGST',
            'IGST',
            'Amount',
          ].map(col => (
            <Text key={col} style={styles.tableHeaderCell}>
              {col}
            </Text>
          ))}
        </View>
        {LINE_ITEMS.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.tableDataRow}>
            {row.map((cell, cellIndex) => (
              <Text key={`${rowIndex}-${cellIndex}`} style={styles.tableDataCell}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.totalsBox}>
        <Text style={styles.totalsLine}>{t('pdfOldViewTaxableTotal')}</Text>
        <Text style={styles.totalsLine}>{t('pdfOldViewGrandTotal')}</Text>
      </View>

      <View style={styles.signatureRow}>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureLabel}>{t('pdfOldViewReceiver')}</Text>
          <View style={styles.signatureLine} />
        </View>
        <View style={styles.signatureBlock}>
          <Text style={styles.signatureLabel}>{t('pdfOldViewAuthorised')}</Text>
          <View style={styles.signatureLine} />
        </View>
      </View>
    </View>
  );
}
