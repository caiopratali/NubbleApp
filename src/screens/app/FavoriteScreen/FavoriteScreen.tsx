import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function FavoriteScreen({}: AppTabScreenProps<'Favorite'>) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorite Screen</Text>
    </Screen>
  );
}
