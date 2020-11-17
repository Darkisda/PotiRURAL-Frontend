import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../auth/AuthContext';
import './style.css';

export default function UserHeader() {
  const { userLogged, loaded } = useContext(Context);
  return (
    <Row className="perfil-header">
      <Link to="/" id="potirural">
        potiRURAL
      </Link>
      <h2 className="name">
        {loaded ? (
          `Olá ${userLogged.firstName} ${userLogged.lastName}`
        ) : (
          <h1>Loading..</h1>
        )}
      </h2>
    </Row>
  );
}
