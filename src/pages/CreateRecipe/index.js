import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function CreateRecipe() {
  return (
    <Container className="container-recipes">
      <UserHeader />
      <div className="form-header">
        <h1 className="title">Crie uma nova receita deliciosa!</h1>
      </div>
      <Form className="form-create-recipe">
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-name">
            <Form.Label className="custom-label">Nome da Receita</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-description">
            <Form.Label className="custom-label">Descrição</Form.Label>
            <Form.Control as="textarea" rows="3" className="custom-textarea" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-description">
            <Form.Label className="custom-label">Ingredientes</Form.Label>
            <Form.Control as="textarea" rows="5" className="custom-textarea" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-description">
            <Form.Label className="custom-label">Modo de Preparo</Form.Label>
            <Form.Control as="textarea" rows="7" className="custom-textarea" />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form-button">
          <Button className="signup-button">Salvar</Button>
        </Form.Row>
      </Form>
    </Container>
  );
}
