import userIcon from 'assets/user-regular.svg';
import repostIcon from 'assets/repost.svg';
import replyIcon from 'assets/comment-dots-regular.svg';
import favoriteIcon from 'assets/heart-regular.svg';
import { icon__middle, icon__tiny } from '../../../styles/styles';
import { usePosts } from '../api/getPosts';
import { FC } from 'react';
import { Dropdown } from '../../../components/elements/Dropdown';

export const Feed = () => {
  const useQuery = usePosts();
  if (useQuery.isLoading) {
    return <div>loading...</div>;
  }

  if (!useQuery.data) return null;
  const posts = useQuery.data.posts;

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
                  <img src={userIcon} alt="ユーザー画像" className={`mr-4 ${icon__middle}`} />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-bold mr-1">{post.user.name}</span>
                        <span className="text-gray-500 text-sm">@{post.user.id}</span>
                      </div>
                      <div>
                        <Dropdown />
                      </div>
                    </div>
                    <div className="text-base">{post.content}</div>
                    <div className="flex justify-between w-4/5">
                      <OperationIcon src={replyIcon} alt={'返信'} />
                      <OperationIcon src={repostIcon} alt={'拡散'} />
                      <OperationIcon src={favoriteIcon} alt={'お気に入り'} />
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
