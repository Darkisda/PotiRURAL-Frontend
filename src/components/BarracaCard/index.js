import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';

import './style.css';

export default function BarracaCard(props) {
  const { barraca } = props;

  return (
    <Modal.Dialog>
      <Modal.Header className="barraca-header">
        <Modal.Title>{barraca.barracaName}</Modal.Title>
        <small>
          {barraca.city} - {barraca.state}
        </small>
      </Modal.Header>

      <Modal.Body className="barraca-body">
        <FaImage size={100} color="#4CAF50" />
        <div className="products-list">
          {barraca.products.map((product) => (
            <p key={product.id}> {product.productName}, </p>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer className="barraca-footer">
        <Link to={`/markets/${barraca.id}`} className="btn" id="barraca-button">
          Ver mais detalhes
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
