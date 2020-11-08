import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import './style.css';

export default function ArticleCard() {
  return (
    <Modal.Dialog className="article-card">
      <Modal.Header>
        <Modal.Title>
          The standard Lorem Ipsum passage, used since the 1500s
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Modal.Body>
      <Modal.Footer>
        <Link to="/articles/1" className="btn">
          Ler artigo completo
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
