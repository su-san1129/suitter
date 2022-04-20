import { usePosts } from '../api/getPosts';
import { useDeletePost } from '../api/deletePost';
import { PostList } from './PostList';

export const Feed = () => {
  const useQuery = usePosts();
  if (useQuery.isLoading) {
    return <div>loading...</div>;
  }

  if (!useQuery.data) return null;
  const posts = useQuery.data.posts;
  const onClickDelete = (postId: string) => {
    useDeletePost(postId);
  };

  return (
    <>
      <div className="my-2">
        <PostList posts={posts} onClickDelete={onClickDelete} />
      </div>
    </>
  );
};
