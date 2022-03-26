import { Post } from '../types';
import { axios } from '../../../lib/axios';
import { mutate } from 'swr';

export type CreatePostDTO = {
  data: {
    userId: string;
    content: string;
  };
};

export const createPost = ({ data }: CreatePostDTO): Promise<Post> => {
  return axios.post(`posts`, data);
};

export const useCreatePost = (request: CreatePostDTO) => {
  const mutatePosts = async () => {
    await createPost(request);
    await mutate('posts');
  };
  mutatePosts().then();
};
