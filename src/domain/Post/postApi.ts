import { api, PageAPI, PageParams } from '@api';

import { PostAPI } from './types';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  let response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });

  return response.data;
}

export const postApi = { getList };
