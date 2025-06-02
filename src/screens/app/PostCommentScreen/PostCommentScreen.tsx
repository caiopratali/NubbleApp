import React from 'react';

import { usePostCommentList } from 'src/domain/PostComment/useCases/usePostList';

import { Box, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';

export function PostCommentScreen({ route }: AppScreenProps<'PostComment'>) {
  const { postId } = route.params;

  usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Comentários</Text>
      </Box>
    </Screen>
  );
}
