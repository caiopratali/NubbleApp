import React from 'react';
import { Dimensions } from 'react-native';

import { $shadowProps } from '@theme';

import { Box, BoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text style={{ flexShrink: 1 }} ml="s16" preset="paragraphMedium" bold>
        Testando o componente de toast customizado
      </Text>
    </Box>
  );
}

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
  style: { ...$shadowProps },
};
