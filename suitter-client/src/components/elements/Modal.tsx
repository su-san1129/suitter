import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import closeIcon from 'assets/times.svg';
import userIcon from 'assets/user-regular.svg';
import { icon__middle, icon__tiny } from '../../styles/styles';
import { Button } from './button/Button';

type Prop = {
  showState: boolean;
  handleClose: () => void;
};

export const Modal: React.FC<Prop> = ({ showState, handleClose, children }) => {
  return (
    <div css={[modalStyle, showState ? displayBlockStyle : displayNoneStyle]}>
      <section css={modalMainStyle}>
        <div className="ButtonHeader" css={modalHeaderStyle}>
          <button onClick={handleClose}>
            <img src={closeIcon} alt="閉じる" css={[icon__tiny]} />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export const PostModal: React.FC<Prop> = (props) => {
  const editRef = useRef<HTMLDivElement>(null);
  const [text, setText] = useState<string>('');

  return (
    <Modal {...props}>
      <div className="ButtonBody" css={modalBodyStyle}>
        <img src={userIcon} css={[icon__middle, { margin: '0 16px 0 0' }]} alt="ユーザ画像" />
        <div
          css={modalBodyTextStyle}
          contentEditable="true"
          ref={editRef}
          onKeyUp={() => setText(editRef.current?.innerText as string)}
        />
      </div>
      {text.length === 0 && (
        <div
          aria-readonly={true}
          css={{
            userSelect: 'none',
            position: 'relative',
            top: '-40px',
            left: '52px',
            opacity: '0.6',
            pointerEvents: 'none',
          }}
        >
          いまなにしてる？
        </div>
      )}
      <hr />
      <div className="ButtonFooter" css={modalFooterStyle}>
        <Button>投稿する</Button>
      </div>
    </Modal>
  );
};

const modalStyle = css({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.6)',
  zIndex: '1000',
});

const modalMainStyle = css({
  position: 'fixed',
  background: 'white',
  width: '25%',
  height: 'auto',
  top: '100px',
  left: '40%',
  borderRadius: '30px',
  padding: '16px',
});

const modalHeaderStyle = css({
  marginBottom: '32px',
});

const modalBodyStyle = css({
  display: 'flex',
});

const modalFooterStyle = css({
  textAlign: 'right',
});

const modalBodyTextStyle = css({
  width: '100%',
  height: '30%',
  outline: 'none',
});

const displayBlockStyle = css({
  display: 'block',
});

const displayNoneStyle = css({
  display: 'none',
});
