import { UserIcon } from '../../features/users/components/UserIcon';
import { Button } from '../elements/button/Button';
import { PostModal } from '../elements/Modal';
import { useState } from 'react';
import { PostRequest } from '../../features/posts/types/request';
import { useCreatePost } from '../../features/posts/api/createPost';
import { useAuthContext } from '../../features/auth/auth';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return { showModal, setShowModal, handleClose };
};

export const SideNav = () => {
  const { currentUser } = useAuthContext();
  const { showModal, setShowModal, handleClose } = useModal();
  const onSubmit = async (content: string) => {
    const postRequest = { userId: currentUser?.id, content } as PostRequest;
    await useCreatePost({ data: postRequest });
    handleClose();
  };

  return (
    <header className="2xl:w-72 2xl:p-4 m-2">
      <h1 className="text-4xl font-bold mb-8">Suitter</h1>
      <div className="2xl:block hidden">
        <Nav label="ホーム" icon="home.svg" link="#" />
        <Nav label="プロフィール" icon="user-regular.svg" link="#" />
      </div>
      <Button type="submit" color="primary" size="medium" onClick={() => setShowModal(true)}>
        投稿する
      </Button>
      {showModal && <PostModal handleClose={handleClose} onSubmit={onSubmit} />}
      <UserIcon />
    </header>
  );
};

type NavProp = {
  label: string;
  icon: string;
  link: string;
};

const Nav = ({ label, icon, link }: NavProp) => {
  return (
    <nav>
      <li className="flex items-center p-4 cursor-pointer hover:bg-gray-50" key={label}>
        <img src={icon} className="w-6 h-6 mr-4" alt="" />
        <div>
          <a href={link}>{label}</a>
        </div>
      </li>
    </nav>
  );
};
