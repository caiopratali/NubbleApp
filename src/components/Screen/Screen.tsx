import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { UseAppSafeArea } from '../../hooks/useAppSafeArea';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';
import { UseAppTheme } from '../../hooks/useAppTheme';

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {

    const {colors } = UseAppTheme();
    const { top, bottom } = UseAppSafeArea();

    const Container = scrollable ? ScrollViewContainer : ViewContainer;

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box paddingHorizontal="s24" style={{ paddingTop: top, paddingBottom: bottom }}>
                    {
                        canGoBack && (
                            <Box mb="s24" flexDirection="row" alignItems="center">
                                <Icon name="arrowLeft" color="primary" />
                                <Text preset="paragraphMedium" semiBold ml="s8">
                                    Voltar
                                </Text>
                            </Box>
                        )
                    }
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    );
}
