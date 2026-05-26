import { Platform, StyleSheet } from 'react-native';

export const INPUT_PLACEHOLDER_COLOR = '#7B7B7B';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
  },
  backRow: {
    flex: 0.4,
  },
  scrollContent: {
    paddingHorizontal: 18,
    justifyContent: 'flex-start',
    flex: 1,
  },
  backArrowButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 170,
    height: 82,
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0B0B0B',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#4B5563',
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  inputShell: {
    minHeight: 56,
    borderRadius: 28,
    borderWidth: 1.2,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: 'rgb(118, 118, 118)',
    paddingVertical: Platform.OS === 'android' ? 8 : 0,
  },
  errorText: {
    color: '#DC2626',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
    fontWeight: '500',
  },
  successText: {
    color: '#047857',
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 10,
    fontWeight: '600',
  },
  actionButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: '#149A93',
    marginTop: 8,
  },
});
