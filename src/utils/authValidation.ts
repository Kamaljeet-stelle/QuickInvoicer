type TranslationKey =
  | 'requiredNameOrEmail'
  | 'invalidEmail'
  | 'invalidName'
  | 'requiredPassword'
  | 'shortPassword';

type TranslateFn = (key: TranslationKey) => string;

export type LoginFormValues = {
  emailOrName: string;
  password: string;
};

export type LoginFormErrors = {
  emailOrName: string | null;
  password: string | null;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s.'-]{1,}$/;
const MIN_PASSWORD_LENGTH = 6;

export function validateEmailOrName(value: string, t: TranslateFn): string | null {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return t('requiredNameOrEmail');
  }

  if (trimmedValue.includes('@') && !EMAIL_REGEX.test(trimmedValue)) {
    return t('invalidEmail');
  }

  if (!trimmedValue.includes('@') && !NAME_REGEX.test(trimmedValue)) {
    return t('invalidName');
  }

  return null;
}

export function validatePassword(value: string, t: TranslateFn): string | null {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return t('requiredPassword');
  }

  if (trimmedValue.length < MIN_PASSWORD_LENGTH) {
    return t('shortPassword');
  }

  return null;
}

export function validateLoginForm(values: LoginFormValues, t: TranslateFn): LoginFormErrors {
  return {
    emailOrName: validateEmailOrName(values.emailOrName, t),
    password: validatePassword(values.password, t),
  };
}

export function isLoginFormPotentiallyValid(values: LoginFormValues): boolean {
  return values.emailOrName.trim().length > 0 && values.password.trim().length >= MIN_PASSWORD_LENGTH;
}
