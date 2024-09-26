import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { signUpSchema, SignUpSchema } from './signUpSchema';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { FormPasswordTextInput } from '../../../components/Form/FormPasswordTextInput';

export function SignUpScreen() {

    const { reset } = useResetNavigationSuccess();

    const { control, formState, handleSubmit } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function onSubmit(data: SignUpSchema) {
        console.log(data);

        reset({
            title: 'Sua conta foi criada com sucesso!',
            description: 'Agora é só fazer login na nossa plataforma',
            icon: {
                name: 'checkRound',
                color: 'success',
            },
        });
    }

    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">
                Criar uma conta
            </Text>

            <FormTextInput
                control={control}
                name="username"
                placeholder="@"
                label="Seu username"
                boxProps={{ mb: 's20' }}
                rules={{
                    required: 'O username é obrigatório',
                }}

            />

            <FormTextInput
                control={control}
                name="fullName"
                label="Nome completo"
                autoCapitalize="words"
                boxProps={{ mb: 's20' }}
                placeholder="Digite seu nome completo"
            />

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordTextInput
                control={control}
                name="password"
                label="Senha"
                boxProps={{ mb: 's10' }}
                placeholder="Digite sua senha"
            />

            <Button
                title="Criar minha conta"
                disabled={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
            />
        </Screen>
    );
}
