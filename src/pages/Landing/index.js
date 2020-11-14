import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../server/api';

import Navigationbar from '../../components/Navigationbar';
import BarracaCard from '../../components/BarracaCard';

import agricultor from '../../assets/agricultor.svg';
import feira from '../../assets/feira.svg';
import feira2 from '../../assets/feira2.svg';
import ajudando from '../../assets/ajudando.svg';
import regando from '../../assets/regando.svg';

import ufrnEaj from '../../assets/ufrn_eaj.png';

import './style.css';
import Footer from '../../components/Footer';

export default function Landing() {
  const [barracaExemples, setBarracasExemples] = useState([]);

  async function fetchBarracasExemples() {
    const response = await api.get('market?page=1&limit=3');

    setBarracasExemples(response.data.data);
  }

  useEffect(() => {
    fetchBarracasExemples();
    console.log(barracaExemples);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Navigationbar />
        </Row>
        <Row id="welcome">
          <Col xs={12} lg={6}>
            <h1 className="title">Um espaço feito para o produtor familiar.</h1>
            <h5 className="subtitle">
              Uma plataforma pensada e desenvolvida para aqueles que apoiam a
              agricultura local e familiar.
            </h5>
            <Link to="/signup">
              <Button id="button-landing">
                Crie uma conta de <strong>GRAÇA</strong>
              </Button>
            </Link>
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
              A feira virtual é uma meneira prática em que os produtores locais
              possam mostrar os seus produtos.
            </h5>
            <h5 className="subtitle">
              Para aqueles que buscam da terra e fresquinhos, basta entrar em
              contato com o produtor para saber mais informações.
            </h5>
            <img src={feira2} alt="feira 2" className="vetor2" />
          </Col>
          <Col xs={12} lg={6} id="col-right">
            <img src={feira} alt="feira 1" className="vetor1" />
            <h2 className="medium-title">
              Algumas barracas que podem chamar a sua atenção.
            </h2>
          </Col>
          <Row id="barracas">
            {barracaExemples ? (
              barracaExemples.map((barraca) => (
                <BarracaCard key={barraca.id} barraca={barraca} />
              ))
            ) : (
              <>
                <h1>Loading...</h1>
              </>
            )}
          </Row>
        </Row>
        <hr />
        <Row id="section">
          <Col xs={12} lg={6}>
            <h1 className="title">Precisando de uma ajudinha?</h1>
            <h5 className="subtitle">
              Encontre produtores que estão oferecendo seus serviços próximos a
              você!
            </h5>
            <h5 className="subtitle">
              Entre em contato e agende a melhor hora e dia para começarem a
              trabalhar juntos!
            </h5>
            <h5 className="subtitle">
              <Link to="/">E você como produtor pode entrar nessa!</Link>
            </h5>
          </Col>
          <Col xs={12} lg={6} id="col-right">
            <img src={ajudando} alt="ajudando" className="vetor1" />
          </Col>
        </Row>
        <hr />
        <Row id="section">
          <Col xs={12} lg={6}>
            <img src={regando} alt="regando" className="vetor1" />
          </Col>
          <Col xs={12} lg={6}>
            <h1 className="title custom">
              Leituras que ajudarão ainda mais na produção
            </h1>
            <h5 className="subtitle custom">
              Mensalmente profissionais especializados serão convidados para
              escrever artigos que ajudem a produtores familiares.
            </h5>
          </Col>
        </Row>
        <hr />
        <Link to="/signup" id="section-on-footer">
          <Button id="button-landing-on-footer">
            Crie uma conta de <strong>GRAÇA</strong>
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
}
