import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';
import RecipeCard from '../../components/RecipeCard';

import './style.css';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  async function fetchRecipes() {
    const response = await api.get('recipe?page=1&limit=8');

    setRecipes(response.data.data);
    setLoaded(true);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

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
        {isLoaded ? (
          recipes.map((recipe) => (
            <Row key={recipe.id} className="custom-row">
              <RecipeCard recipe={recipe} />
            </Row>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Container>
  );
}
