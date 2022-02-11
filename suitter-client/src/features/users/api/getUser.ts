import {User} from '../types';
import {QueryConfig} from "../../../lib/react-query";
import {useQuery} from "react-query";
import {axios} from "../../../lib/axios";

export const getUser = (id: string): Promise<User> => {
  return axios.get(`users/${id}`);
};

type UseUsersOptions = {
  id: string,
  config?: QueryConfig<typeof getUser>;
};

export const useUser = (config: UseUsersOptions) => {
  return useQuery({
    queryKey: ['user', config.id],
    queryFn: () => getUser(config.id),
  });
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
}