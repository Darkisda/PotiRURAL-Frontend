import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import RecipeCard from '../../components/RecipeCard';

import './style.css';

export default function RecipesPage() {
  return (
    <Container className="container-custom recipes">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">
          Algumas receitas que possam te interessar.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/recipes/create">Escreva agora mesmo uma nova receita!</Link>
      </Row>
      <div className="recipes-content">
        <Row className="custom-row">
          <RecipeCard />
        </Row>
        <Row className="custom-row">
          <RecipeCard />
        </Row>
        <Row className="custom-row">
          <RecipeCard />
        </Row>
        <Row className="custom-row">
          <RecipeCard />
        </Row>
        <Row className="custom-row">
          <RecipeCard />
        </Row>
        <Row className="custom-row">
          <RecipeCard />
        </Row>
      </div>
    </Container>
  );
}
