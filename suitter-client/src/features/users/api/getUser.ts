import { User } from '../types';
import { fetcher } from '../../../lib/axios';
import useSWR from 'swr';

export const getUser = (url: string) => fetcher<User>(url);

export const useUser = ({ id }: { id: string }) => {
  const { data, error } = useSWR(`users/${id}`, getUser);

  return {
    data: data as User,
    isLoading: !error && !data,
    isError: error,
  };
};
