import {Post} from '../types';
import {axios} from "../../../lib/axios";
import {QueryConfig} from "../../../lib/react-query";
import {useQuery} from "react-query";

export const getPosts = (): Promise<Post[]> => {
  return axios.get(`posts`);
};

type UsePostsOptions = {
  config?: QueryConfig<typeof getPosts>;
};

export const usePosts = ({config}: UsePostsOptions = {}) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    ...config,
  });
};