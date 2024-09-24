/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView, View } from 'react-native';

import { theme } from './src/theme/theme';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset="headingMedium" italic>Hello World</Text>
        <Icon name="eyeOn" size={40} />
      </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
