import en from './en.json';

export type LanguageCode = 'en';

export type LoginTranslationKey = keyof typeof en.login;
export type HomeTranslationKey = keyof typeof en.home;
export type CreateInvoiceTranslationKey = keyof typeof en.createInvoice;

export const LOGIN_LANGUAGES = [{ code: 'en' as const, label: 'English' }];

/** @deprecated Prefer `useTranslation(MessageConstants.namespaces.login)` */
export const LOGIN_TRANSLATIONS = { en: en.login };

/** @deprecated Prefer `useTranslation(MessageConstants.namespaces.home)` */
export const HOME_TRANSLATIONS = { en: en.home };

/** @deprecated Prefer `useTranslation(MessageConstants.namespaces.createInvoice)` */
export const CREATE_INVOICE_TRANSLATIONS = { en: en.createInvoice };

export default en;
