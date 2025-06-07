import React from 'react';
import { Dimensions } from 'react-native';

import { Toast, ToastPosition, ToastType } from '@services';

import { $shadowProps } from '@theme';

import { Box, BoxProps } from '../../../components/Box/Box';
import { Icon, IconProps } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
}

export function ToastContent({ toast }: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast.type || 'success';

  return (
    <Box {...$boxStyle} style={[{ [position]: 100 }, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        Testando o componente de toast customizado
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
  },
  error: {
    color: 'error',
    name: 'errorRound',
  },
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  width: MAX_WIDTH,
  opacity: 0.95,
};
