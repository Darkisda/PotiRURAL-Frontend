import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';
import BarracaCard from '../../components/BarracaCard';

export default function Market() {
  const [barracas, setBarracas] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  async function fetchBarracas() {
    const response = await api.get('market?page=2&limit=9');

    setBarracas(response.data.data);
    setLoaded(true);
  }

  useEffect(() => {
    fetchBarracas();
  }, []);

  return (
    <Container className="custom-container">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">
          Algumas barracas que possam te chamar a atenção.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/market/create">Crie uma nova barraca agora mesmo!</Link>
      </Row>
      <Row className="custom-row">
        {isLoaded ? (
          barracas.map((barraca) => (
            <Col
              key={barraca.id}
              lg={4}
              sm={12}
              xs={12}
              md={4}
              className="custom-col"
            >
              <BarracaCard barraca={barraca} />
            </Col>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Row>
    </Container>
  );
}
