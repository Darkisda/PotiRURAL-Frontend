import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

const mySwal = withReactContent(Swal);

export default function CreateHelp() {
  const [content, setContent] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    api
      .post('/help', {
        content,
      })
      .then((response) => {
        if (response.status === 201) {
          mySwal.fire({
            title: <p>Artigo Cadastrado!</p>,
            text: 'Aguarde ele ser aprovado por algum admin!',
            icon: 'success',
          });
          history.push('/helps');
        }
      });
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Contribua com uma nova Ajuda.</h1>
      </Row>
      <Form className="form-create-article" onSubmit={handleSubmit}>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="helpContent">
            <Form.Label className="custom-label">Conteúdo da ajuda.</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="custom-textarea"
              maxLength="255"
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
    </Container>
  );
}
