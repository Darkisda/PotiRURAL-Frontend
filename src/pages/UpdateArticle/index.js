import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../components/Loading';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

export default function UpdateArticle(props) {
  const { match } = props;

  const history = useHistory();

  const mySwal = withReactContent(Swal);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(async () => {
    api.get(`article/${match.params.id}`).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setContent(response.data.content);
      setLoaded(true);
    });
  }, [match.params.id]);

  function handleUpdate(e) {
    e.preventDefault();
    api
      .put(`/article/${match.params.id}/edit`, {
        title,
        description,
        content,
      })
      .then((response) => {
        if (response.status === 200) {
          mySwal.fire({
            title: <p>Artigo Atualizado!</p>,
            icon: 'success',
          });
          history.push('/perfil');
        }
      });
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Edite este artigo.</h1>
      </Row>
      {isLoaded ? (
        <>
          <Form className="form-create-article" onSubmit={handleUpdate}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-name">
                <Form.Label className="custom-label">
                  Título do Artigo.
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-description">
                <Form.Label className="custom-label">
                  Descrição do artigo.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={2}
                  className="custom-textarea"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="article-content">
                <Form.Label className="custom-label">Texto.</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  className="custom-textarea"
                  required
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form-button">
              <Button className="signup-button" type="submit">
                Salvar
              </Button>
            </Form.Row>
          </Form>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}
