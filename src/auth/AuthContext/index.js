import React, { createContext, useState, useEffect } from 'react';
import history from '../../history';
import api from '../../server/api';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticate, setAuthenticate] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticate(true);
    }

    setLoaded(true);
  }, []);

  async function handleLogin(email, password) {
    const {
      data: { accessToken },
    } = await api.post('auth/signin', {
      email,
      password,
    });

    localStorage.setItem('accessToken', JSON.stringify(accessToken));
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    setAuthenticate(true);
    setLoaded(true);
    history.push('/');
  }

  function handleLogout() {
    localStorage.removeItem('accessToken');
    api.defaults.headers.Authorization = undefined;
    setAuthenticate(false);
    history.push('/');
  }

  if (!loaded) {
    <h1>Loading...</h1>;
  }

  return (
    <Context.Provider
      value={{ authenticate, handleLogin, handleLogout, loaded }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
