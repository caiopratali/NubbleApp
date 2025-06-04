import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import { UseAppTheme } from '@hooks';

import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { $textInputStyle } from '../TextInput/TextInput';

export interface TextMessageProps extends RNTextInputProps {
  onPressSend: (message: string) => void;
}

export function TextMessage({ onPressSend, value, ...rest }: TextMessageProps) {
  const { colors } = UseAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisable = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          value={value}
          style={[$textInputStyle, { color: colors.gray1 }]}
          placeholderTextColor={colors.gray1}
          {...rest}
        />

        <Text
          color={sendIsDisable ? 'gray2' : 'primary'}
          bold
          onPress={() => onPressSend(value || '')}
          disabled={sendIsDisable}>
          Enviar
        </Text>
      </Box>
    </Pressable>
  );
}
