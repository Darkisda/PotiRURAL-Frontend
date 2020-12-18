import React from 'react';
import { Col } from 'react-bootstrap';
import AdminCard from '../AdminCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';

export default function Dashboard() {
  const { data } = useFetch('dashboard');

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="dashboard contributions-container">
      {data.recipes !== undefined && data.recipes.length !== 0 ? (
        <Col className="col-contribution">
          <h2>Receitas</h2>
          <small>Receitas não aprovadas: {data.recipes.length}</small>
          {data.recipes.map((recipe) => (
            <AdminCard
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
          <small>Barracas não aprovadas: {data.barracas.length}</small>
          {data.barracas.map((barraca) => (
            <AdminCard
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
          <small>Artigos não aprovados: {data.articles.length}</small>
          {data.articles.map((article) => (
            <AdminCard
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
    </div>
  );
}
