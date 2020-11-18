import React, { useContext } from 'react';
import Main from '../Main';
import Landing from '../Landing';
import { Context } from '../../auth/AuthContext';

export default function MainWrapper() {
  const { authenticate } = useContext(Context);

  return (
    <>
      {authenticate ? (
        <>
          <Main />
        </>
      ) : (
        <Landing />
      )}
    </>
  );
}
