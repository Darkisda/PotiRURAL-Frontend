import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import api from '../../server/api';

export default function Event(props) {
  const [event, setEvent] = useState({});

  const { match } = props;

  async function fetchEventByID() {
    const response = await api.get(`event/${match.params.id}`);

    setEvent(response.data);
  }

  useEffect(() => {
    fetchEventByID();
  }, []);

  return (
    <Container className="container-custom events">
      <UserHeader />
      {event && event.admin ? (
        <>
          <Row className="custom-row">
            <div className="event-header">
              <h1>{event.name}</h1>
              <h5>{`Criado por: ${event.admin.firstName} ${event.admin.lastName}`}</h5>
            </div>
          </Row>
          <hr />
          <Row className="custom-row">
            <p>{event.description}</p>
          </Row>
          <Row className="custom-row">
            <div className="">
              <h3>Local:</h3>
              <p>{event.local}</p>
            </div>
          </Row>
          <Row className="custom-row">
            {event.link ? <a href={event.link}>Link do evento online</a> : ''}
          </Row>
          <Row className="custom-row">
            <h5>Dia: {event.date}</h5>
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
