import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';

import './style.css';

export default function CreateRecipe() {
  const { authenticate } = useContext(Context);
  const history = useHistory();

  function handleAlertAndRedirect() {
    alert('Você precisa está cadastrado para escrever uma novo receita');
    history.push('/signup');
  }

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      {authenticate ? (
        <>
          <Row className="form-header">
            <h1 className="title">Crie uma nova receita deliciosa!</h1>
          </Row>
          <Form className="form-create-recipe">
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-name">
                <Form.Label className="custom-label">
                  Nome da Receita
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-description">
                <Form.Label className="custom-label">Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  className="custom-textarea"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-description">
                <Form.Label className="custom-label">Ingredientes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  className="custom-textarea"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-description">
                <Form.Label className="custom-label">
                  Modo de Preparo
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows="7"
                  className="custom-textarea"
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form-button">
              <Button className="signup-button">Salvar</Button>
            </Form.Row>
          </Form>
        </>
      ) : (
        handleAlertAndRedirect()
      )}
    </Container>
  );
}
