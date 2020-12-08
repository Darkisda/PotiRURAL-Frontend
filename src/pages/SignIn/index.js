import React, { useState, useContext } from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Context } from '../../auth/AuthContext';

import './style.css';

export default function SignIn() {
  const { handleLogin } = useContext(Context);
  const history = useHistory();

  const [errs, setErrs] = useState([]);
  const [credentialsErr, setCredentialsErr] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    setErrs('');
    setCredentialsErr('');
    handleLogin(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        if (
          error.response.data.statusCode === 401 ||
          error.response.data.statusCode === 404
        ) {
          setCredentialsErr(error.response.data.message);
        } else {
          setErrs(error.response.data.message);
        }
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
      <Form className="login-form" onSubmit={handleSignIn}>
        <h1 id="potirural">potiRURAL</h1>
        {credentialsErr ? (
          <Form.Row className="custom-row-form">
            <Form.Group as={Col}>
              <p className="credentials error">{credentialsErr}</p>
            </Form.Group>
          </Form.Row>
        ) : (
          ''
        )}
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="email-signin">
            <Form.Label className="custom-label">Email:</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="password-signin">
            <Form.Label className="custom-label">Senha:</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        {errs ? (
          <Form.Row className="custom-row-form">
            <Form.Group as={Col}>
              {errs.map((err) => (
                <p key={err} className="error">
                  {err}
                </p>
              ))}
            </Form.Group>
          </Form.Row>
        ) : (
          ''
        )}
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
