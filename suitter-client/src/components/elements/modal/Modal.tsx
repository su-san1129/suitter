import React from 'react';
import { icon__tiny } from '../../../styles/styles';

type Props = {
  handleClose: () => void;
};

export const Modal: React.FC<Props> = ({ handleClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 block">
      <section className="fixed bg-white 2xl:w-1/4 w-11/12 h-auto top-24 left-0 right-0 m-auto rounded-2xl p-4">
        <div className="mb-4">
          <button onClick={handleClose}>
            <img src={'times.svg'} alt="閉じる" className={icon__tiny} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};
