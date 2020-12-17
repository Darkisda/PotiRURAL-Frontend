/* eslint-disable no-restricted-globals */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { FiRefreshCcw, FiXCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../server/api';

import './style.css';

export default function ContributionCard(props) {
  const { name, id, endpoint } = props;

  const history = useHistory();

  function handleDelete() {
    if (confirm('Você tem certeza que deseja deletar?')) {
      api.delete(`${endpoint}/${id}`).then((response) => {
        if (response.status === 200) {
          alert('Deletado com sucesso!');
          history.push('/perfil');
        }
      });
    }
  }

  return (
    <Modal.Dialog className="custom-modal">
      <Modal.Header>
        <p>{name}</p>
        <div className="buttons-group">
          <Link to={`/${endpoint}s/${id}/edit`} className="update">
            <FiRefreshCcw size={18} />
            <small>Atualizar</small>
          </Link>
          <button type="button" className="del" onClick={handleDelete}>
            <FiXCircle size={18} />
            <small>Deletar</small>
          </button>
        </div>
      </Modal.Header>
    </Modal.Dialog>
  );
}
