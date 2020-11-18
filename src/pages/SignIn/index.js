import React, { useState, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Context } from '../../auth/AuthContext';

import './style.css';

export default function SignIn() {
  const { handleLogin } = useContext(Context);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    await handleLogin(email, password);
    history.push('/');
  }

  return (
    <Container className="container-login">
      <div className="form-header">
        <Link to="/" className="link-back">
          <FiArrowLeft size={30} color="#43A047" />
          <h1 id="potirural">potiRURAL</h1>
        </Link>
      </div>
      <Form className="login-form" onSubmit={handleSignIn}>
        <h1 id="potirural">potiRURAL</h1>
        <Form.Group controlId="email-signin">
          <Form.Label className="custom-label">Email:</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="password-signin">
          <Form.Label className="custom-label">Senha:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
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
