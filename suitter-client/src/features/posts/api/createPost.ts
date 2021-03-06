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

export const useCreatePost = async (request: CreatePostDTO) => {
  await createPost(request);
  await mutate('posts');
};
