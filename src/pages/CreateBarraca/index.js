import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';

export default function CreateBarraca() {
  const { authenticate } = useContext(Context);
  const history = useHistory();

  function handleAlertAndRedirect() {
    alert('Você precisa está cadastrado para escrever um novo artigo');
    history.push('/signup');
  }

  return (
    <Container className="custom-container">
      <UserHeader />
      {authenticate ? (
        <>
          <Row className="form-header">
            <h1 className="title">Crie uma nova Barraca para seus produtos!</h1>
          </Row>
        </>
      ) : (
        handleAlertAndRedirect()
      )}
    </Container>
  );
}
