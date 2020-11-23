import React, { useContext, useState } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';
import api from '../../server/api';

import './style.css';

export default function CreateArticle() {
  const { authenticate, userLogged } = useContext(Context);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const history = useHistory();

  function handleAlertAndRedirect() {
    alert('Você precisa está cadastrado para escrever uma novo receita');
    history.push('/signup');
  }

  function handleSucess() {
    alert('Artigo cadastrado com sucesso!');
    history.push('/articles');
  }

  async function handleCreate() {
    const response = await api.post('/article', {
      title,
      description,
      content,
    });
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate().then((response) => {
      if (response.status === 201) {
        handleSucess();
      } else {
        alert('Oops algo deu errado');
        history.push('/articles');
      }
    });
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      {authenticate && userLogged ? (
        <>
          <Row className="form-header">
            <h1 className="title">Contribua com um novo artigo.</h1>
          </Row>
          <Form className="form-create-article" onSubmit={handleSubmit}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-name">
                <Form.Label className="custom-label">
                  Título do Artigo
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-description">
                <Form.Label className="custom-label">
                  Uma breve descrição do que se trata o artigo.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="custom-textarea"
                  required
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-content">
                <Form.Label className="custom-label">Texto</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  className="custom-textarea"
                  required
                  onChange={(e) => {
                    setContent(e.target.value);
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
