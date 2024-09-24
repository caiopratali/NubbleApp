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
import { Text } from './src/components/Text/Text';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{ paddingHorizontal: 24 }}>
          <Text preset="headingLarge" mb="s8">Olá!</Text>
          <Text preset="paragraphLarge" mb="s40">Digite seu e-mail e senha para entrar</Text>

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            errorMessage="Mensagem de erro"
            boxProps={{
              mb: 's20',
            }}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{
              mb: 's10',
            }}
          />

          <Text preset="paragraphSmall" color="primary" bold>
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
