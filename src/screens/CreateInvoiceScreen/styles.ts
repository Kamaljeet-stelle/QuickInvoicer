import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

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
    paddingBottom: 96,
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
  itemSection: {
    gap: 10,
    marginTop: 4,
  },
  rightAccessoryIcon: {
    width: 24,
    height: 24,
  },
  addNewBtn: {
    marginTop: 10,
    backgroundColor: colors.red,
    borderRadius: 40,
    paddingHorizontal:20,
    paddingVertical: 10,
  },
  addNewText: {
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: '700',
  },
  addNewBtnContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  summarySection: {
    gap: 10,
    marginTop: 4,
  },
  footerActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 8,
  },
  footerAddNewBtn: {
    flex: 1,
    backgroundColor: colors.red,
    borderRadius: 40,
    paddingVertical: 12,
  },
  footerSaveBtn: {
    flex: 1,
    backgroundColor: colors.ButtonColor,
    borderRadius: 40,
    paddingVertical: 12,
  },
  footerBtnText: {
    color: colors.whiteColor,
    fontSize: 18,
    fontWeight: '700',
  },
});
