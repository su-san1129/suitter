import React, { useEffect, useRef, useState } from 'react';
import { icon__middle } from '../../../styles/styles';
import { Button } from '../button/Button';
import { Modal } from './Modal';

type Props = {
  handleClose: () => void;
  onSubmit: (postText: string) => void;
};

const usePostModal = () => {
  const editRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    editRef.current?.focus();
  }, [editRef]);

  return { text, setText, editRef };
};

export const PostModal: React.FC<Props> = ({ onSubmit, ...props }) => {
  const { text, setText, editRef } = usePostModal();
  const keyDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      onSubmit(text);
    }
  };

  return (
    <Modal {...props}>
      <div className="flex">
        <img src="user-regular.svg" className={`${icon__middle} mr-4`} alt="ユーザ画像" />
        <div
          className="w-full outline-none min-h-[40px]"
          contentEditable="true"
          ref={editRef}
          onInput={() => setText(editRef.current?.innerText as string)}
          onKeyDown={keyDownSubmit}
        />
      </div>
      {!text.length && (
        <div
          aria-readonly={true}
          className="select-none relative t--40 left-10 opacity-60 pointer-events-none"
        >
          いまなにしてる？
        </div>
      )}
      <hr />
      <div className="text-right mt-2">
        <Button
          color={!text.length ? 'disabled' : 'primary'}
          size="small"
          onClick={() => onSubmit(text)}
        >
          投稿する
        </Button>
      </div>
    </Modal>
  );
};
