import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, UseAppTheme } from '@hooks';

import { ScrollViewContainer, ViewContainer, ScreenHeader } from './components';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
  title?: string;
}

export function Screen({
  title,
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const { colors } = UseAppTheme();
  const { top, bottom } = useAppSafeArea();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{ paddingTop: top, paddingBottom: bottom }, style]}
          {...boxProps}>
          <ScreenHeader title={title} canGoBack={canGoBack} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
