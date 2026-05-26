/**
 * Login screen matching current product screenshot.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { IconEye, IconEyeOff } from '../../components/auth/LoginScreenIcons';
import { AppButton } from '../../components/common/AppButton';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import {
  LOGIN_TRANSLATIONS,
  type LanguageCode,
} from '../../locales';
import { images } from '../../theme/images';
import {
  isLoginFormPotentiallyValid,
  validateEmailOrName,
  validateLoginForm,
  validatePassword,
} from '../../utils/authValidation';
import type { RootStackParamList } from '../../types/navigation';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from './styles';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons/static';
import { colors } from '../../theme/colors';

type LoginScreenProps = {
  onForgotPassword?: () => void;
  onSignIn?: (values: { emailOrName: string; password: string }) => Promise<void> | void;
};

type LoginFormState = {
  emailOrName: string;
  password: string;
};

type LoginErrorState = {
  emailOrName: string | null;
  password: string | null;
};

const INITIAL_FORM: LoginFormState = {
  emailOrName: '',
  password: '',
};

const INITIAL_ERRORS: LoginErrorState = {
  emailOrName: null,
  password: null,
};

export function LoginScreen({ onForgotPassword, onSignIn }: LoginScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Login'>>();
  const [form, setForm] = useState<LoginFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<LoginErrorState>(INITIAL_ERRORS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secure, setSecure] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const passwordInputRef = useRef<TextInput>(null);
  const language: LanguageCode = 'en';

  const t = useCallback(
    (key: keyof (typeof LOGIN_TRANSLATIONS)['en']) =>
      LOGIN_TRANSLATIONS[language][key] ?? LOGIN_TRANSLATIONS.en[key] ?? key,
    [language],
  );
  const handleChangeField = useCallback((field: keyof LoginFormState, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => (prev[field] ? { ...prev, [field]: null } : prev));
  }, []);

  const handleEmailBlur = useCallback(() => {
    const nextError = validateEmailOrName(form.emailOrName, t);
    setErrors(prev => (prev.emailOrName === nextError ? prev : { ...prev, emailOrName: nextError }));
  }, [form.emailOrName, t]);

  const handlePasswordBlur = useCallback(() => {
    const nextError = validatePassword(form.password, t);
    setErrors(prev => (prev.password === nextError ? prev : { ...prev, password: nextError }));
  }, [form.password, t]);

  const handleSubmit = useCallback(async () => {
    Keyboard.dismiss();
    const nextErrors = validateLoginForm(form, t);
    setErrors(nextErrors);
    if (nextErrors.emailOrName || nextErrors.password) {
      return;
    }

    try {
      setIsSubmitting(true);
      if (onSignIn) {
        await Promise.resolve(onSignIn(form));
      } else {
        navigation.replace('MainTabs');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [form, navigation, onSignIn, t]);

  const handleForgotPassword = useCallback(() => {
    if (onForgotPassword) {
      onForgotPassword();
    } else {
      navigation.navigate('ForgotPassword');
    }
  }, [navigation, onForgotPassword]);

  return (
    <ImageBackground source={images.appBG} style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.flex}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 16 : 24}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            bounces={false}
            contentContainerStyle={styles.scrollContent}>
            <View />
            <View style={styles.card}>
              <Image
                source={images.appLogo}
                style={styles.logo}
              />
              <Text style={styles.title}>{t('loginTitle')}</Text>
              <Text style={styles.subtitle}>{t('loginSubtitle')}</Text>

              <FloatingLabelInput
                label={t('emailAddress')}
                value={form.emailOrName}
                onChangeText={value => handleChangeField('emailOrName', value)}
                onBlur={handleEmailBlur}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                autoComplete="email"
                textContentType="username"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                blurOnSubmit={false}
                accessibilityLabel="Email address"
                error={Boolean(errors.emailOrName)}
              />
              {errors.emailOrName ? <Text style={styles.errorText}>{errors.emailOrName}</Text> : null}

              <FloatingLabelInput
                inputRef={passwordInputRef}
                label={t('password')}
                value={form.password}
                onChangeText={value => handleChangeField('password', value)}
                onBlur={handlePasswordBlur}
                secureTextEntry={secure}
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="password"
                textContentType="password"
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
                accessibilityLabel="Password"
                error={Boolean(errors.password)}
                rightAccessory={
                  <Pressable
                    onPress={() => setSecure(prev => !prev)}
                    hitSlop={10}
                    style={styles.eyeButton}
                    accessibilityRole="button"
                    accessibilityLabel={secure ? 'Show password' : 'Hide password'}>
                    {secure ? <IconEyeOff size={20} color="#9CA3AF" /> : <IconEye size={20} color="#9CA3AF" />}
                  </Pressable>
                }
              />
              {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

              <View style={styles.optionsRow}>
                <Pressable
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: rememberMe }}
                  onPress={() => setRememberMe(prev => !prev)}
                  style={styles.rememberMeRow}>
                  {
                    rememberMe ?
                      <MaterialDesignIcons name="checkbox-marked" size={24} color={colors.ButtonColor} />
                      : <MaterialDesignIcons name="checkbox-blank-outline" size={24} color={colors.ButtonColor} />
                  }
                  <Text style={styles.rememberMeText}>{t('rememberMe')}</Text>
                </Pressable>
                <Pressable
                  hitSlop={6}
                  accessibilityRole="link"
                  onPress={handleForgotPassword}>
                  <Text style={styles.forgotText}>{t('forgotPassword')}</Text>
                </Pressable>
              </View>

              <AppButton
                title={t('signIn')}
                onPress={handleSubmit}
                style={styles.signInButton}
                loading={isSubmitting}
              />
            </View>
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>{t('dontHaveAccount')}</Text>
              <Pressable accessibilityRole="button">
                <Text style={styles.footerCta}>{t('register')}</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
