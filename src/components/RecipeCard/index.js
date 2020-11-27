import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import './style.css';

export default function RecipeCard(props) {
  const { recipe } = props;

  return (
    <Modal.Dialog className="recipe-card">
      <Modal.Header>
        <Modal.Title>{recipe.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{recipe.description.substring(0, 160)}...</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/recipes/${recipe.id}`} className="btn">
          Veja a receita completa!
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
