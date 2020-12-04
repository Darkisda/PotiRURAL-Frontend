import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import api from '../../server/api';

export default function Event(props) {
  const [event, setEvent] = useState({});

  const { match } = props;

  async function fetchEventByID() {
    const response = await api.get(`events/${match.params.id}`);

    setEvent(response.data);
  }

  useEffect(() => {
    fetchEventByID();
  }, []);

  return (
    <Container className="container-custom events">
      <UserHeader />
      {event ? (
        <>
          <Row className="custom-row">
            <div className="event-header">
              <h1>{event.name}</h1>
            </div>
          </Row>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
