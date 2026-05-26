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
    gap: 12,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.whiteColor,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  activityTitle: {
    fontSize: 15,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '700',
    color: colors.textColor,
    flexShrink: 0,
    marginRight: 12,
  },
  activityEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    gap: 10,
  },
  activityIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.header,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityTextCol: {
    flexShrink: 1,
    alignItems: 'flex-end',
  },
  activityMessage: {
    fontSize: 13,
    fontFamily: fonts.neueHaasRoman,
    color: colors.textColor,
    textAlign: 'right',
  },
  activityTimestamp: {
    fontSize: 12,
    fontFamily: fonts.neueHaasRoman,
    color: colors.greyColor,
    marginTop: 2,
    textAlign: 'right',
  },
  previewCard: {
    backgroundColor: colors.whiteColor,
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
});
