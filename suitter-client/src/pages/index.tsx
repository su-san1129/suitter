import { Main } from '../components/layout/MainLayout';
import Login from './login';
import { useAuthContext } from '../features/auth/auth';
import React from 'react';

const App = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? (
    <div className="2xl:my-8 2xl:mx-16">
      <Main />
    </div>
  ) : (
    <Login />
  );
};
export default App;
