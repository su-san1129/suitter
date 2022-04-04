import { Main } from '../components/layout/MainLayout';
import { useLayoutEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import Login from './login';

function App() {
  const [existUser, setExistUser] = useState<boolean>(false);

  useLayoutEffect(() => {
    const cookies = parseCookies();
    const credentials = cookies.credentials;
    if (credentials) {
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
}

export default App;
