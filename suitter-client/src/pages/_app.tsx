import '../styles.css';
import { AppProps } from 'next/app';
import { AuthContext, useAuth } from '../features/auth/auth';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
};
export default MyApp;
