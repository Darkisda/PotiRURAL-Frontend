import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../../auth/AuthContext';
import './style.css';

export default function UserHeader() {
  const { userLogged, loaded, handleLogout } = useContext(Context);
  const history = useHistory();

  function handleSignOut(e) {
    e.preventDefault();
    handleLogout();
    history.push('/');
  }

  return (
    <Row className="perfil-header">
      <Link to="/" id="potirural">
        potiRURAL
      </Link>
      <div className="wrapper-user-header">
        <h2 className="name">
          {loaded && userLogged ? (
            `Olá ${userLogged.firstName} ${userLogged.lastName}`
          ) : (
            <p>Cadastre-se</p>
          )}
        </h2>
        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </div>
    </Row>
  );
}
