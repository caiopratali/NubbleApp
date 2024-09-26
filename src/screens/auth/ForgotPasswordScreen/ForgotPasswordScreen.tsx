import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Text } from '../../../components/Text/Text';
import { Screen } from '../../../components/Screen/Screen';
import { Button } from '../../../components/Button/Button';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { forgotPasswordSchema, ForgotPasswordSchema } from './forgotPasswordSchema';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';


export function ForgotPasswordScreen() {

    const { reset } = useResetNavigationSuccess();

    const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    function onSubmit() {
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

            <Text preset="headingLarge" mb="s16">
                Esqueci minha senha
            </Text>

            <Text preset="paragraphLarge" mb="s32">
                Digite seu e-mail e enviaremos as instruções para redefinição de senha
            </Text>

            <FormTextInput
                name="email"
                label="E-mail"
                control={control}
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's40' }}
            />

            <Button
                title="Recuperar senha"
                disabled={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
            />

        </Screen>
    );
}
