import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import api from '../../server/api';

const mySwal = withReactContent(Swal);

export default function UpdateEvent(props) {
  const { match } = props;

  const history = useHistory();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [date, setDate] = useState(Date);
  const [local, setLocal] = useState('');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(async () => {
    api.get(`event/${match.params.id}`).then((response) => {
      setName(response.data.name);
      setDescription(response.data.description);
      setLink(response.data.link);
      setDate(response.data.date);
      setLocal(response.data.local);
      setLoaded(true);
    });
  }, [match.params.id]);

  function handleInput(e) {
    e.preventDefault();
    api
      .put(`/event/${match.params.id}/edit`, {
        name,
        description,
        link,
        date,
        local,
      })
      .then((response) => {
        if (response.status === 200) {
          mySwal.fire({
            title: <p>Evento atualizado!</p>,
            icon: 'success',
          });
          history.push('/perfil');
        }
      });
  }

  return (
    <Container>
      <UserHeader />
      <Row className="custom-row">
        <h1 className="title">Edite este evento.</h1>
      </Row>
      {isLoaded ? (
        <>
          <Form className="form-create-event" onSubmit={handleInput}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="event-name">
                <Form.Label className="custom-label">Nome do Evento</Form.Label>
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
              <Form.Group as={Col} controlId="event-decription">
                <Form.Label className="custom-label">
                  Descrição do evento.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={description}
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
                <Form.Label className="custom-label">
                  Local do Evento
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={local}
                  onChange={(e) => {
                    setLocal(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="event-link">
                <Form.Label className="custom-label">
                  Link do evento.
                </Form.Label>
                <Form.Control
                  type="text"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form-button">
              <Button className="signup-button" type="submit">
                Atualizar
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
