import React from 'react';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

export default function CreateArticle() {
  return (
    <Container className="container-custom articles">
      <UserHeader />
    </Container>
  );
}
