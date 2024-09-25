import React from 'react';

import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { Screen } from '../../../components/Screen/Screen';
import { RootStackParamList } from '../../../routes/Routes';
import { TextInput } from '../../../components/TextInput/TextInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Controller, useForm } from 'react-hook-form';

type LoginFormType = {
    email: string;
    password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: ScreenProps) {

    const { control, formState, handleSubmit } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function onSubmit (data: LoginFormType) {
        console.log(data);
    }

    function navigateToSignUpScreen () {
        navigation.navigate('SignUp');
    }

    function navigateToForgotPasswordScreen() {
        navigation.navigate('ForgotPassword');
    }

    return (
        <Screen scrollable>
            <Text
                mb="s8"
                preset="headingLarge"
            >
                Olá!
            </Text>

            <Text
                mb="s40"
                preset="paragraphLarge"
            >
                Digite seu e-mail e senha para entrar
            </Text>

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


            <Text
                bold
                color="primary"
                preset="paragraphSmall"
                onPress={navigateToForgotPasswordScreen}
            >
                Esqueci minha senha
            </Text>

            <Button
                mt="s48"
                title="Entrar"
                disabled={!formState.isValid}
                onPress={handleSubmit(onSubmit)}
            />

            <Button
                mt="s12"
                preset="outline"
                title="Criar uma conta"
                onPress={navigateToSignUpScreen}
            />
        </Screen>
    );
}
