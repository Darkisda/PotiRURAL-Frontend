import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import './style.css';

export default function ArticleCard(props) {
  const { article } = props;

  return (
    <Modal.Dialog className="article-card">
      <Modal.Header>
        <Modal.Title>{article.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{article.description.substring(0, 160)}...</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/articles/${article.id}`} className="btn">
          Ler artigo completo
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
