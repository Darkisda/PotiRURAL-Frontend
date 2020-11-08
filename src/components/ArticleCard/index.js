import React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
        <Button>Ler artigo completo</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
