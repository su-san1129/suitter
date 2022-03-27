import React, { useRef, useState } from 'react';
import closeIcon from 'assets/times.svg';
import userIcon from 'assets/user-regular.svg';
import { icon__middle, icon__tiny } from '../../styles/styles';
import { Button } from './button/Button';

type Prop = {
  handleClose: () => void;
};

export const Modal: React.FC<Prop> = ({ handleClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 block">
      <section className="fixed bg-white w-1/4 h-auto top-24 left-0 right-0 m-auto rounded-2xl p-4">
        <div className="mb-4">
          <button onClick={handleClose}>
            <img src={closeIcon} alt="閉じる" className={icon__tiny} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export const PostModal: React.FC<Prop & { onSubmit: (postText: string) => void }> = ({
  onSubmit,
  ...props
}) => {
  const editRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');

  return (
    <Modal {...props}>
      <div className="flex">
        <img src={userIcon} className={`${icon__middle} mr-4`} alt="ユーザ画像" />
        <div
          className="w-full h-8 outline-none"
          contentEditable="true"
          ref={editRef}
          onInput={() => setText(editRef.current?.innerText as string)}
        />
      </div>
      {text.length === 0 && (
        <div
          aria-readonly={true}
          className="select-none relative t--30 left-10 opacity-60 pointer-events-none"
        >
          いまなにしてる？
        </div>
      )}
      <hr />
      <div className="text-right mt-2">
        <Button color={'primary'} size={'small'} onClick={() => onSubmit(text)}>
          投稿する
        </Button>
      </div>
    </Modal>
  );
};
