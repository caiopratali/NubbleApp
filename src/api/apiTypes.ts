export interface MetaDataPageAPI {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
}

/**
 * @description API Response with pagination
 * @template Data Data type
 */

export interface PageAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
