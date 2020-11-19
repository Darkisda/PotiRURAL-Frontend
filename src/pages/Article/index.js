import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

import './style.css';

export default function Article(props) {
  const [article, setArticle] = useState({});

  const { match } = props;

  async function fetchArticleByID() {
    const response = await api.get(`article/${match.params.id}`);

    setArticle(response.data);
  }

  useEffect(async () => {
    await fetchArticleByID();
  }, []);

  return (
    <Container className="container-custom articles">
      <UserHeader />
      {article && article.author ? (
        <>
          {console.log(article)}
          <Row className="custom-row">
            <div className="article-header">
              <h1>{article.title}</h1>
              <h5>{`Criado por: ${article.author.firstName} ${article.author.lastName}`}</h5>
              <h5>Data: 8/11/2020</h5>
            </div>
          </Row>
          <hr />
          <Row className="custom-row">
            <p>{article.content}</p>
          </Row>
        </>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </Container>
  );
}
