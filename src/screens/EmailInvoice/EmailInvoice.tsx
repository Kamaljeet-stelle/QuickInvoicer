import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { AppButton } from '../../components/common/AppButton';
import { Header } from '../../components/common/Header';
import { FloatingLabelInput } from '../../components/forms/FloatingLabelInput';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { RootStackParamList } from '../../types/navigation';
import { styles } from './styles';

export function EmailInvoiceScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'EmailInvoice'>>();
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );
  const [emailId, setEmailId] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View style={styles.safeRoot}>
      <Header title={t('emailInvoice')} onBackPress={() => navigation.goBack()} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={styles.content}>
        <FloatingLabelInput
          label={t('emailToId')}
          value={emailId}
          onChangeText={setEmailId}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <FloatingLabelInput
          label={t('emailTypeMessage')}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />

        <View style={styles.sendContainer}>
          <AppButton
            title={t('send')}
            style={styles.sendButton}
            textStyle={styles.sendText}
            onPress={() => { }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
