import { Post } from '../types';
import { fetcher } from '../../../lib/axios';
import useSWR from 'swr';

export const getPosts = (url: string) => fetcher<{ posts: Post[] }>(url);

export const usePosts = () => {
  const { data, error } = useSWR(`posts`, getPosts);

  return {
    data: data as { posts: Post[] },
    isLoading: !error && !data,
    isError: error,
  };
};
