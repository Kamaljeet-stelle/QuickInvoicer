import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 20,
  },
  logo: {
    // width: 130,
    // height: 45,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#0B0B0B',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 4,
    fontFamily: fonts.neueHaasBlack,
  },
  subtitle: {
    fontSize: 16,
    color: colors.greyColor,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: fonts.neueHaasRoman,
    lineHeight: 30,
  },
  eyeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 11,
    marginTop: 4,
    marginBottom: 2,
    marginLeft: 8,
    fontWeight: '500',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: colors.ButtonColor,
    borderColor: colors.ButtonColor,
  },
  rememberMeText: {
    fontSize: 15,
    color: colors.greyColor,
    fontFamily: fonts.neueHaasRoman,
    lineHeight: 30,
  },
  forgotText: {
    color: colors.blueColor,
    fontSize: 15,
    fontFamily: fonts.neueHaasRoman,
    lineHeight: 30,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  signInButton: {
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.ButtonColor,
    marginBottom: 0,
  },
  footerRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.neueHaasRoman,
  },
  footerCta: {
    color: '#F59E0B',
    fontSize: 16,
    fontFamily: fonts.neueHaasRoman,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
});
