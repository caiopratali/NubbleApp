import React from 'react';

import { Text } from '../../../components/Text/Text';
import { Screen } from '../../../components/Screen/Screen';
import { Button } from '../../../components/Button/Button';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';


export function ForgotPasswordScreen() {

    const { reset } = useResetNavigationSuccess();

    function submitForm() {
        // TODO: Implement submit form

        reset({
            title: 'Enviamos as instruções para seu e-mail',
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: 'messageRound',
                color: 'primary',
            },
        });
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mb="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's40' }}
            />
            <Button title="Recuperar senha" onPress={submitForm} />
        </Screen>
    );
}
