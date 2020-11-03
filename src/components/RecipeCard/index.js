import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="recipe-content-description">
        <h3 className="recipe-name">Nome da receita</h3>
        <p className="recipe-description">
          Descrição rápida a respeito da receita
        </p>
      </div>
      <div className="gradient-opacity" />
      <Link to={`/recipes/${1}`} className="recipe-link">
        Veja a receira completa!
      </Link>
      <img
        src="https://i0.statig.com.br/bancodeimagens/cs/1t/wm/cs1twm81owp8iug586w3t6pjl.jpg"
        alt="imagem da receita"
        className="recipe-background"
      />
    </div>
  );
}
