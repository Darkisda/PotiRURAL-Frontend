import React from 'react';
import { Modal } from 'react-bootstrap';
import { FiMail, FiPhone } from 'react-icons/fi';

import './style.css';

export default function HelpCard(props) {
  const { help } = props;

  console.log(help);

  return (
    <Modal.Dialog className="recipe-card">
      <Modal.Header>
        <Modal.Title>Nome Exemplo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Alguma coisa aqui para encher linguiça para poder dar algum exemplo de
        coisa real que possa acontecer no dia a dia
      </Modal.Body>
      <Modal.Footer className="helper-footer">
        Entrar em contato
        <div className="buttons-contact">
          <button type="button" className="button-contact email">
            <FiMail size={18} color="fff" />
            Email
          </button>
          <button type="button" className="button-contact whatsapp">
            <FiPhone size={18} color="fff" />
            Whatsapp
          </button>
        </div>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
