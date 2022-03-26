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

export const getUserMock = (): User => {
  return {
    id: 'user-1',
    name: 'user-1',
    email: 'user-1@example.com',
    password: '',
    phoneNumber: 12345678900,
    isPrivate: false,
    icon: '',
    createdAt: '2022-02-06 01:05:00',
    updatedAt: '',
  };
};
