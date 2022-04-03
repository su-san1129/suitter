import Axios from 'axios';
import { parseCookies } from 'nookies';

export const axios = Axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetcher = <T>(url: string): Promise<T> => axios.get(url);

axios.interceptors.request.use((config) => {
  const cookies = parseCookies();
  if (cookies.credentials) {
    config.headers!['Authorization'] = cookies.credentials;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);
