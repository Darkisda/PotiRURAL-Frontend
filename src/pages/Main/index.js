import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function Main() {
  return (
    <Container className="container-custom main">
      <UserHeader />
      <Row className="custom-row-main">
        <Col lg={5} xs={12} className="custom-col-main">
          <h3>Receitas</h3>
          <Link to="/recipes" className="section-main">
            <div />
          </Link>
        </Col>
        <Col lg={7} xs={12} className="custom-col-main right">
          <h3>Artigos e Leituras</h3>
          <Link to="/articles" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
      <Row className="custom-row-main">
        <Col lg={12} xs={12} className="custom-col-main">
          <h3>Feira Virtual</h3>
          <Link to="/market" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
      <Row className="custom-row-main mobile">
        <Col lg={12} xs={12} className="custom-col-main">
          <h3>A procura de ajuda?</h3>
          <div className="section-main" />
        </Col>
      </Row>
      <Row className="custom-row-main">
        <Col lg={4} sm={4} xs={12} className="custom-col-main  mobile">
          <h3>Cursos online</h3>
          <div className="section-main" />
        </Col>
        <Col lg={4} sm={4} xs={12} className="custom-col-main  mobile">
          <h3>Espaço Jundiaí</h3>
          <div className="section-main" />
        </Col>
        <Col lg={4} sm={4} xs={12} className="custom-col-main mobile">
          <h3>Próximos eventos</h3>
          <Link to="/events" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
