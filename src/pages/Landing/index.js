import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Navigationbar from '../../components/Navigationbar';
import Barraca from '../../components/Barraca';

import agricultor from '../../assets/agricultor.svg';
import feira from '../../assets/feira.svg';
import feira2 from '../../assets/feira2.svg';
import ajudando from '../../assets/ajudando.svg';
import regando from '../../assets/regando.svg';

import ufrnEaj from '../../assets/ufrn_eaj.png';

import './style.css';

export default function Landing() {
  return (
    <Container>
      <Row>
        <Navigationbar />
      </Row>
      <Row id="welcome">
        <Col xs={12} lg={6}>
          <h1 className="title">Um espaço feito para o agricultor familiar.</h1>
          <h5 className="subtitle">
            Uma plataforma pensada e desenvolvida para aqueles que apoiam a
            agricultura local e familiar.
          </h5>
          <Button id="button-landing">
            Crie uma conta de <strong>GRAÇA</strong>
          </Button>
        </Col>
        <Col xs={12} lg={6}>
          <img src={agricultor} alt="agricultor" className="img" />
        </Col>
      </Row>
      <hr />
      <Row id="idealizadores">
        <h1 className="title">Idealizadores:</h1>
        <img src={ufrnEaj} alt="logomarca da UFRN e EAJ" className="logos" />
      </Row>
      <hr />
      <Row id="section">
        <Col xs={12} lg={6}>
          <h1 className="title">Procura por produtos sem agrotóxicos?</h1>
          <h5 className="subtitle">
            A feira virtual é uma meneira prática em que os agricultores locais
            possam mostrar os seus produtos.
          </h5>
          <h5 className="subtitle">
            Para aqueles que buscam da terra e fresquinhos, basta entrar em
            contato com o agricultor para saber mais informações.
          </h5>
          <img src={feira2} alt="feira 2" className="feira2" />
        </Col>
        <Col xs={12} lg={6} id="col-right">
          <img src={feira} alt="feira 1" className="feira1" />
          <h2 className="medium-title">
            Algumas barracas que podem chamar a sua atenção.
          </h2>
        </Col>
        <Row id="barracas">
          <Barraca />
          <Barraca />
          <Barraca />
        </Row>
      </Row>
      <hr />
      <Row id="section">
        <Col>
          <h1 className="title">Precisando de uma ajudinha?</h1>
          <h5 className="subtitle">
            Encontre agricultores que estão oferecendo seus serviços proximos a
            você!
          </h5>
          <h5 className="subtitle">
            Entre em contato e agende a melhor hora e dia para começarem a
            trabalhar juntos!
          </h5>
          <a href="/" className="link">
            E você como agricultor pode entrar nessa!
          </a>
        </Col>
        <Col id="col-right">
          <img src={ajudando} alt="ajudando" className="feira1" />
        </Col>
      </Row>
      <hr />
      <Row id="section">
        <Col>
          <img src={regando} alt="regando" />
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
