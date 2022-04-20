import { icon__middle, icon__tiny } from '../../../styles/styles';
import { FC } from 'react';
import { PostMenu } from '../../../components/elements/menu/PostMenu';
import { Post } from '../types';
import { UserId } from '../../../components/elements/text/UserId';

type Props = {
  posts: Post[];
  onClickDelete: (id: string) => void;
};
export const PostList: React.VFC<Props> = ({ posts, onClickDelete }: Props) => {
  if (!posts.length) {
    return <>まだ投稿がありません。</>;
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={post.id}>
          <div
            className={`flex items-start py-3 px-6 hover:bg-gray-50 cursor-pointer ${
              posts.length - 1 === index
                ? 'border border-solid border-gray-100'
                : 'border-t border-l border-r border-solid border-gray-100'
            }`}
          >
            <img src="user-regular.svg" alt="ユーザー画像" className={`mr-4 ${icon__middle}`} />
            <div className="w-full">
              <div className="inline-block">
                <span className="font-bold mr-1">{post.user.name}</span>
                <span className="text-gray-500 text-sm">
                  <UserId id={post.user.id} />
                </span>
              </div>
              <div className="float-right">
                <PostMenu id={post.id} onClickDeleteButton={onClickDelete} />
              </div>
              <div className="text-base whitespace-pre-line">{post.content}</div>
              <div className="flex justify-between w-4/5">
                <OperationIcon src="comment-dots-regular.svg" alt="返信" />
                <OperationIcon src="repost.svg" alt="拡散" />
                <OperationIcon src="heart-regular.svg" alt="お気に入り" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

type OperationIconProps = {
  src: string;
  alt: string;
};

const OperationIcon: FC<OperationIconProps> = ({ src, alt }) => {
  return (
    <>
      <div className="relative w-7 h-7 rounded-2xl hover:bg-secondary">
        <img src={src} alt={alt} className={`absolute inset-0 m-auto z-10 ${icon__tiny}`} />
      </div>
    </>
  );
};
