/**
 * Modern purchase document for Preview screen.
 * @format
 */

import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { PdfTable } from '../../components/common/PdfTable';
import type { CreateInvoiceTranslationKey } from '../../locales';
import { images } from '../../theme/images';
import {
  PDF_COMPANY_KEYS,
  PDF_TERMS,
} from '../PDFScreen/pdfPreviewData';
import {
  PURCHASE_LINE_ITEM_KEYS,
  PURCHASE_LINE_ITEMS,
  PURCHASE_META_KEYS,
  PURCHASE_TABLE_COLUMNS,
  PURCHASE_TOTALS,
  PURCHASE_VENDOR_KEYS,
} from './purchasePreviewData';
import { styles } from './styles';

type TFn = (key: CreateInvoiceTranslationKey) => string;

type PurchasePreviewDocumentProps = { t: TFn };

export function PurchasePreviewDocument({ t }: PurchasePreviewDocumentProps) {
  const tableRows = useMemo(
    () => PURCHASE_LINE_ITEMS.map(row => PURCHASE_LINE_ITEM_KEYS.map(key => row[key])),
    [],
  );

  return (
    <View style={styles.documentCard}>
      <View style={styles.docTopRow}>
        <View style={styles.logoRow}>
          <Image source={images.appLogo} style={styles.logoImage} />
          <Text>
            <Text style={styles.logoQuick}>Quick</Text>
            <Text style={styles.logoInvoicer}>Invoicer</Text>
          </Text>
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.purchaseTitle}>{t('pdfPurchaseHeading')}</Text>
          <Text style={styles.companyText}>
            {PDF_COMPANY_KEYS.map(k => t(k)).join('\n')}
          </Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaCol}>
          <Text style={styles.sectionHeading}>{t('pdfPurchaseVendor')}</Text>
          {PURCHASE_VENDOR_KEYS.map(key => (
            <Text key={key} style={styles.metaLine}>
              {t(key)}
            </Text>
          ))}
        </View>
        <View style={styles.metaCol}>
          {PURCHASE_META_KEYS.map(key => (
            <Text key={key} style={[styles.metaLine, styles.metaLineRight]}>
              {t(key)}
            </Text>
          ))}
        </View>
      </View>

      <PdfTable
        columns={PURCHASE_TABLE_COLUMNS}
        rows={tableRows}
        columnWidth={64}
        headerBackgroundColor="#E53935"
      />

      <View style={styles.bottomSection}>
        <View style={styles.paymentCol}>
          <Text style={styles.sectionHeading}>{t('pdfPaymentDetails')}</Text>
          <Text style={styles.metaLine}>{t('pdfPaymentPlaceholder')}</Text>
        </View>
        <View style={styles.totalsCol}>
          {PURCHASE_TOTALS.map(({ label, value, highlight }) => (
            <View key={label} style={styles.totalRow}>
              <Text style={[styles.totalLabel, highlight && styles.totalHighlight]}>
                {label}
              </Text>
              <Text style={[styles.totalValue, highlight && styles.totalHighlight]}>
                {value}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.termsBlock}>
        <Text style={styles.sectionHeading}>{t('pdfTermsHeading')}</Text>
        {PDF_TERMS.map((line, i) => (
          <Text key={i} style={styles.termLine}>
            {line}
          </Text>
        ))}
      </View>
    </View>
  );
}
