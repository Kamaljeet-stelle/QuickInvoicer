/**
 * App navigation container + root stack.
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { RootStack } from './RootStack';

enableScreens();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
