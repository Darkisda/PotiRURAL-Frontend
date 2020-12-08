import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import ContributionCard from '../../components/ContributionCard';
import api from '../../server/api';

import './style.css';

export default function Perfil() {
  const [isLoaded, setLoaded] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [barracas, setBarracas] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);

  async function fetchContributions() {
    const response = await api.get('perfil');

    if (response.data.recipes !== undefined) {
      setRecipes(response.data.recipes);
    } else {
      setRecipes(undefined);
    }

    if (response.data.barracas !== undefined) {
      setBarracas(response.data.barracas);
    } else {
      setBarracas(undefined);
    }

    if (response.data.articles !== undefined) {
      setArticles(response.data.articles);
    } else {
      setArticles(undefined);
    }

    if (response.data.events !== undefined) {
      setEvents(response.data.events);
    } else {
      setEvents(undefined);
    }
  }

  useEffect(async () => {
    await fetchContributions();
    setLoaded(true);
  }, []);

  return (
    <Container className="container-custom">
      <UserHeader />
      <Row className="custom-row">
        <h1>Seu perfil com suas contribuições!</h1>
      </Row>
      <div className="contributions-container">
        {isLoaded ? (
          <>
            {recipes !== undefined ? (
              <Col className="col-contribution">
                <h2>Receitas</h2>
                {recipes.map((recipe) => (
                  <p key={recipe.id}>{recipe.name}</p>
                ))}
                <ContributionCard />
              </Col>
            ) : (
              ''
            )}

            {barracas !== undefined ? (
              <Col className="col-contribution">
                <h2>Barracas</h2>
                {barracas.map((barraca) => (
                  <p key={barraca.id}>{barraca.barracaName}</p>
                ))}
              </Col>
            ) : (
              ''
            )}

            {articles !== undefined ? (
              <Col className="col-contribution">
                <h2>Artigos</h2>
                {articles.map((article) => (
                  <p key={article.id}> {article.title} </p>
                ))}
              </Col>
            ) : (
              ''
            )}

            {events !== undefined ? (
              <Col className="col-contribution">
                <h2>Eventos</h2>
                {events.map((event) => (
                  <p key={event.id}> {event.name} </p>
                ))}
              </Col>
            ) : (
              ''
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </Container>
  );
}
