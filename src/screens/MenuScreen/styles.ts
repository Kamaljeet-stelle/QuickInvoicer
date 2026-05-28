import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F4F5F6',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  menuOptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  menuOptionIconWrap: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuOptionLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.neueHaasBold,
    fontWeight: '600',
  },
  menuOptionChevron: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.header,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
