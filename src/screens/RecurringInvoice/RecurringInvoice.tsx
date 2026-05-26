import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';
import { AppButton } from '../../components/common/AppButton';
import { Header } from '../../components/common/Header';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import { colors } from '../../theme/colors';
import type { RootStackParamList } from '../../types/navigation';
import { styles } from './styles';

export function RecurringInvoiceScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'RecurringInvoice'>>();
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.safeRoot}>
      <Header title={t('recurringInvoice')} onBackPress={() => navigation.goBack()} />
      <ScrollView bounces={false} contentContainerStyle={styles.content}>
        <View style={styles.toggleCard}>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{ false: '#D1D5DB', true: '#7AD7CC' }}
            thumbColor={colors.header}
          />
          <Text style={styles.toggleLabel}>{t('recurringToggleLabel')}</Text>
        </View>

        <View style={styles.sendContainer}>
          <AppButton
            title={t('send')}
            style={styles.sendButton}
            textStyle={styles.sendText}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
}
