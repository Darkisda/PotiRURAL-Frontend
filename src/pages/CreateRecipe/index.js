import React, { useState, useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';
import api from '../../server/api';

import './style.css';

export default function CreateRecipe() {
  // const { register, handleSubmit } = useForm();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [image, setImage] = useState({});

  const { authenticate } = useContext(Context);
  const history = useHistory();

  function handleAlertAndRedirect() {
    alert('Você precisa está cadastrado para escrever uma novo receita');
    history.push('/signup');
  }

  async function handleCreate() {
    const response = await api.post('/recipe', {
      name,
      description,
      ingredients,
      preparation,
      image,
    });

    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate().then((response) => {
      if (response.status === 201) {
        alert('Receita cadastrada com sucesso!');
        history.push('/recipes');
      } else {
        alert('Algo deu errado...');
        history.push('/');
      }
    });
  }

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      {authenticate ? (
        <>
          <Row className="form-header">
            <h1 className="title">Crie uma nova receita deliciosa!</h1>
          </Row>
          <Form className="form-create-recipe" onSubmit={handleSubmit}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-name">
                <Form.Label className="custom-label">
                  Nome da Receita
                </Form.Label>
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
                <Form.Label className="custom-label">
                  Modo de Preparo
                </Form.Label>
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
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-img">
                <Form.Label className="custom-label">
                  Uma foto da receita.
                </Form.Label>
                <Form.File
                  name="image"
                  // ref={register}
                  type="file"
                  id="image-recipe-form"
                  label="Escolha uma imagem"
                  custom
                  onChange={(e) => {
                    setImage(e.target.files[0]);
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
        </>
      ) : (
        handleAlertAndRedirect()
      )}
    </Container>
  );
}
