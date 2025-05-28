import React from 'react';

import { Post } from '@domain';

import { Box, Icon, IconProps, Text, TouchableOpacityBox } from '@components';

type PostActionsProps = Pick<
  Post,
  'favoriteCount' | 'commentCount' | 'reactionCount'
>;

export function PostActions({
  favoriteCount,
  commentCount,
  reactionCount,
}: PostActionsProps) {
  function likePost() {
    // TODO: Implement likePost
  }

  function navigateToComment() {
    // TODO: Implement navigateToComment
  }

  function favoritePost() {
    // TODO: Implement favoritePost() {
  }

  return (
    <Box flexDirection="row" alignItems="center" mt="s16">
      <Item
        onPress={likePost}
        marked
        icon={{ default: 'heart', marked: 'heartFill' }}
        text={reactionCount}
      />
      <Item
        onPress={navigateToComment}
        marked={false}
        icon={{ default: 'comment', marked: 'comment' }}
        text={commentCount}
      />
      <Item
        onPress={favoritePost}
        marked={false}
        icon={{ default: 'bookmark', marked: 'bookmarkFill' }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({ onPress, icon, text, marked }: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
