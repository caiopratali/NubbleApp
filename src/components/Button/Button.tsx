import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Text } from '../Text/Text';
import { buttonPresets } from './buttonPresets';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';

export type ButtonPreset = 'primary' | 'outline';


interface ButtonProps extends TouchableOpacityBoxProps {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
}

export function Button({
    title,
    loading,
    preset = 'primary',
    ...touchableOpacityBoxProps
}: ButtonProps) {

    const buttonPreset = buttonPresets[preset];

    return (
        <TouchableOpacityBox
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...buttonPreset.container}
            {...touchableOpacityBoxProps}
        >
            {
                loading
                ? <ActivityIndicator />
                : <Text preset="paragraphMedium" bold color={buttonPreset.content} >{title}</Text>
            }
        </TouchableOpacityBox>
    );
}
