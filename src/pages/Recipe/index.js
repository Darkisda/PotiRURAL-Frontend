/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';

import './style.css';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState({});

  const { match } = props;

  async function fetchRecipeByID() {
    const response = await api.get(`recipe/${match.params.id}`);

    setRecipe(response.data);
  }

  useEffect(() => {
    fetchRecipeByID();
  }, []);

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      {recipe ? (
        <>
          <Row className="custom-row">
            <div className="recipe-header">
              <h1 className="recipe-title">{recipe.name}</h1>
              <p className="recipe-description">{recipe.description}</p>
            </div>
          </Row>
          <hr />
          <Row className="custom-row">
            <h3 className="recipes-subtitle-page">Ingredientes:</h3>
            <ul>
              {recipe.ingredients !== undefined
                ? recipe.ingredients
                    .split(/\n|\n\n/)
                    .map((paragraph, idx) => <li key={idx}>{paragraph}</li>)
                : ''}
            </ul>
          </Row>
          <Row className="custom-row">
            <h3 className="recipes-subtitle-page">Modo de Preparo:</h3>
          </Row>
          {recipe.preparation !== undefined
            ? recipe.preparation.split(/\n|\n\n/).map((paragraph, idx) => (
                <Row className="row-recipe" key={idx}>
                  {paragraph}
                </Row>
              ))
            : ''}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
