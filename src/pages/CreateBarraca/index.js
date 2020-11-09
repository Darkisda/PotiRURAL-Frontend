import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

export default function CreateBarraca() {
  return (
    <Container className="custom-container">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Crie uma nova Barraca para seus produtos!</h1>
      </Row>
    </Container>
  );
}
