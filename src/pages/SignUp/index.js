import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

export default function SignUp() {
  return (
    <Container className="signup-container">
      <div className="form-header">
        <h1 className="title">
          Preencha os campos abaixo <br /> para realizar o cadastro.
        </h1>
        <Link to="/" className="no-decoration">
          <h1 id="potirural">potiRURAL</h1>
        </Link>
      </div>
      <Form className="form-signup">
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="signup-firstname">
            <Form.Label className="custom-label"> Primeiro Nome: </Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group as={Col} controlId="signup-lastname">
            <Form.Label className="custom-label"> Segundo Nome: </Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="signup-email">
            <Form.Label className="custom-label"> Email: </Form.Label>
            <Form.Control type="email" required />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="signup-password">
            <Form.Label className="custom-label"> Senha:</Form.Label>
            <Form.Control type="password" required />
          </Form.Group>
          <Form.Group as={Col} controlId="signup-checkpassword">
            <Form.Label className="custom-label">
              {' '}
              Confirme sua senha:
            </Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="whatsapp">
            <Form.Label className="custom-label"> Whatsapp:</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group as={Col} controlId="ocuppation">
            <Form.Label className="custom-label"> Ocupação:</Form.Label>
            <Form.Control as="select">
              <option>Produtor</option>
              <option>Professor</option>
              <option>Estudante</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form-button">
          <Button className="signup-button">Cadastrar</Button>
        </Form.Row>
      </Form>
    </Container>
  );
}
