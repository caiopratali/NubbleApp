import React from 'react';
import { Box } from '../Box/Box';
import { UseAppSafeArea } from '../../hooks/useAppSafeArea';

interface ScreenProps {
    children: React.ReactNode;
}

export function Screen({ children }: ScreenProps) {

    const { top } = UseAppSafeArea();

    return (
        <Box paddingHorizontal="s24" style={{ paddingTop: top }}>
            {children}
        </Box>
    );
}
