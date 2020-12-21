import React from 'react';
import { Modal } from 'react-bootstrap';
import { FiPhone } from 'react-icons/fi';

import './style.css';

export default function HelpCard(props) {
  const { help } = props;

  console.log(help);

  const msg = 'Olá vi sua oferta de ajuda e vim aqui solicita-la';

  return (
    <Modal.Dialog className="recipe-card">
      <Modal.Body>{help.content}</Modal.Body>
      <Modal.Footer className="helper-footer">
        Entrar em contato
        <div className="buttons-contact">
          <button type="button" className="button-contact whatsapp">
            <a
              href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                help.user.whatsapp
              )}&text=${encodeURIComponent(msg)}`}
            >
              <FiPhone size={18} color="fff" />
              Whatsapp
            </a>
          </button>
        </div>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
