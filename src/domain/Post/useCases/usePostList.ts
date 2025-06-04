import { usePaginatedList } from '@infra';

import { postService } from '../postService';
import { Post } from '../types';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}
