import { Main } from '../components/layout/MainLayout';
import { useLayoutEffect, useState } from 'react';
import nookies, { parseCookies } from 'nookies';
import Login from './login';
import { decodeJWT } from '../features/auth/auth';

const App = () => {
  const [existUser, setExistUser] = useState<boolean>(false);

  useLayoutEffect(() => {
    const cookies = parseCookies();
    const credentials = cookies.credentials;
    if (credentials) {
      nookies.set(null, 'currentUser', decodeJWT(credentials).id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setExistUser(true);
    }
  });

  return existUser ? (
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
