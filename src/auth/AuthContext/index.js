/* eslint-disable consistent-return */
import React, { createContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

import api from '../../server/api';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticate, setAuthenticate] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [userLogged, setUserLogged] = useState({});

  function handleLogout() {
    localStorage.removeItem('accessToken');
    api.defaults.headers.Authorization = undefined;
    setAuthenticate(false);
  }

  function getUserFromJWT() {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const { user, exp } = jwt(token);

      const now = new Date();

      if (now.getSeconds() > exp) {
        handleLogout();
        return null;
      }

      setUserLogged(user);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticate(true);
    }

    setLoaded(true);
    getUserFromJWT();
  }, []);

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

  return (
    <Context.Provider
      value={{ authenticate, handleLogin, handleLogout, loaded, userLogged }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
