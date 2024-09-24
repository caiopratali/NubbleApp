import React from 'react';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Screen } from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
    return (
        <Screen>
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

            <PasswordInput
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{ mb: 's10' }}
            />


            <Text preset="paragraphSmall" color="primary" bold>
                Esqueci minha senha
            </Text>

            <Button title="Entrar" mt="s48" />
            <Button title="Criar uma conta" preset="outline" mt="s12" />
        </Screen>
    );
}
