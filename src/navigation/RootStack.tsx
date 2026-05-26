/**
 * Root native stack: auth → main tabs → pushed flows (e.g. Create Invoice).
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInvoiceScreen } from '../screens/CreateInvoiceScreen/CreateInvoiceScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import type { RootStackParamList } from '../types/navigation';
import { BottomTabs } from './BottomTabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
    </Stack.Navigator>
  );
}
