import React, { useContext } from 'react';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';

import './style.css';

export default function CreateArticle() {
  const { authenticate } = useContext(Context);
  const history = useHistory();

  function handleAlertAndRedirect() {
    alert('Você precisa está cadastrado para escrever um novo artigo');
    history.push('/signup');
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      {authenticate ? (
        <>
          <Row className="form-header">
            <h1 className="title">Contribua com um novo artigo.</h1>
          </Row>
          <Form className="form-create-article">
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-name">
                <Form.Label className="custom-label">Nome do Artigo</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-content">
                <Form.Label className="custom-label">Texto</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
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
