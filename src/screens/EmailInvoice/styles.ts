import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  safeRoot: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
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
