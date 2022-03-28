import { useUser } from '../api/getUser';
import { icon__small } from '../../../styles/styles';

export const UserIcon = () => {
  const userQuery = useUser({ id: 'test-user-id' });

  if (userQuery.isLoading) {
    return <></>;
  }

  if (!userQuery.data) return null;
  const user = userQuery.data;

  return (
    <div className="UserIcon">
      <div className="flex items-center m-4">
        <img src={'user-regular.svg'} className={`mr-4 ${icon__small}`} alt="ユーザー画像" />
        <div className="flex flex-col items-baseline">
          <div>{user.name}</div>
          <div className="text-gray-500 text-xs">@{user.id}</div>
        </div>
      </div>
    </div>
  );
};
