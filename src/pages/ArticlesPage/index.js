import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Pagination, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import ArticleCard from '../../components/ArticleCard';
import api from '../../server/api';

import './style.css';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ totalCount: 0, limit: 9 });

  const totalPages =
    pageInfo.totalCount > 9
      ? Math.trunc(pageInfo.totalCount / pageInfo.limit) + 1
      : 1;

  async function fetchArticles() {
    const response = await api.get(`article?page=${page}&limit=9`);

    setPageInfo({
      totalCount: response.data.totalCount,
      limit: response.data.limit,
    });
    setArticles(response.data.data);
  }

  useEffect(async () => {
    setLoaded(false);
    await fetchArticles();
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

  function LoadedArticles() {
    return articles.length !== 0 ? (
      <>
        <Row className="custom-row">
          <Pagination>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => PrevPage()} />
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => setPage(totalPages)} />
          </Pagination>
        </Row>
        {articles.map((article) => (
          <Col
            key={article.id}
            lg={4}
            sm={12}
            xs={12}
            md={4}
            className="custom-col"
          >
            <ArticleCard article={article} />
          </Col>
        ))}
      </>
    ) : (
      <Row className="custom-row empty-row">
        <h1 className="empty">
          Oops... parace que estamos sem nenhum Artigo. Crie um novo agora
          mesmo!
        </h1>
      </Row>
    );
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">
          Artigos que ajudarão ainda mais a produção.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/articles/create">Crie agora um novo artigo.</Link>
      </Row>
      <Row className="custom-row">
        {isLoaded ? (
          <LoadedArticles />
        ) : (
          <Row className="custom-row">
            <div className="loading">
              <Spinner animation="border" />
              <h1>Loading...</h1>
            </div>
          </Row>
        )}
      </Row>
    </Container>
  );
}
