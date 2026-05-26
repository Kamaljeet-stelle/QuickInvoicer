/**
 * i18next + react-i18next — import once at app startup (see App.tsx).
 * @format
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import { I18N_NAMESPACES } from '../utils/MessageConstants';

void i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en,
  },
  defaultNS: I18N_NAMESPACES.createInvoice,
  ns: Object.values(I18N_NAMESPACES),
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
