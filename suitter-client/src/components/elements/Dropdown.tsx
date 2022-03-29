import { Menu, Transition } from '@headlessui/react';
import React, { Fragment, SVGProps } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/solid';

type Prop = {
  id: string;
  onClickDeleteButton: (id: string) => void;
};

export const Dropdown = ({ id, onClickDeleteButton }: Prop) => {
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
                    Edit
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
                    Duplicate
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
                    Archive
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
                    Move
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
                      <DeleteActiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="w-5 h-5 mr-2 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

const EditInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const EditActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const DuplicateInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const DuplicateActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H12V12H4V4Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const ArchiveInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 12H12" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const ArchiveActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="10" height="8" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <rect x="4" y="4" width="12" height="4" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 12H12" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const MoveInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#84cc16" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const MoveActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4H16V10" stroke="#84cc16" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const DeleteInactiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M3 6H17" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};

const DeleteActiveIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="6" width="10" height="10" fill="#FFF" stroke="#84cc16" strokeWidth="2" />
      <path d="M3 6H17" stroke="#84cc16" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#84cc16" strokeWidth="2" />
    </svg>
  );
};
