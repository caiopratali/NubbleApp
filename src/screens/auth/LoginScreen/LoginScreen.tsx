import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from 'react-hook-form';

import {
    Text,
    Button,
    Screen,
    FormTextInput,
    FormPasswordTextInput,
} from '@components';
import { RootStackParamList } from '@routes';

import { loginSchema, LoginSchema } from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export function LoginScreen({ navigation }: ScreenProps) {

    const { control, formState, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });

    function onSubmit (data: LoginSchema) {
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
            <Text mb="s8" preset="headingLarge" >
                Olá!
            </Text>

            <Text mb="s40" preset="paragraphLarge" >
                Digite seu e-mail e senha para entrar
            </Text>

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20' }}
                rules={{
                    required: 'E-mail é obrigatório',
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'E-mail inválido',
                    },
                }}
            />

            <FormPasswordTextInput
                control={control}
                name="password"
                label="Senha"
                boxProps={{ mb: 's10' }}
                placeholder="Digite sua senha"
                rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                        value: 8,
                        message: 'Senha deve ter no mínimo 8 caracteres',
                    },
                }}
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
