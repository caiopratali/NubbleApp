import React from 'react';

import { Icon, Text, Screen, Button } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'Success'>) {
  function goBackToBegin() {
    // TODO: Implement navigation to the first screen
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button title="Voltar ao início" onPress={goBackToBegin} mt="s40" />
    </Screen>
  );
}
