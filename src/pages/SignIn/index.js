import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import './style.css';

export default function SignIn() {
  return (
    <Container className="container-login">
      <Form className="login-form">
        <h1 id="potirural">potiRURAL</h1>
        <Form.Group controlId="email-signin">
          <Form.Control type="email" />
          <Form.Label className="custom-label">Email:</Form.Label>
        </Form.Group>
        <Form.Group controlId="password-signin">
          <Form.Control type="password" />
          <Form.Label className="custom-label">Senha:</Form.Label>
        </Form.Group>
        <div className="actions-group">
          <Button className="button-signin" type="submit">
            Entrar
          </Button>
          <a href="/">Esqueceu a senha?</a>
        </div>
      </Form>
    </Container>
  );
}
