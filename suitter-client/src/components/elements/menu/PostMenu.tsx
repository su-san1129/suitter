import { Menu } from '@headlessui/react';
import React from 'react';
import {
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
  DuplicateActiveIcon,
  DuplicateInactiveIcon,
  EditActiveIcon,
  EditInactiveIcon,
  MoveActiveIcon,
  MoveInactiveIcon,
} from '../icon';
import { Dropdown } from './Dropdown';

type Prop = {
  id: string;
  onClickDeleteButton: (id: string) => void;
};

export const PostMenu: React.FC<Prop> = ({ id, onClickDeleteButton }) => {
  return (
    <Dropdown>
      <div className="px-1 py-1 ">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-50' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              編集
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-50' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <DuplicateActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <DuplicateInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              複製
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-50' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <ArchiveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <ArchiveInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              アーカイブ
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-50' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              {active ? (
                <MoveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              ) : (
                <MoveInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              )}
              移動
            </button>
          )}
        </Menu.Item>
      </div>
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? 'bg-gray-50' : 'text-gray-900'
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              onClick={() => onClickDeleteButton(id)}
            >
              {active ? (
                <DeleteActiveIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
              ) : (
                <DeleteInactiveIcon className="w-5 h-5 mr-2 text-violet-400" aria-hidden="true" />
              )}
              削除
            </button>
          )}
        </Menu.Item>
      </div>
    </Dropdown>
  );
};
