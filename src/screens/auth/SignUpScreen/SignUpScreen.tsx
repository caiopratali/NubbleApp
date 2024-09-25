import React from 'react';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { Controller, useForm } from 'react-hook-form';

type SignUpFormType = {
    username: string;
    fullName: string;
    email: string;
    password: string;
};


export function SignUpScreen() {

    const { reset } = useResetNavigationSuccess();

    const { control, formState, handleSubmit } = useForm<SignUpFormType>({
        defaultValues: {
            username: '',
            fullName: '',
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function onSubmit(data: SignUpFormType) {
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

            <Controller
                control={control}
                name="username"
                rules={{
                    required: 'O username é obrigatório',
                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        placeholder="@"
                        label="Seu username"
                        boxProps={{ mb: 's20' }}
                        onChangeText={field.onChange}
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="fullName"
                rules={{
                    required: 'O nome é obrigatório',
                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        label="Nome completo"
                        autoCapitalize="words"
                        boxProps={{ mb: 's20' }}
                        onChangeText={field.onChange}
                        placeholder="Digite seu nome completo"
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="email"
                rules={{
                    required: 'E-mail é obrigatório',
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'E-mail inválido',
                    },
                }}
                render={({ field, fieldState }) => (
                    <TextInput
                        value={field.value}
                        onChangeText={field.onChange}
                        errorMessage={fieldState.error?.message}
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        boxProps={{
                            mb: 's20',
                        }}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                        value: 8,
                        message: 'Senha deve ter no mínimo 8 caracteres',
                    },
                }}
                render={({ field, fieldState }) => (
                    <PasswordInput
                        label="Senha"
                        value={field.value}
                        boxProps={{ mb: 's10' }}
                        onChangeText={field.onChange}
                        placeholder="Digite sua senha"
                        errorMessage={fieldState.error?.message}
                    />
                )}
            />

            <Button
                title="Criar minha conta"
                disabled={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
            />
        </Screen>
    );
}
