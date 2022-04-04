import { Button } from '../components/elements/button/Button';
import { Modal } from '../components/elements/Modal';
import { useState } from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="container my-16 mx-auto flex items-center flex-col">
        <h1 className="text-8xl text-center">すべての話題が、ここに。</h1>
        <div className="w-720 my-8">
          <Button type="submit" onClick={() => setShowModal(true)} size="medium" color="primary">
            Login
          </Button>
          {showModal && (
            <Modal handleClose={() => setShowModal(false)}>
              <LoginForm />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}
