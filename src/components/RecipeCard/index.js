import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function RecipeCard(props) {
  const { recipe } = props;

  return (
    <div className="recipe-card">
      <div className="recipe-content-description">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-description">{recipe.description}</p>
      </div>
      <div className="gradient-opacity" />
      <Link to={`/recipes/${recipe.id}`} className="recipe-link">
        Veja a receira completa!
      </Link>
      <img
        src={recipe.image}
        alt="imagem da receita"
        className="recipe-background"
      />
    </div>
  );
}
