import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';

export default function NavigationBar() {
  return (
    <Navbar expand="md" id="navbar-custom">
      <Link to="/" id="potirural">
        potiRURAL
      </Link>
      <Navbar.Toggle aria-controls="mobile" />
      <Navbar.Collapse id="mobile">
        <Nav id="nav-custom">
          <Nav.Item>
            <Nav.Link href="#">Artigos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Receitas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Feira Virtual</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Pergunte ao especialista</Nav.Link>
          </Nav.Item>
        </Nav>
        <Link to="/signin">
          <Button id="button-nav">Entrar</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
