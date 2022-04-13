import React, { useContext, useEffect, useState } from 'react';
import { User } from '../users/types';
import { getUser } from '../users/api/getUser';
import { parseCookies } from 'nookies';
import { destroyCookie, setCookies } from '../../lib/nookies';

type Claim = {
  id: string;
  email: string;
};
type AuthType = ReturnType<typeof useAuth>;

export const AuthContext = React.createContext<AuthType | null>(null);
export const useAuthContext = () => useContext(AuthContext) as AuthType;

export const useAuth = () => {
  const [currentUser, setUser] = useState<User>();

  const decodeJWT = (token: string): Claim => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const encodeURI = encodeURIComponent(atob(base64));
    const decodeString = decodeURIComponent(encodeURI);
    return JSON.parse(decodeString) as Claim;
  };

  const setCredentials = (token: string) => {
    setCookies('credentials', token);
    setCookies('currentUser', decodeJWT(token).id);
  };

  const logout = () => {
    destroyCookie('credentials');
    destroyCookie('currentUser');
    setUser(undefined);
  };

  const currentUserId = parseCookies().currentUser;

  useEffect(() => {
    if (currentUserId) {
      getUser(`users/${currentUserId}`).then((user) => setUser(user));
    }
  }, [currentUserId]);

  return { currentUser, setUser, logout, setCredentials, decodeJWT };
};
