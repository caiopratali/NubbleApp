import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList, useUser } from '@domain';

import { Box, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import {
  PostCommentBottom,
  PostCommentItem,
  PostCommentTextMessage,
} from './components';

export function PostCommentScreen({ route }: AppScreenProps<'PostComment'>) {
  const { postId, postAuthorId } = route.params;

  const { list, fetchNextPage, hasNextPage, refresh } =
    usePostCommentList(postId);

  const { id: userId } = useUser();

  const { bottom } = useAppSafeArea();

  function renderItem({ item }: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refresh}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: bottom }}
          ListFooterComponent={
            <PostCommentBottom
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />

        <PostCommentTextMessage postId={postId} onAddComment={refresh} />
      </Box>
    </Screen>
  );
}
