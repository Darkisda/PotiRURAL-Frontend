import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../server/api';

import './style.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    const { data } = await api.post('auth/signin', {
      email,
      password,
    });
    localStorage.setItem('accessToken', data.accessToken);
    api.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    });
  }

  return (
    <Container className="container-login">
      <div className="form-header">
        <Link to="/" className="link-back">
          <FiArrowLeft size={30} color="#43A047" />
          <h1 id="potirural">potiRURAL</h1>
        </Link>
      </div>
      <Form className="login-form" onSubmit={handleLogin}>
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
