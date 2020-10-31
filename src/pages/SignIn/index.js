import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

export default function SignIn() {
  return (
    <Container className="container-login">
      <div className="form-header">
        <Link to="/" className="link-back">
          <FiArrowLeft size={30} color="#43A047" />
          <h1 id="potirural">potiRURAL</h1>
        </Link>
      </div>
      <Form className="login-form">
        <h1 id="potirural">potiRURAL</h1>
        <Form.Group controlId="email-signin">
          <Form.Label className="custom-label">Email:</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="password-signin">
          <Form.Label className="custom-label">Senha:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <div className="actions-group">
          <Link to="/perfil">
            <Button className="button-signin" type="submit">
              Entrar
            </Button>
          </Link>
          <a href="/">Esqueceu a senha?</a>
        </div>
      </Form>
    </Container>
  );
}
