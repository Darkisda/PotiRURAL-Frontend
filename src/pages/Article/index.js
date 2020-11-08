import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

export default function Article() {
  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="custom-row">
        <h1>Nome do Artigo</h1>
        <h3>Criado por: Nome do Usuário</h3>
        <small>Data: 8/11/2020</small>
      </Row>
      <br />
    </Container>
  );
}
