/**
 * Root native stack: auth → main tabs → pushed flows (e.g. Create Invoice).
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateInvoiceScreen } from '../screens/CreateInvoiceScreen/CreateInvoiceScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { PDFScreen } from '../screens/PDFScreen/PDFScreen';
import { PrintScreen } from '../screens/PrintScreen/PrintScreen';
import type { RootStackParamList } from '../types/navigation';
import { BottomTabs } from './BottomTabs';
import { AddPayment } from '../screens/AddPayment/AddPayment';
import { EmailInvoiceScreen } from '../screens/EmailInvoice/EmailInvoice';
import { SMSInvoice } from '../screens/SMSInvoice/SmsInvoice';
import { RecurringInvoiceScreen } from '../screens/RecurringInvoice/RecurringInvoice';
import { SaleReturnScreen } from '../screens/SaleReturn/SaleReturn';
import { DeleteBillScreen } from '../screens/DeleteBill/DeleteBill';
import { CancelBillScreen } from '../screens/CancelBill/CancelBill';
import { OldView } from '../screens/OldView/OldView';
import { PurchasePreviewScreen } from '../screens/PurchasePreview/PurchasePreviewScreen';
import { EditPurchaseScreen } from '../screens/EditPurchase/EditPurchase';

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
      <Stack.Screen name="PDFPreview" component={PDFScreen} />
      <Stack.Screen name="PrintInvoice" component={PrintScreen} />
      <Stack.Screen name="AddPayment" component={AddPayment} />
      <Stack.Screen name="EmailInvoice" component={EmailInvoiceScreen} />
      <Stack.Screen name="SMSInvoice" component={SMSInvoice} />
      <Stack.Screen name="RecurringInvoice" component={RecurringInvoiceScreen} />
      <Stack.Screen name="SaleReturn" component={SaleReturnScreen} />
      <Stack.Screen
        name="DeleteBill"
        component={DeleteBillScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen
        name="CancelBill"
        component={CancelBillScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
      <Stack.Screen name="OldView" component={OldView} />
      <Stack.Screen name="PurchasePreview" component={PurchasePreviewScreen} />
      <Stack.Screen name="EditPurchase" component={EditPurchaseScreen} />
    </Stack.Navigator>
  );
}
