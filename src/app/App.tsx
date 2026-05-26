/**
 * Application shell: global providers, status bar, and root navigator.
 * @format
 */

import '../i18n';
import { StatusBar } from 'react-native';
import { useIsDarkMode } from '../hooks/useIsDarkMode';
import { RootNavigator } from '../navigation/RootNavigator';
import { AppProviders } from './providers/AppProviders';

function App() {
  const isDarkMode = useIsDarkMode();

  return (
    <AppProviders>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </AppProviders>
  );
}

export default App;
