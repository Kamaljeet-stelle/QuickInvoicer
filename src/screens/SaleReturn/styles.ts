import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 32,
    gap: 12,
  },
  fieldRow: {
    flexDirection: 'row',
    gap: 10,
  },
  fieldHalf: {
    flex: 1,
    minWidth: 0,
  },
  fieldFull: {
    width: '100%',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  countryPrefix: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
    paddingHorizontal: 10,
    minHeight: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C9CDD4',
    backgroundColor: '#FFFFFF',
  },
  countryFlag: {
    fontSize: 18,
  },
  countryCode: {
    fontSize: 14,
    color: colors.textColor,
    fontFamily: fonts.neueHaasRoman,
  },
  contactInput: {
    flex: 1,
    minWidth: 0,
  },
  rightAccessoryIcon: {
    width: 24,
    height: 24,
  },
  submitContainer: {
    marginTop: 8,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingHorizontal: 34,
    paddingVertical: 8,
  },
  submitText: {
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: fonts.neueHaasBold,
  },
});
