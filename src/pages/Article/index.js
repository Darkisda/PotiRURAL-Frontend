import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function Article() {
  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="custom-row">
        <div className="article-header">
          <h1>Nome do Artigo</h1>
          <h5>Criado por: Nome do Usuário</h5>
          <h5>Data: 8/11/2020</h5>
        </div>
      </Row>
      <hr />
      <Row className="custom-row">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Row>
    </Container>
  );
}
