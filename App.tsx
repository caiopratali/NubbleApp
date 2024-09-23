/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  View,
} from 'react-native';

import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset="headingMedium" italic>Hello World</Text>
        <Button title="Press me" />
      </View>
    </SafeAreaView>
  );
}

export default App;
