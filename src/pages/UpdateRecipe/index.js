import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Loading from '../../components/Loading';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

export default function UpdateRecipe(props) {
  const { match } = props;

  const history = useHistory();

  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [preparation, setPreparation] = useState('');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(async () => {
    api.get(`recipe/${match.params.id}`).then((response) => {
      setName(response.data.name);
      setIngredients(response.data.ingredients);
      setDescription(response.data.description);
      setPreparation(response.data.preparation);
      setLoaded(true);
    });
  }, [match.params.id]);

  function handleUpdate(e) {
    e.preventDefault();
    api
      .put(`/recipe/${match.params.id}/edit`, {
        name,
        description,
        ingredients,
        preparation,
      })
      .then((response) => {
        if (response.status === 200) {
          alert('Atualizado com sucesso');
          history.push('/perfil');
        }
      });
  }

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Edite esta receita.</h1>
      </Row>
      {isLoaded ? (
        <>
          <Form className="form-create-recipe" onSubmit={handleUpdate}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="recipe-name">
                <Form.Label className="custom-label">
                  Nome da Receita
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={name}
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
                  value={description}
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
                  value={ingredients}
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
                  value={preparation}
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
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
