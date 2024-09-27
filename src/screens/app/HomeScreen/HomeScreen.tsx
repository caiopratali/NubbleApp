import React from 'react';

import { Button, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'Home'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>

      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />

      <Button
        mt="s12"
        title="Favoritos"
        onPress={() => navigation.navigate('Favorite')}
      />
    </Screen>
  );
}
