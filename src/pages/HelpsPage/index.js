import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import HelpCard from '../../components/HelpCard';

export default function HelpsPage() {
  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="custom-row">
        <h1>Algumas formas de ajuda oferecidas por outras usuários.</h1>
      </Row>
      <Row className="custom-row">
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
        <HelpCard />
      </Row>
    </Container>
  );
}
