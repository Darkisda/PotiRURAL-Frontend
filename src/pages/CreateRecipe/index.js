import React from 'react';
import { Container, Form } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

export default function CreateRecipe() {
  return (
    <Container className="container-recipes">
      <UserHeader />
      <Form>
        <Form.Group controlId="recipeName">
          <Form.Label>Nome da Receita</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    </Container>
  );
}
