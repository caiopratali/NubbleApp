import React from 'react';

import {
    ActivityIndicatorProps as RNActivityIndicatorProps,
    ActivityIndicator as RNActivityIndicator,
} from 'react-native';

import { ThemeColors } from '@theme';
import { UseAppTheme } from '@hooks';

interface Props extends Omit<RNActivityIndicatorProps, 'color'> {
    color: ThemeColors;
}

export function ActivityIndicator({ color, ...rest }: Props) {

    const { colors } = UseAppTheme();

    return (
        <RNActivityIndicator
            color={colors[color]}
            {...rest}
        />
    );
}
