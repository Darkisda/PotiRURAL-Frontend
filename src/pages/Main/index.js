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
        <Col lg={6} xs={12} className="custom-col-main">
          <h3>Receitas</h3>
          <Link to="/recipes" className="section-main">
            <div />
          </Link>
        </Col>
        <Col lg={6} xs={12} className="custom-col-main right">
          <h3>Artigos e Leituras</h3>
          <Link to="/articles" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
      <Row className="custom-row-main">
        <Col lg={6} xs={12} className="custom-col-main">
          <h3>Feira Virtual</h3>
          <Link to="/markets" className="section-main">
            <div />
          </Link>
        </Col>
        <Col lg={6} xs={12} className="custom-col-main right">
          <h3>A procura de ajuda?</h3>
          <Link to="/helps" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
      <Row className="custom-row-main">
        <Col lg={6} sm={4} xs={12} className="custom-col-main  mobile">
          <h3>Espaço Jundiaí</h3>
          <a href="https://eaj.ufrn.br/" className="section-main">
            <div />
          </a>
        </Col>
        <Col lg={6} sm={4} xs={12} className="custom-col-main mobile">
          <h3>Próximos eventos</h3>
          <Link to="/events" className="section-main">
            <div />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
