import Axios from 'axios';

export const axios = Axios.create({
  baseURL: "http://localhost:8080",
});

axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data);
    },
    (error) => {
      return Promise.reject(error);
    }
);