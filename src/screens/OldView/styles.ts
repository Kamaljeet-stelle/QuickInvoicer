import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 16,
  },
  documentCard: {
    backgroundColor: colors.whiteColor,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    padding: 10,
  },
  topBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#9CA3AF',
    paddingBottom: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  logoQuick: {
    fontSize: 16,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.header,
  },
  logoInvoicer: {
    fontSize: 16,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: '#F97316',
  },
  taxInvoiceTitle: {
    fontSize: 14,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
  },
  companyName: {
    fontSize: 11,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    marginBottom: 2,
  },
  companyLine: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    lineHeight: 12,
  },
  infoGrid: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#9CA3AF',
  },
  infoCell: {
    flex: 1,
    padding: 6,
  },
  infoCellBorder: {
    borderRightWidth: 1,
    borderRightColor: '#9CA3AF',
  },
  infoLabel: {
    fontSize: 8,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    marginTop: 4,
  },
  infoValue: {
    fontSize: 8,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    lineHeight: 11,
  },
  table: {
    borderWidth: 1,
    borderColor: '#9CA3AF',
    marginBottom: 8,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderBottomWidth: 1,
    borderBottomColor: '#9CA3AF',
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 6,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    padding: 4,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#9CA3AF',
  },
  tableDataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
  },
  tableDataCell: {
    flex: 1,
    fontSize: 6,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    padding: 4,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: '#D1D5DB',
  },
  totalsBox: {
    alignSelf: 'flex-end',
    width: '55%',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    padding: 6,
    marginBottom: 12,
  },
  totalsLine: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    textAlign: 'right',
    marginBottom: 2,
  },
  signatureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 16,
  },
  signatureBlock: {
    flex: 1,
  },
  signatureLabel: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    marginBottom: 24,
  },
  signatureLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#9CA3AF',
  },
  printBtn: {
    width: '100%',
    marginTop: 16,
  },
  printText: {
    fontSize: 14,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.whiteColor,
  },
  printFooter: {
  alignItems: 'center',
  padding:20
  },
});
