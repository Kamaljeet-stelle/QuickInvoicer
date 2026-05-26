/**
 * Cancel Bill — centered confirmation modal.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { BillConfirmationModal } from '../../components/common/BillConfirmationModal';
import { CancelBillIllustration } from '../../components/common/CancelBillIllustration';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { RootStackParamList } from '../../types/navigation';

export function CancelBillScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'CancelBill'>>();
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const close = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <BillConfirmationModal
      illustration={<CancelBillIllustration />}
      title={t('cancelBillConfirmTitle')}
      subtitle={t('cancelBillConfirmSubtitle')}
      primaryLabel={t('cancelBill')}
      secondaryLabel={t('keepBill')}
      closeA11y={t('closeDeleteModalA11y')}
      onPrimary={close}
      onClose={close}
    />
  );
}
