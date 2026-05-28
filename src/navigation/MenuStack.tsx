/**
 * Menu tab nested stack: purchases menu → purchases list.
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MenuScreen } from '../screens/MenuScreen/MenuScreen';
import { PurchasesListScreen } from '../screens/PurchasesListScreen/PurchasesListScreen';

export type MenuStackParamList = {
  MenuHome: undefined;
  PurchasesList: undefined;
};

const Stack = createNativeStackNavigator<MenuStackParamList>();

export function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="MenuHome" component={MenuScreen} />
      <Stack.Screen name="PurchasesList" component={PurchasesListScreen} />
    </Stack.Navigator>
  );
}
