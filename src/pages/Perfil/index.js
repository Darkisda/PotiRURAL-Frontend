import React, { /* useState, useEffect, */ useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import ContributionCard from '../../components/ContributionCard';
import { Context } from '../../auth/AuthContext';
import useFetch from '../../hooks/useFetch';

import './style.css';
import Dashboard from '../../components/Dashboard';

export default function Perfil() {
  const { data } = useFetch('perfil');

  const { userLogged } = useContext(Context);

  return (
    <Container className="container-custom">
      <UserHeader />
      <Row className="custom-row">
        <h1>Seu perfil com suas contribuições!</h1>
      </Row>
      {userLogged.occupation === 'ADMIN' ? (
        <Row className="custom-row">
          <Link to="events/create" className="create-event">
            <h2>Você Admin, pode criar um evento!</h2>
          </Link>
        </Row>
      ) : (
        ''
      )}
      {data ? (
        <div className="contributions-container">
          {data.recipes !== undefined && data.recipes.length !== 0 ? (
            <Col className="col-contribution">
              <h2>Receitas</h2>
              {data.recipes.map((recipe) => (
                <ContributionCard
                  key={recipe.id}
                  name={recipe.name}
                  id={recipe.id}
                  endpoint="recipe"
                />
              ))}
            </Col>
          ) : (
            ''
          )}

          {data.barracas !== undefined && data.barracas.length !== 0 ? (
            <Col className="col-contribution">
              <h2>Barracas</h2>
              {data.barracas.map((barraca) => (
                <ContributionCard
                  key={barraca.id}
                  name={barraca.barracaName}
                  id={barraca.id}
                  endpoint="market"
                />
              ))}
            </Col>
          ) : (
            ''
          )}

          {data.articles !== undefined && data.articles.length !== 0 ? (
            <Col className="col-contribution">
              <h2>Artigos</h2>
              {data.articles.map((article) => (
                <ContributionCard
                  key={article.id}
                  name={article.title}
                  id={article.id}
                  endpoint="article"
                />
              ))}
            </Col>
          ) : (
            ''
          )}

          {data.events !== undefined && data.events.length !== 0 ? (
            <Col className="col-contribution">
              <h2>Eventos</h2>
              {data.events.map((event) => (
                <ContributionCard
                  key={event.id}
                  name={event.name}
                  id={event.id}
                  endpoint="event"
                />
              ))}
            </Col>
          ) : (
            ''
          )}

          {data.helps !== undefined && data.helps.length !== 0 ? (
            <Col className="col-contribution">
              <h2>Ajudas</h2>
              {data.helps.map((help) => (
                <ContributionCard
                  key={help.id}
                  name={help.content}
                  id={help.id}
                  endpoint="help"
                />
              ))}
            </Col>
          ) : (
            ''
          )}
        </div>
      ) : (
        <Loading />
      )}
      {userLogged.occupation === 'ADMIN' ? <Dashboard /> : ''}
    </Container>
  );
}
