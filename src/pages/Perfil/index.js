import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './style.css';

export default function Perfil() {
  return (
    <Container className="container-perfil">
      <Row className="perfil-header">
        <h1 id="potirural">potiRURAL</h1>
        <h2 className="name">Luan de Souza</h2>
      </Row>
      <Row className="custom-row-perfil">
        <Col lg={5} xs={12} className="custom-col-perfil">
          <h3>Receitas</h3>
          <div className="section-perfil" />
        </Col>
        <Col lg={7} xs={12} className="custom-col-perfil right">
          <h3>Artigos e Leituras</h3>
          <div className="section-perfil" />
        </Col>
      </Row>
      <Row className="custom-row-perfil">
        <Col lg={5} xs={12} className="custom-col-perfil">
          <h3>Classificados</h3>
          <div className="section-perfil" />
        </Col>
        <Col lg={7} xs={12} className="custom-col-perfil right">
          <h3>Feira Virtual</h3>
          <div className="section-perfil" />
        </Col>
      </Row>
      <Row className="custom-row-perfil mobile">
        <Col lg={12} xs={12} className="custom-col-perfil">
          <h3>A procura de ajuda?</h3>
          <div className="section-perfil" />
        </Col>
      </Row>
      <Row className="custom-row-perfil">
        <Col lg={4} sm={4} xs={12} className="custom-col-perfil  mobile">
          <h3>Cursos online</h3>
          <div className="section-perfil" />
        </Col>
        <Col lg={4} sm={4} xs={12} className="custom-col-perfil  mobile">
          <h3>Espaço Jundiaí</h3>
          <div className="section-perfil" />
        </Col>
        <Col lg={4} sm={4} xs={12} className="custom-col-perfil mobile">
          <h3>Próximos eventos</h3>
          <div className="section-perfil" />
        </Col>
      </Row>
    </Container>
  );
}
