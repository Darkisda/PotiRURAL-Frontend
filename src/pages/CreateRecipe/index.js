import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

import './style.css';

const mySwal = withReactContent(Swal);

export default function CreateRecipe() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const history = useHistory();

  async function handleCreate() {
    const response = await api.post('/recipe', {
      name,
      description,
      ingredients,
      preparation,
    });

    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate().then((response) => {
      if (response.status === 201) {
        mySwal.fire({
          title: <p>Receita Cadastrada!</p>,
          text: 'Aguarde ele ser aprovado por algum admin!',
          icon: 'success',
        });
        history.push('/recipes');
      } else {
        mySwal.fire({
          title: <p>Oops... Parece que algo deu errado!</p>,
          icon: 'error',
        });
        history.push('/');
      }
    });
  }

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Crie uma nova receita deliciosa!</h1>
      </Row>
      <Form className="form-create-recipe" onSubmit={handleSubmit}>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-name">
            <Form.Label className="custom-label">Nome da Receita</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-description">
            <Form.Label className="custom-label">Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              className="custom-textarea"
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
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
              required
              onChange={(e) => {
                setIngredients(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="recipe-description">
            <Form.Label className="custom-label">Modo de Preparo</Form.Label>
            <Form.Control
              as="textarea"
              rows="7"
              className="custom-textarea"
              required
              onChange={(e) => {
                setPreparation(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form-button">
          <Button className="signup-button" type="submit">
            Salvar
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
}
