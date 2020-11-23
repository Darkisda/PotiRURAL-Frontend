import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

import './style.css';

export default function Article(props) {
  const [article, setArticle] = useState({});
  const [paragraphs, setParagraphs] = useState([]);
  const [date, setDate] = useState('');

  const { match } = props;

  async function fetchArticleByID() {
    const response = await api.get(`article/${match.params.id}`);

    setArticle(response.data);
  }

  function handleSeparateParagraphs() {
    if (article.content !== undefined) {
      setParagraphs(article.content.split(/\n|\n\n/));
    }
  }

  function handleDate() {
    if (article.createdAt !== undefined) {
      setDate(article.createdAt);
    }
  }

  useEffect(async () => {
    await fetchArticleByID();
  }, []);

  useEffect(() => {
    handleSeparateParagraphs();
    handleDate();
  }, [article]);

  return (
    <Container className="container-custom articles">
      <UserHeader />
      {article && article.author ? (
        <>
          <Row className="custom-row">
            <div className="article-header">
              <h1>{article.title}</h1>
              <h5>{`Criado por: ${article.author.firstName} ${article.author.lastName}`}</h5>
              <h5>
                Data:{' '}
                {new Date(date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </h5>
            </div>
          </Row>
          <hr />
          {paragraphs.map((paragraph, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Row key={idx} className="row-article">
              <p>{paragraph}</p>
            </Row>
          ))}
        </>
      ) : (
        <div className="loading">
          <p>Loading...</p>
        </div>
      )}
    </Container>
  );
}
