import React from 'react';

import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function SettingsScreen({}: AppScreenProps<'Settings'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
