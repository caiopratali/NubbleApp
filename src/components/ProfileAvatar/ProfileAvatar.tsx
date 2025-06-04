import React from 'react';
import { Image } from 'react-native';

interface Props {
  imageUrl: string;
  /** @default 32 */
  size?: number;
  /** @default 16 */
  borderRadius?: number;
}

export function ProfileAvatar({
  imageUrl,
  size = 32,
  borderRadius = 16,
}: Props) {
  return (
    <Image
      source={{ uri: imageUrl }}
      style={{ width: size, height: size, borderRadius }}
    />
  );
}
