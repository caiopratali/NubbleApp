import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { UseAppSafeArea, UseAppTheme } from '@hooks';
import { Box, TouchableOpacityBox, Icon, Text } from '@components';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {

    const {colors } = UseAppTheme();
    const navigation = useNavigation();
    const { top, bottom } = UseAppSafeArea();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1  }}>
            <Container backgroundColor={colors.background}>
                <Box paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
                    {
                        canGoBack && (
                            <TouchableOpacityBox
                                onPress={navigation.goBack}
                                mb="s24"
                                flexDirection="row"
                                alignItems="center"
                            >
                                <Icon name="arrowLeft" color="primary" />
                                <Text preset="paragraphMedium" semiBold ml="s8">
                                    Voltar
                                </Text>
                            </TouchableOpacityBox>
                        )
                    }
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}
