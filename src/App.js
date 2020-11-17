import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { AuthProvider } from './auth/AuthContext';
import history from './history';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
