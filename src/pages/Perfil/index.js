import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import ContributionCard from '../../components/ContributionCard';
import { Context } from '../../auth/AuthContext';
import api from '../../server/api';

import './style.css';

export default function Perfil() {
  const { userLogged } = useContext(Context);

  const [isLoaded, setLoaded] = useState(false);

  const [recipes, setRecipes] = useState([]);
  const [barracas, setBarracas] = useState([]);
  const [articles, setArticles] = useState([]);
  const [events, setEvents] = useState([]);

  function handleSettingItens(response) {
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

  async function fetchContributions() {
    api
      .get('perfil')
      .then((response) => {
        if (response.status === 200) {
          handleSettingItens(response);
          setLoaded(true);
        }
      })
      .catch((err) => {
        if (err.response.data.statusCode === 401) {
          <p>Opps</p>;
        }
      });
  }

  useEffect(async () => {
    await fetchContributions();
  }, []);

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
      <div className="contributions-container">
        {isLoaded ? (
          <>
            {recipes !== undefined && recipes.length !== 0 ? (
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

            {barracas !== undefined && barracas.length !== 0 ? (
              <Col className="col-contribution">
                <h2>Barracas</h2>
                {barracas.map((barraca) => (
                  <p key={barraca.id}>{barraca.barracaName}</p>
                ))}
              </Col>
            ) : (
              ''
            )}

            {articles !== undefined && articles.length !== 0 ? (
              <Col className="col-contribution">
                <h2>Artigos</h2>
                {articles.map((article) => (
                  <p key={article.id}> {article.title} </p>
                ))}
              </Col>
            ) : (
              ''
            )}

            {events !== undefined && events.length !== 0 ? (
              <Col className="col-contribution">
                {console.log(events)}
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
