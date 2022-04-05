import { Button } from '../components/elements/button/Button';
import { Modal } from '../components/elements/Modal';
import React, { useState } from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';
import { RegisterForm } from '../features/auth/components/RegisterForm';

export default function Login() {
  const [showModal, setShowModal] = useState<ModalType>();

  return (
    <>
      <div className="container my-16 mx-auto flex items-center flex-col text-center">
        <h1 className="2xl:text-8xl text-3xl">すべての話題が、ここに。</h1>
        <div className="w-4/5 my-8">
          <Button
            type="submit"
            onClick={() => setShowModal('register')}
            size="medium"
            color="primary"
          >
            新規登録
          </Button>
          <Button
            type="submit"
            onClick={() => {
              setShowModal('login');
            }}
            size="medium"
            color="primary"
            outline
          >
            ログイン
          </Button>
        </div>
      </div>
      <ModalWrapper modalKey="login" current={showModal} handleClose={() => setShowModal(null)}>
        <LoginForm />
      </ModalWrapper>
      <ModalWrapper modalKey="register" current={showModal} handleClose={() => setShowModal(null)}>
        <RegisterForm />
      </ModalWrapper>
    </>
  );
}

type ModalType = 'login' | 'register' | null | undefined;
type ModalWrapperProp = {
  modalKey: string;
  current: string | undefined | ModalType;
  handleClose: () => void;
};
const ModalWrapper: React.FC<ModalWrapperProp> = ({ modalKey, current, handleClose, children }) => {
  return <>{modalKey === current && <Modal handleClose={handleClose}>{children}</Modal>}</>;
};
