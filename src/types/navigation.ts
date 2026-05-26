import type { NativeStackScreenProps } from '@react-navigation/native-stack';

/**
 * Root stack routes — auth, main tabs, and pushed flows.
 */
export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  MainTabs: undefined;
  CreateInvoice: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
