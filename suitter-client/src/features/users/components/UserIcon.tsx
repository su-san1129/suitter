import { icon__small } from '../../../styles/styles';
import { useAuthContext } from '../../auth/auth';
import { Dropdown } from '../../../components/elements/menu/Dropdown';
import { Menu } from '@headlessui/react';
import { LogoutIcon } from '../../../components/elements/icon';
import React from 'react';

export const UserIcon = () => {
  const { currentUser, logout } = useAuthContext();

  return (
    <div className="UserIcon">
      <div className="flex items-center m-4">
        <img src={'user-regular.svg'} className={`mr-4 ${icon__small}`} alt="ユーザー画像" />
        <div className="flex flex-col items-baseline">
          <div className="w-full flex justify-between">
            <div>{currentUser?.name}</div>
            <Dropdown>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-50' : 'text-gray-900'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={logout}
                    >
                      <LogoutIcon />
                      ログアウト
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Dropdown>
          </div>
          <div className="text-gray-500 text-xs">@{currentUser?.id}</div>
        </div>
      </div>
    </div>
  );
};
