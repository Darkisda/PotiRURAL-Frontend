import React from 'react';
import { Spinner, Row } from 'react-bootstrap';

export default function Loading() {
  return (
    <Row className="custom-row">
      <div className="loading">
        <Spinner animation="border" />
        <h1>Loading...</h1>
      </div>
    </Row>
  );
}
