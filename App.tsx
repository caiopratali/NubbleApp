/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';

import { theme } from './src/theme/theme';
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset="headingMedium" italic>Hello World</Text>
        <Button title="Default" mb="s12" />
        <Button title="Loading" loading mb="s12" />
        <Button title="Outline" preset="outline" />
      </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
