import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

import './style.css';

const mySwal = withReactContent(Swal);

export default function CreateEvent() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState(Date);
  const [local, setLocal] = useState('');

  const history = useHistory();

  function handleSucess() {
    mySwal.fire({
      title: <p>Evento Cadastrado!</p>,
      icon: 'success',
    });
    history.push('/perfil');
  }

  async function handleCreate() {
    const response = await api.post('/event', {
      name,
      description,
      link,
      date,
      local,
    });
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate().then((response) => {
      if (response.status === 201) {
        handleSucess();
      } else {
        mySwal.fire({
          title: <p>Oops... Parece que algo deu errado!</p>,
          icon: 'error',
        });
        history.push('/perfil');
      }
    });
  }

  return (
    <Container className="container-custom">
      <UserHeader />
      <Row className="form-header">
        <h1>Crie um novo evento!</h1>
      </Row>
      <Form className="form-create-event" onSubmit={handleSubmit}>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="event-name">
            <Form.Label className="custom-label">Nome do Evento</Form.Label>
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
          <Form.Group as={Col} controlId="event-decription">
            <Form.Label className="custom-label">
              Uma breve descrição do evento
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
          <Form.Group as={Col} controlId="event-date">
            <Form.Label className="custom-label">Dia do evento</Form.Label>
            <Form.Control
              type="date"
              required
              onChange={(e) => {
                const dateConverted = new Date(e.target.valueAsDate);
                setDate(dateConverted.toLocaleDateString());
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="event-local">
            <Form.Label className="custom-label">Local do Evento</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => {
                setLocal(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="event-link">
            <Form.Label className="custom-label">
              Link do evento (opcional)
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                setLink(e.target.value);
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
