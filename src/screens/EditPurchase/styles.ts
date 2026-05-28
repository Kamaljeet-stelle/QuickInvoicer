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
  rightAccessoryIcon: {
    width: 24,
    height: 24,
  },
  searchVendorRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-end',
  },
  searchVendorField: {
    flex: 1,
    minWidth: 0,
  },
  addNewBtn: {
    backgroundColor: colors.ButtonColor,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 3,
  },
  addNewText: {
    color: colors.whiteColor,
    fontSize: 14,
    fontWeight: '700',
  },
  phonePrefixShell: {
    minHeight: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C9CDD4',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    justifyContent: 'center',
    marginTop: 20,
  },
  phonePrefixText: {
    color: colors.textColor,
    fontSize: 15,
    fontWeight: '600',
  },
  itemSection: {
    gap: 10,
    marginTop: 4,
  },
  deleteBtnContainer: {
    // alignItems: 'flex-end',
    marginTop: 10,
  },
  deleteBtn: {
    backgroundColor: colors.red,
    borderRadius: 40,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginTop: 10,
  },
  deleteText: {
    color: colors.whiteColor,
    fontSize: 14,
    fontWeight: '700',
  },
  summarySection: {
    gap: 10,
    marginTop: 8,
  },
  saveBtnContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  saveBtn: {
    backgroundColor: colors.ButtonColor,
    borderRadius: 40,
    paddingHorizontal: 34,
    paddingVertical: 15,
    marginTop: 10,
  },
  saveText: {
    color: colors.whiteColor,
    fontSize: 16,
    fontWeight: '700',
  },
  labelText: {
    fontSize: 16,
  },
});
