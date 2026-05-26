/**
 * Invoice document body for PDF preview.
 * @format
 */

import React, { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import { PdfTable } from '../../components/common/PdfTable';
import type { CreateInvoiceTranslationKey } from '../../locales';
import { images } from '../../theme/images';
import {
  PDF_CLIENT_KEYS,
  PDF_COMPANY_KEYS,
  PDF_INVOICE_META_KEYS,
  PDF_LINE_ITEMS,
  PDF_LINE_ITEM_KEYS,
  PDF_TABLE_COLUMNS,
  PDF_TERMS,
  PDF_TOTALS,
} from './pdfPreviewData';
import { styles } from './styles';

type TFn = (key: CreateInvoiceTranslationKey) => string;

type InvoicePreviewDocumentProps = { t: TFn };

function MetaLines({
  keys,
  t,
  alignRight,
}: {
  keys: readonly CreateInvoiceTranslationKey[];
  t: TFn;
  alignRight?: boolean;
}) {
  return (
    <>
      {keys.map(key => (
        <Text
          key={key}
          style={[styles.metaLine, alignRight && styles.metaLineRight]}>
          {t(key)}
        </Text>
      ))}
    </>
  );
}

export function InvoicePreviewDocument({ t }: InvoicePreviewDocumentProps) {
  const tableRows = useMemo(
    () => PDF_LINE_ITEMS.map(row => PDF_LINE_ITEM_KEYS.map(key => row[key])),
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
        <View style={styles.invoiceTitleBlock}>
          <Text style={styles.invoiceTitle}>{t('pdfInvoiceHeading')}</Text>
          <Text style={styles.invoiceTagline}>{t('pdfTagline')}</Text>
          <Text style={styles.companyText}>
            {PDF_COMPANY_KEYS.map(k => t(k)).join('\n')}
          </Text>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaCol}>
          <Text style={styles.sectionHeading}>{t('pdfInvoiceTo')}</Text>
          <MetaLines keys={PDF_CLIENT_KEYS} t={t} />
        </View>
        <View style={styles.metaCol}>
          <MetaLines keys={PDF_INVOICE_META_KEYS} t={t} alignRight />
        </View>
      </View>

      <PdfTable columns={PDF_TABLE_COLUMNS} rows={tableRows} />

      <View style={styles.bottomSection}>
        <View style={styles.paymentCol}>
          <Text style={styles.sectionHeading}>{t('pdfPaymentDetails')}</Text>
          <Text style={styles.metaLine}>{t('pdfPaymentPlaceholder')}</Text>
        </View>
        <View style={styles.totalsCol}>
          {PDF_TOTALS.map(({ label, value, highlight }) => (
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
