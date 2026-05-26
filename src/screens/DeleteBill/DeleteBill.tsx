/**
 * Delete Bill — centered confirmation modal.
 * @format
 */

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { BillConfirmationModal } from '../../components/common/BillConfirmationModal';
import { DeleteBillIllustration } from '../../components/common/DeleteBillIllustration';
import { HOME_TRANSLATIONS, type HomeTranslationKey } from '../../locales';
import type { RootStackParamList } from '../../types/navigation';

export function DeleteBillScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'DeleteBill'>>();
  const t = useCallback(
    (key: HomeTranslationKey) => HOME_TRANSLATIONS.en[key] ?? key,
    [],
  );

  const close = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <BillConfirmationModal
      illustration={<DeleteBillIllustration width={150} height={130} />}
      title={t('deleteBillConfirmTitle')}
      subtitle={t('deleteBillConfirmSubtitle')}
      primaryLabel={t('delete')}
      secondaryLabel={t('cancel')}
      closeA11y={t('closeDeleteModalA11y')}
      onPrimary={close}
      onClose={close}
    />
  );
}
