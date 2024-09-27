import React from 'react';

import { Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function NewPostScreen({}: AppTabScreenProps<'NewPost'>) {
  return (
    <Screen>
      <Text preset="headingSmall">New Post Screen</Text>
    </Screen>
  );
}
