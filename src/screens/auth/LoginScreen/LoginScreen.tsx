import React from 'react';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { RootStackParamList } from '../../../routes/Routes';
import { TextInput } from '../../../components/TextInput/TextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: ScreenProps) {

    function navigateToSignUpScreen () {
        navigation.navigate('SignUp');
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPassword');
    }

    return (
        <Screen scrollable>
            <Text preset="headingLarge" mb="s8">Olá!</Text>
            <Text preset="paragraphLarge" mb="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{
                    mb: 's20',
                }}
            />

            <PasswordInput
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{ mb: 's10' }}
            />


            <Text preset="paragraphSmall" color="primary" bold onPress={navigateToForgotPasswordScreen}>
                Esqueci minha senha
            </Text>

            <Button title="Entrar" mt="s48" />
            <Button onPress={navigateToSignUpScreen} title="Criar uma conta" preset="outline" mt="s12" />
        </Screen>
    );
}
