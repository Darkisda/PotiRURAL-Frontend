import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

export default function UserHeader() {
  return (
    <Row className="perfil-header">
      <Link to="/main" id="potirural">
        potiRURAL
      </Link>
      <h2 className="name">Luan de Souza</h2>
    </Row>
  );
}
