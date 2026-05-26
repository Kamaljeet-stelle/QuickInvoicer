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
    borderColor: '#B8D9E8',
    padding: 12,
    overflow: 'hidden',
  },
  docTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  logoImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  logoQuick: {
    fontSize: 18,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.header,
  },
  logoInvoicer: {
    fontSize: 18,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: '#F97316',
  },
  invoiceTitleBlock: {
    alignItems: 'flex-end',
    maxWidth: '48%',
  },
  invoiceTitle: {
    fontSize: 22,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    letterSpacing: 0.5,
  },
  invoiceTagline: {
    fontSize: 10,
    color: colors.greyColor,
    fontFamily: fonts.neueHaasRoman,
    marginTop: 2,
  },
  companyText: {
    fontSize: 9,
    color: colors.textColor,
    fontFamily: fonts.neueHaasRoman,
    textAlign: 'right',
    marginTop: 6,
    lineHeight: 13,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 10,
  },
  metaCol: {
    flex: 1,
  },
  sectionHeading: {
    fontSize: 10,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    marginBottom: 4,
  },
  metaLine: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    lineHeight: 13,
  },
  metaLineRight: {
    textAlign: 'right',
  },
  bottomSection: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  paymentCol: {
    flex: 1,
  },
  totalsCol: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 3,
  },
  totalLabel: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
  },
  totalValue: {
    fontSize: 9,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    marginLeft: 8,
  },
  totalHighlight: {
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
  },
  termsBlock: {
    marginTop: 10,
  },
  termLine: {
    fontSize: 8,
    fontFamily: fonts.neueHaasRoman,
    color: colors.greyColor,
    lineHeight: 12,
    marginBottom: 2,
  },
});
