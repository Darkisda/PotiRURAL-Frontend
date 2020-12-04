import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

export default function EventCard(props) {
  const { event } = props;
  return (
    <Modal.Dialog className="event-card">
      <Modal.Header>
        <Modal.Title>{event.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p>{event.description.substring(0, 160)}...</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Link to={event.link} className="btn">
          Mais informações
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
