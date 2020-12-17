import React, { /* useState, useEffect, */ useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import Loading from '../../components/Loading';
import ContributionCard from '../../components/ContributionCard';
import { Context } from '../../auth/AuthContext';
// import api from '../../server/api';
import useFetch from '../../hooks/useFetch';

import './style.css';

export default function Perfil() {
  const { data } = useFetch('perfil');

  const { userLogged } = useContext(Context);

  // const [isLoaded, setLoaded] = useState(false);

  // const [recipes, setRecipes] = useState([]);
  // const [barracas, setBarracas] = useState([]);
  // const [articles, setArticles] = useState([]);
  // const [events, setEvents] = useState([]);

  // function handleSettingItens(response) {
  //   if (response.data.recipes !== undefined) {
  //     setRecipes(response.data.recipes);
  //   } else {
  //     setRecipes(undefined);
  //   }

  //   if (response.data.barracas !== undefined) {
  //     setBarracas(response.data.barracas);
  //   } else {
  //     setBarracas(undefined);
  //   }

  //   if (response.data.articles !== undefined) {
  //     setArticles(response.data.articles);
  //   } else {
  //     setArticles(undefined);
  //   }

  //   if (response.data.events !== undefined) {
  //     setEvents(response.data.events);
  //   } else {
  //     setEvents(undefined);
  //   }
  // }

  // async function fetchContributions() {
  //   api
  //     .get('perfil')
  //     .then((response) => {
  //       if (response.status === 200) {
  //         handleSettingItens(response);
  //         setLoaded(true);
  //       }
  //     })
  //     .catch((err) => {
  //       if (err.response.data.statusCode === 401) {
  //         <p>Opps</p>;
  //       }
  //     });
  // }

  // useEffect(async () => {
  //   await fetchContributions();
  // }, []);

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
        {data ? (
          <>
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
                    endpoint="events"
                  />
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
