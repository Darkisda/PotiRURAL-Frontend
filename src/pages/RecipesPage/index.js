import React from 'react';
import { Container } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function RecipesPage() {
  return (
    <Container className="container-recipes">
      <UserHeader />
    </Container>
  );
}
