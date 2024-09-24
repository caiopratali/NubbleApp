/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView, TextInput, View } from 'react-native';

import { theme } from './src/theme/theme';
import { Text } from './src/components/Text/Text';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Text preset="headingLarge" mb="s8">Olá!</Text>
        <Text preset="paragraphLarge" mb="s40">Digite seu e-mail e senha para entrar</Text>

        <Box marginBottom="s20">
          <TextInput
            placeholder="Digite seu e-mail"
            style={{ borderWidth: 1, height: 50 }}
          />
        </Box>

        <Box>
          <TextInput
            placeholder="Digite sua senha"
            style={{ borderWidth: 1, height: 50 }}
          />
        </Box>

        <Text preset="paragraphSmall" color="primary" mt="s10" bold>
          Esqueci minha senha
        </Text>

        <Button title="Entrar" mt="s48" />
        <Button title="Criar uma conta" preset="outline" mt="s12" />

      </View>
    </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
