import Axios from 'axios';

export const axios = Axios.create({
  baseURL: "http://localhost:9000",
});

axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      return Promise.reject(error);
    }
);