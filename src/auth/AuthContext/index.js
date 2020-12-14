/* eslint-disable consistent-return */
import React, { createContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

import api from '../../server/api';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticate, setAuthenticate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userLogged, setUserLogged] = useState({});

  const token = localStorage.getItem('accessToken');

  function handleLogout() {
    localStorage.removeItem('accessToken');
    api.defaults.headers.Authorization = undefined;
    setAuthenticate(false);
  }

  function getUserFromJWT() {
    if (token) {
      const { user, exp } = jwt(token);

      const now = new Date();

      if (Math.trunc(now.getTime() / 1000) > exp) {
        handleLogout();
        return null;
      }

      setUserLogged(user);
    }
  }

  async function handleLogin(email, password) {
    const { data } = await api.post('auth/signin', {
      email,
      password,
    });

    if (data.accessToken) {
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
      api.defaults.headers.Authorization = `Bearer ${data.DateaccessToken}`;
      setAuthenticate(true);
      getUserFromJWT();
      setLoaded(true);
    } else {
      return data;
    }
  }

  useEffect(() => {
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticate(true);
    }

    setLoaded(true);
    getUserFromJWT();
  }, [token]);

  return (
    <Context.Provider
      value={{ authenticate, handleLogin, handleLogout, loaded, userLogged }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
