import { icon__middle, icon__tiny } from '../../../styles/styles';
import { usePosts } from '../api/getPosts';
import { FC } from 'react';
import { Dropdown } from '../../../components/elements/Dropdown';
import { useDeletePost } from '../api/deletePost';

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
        <ul>
          {posts &&
            posts.map((post, index) => (
              <li key={post.id}>
                <div
                  className={
                    'flex items-start py-3 px-6 hover:bg-gray-50 cursor-pointer ' +
                    (posts.length - 1 === index ? listBorder__last : listBorder)
                  }
                >
                  <img
                    src={'/user-regular.svg'}
                    alt="ユーザー画像"
                    className={`mr-4 ${icon__middle}`}
                  />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold mr-1">{post.user.name}</span>
                        <span className="text-gray-500 text-sm">@{post.user.id}</span>
                      </div>
                      <div>
                        <Dropdown id={post.id} onClickDeleteButton={onClickDelete} />
                      </div>
                    </div>
                    <div className="text-base">{post.content}</div>
                    <div className="flex justify-between w-4/5">
                      <OperationIcon src={'comment-dots-regular.svg'} alt={'返信'} />
                      <OperationIcon src={'repost.svg'} alt={'拡散'} />
                      <OperationIcon src={'heart-regular.svg'} alt={'お気に入り'} />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

type OperationIconProps = {
  src: string;
  alt: string;
};

export const OperationIcon: FC<OperationIconProps> = ({ src, alt }) => {
  return (
    <>
      <div className={'relative w-7 h-7 rounded-2xl hover:bg-secondary'}>
        <img src={src} alt={alt} className={`absolute inset-0 m-auto z-10 ${icon__tiny}`} />
      </div>
    </>
  );
};

const listBorder = 'border-t border-l border-r border-solid border-gray-100';
const listBorder__last = 'border-b border-solid border-gray-100 ';
