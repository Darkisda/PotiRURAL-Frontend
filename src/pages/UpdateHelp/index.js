import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../components/Loading';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

export default function UpdateHelp(props) {
  const { match } = props;

  const history = useHistory();

  const mySwal = withReactContent(Swal);

  const [content, setContent] = useState('');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(async () => {
    api.get(`help/${match.params.id}`).then((response) => {
      setContent(response.data.content);
      setLoaded(true);
    });
  }, [match.params.id]);

  function handleUpdate(e) {
    e.preventDefault();

    api
      .put(`/help/${match.params.id}/edit`, {
        content,
      })
      .then((response) => {
        if (response.status === 200) {
          mySwal.fire({
            title: <p>Ajuda Atualizada!</p>,
            icon: 'success',
          });
          history.push('/perfil');
        }
      });
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row>
        <h1 className="title">Edite esta ajuda.</h1>
      </Row>
      {isLoaded ? (
        <>
          <Form className="form-create-article" onSubmit={handleUpdate}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="helpContent">
                <Form.Label className="custom-label">Conteúdo</Form.Label>
                <Form.Control
                  type="text"
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
