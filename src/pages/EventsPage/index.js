import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination, Spinner } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import EventCard from '../../components/EventCard';
import api from '../../server/api';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ totalCount: 0, limit: 9 });

  const totalPages =
    pageInfo.totalCount > 9
      ? Math.trunc(pageInfo.totalCount / pageInfo.limit) + 1
      : 1;

  async function fetchEvents() {
    const response = await api.get(`events?page=${page}&limit=9`);

    setPageInfo({
      totalCount: response.data.totalCount,
      limit: response.data.limit,
    });
    setEvents(response.data.data);
  }

  useEffect(async () => {
    setLoaded(false);
    await fetchEvents();
    setLoaded(true);
  }, [page]);

  function PrevPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  function NextPage() {
    if (page === totalPages) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  }

  function LoadedEvents() {
    return events.length !== 0 ? (
      <>
        <Row className="custom-row">
          <Pagination>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => PrevPage()} />
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => setPage(totalPages)} />
          </Pagination>
        </Row>
        {events.map((event) => (
          <Col
            key={event.id}
            lg={4}
            sm={12}
            xs={12}
            md={4}
            className="custom-col"
          >
            <EventCard event={event} />
          </Col>
        ))}
      </>
    ) : (
      <Row className="custom-row empty-row">
        <h1 className="empty">
          Oops... parace que estamos sem nenhum Evento no momento... Aguarde
          algum Administrador cadastrar um.
        </h1>
      </Row>
    );
  }

  return (
    <Container className="container-custom">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">Eventos próximos. Confira!</h1>
      </Row>
      <Row className="custom-row">
        {isLoaded ? (
          <LoadedEvents />
        ) : (
          <Row className="custom-row">
            <div className="loading">
              <Spinner animation="border" />
              <h1>Loading...</h1>
            </div>
          </Row>
        )}
      </Row>
    </Container>
  );
}
