import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  toggleCard: {
    backgroundColor: colors.whiteColor,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  toggleLabel: {
    fontSize: 14,
    color: colors.textColor,
    fontFamily: fonts.neueHaasRoman,
  },
  sendContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingHorizontal: 34,
    paddingVertical: 8,
  },
  sendText: {
    fontFamily: fonts.neueHaasBold,
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: '700',
  },
});
