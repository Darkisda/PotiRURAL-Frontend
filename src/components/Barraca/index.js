import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function Barraca() {
  return (
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Nome da Barraca</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ul>
          <li>Manga</li>
          <li>Manga</li>
          <li>Manga</li>
          <li>Manga</li>
          <li>Manga</li>
          <li>Manga</li>
          <li>Manga</li>
        </ul>
      </Modal.Body>

      <Modal.Footer>
        <Button>Teste</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
