import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import { Context } from '../../auth/AuthContext';
import Product from '../../models/Product';
import api from '../../server/api';

import './style.css';

export default function CreateBarraca() {
  const [barracaName, setBarracaName] = useState('');
  const [description, setDescription] = useState('');

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(0);
  const [meansurement, setMeansurement] = useState('');
  const [products, setProducts] = useState([]);

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

  async function fetchUFs() {
    const abortController = new AbortController();
    const { signal } = abortController;

    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados', {
        signal,
      })
      .then((response) => {
        setUfs(response.data);
      });

    abortController.abort();
  }

  useEffect(() => {
    fetchUFs();
  }, []);

  async function fetchCities() {
    const abortController = new AbortController();
    const { signal } = abortController;

    if (selectedUf === '0') {
      return;
    }
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
        { signal }
      )
      .then((response) => {
        setCities(response.data);
      });

    abortController.abort();
  }

  useEffect(() => {
    fetchCities();
  }, [selectedUf]);

  function handleCreateProduct(e) {
    e.preventDefault();

    const prodct = new Product();

    prodct.setProductName(productName);
    prodct.setPrice(price);
    prodct.setMeansurement(meansurement);

    setProducts([...products, prodct]);

    console.log(products);
  }

  function handleSucess() {
    alert('Cadastro realizado com sucesso!');
    history.push('/market');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const city = selectedCity;
    const state = selectedUf;

    await api
      .post('market', {
        barracaName,
        description,
        city,
        state,
        products,
      })
      .then((response) => {
        if (response.status === 201) {
          handleSucess();
        } else {
          alert('Oops algo deu errado');
          history.push('/');
        }
      });
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
          <Form className="form-create-barraca" onSubmit={handleSubmit}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-name">
                <Form.Label className="custom-label">
                  Nome da Barraca.
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => {
                    setBarracaName(e.target.value);
                  }}
                />
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
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
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
                <Form.Control
                  type="text"
                  required
                  onChange={(e) => {
                    setProductName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="barraca-product-price">
                <Form.Label className="custom-label">
                  Preço do produto.
                </Form.Label>
                <Form.Control
                  type="number"
                  step=".01"
                  required
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="barraca-product-meansurement">
                <Form.Label className="custom-label">
                  Unidade de Medida.
                </Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="DEFAULT"
                  required
                  onChange={(e) => {
                    setMeansurement(e.target.value);
                  }}
                >
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
              <Button
                className="product-button"
                type="button"
                onClick={handleCreateProduct}
              >
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
                  value={selectedUf}
                  required
                  onChange={(e) => {
                    setSelectedUf(e.target.value);
                  }}
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
                  value={selectedCity}
                  required
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                  }}
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
            <Form.Row className="custom-row-form-button">
              <Button className="signup-button" type="submit">
                Cadastrar
              </Button>
            </Form.Row>
          </Form>
        </>
      ) : (
        handleAlertAndRedirect()
      )}
    </Container>
  );
}
