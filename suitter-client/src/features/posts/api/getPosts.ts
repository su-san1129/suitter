import { Post } from '../types';
import { getUser } from '../../users/api/getUser';

export const getPosts = (): Post[] => {
  const user = getUser();

  return [
    { id: 'post-1', user, content: 'sample-text-1', createdAt: '', updatedAt: '' },
    { id: 'post-2', user, content: 'sample-text-2', createdAt: '', updatedAt: '' },
    { id: 'post-3', user, content: 'sample-text-3', createdAt: '', updatedAt: '' },
    { id: 'post-4', user, content: 'sample-text-4', createdAt: '', updatedAt: '' },
    { id: 'post-5', user, content: 'sample-text-5', createdAt: '', updatedAt: '' },
  ];
};
