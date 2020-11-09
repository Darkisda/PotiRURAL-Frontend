import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import BarracaCard from '../../components/BarracaCard';

export default function Market() {
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
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <BarracaCard />
        </Col>
      </Row>
    </Container>
  );
}
