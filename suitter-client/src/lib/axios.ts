import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:8080',
});

export const fetcher = <T>(url: string): Promise<T> => axios.get(url);

axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  (error) => {
    return Promise.reject(error);
  }
);
