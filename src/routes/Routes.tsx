import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from '../components/Icon/Icon';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Success: {
        title: string;
        description: string;
        icon: Pick<IconProps, 'name' | 'color'>;
    };
    ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    fullScreenGestureEnabled: true,
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Success" component={SuccessScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
