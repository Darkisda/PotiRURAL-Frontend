import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../../auth/AuthContext';
import './style.css';

export default function UserHeader() {
  const { userLogged, handleLogout } = useContext(Context);
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
          {userLogged.firstName && userLogged.lastName ? (
            <div>
              {`Olá ${userLogged.firstName} ${userLogged.lastName}`}
              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </div>
          ) : (
            <Link to="/signup" className="signup">
              Cadastre-se
            </Link>
          )}
        </h2>
      </div>
    </Row>
  );
}
