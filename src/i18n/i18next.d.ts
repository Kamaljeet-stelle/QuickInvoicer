import 'i18next';
import type en from '../locales/en.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'createInvoice';
    resources: {
      en: {
        login: typeof en.login;
        home: typeof en.home;
        createInvoice: typeof en.createInvoice;
      };
    };
  }
}
