import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import ArticleCard from '../../components/ArticleCard';

import './style.css';

export default function ArticlesPage() {
  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row>
        <h1 className="text-header">
          Artigos que ajudarão ainda mais a produção.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/articles/create">Crie agora um novo artigo.</Link>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
      </Row>
      <Row className="custom-row">
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
        <Col lg={4} sm={12} xs={12} md={4} className="custom-col">
          <ArticleCard />
        </Col>
      </Row>
    </Container>
  );
}
