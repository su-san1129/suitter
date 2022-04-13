import { Main } from '../components/layout/MainLayout';
import Login from './login';
import { useAuthContext } from '../features/auth/auth';
import React from 'react';

const App = () => {
  const { currentUser } = useAuthContext();

  return currentUser ? (
    <div className="my-8 mx-16">
      <header className="App-header">
        <Main />
      </header>
    </div>
  ) : (
    <Login />
  );
};
export default App;
