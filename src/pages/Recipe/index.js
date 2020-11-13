import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function Recipe(props) {
  const [recipe, setRecipe] = useState({});

  const { match } = props;

  console.log(match.params.id);

  async function fecthRecipeByID() {
    const response = await api.get(`recipe/${match.params.id}`);

    setRecipe(response.data);
  }

  useEffect(() => {
    fecthRecipeByID();
  }, []);

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      {recipe ? (
        <>
          <Row className="custom-row">
            <div className="recipe-header">
              <h1 className="recipe-title">{recipe.name}</h1>
              <p className="recipe-description">Descrição breve da receita</p>
              <div className="img-wrapper">
                <img
                  src="https://i0.statig.com.br/bancodeimagens/cs/1t/wm/cs1twm81owp8iug586w3t6pjl.jpg"
                  alt="imagem-da-receita"
                  className="recipe-image"
                />
              </div>
            </div>
          </Row>
          <Row className="custom-row">
            <h3 className="recipes-subtitle-page">Ingredientes:</h3>
            <p>{recipe.ingredients}</p>
          </Row>
          <Row className="custom-row">
            <h3 className="recipes-subtitle-page">Modo de Preparo:</h3>
            <p>{recipe.preparation}</p>
          </Row>
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </Container>
  );
}
