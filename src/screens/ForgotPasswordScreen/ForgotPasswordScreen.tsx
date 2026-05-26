import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { IconArrowLeft } from '../../components/auth/LoginScreenIcons';
import { AppButton } from '../../components/common/AppButton';
import { LOGIN_TRANSLATIONS, type LanguageCode } from '../../locales';
import { images } from '../../theme/images';
import { INPUT_PLACEHOLDER_COLOR, styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../../types/navigation';

type ForgotPasswordScreenProps = {
  onBackToLogin?: () => void;
};

export function ForgotPasswordScreen({ onBackToLogin }: ForgotPasswordScreenProps = {}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>>();

  const handleBackToLogin = useCallback(() => {
    if (onBackToLogin) {
      onBackToLogin();
    } else {
      navigation.goBack();
    }
  }, [navigation, onBackToLogin]);
  const language: LanguageCode = 'en';
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const t = useCallback(
    (key: keyof (typeof LOGIN_TRANSLATIONS)['en']) =>
      LOGIN_TRANSLATIONS[language][key] ?? LOGIN_TRANSLATIONS.en[key] ?? key,
    [language],
  );

  const onSubmit = useCallback(() => {
    const value = email.trim();
    if (!value) {
      setEmailError(t('requiredEmailAddress'));
      setMessage(null);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(t('invalidEmail'));
      setMessage(null);
      return;
    }

    setEmailError(null);
    setMessage(t('resetLinkSent'));
  }, [email, t]);

  return (
    <ImageBackground source={images.loginBackground} style={styles.root}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          contentContainerStyle={styles.scrollContent}>
          <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.backRow}>
              <Pressable
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel={t('backToLogin')}
                style={styles.backArrowButton}
                onPress={handleBackToLogin}>
                <IconArrowLeft size={20} color="#111827" />
              </Pressable>
            </View>

            <View>
              <Image source={images.appLogo} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>{t('forgotPasswordTitle')}</Text>
              <Text style={styles.subtitle}>{t('forgotPasswordSubtitle')}</Text>

              <View style={styles.inputShell}>
                <TextInput
                  style={styles.input}
                  placeholder={t('emailAddress')}
                  placeholderTextColor={INPUT_PLACEHOLDER_COLOR}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  value={email}
                  onChangeText={value => {
                    setEmail(value);
                    if (emailError) {
                      setEmailError(null);
                    }
                  }}
                  onBlur={() => {
                    if (!email.trim()) {
                      setEmailError(t('requiredEmailAddress'));
                    }
                  }}
                  accessibilityLabel="Email"
                />
              </View>
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
              {message ? <Text style={styles.successText}>{message}</Text> : null}

              <AppButton title={t('submit')} onPress={onSubmit} style={styles.actionButton} />
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
