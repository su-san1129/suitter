import { Post } from '../types';
import { axios } from '../../../lib/axios';
import { MutationConfig, queryClient } from '../../../lib/react-query';
import { useMutation } from 'react-query';

export type CreatePostDTO = {
  data: {
    userId: string;
    content: string;
  };
};

export const createPost = ({ data }: CreatePostDTO): Promise<Post> => {
  return axios.post(`posts`, data);
};

type UseCreatePostOptions = {
  config?: MutationConfig<typeof createPost>;
};

export const useCreatePost = ({ config }: UseCreatePostOptions = {}) => {
  return useMutation({
    onMutate: async (newPost) => {
      await queryClient.cancelQueries(['posts']);
      const previousPosts = queryClient.getQueryData<{ posts: Post[] }>(['posts']);

      queryClient.setQueryData(['posts'], [...(previousPosts?.posts || []), newPost.data]);
    },
    onError: (_, __, context: any) => {
      console.error(context);
    },
    onSuccess: async () => {
      console.log(111);
      await queryClient.invalidateQueries(['posts']);
    },
    ...config,
    mutationFn: createPost,
  });
};
