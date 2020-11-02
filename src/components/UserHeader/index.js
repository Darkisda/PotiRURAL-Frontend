import React from 'react';
import { Row } from 'react-bootstrap';

import './style.css';

export default function UserHeader() {
  return (
    <Row className="perfil-header">
      <h1 id="potirural">potiRURAL</h1>
      <h2 className="name">Luan de Souza</h2>
    </Row>
  );
}
