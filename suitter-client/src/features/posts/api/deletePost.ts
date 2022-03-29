import { axios } from '../../../lib/axios';
import { mutate } from 'swr';

const deletePost = (id: string) => {
  return axios.delete(`posts/${id}`);
};

export const useDeletePost = (id: string) => {
  const mutatePosts = async () => {
    await deletePost(id);
    await mutate('posts');
  };
  mutatePosts().then();
};
