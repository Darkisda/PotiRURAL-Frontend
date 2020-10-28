import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaWhatsapp, FaImage } from 'react-icons/fa';

import './style.css';

export default function Barraca() {
  const number = [
    'Manga',
    'Tomarindo',
    'Feijão',
    'Melancia',
    'Abacate',
    'Mamão',
    'Pera',
    'Maça',
  ];
  return (
    <Modal.Dialog>
      <Modal.Header className="barraca-header">
        <Modal.Title>Nome da Barraca</Modal.Title>
        <small>Localização - ST</small>
      </Modal.Header>

      <Modal.Body className="barraca-body">
        <FaImage size={100} color="#4CAF50" />
        <p className="products-list">
          {number.map((num) => (
            <> {num}, </>
          ))}
        </p>
      </Modal.Body>

      <Modal.Footer className="barraca-footer">
        <Button id="barraca-button">
          <FaWhatsapp size={24} /> Entrar em contato
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
