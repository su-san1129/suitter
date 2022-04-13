import { icon__small } from '../../../styles/styles';
import { useAuthContext } from '../../auth/auth';

export const UserIcon = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="UserIcon">
      <div className="flex items-center m-4">
        <img src={'user-regular.svg'} className={`mr-4 ${icon__small}`} alt="ユーザー画像" />
        <div className="flex flex-col items-baseline">
          <div>{currentUser?.name}</div>
          <div className="text-gray-500 text-xs">@{currentUser?.id}</div>
        </div>
      </div>
    </div>
  );
};
