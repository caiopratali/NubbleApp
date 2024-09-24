/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './src/theme/theme';
import { SignUpScreen } from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
