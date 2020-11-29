import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';

export default function CreateBarraca() {
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const { authenticate } = useContext(Context);
  const history = useHistory();

  const meansurements = [
    {
      label: 'Kg',
      value: 'KG',
    },
    {
      label: 'Unid.',
      value: 'UNI',
    },
  ];

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setUfs(response.data);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        setCities(response.data);
      });
  }, [selectedUf]);

  function handleSelectUF(e) {
    e.preventDefault();

    const uf = e.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(e) {
    e.preventDefault();

    const city = e.target.value;

    setSelectedCity(city);
  }

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
          <Form className="form-create-barraca">
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-name">
                <Form.Label className="custom-label">
                  Nome da Barraca.
                </Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-description">
                <Form.Label className="custom-label">
                  Uma breve descrição da sua barraca.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="custom-textarea"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <h1>Produtos</h1>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-product-name">
                <Form.Label className="custom-label">
                  Nome do produto.
                </Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group as={Col} controlId="barraca-product-price">
                <Form.Label className="custom-label">
                  Preço do produto.
                </Form.Label>
                <Form.Control type="number" step=".01" required />
              </Form.Group>
              <Form.Group as={Col} controlId="barraca-product-meansurement">
                <Form.Label className="custom-label">
                  Unidade de Medida.
                </Form.Label>
                <Form.Control as="select" defaultValue="DEFAULT" required>
                  <option value="DEFAULT" disabled hidden>
                    Selecione uma medida.
                  </option>
                  {meansurements.map((means) => (
                    <option key={means.value} value={means.value}>
                      {means.label}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form-button">
              <Button className="product-button" type="button">
                Adicionar produto.
              </Button>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-uf">
                <Form.Label className="custom-label">
                  Estado onde se encontrará a barraca.
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="0"
                  value={selectedUf}
                  required
                  onChange={handleSelectUF}
                >
                  <option value="0" disabled hidden>
                    Selecione um Estado.
                  </option>
                  {ufs.map((uf) => (
                    <option value={uf.sigla} key={uf.id}>
                      {uf.sigla}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="barraca-city">
                <Form.Label className="custom-label">
                  Cidade onde se encontrará a barraca.
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="0"
                  value={selectedCity}
                  required
                  onChange={handleSelectCity}
                >
                  <option value="0" disabled hidden>
                    Selecione uma Cidade.
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </>
      ) : (
        handleAlertAndRedirect()
      )}
    </Container>
  );
}
