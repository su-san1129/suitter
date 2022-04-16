import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/solid';

export const Dropdown: React.FC = ({ children }) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <DotsHorizontalIcon className={'w-5 h-5'} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
