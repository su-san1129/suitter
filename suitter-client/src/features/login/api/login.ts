import { axios } from '../../../lib/axios';

export const login = (email: string, password: string): Promise<string> => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  return axios.post(`login`, data);
};
