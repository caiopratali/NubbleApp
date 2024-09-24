import React, { useRef } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps as RNTextInputProps,
    TextStyle,
} from 'react-native';

import { Box, BoxProps } from '../Box/Box';
import { UseAppTheme } from '../../hooks/useAppTheme';
import { Text, $fontFamily, $fontSizes } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
    label: string;
    errorMessage?: string;
    RightComponent?: React.ReactElement;
    boxProps?: BoxProps;
}

export function TextInput({ label, errorMessage, RightComponent, boxProps, ...rest }: TextInputProps) {
    const { colors } = UseAppTheme();
    const inputRef = useRef<RNTextInput>(null);

    const $textInputContainer: BoxProps = {
        borderWidth: errorMessage ? 2 : 1,
        padding: 's16',
        borderColor: errorMessage ? 'error' : 'gray4',
        borderRadius: 's12',
    };

    function focusInput() {
        inputRef.current?.focus();
    }

    return (
        <Box {...boxProps}>
            <Text mb="s4" preset="paragraphMedium">{label}</Text>

            <Pressable onPress={focusInput}>
                <Box {...$textInputContainer} flexDirection="row" >
                    <RNTextInput
                        ref={inputRef}
                        style={$textInputStyle}
                        placeholderTextColor={colors.gray2}
                        {...rest}
                    />
                    {
                        RightComponent && (
                            <Box ml="s16" justifyContent="center">
                                {RightComponent}
                            </Box>
                        )
                    }
                </Box>
            </Pressable>

            {
                errorMessage && (
                    <Text preset="paragraphSmall" bold color="error">
                        {errorMessage}
                    </Text>
                )
            }
        </Box>
    );
}

const $textInputStyle: TextStyle = {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
};
