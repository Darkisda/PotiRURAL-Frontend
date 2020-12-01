import React, { useState } from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import api from '../../server/api';

import './style.css';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const history = useHistory();

  const occupations = [
    {
      label: 'Produtor',
      value: 'PRODUTOR',
    },
    {
      label: 'Professor',
      value: 'PROFESSOR',
    },
    {
      label: 'Aluno',
      value: 'ALUNO',
    },
  ];

  function handleSucess() {
    alert('Cadastro realizado com sucesso!');
    history.push('/signin');
  }

  async function handleSignUp() {
    const formattedWhatsapp = `+55${whatsapp}`;

    const response = await api.post('auth/signup', {
      firstName,
      lastName,
      whatsapp: formattedWhatsapp,
      occupation,
      email,
      password,
    });

    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmailErr('');
    handleSignUp()
      .then((response) => {
        if (response.status === 201) {
          handleSucess();
        }
      })
      .catch((error) => {
        if (error.response.data.statusCode === 409) {
          setEmailErr(error.response.data.message);
        }
      });
  }

  return (
    <Container className="signup-container">
      <div className="form-header">
        <h1 className="title">
          Preencha os campos abaixo <br /> para realizar o cadastro.
        </h1>
        <Link to="/" className="no-decoration">
          <h1 id="potirural">potiRURAL</h1>
        </Link>
      </div>
      <Form className="form-signup" onSubmit={handleSubmit}>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="signup-firstname">
            <Form.Label className="custom-label"> Primeiro Nome: </Form.Label>
            <Form.Control
              type="text"
              required
              pattern="[A-Za-z].{3,25}"
              title="O primeiro nome está curto demais"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="signup-lastname">
            <Form.Label className="custom-label"> Segundo Nome: </Form.Label>
            <Form.Control
              type="text"
              required
              pattern="[A-Za-z].{3,90}"
              title="O sobrenome está curto demais"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row className="email-custom-row-form">
          <Form.Group as={Col} controlId="signup-email">
            <Form.Label className="custom-label"> Email: </Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          {emailErr ? <p className="error">{emailErr}</p> : ''}
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="signup-password">
            <Form.Label className="custom-label"> Senha:</Form.Label>
            <Form.Control
              type="password"
              required
              pattern="((?=.*[A-Z])(?=.*[a-z]).*$)"
              title="A senha deve conter: pelo menos 1 letra Maiúscula, 1  letra Minúscula e 1 Número"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>
              A senha deve conter: 1 Letra Maiúscula, 1 Letra Minúscula, 1
              Número e 4 Caracteres
            </p>
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form">
          <Form.Group as={Col} controlId="whatsapp">
            <Form.Label className="custom-label"> Whatsapp:</Form.Label>
            <Form.Control
              type="tel"
              required
              placeholder="Exemplo: 84999999999"
              pattern="[0-9]{11}"
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="ocuppation">
            <Form.Label className="custom-label"> Ocupação:</Form.Label>
            <Form.Control
              as="select"
              defaultValue="DEFAULT"
              required
              onChange={(e) => {
                setOccupation(e.target.value);
              }}
            >
              <option disabled hidden value="DEFAULT">
                Selecione uma ocupação
              </option>
              {occupations.map((occu) => (
                <option key={occu.value} value={occu.value}>
                  {occu.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="custom-row-form-button">
          <Button className="signup-button" type="submit">
            Cadastrar
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
}
