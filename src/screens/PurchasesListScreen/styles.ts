import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 96,
    gap: 12,
  },
  purchaseCard: {
    backgroundColor: colors.whiteColor,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    overflow: 'hidden',
  },
  purchaseCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 12,
    gap: 12,
  },
  purchaseCardLeft: {
    flex: 1,
    minWidth: 0,
  },
  purchaseCardMeta: {
    fontSize: 12,
    color: '#666666',
    fontFamily: fonts.neueHaasRoman,
    marginBottom: 4,
  },
  purchaseCardName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textColor,
    fontFamily: fonts.neueHaasBold,
    marginBottom: 4,
  },
  purchaseCardContact: {
    fontSize: 14,
    color: '#666666',
    fontFamily: fonts.neueHaasRoman,
  },
  purchaseCardRight: {
    alignItems: 'flex-end',
  },
  purchaseCardRightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  purchasePaidBadge: {
    backgroundColor: colors.header,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 999,
    minWidth: 56,
    alignItems: 'center',
  },
  purchasePaidBadgeText: {
    color: colors.whiteColor,
    fontSize: 12,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
  purchaseCardIconBtn: {
    padding: 4,
  },
  purchaseCardDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  purchaseCardSummary: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: colors.belowGrey,
    justifyContent: 'space-between',
  },
  purchaseCardSummaryCol: {
    flex: 1,
    minWidth: 0,
  },
  purchaseCardSummaryLabel: {
    fontSize: 12,
    color: '#666666',
    fontFamily: fonts.neueHaasRoman,
    marginBottom: 4,
  },
  purchaseCardSummaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textColor,
    fontFamily: fonts.neueHaasBold,
  },
  purchaseMenuRoot: {
    flex: 1,
  },
  purchaseMenuBackdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  purchaseMenuPopover: {
    position: 'absolute',
    backgroundColor: colors.whiteColor,
    borderRadius: 10,
    paddingVertical: 4,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      android: { elevation: 6 },
      default: {},
    }),
  },
  purchaseMenuRow: {
    position: 'relative',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  purchaseMenuRowText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textColor,
    fontFamily: fonts.neueHaasBold,
  },
  purchaseMenuRowDivider: {
    position: 'absolute',
    left: 14,
    right: 14,
    bottom: 0,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E0E0E0',
  },
  fab: {
    position: 'absolute',
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: { elevation: 4 },
      default: {},
    }),
  },
});
