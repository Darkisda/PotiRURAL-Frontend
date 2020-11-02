import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import RecipeCard from '../../components/RecipeCard';

import './style.css';

export default function RecipesPage() {
  return (
    <Container className="container-recipes">
      <UserHeader />
      <Row>
        <h1 className="text-header-recipes">
          Algumas receitas que <br /> possam te interessar.
        </h1>
      </Row>
      <Row className="row-right">
        <a href="/">Escreva agora mesmo uma nova receita!</a>
      </Row>
      <div className="recipes-content">
        <Row>
          <RecipeCard />
        </Row>
        <Row>
          <RecipeCard />
        </Row>
        <Row>
          <RecipeCard />
        </Row>
        <Row>
          <RecipeCard />
        </Row>
        <Row>
          <RecipeCard />
        </Row>
        <Row>
          <RecipeCard />
        </Row>
      </div>
    </Container>
  );
}
