import { UserIcon } from '../../features/users/components/UserIcon';
import { Button } from '../elements/button/Button';
import { PostModal } from '../elements/Modal';
import { useState } from 'react';
import { PostRequest } from '../../features/posts/types/request';
import { useCreatePost } from '../../features/posts/api/createPost';

export const SideNav = () => {
  const navList = [
    { label: 'ホーム', icon: 'home.svg', link: '#' },
    { label: 'プロフィール', icon: 'user-regular.svg', link: '#' },
  ];

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const onSubmit = (content: string) => {
    const postRequest = { userId: 'test-user-id', content } as PostRequest;
    useCreatePost({ data: postRequest });
    handleClose();
  };

  return (
    <header className="w-72 p-4">
      <h1 className="text-4xl font-bold mb-8">Suitter</h1>
      <nav>
        {navList.map((nav) => (
          <li className="flex items-center p-4 cursor-pointer hover:bg-gray-50" key={nav.label}>
            <img src={nav.icon} className="w-6 h-6 mr-4" alt="" />
            <div>
              <a href={nav.link}>{nav.label}</a>
            </div>
          </li>
        ))}
      </nav>
      <Button type="submit" color={'primary'} size={'medium'} onClick={() => setShowModal(true)}>
        投稿する
      </Button>
      {showModal && <PostModal handleClose={handleClose} onSubmit={onSubmit} />}
      <UserIcon />
    </header>
  );
};
