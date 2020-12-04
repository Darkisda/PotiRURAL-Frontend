import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';
import RecipeCard from '../../components/RecipeCard';
import Loading from '../../components/Loading';

import './style.css';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ totalCount: 0, limit: 9 });

  const totalPages =
    pageInfo.totalCount > 9
      ? Math.trunc(pageInfo.totalCount / pageInfo.limit) + 1
      : 1;

  async function fetchRecipes() {
    const response = await api.get(`recipe?page=${page}&limit=8`);

    setPageInfo({
      totalCount: response.data.totalCount,
      limit: response.data.limit,
    });
    setRecipes(response.data.data);
  }

  useEffect(async () => {
    setLoaded(false);
    await fetchRecipes();
    setLoaded(true);
  }, [page]);

  function PrevPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  function NextPage() {
    if (page === totalPages) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  }

  function LoadedRecipes() {
    return recipes.length !== 0 ? (
      <>
        <Row className="custom-row">
          <Pagination>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => PrevPage()} />
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => setPage(totalPages)} />
          </Pagination>
        </Row>
        <Row>
          {recipes.map((recipe) => (
            <Col
              key={recipe.id}
              lg={4}
              sm={12}
              xs={12}
              md={4}
              className="custom-col"
            >
              <RecipeCard recipe={recipe} />
            </Col>
          ))}
        </Row>
      </>
    ) : (
      <Row className="custom-row empty-row">
        <h1 className="empty">
          Oops... parace que estamos sem nenhuma Receita. Crie uma agora mesmo!
        </h1>
      </Row>
    );
  }

  return (
    <Container className="container-custom recipes">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">
          Algumas receitas que possam te interessar.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/recipes/create">Escreva agora mesmo uma nova receita!</Link>
      </Row>
      <div className="recipes-content">
        {isLoaded ? <LoadedRecipes /> : <Loading />}
      </div>
    </Container>
  );
}
