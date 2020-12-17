import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../../components/Loading';
import UserHeader from '../../components/UserHeader';
import api from '../../server/api';

export default function UpdateBarraca(props) {
  const { match } = props;

  const history = useHistory();

  const mySwal = withReactContent(Swal);

  const [barracaName, setBarracaName] = useState('');
  const [description, setDescription] = useState('');

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(async () => {
    api.get(`market/${match.params.id}`).then((response) => {
      setBarracaName(response.data.barracaName);
      setDescription(response.data.description);
      setSelectedUf(response.data.state);
      setSelectedCity(response.data.city);
      setLoaded(true);
    });
  }, [match.params.id]);

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

  function handleUpdate(e) {
    const city = selectedCity;
    const state = selectedUf;

    e.preventDefault();
    api
      .put(`/market/${match.params.id}/edit`, {
        barracaName,
        description,
        city,
        state,
      })
      .then((response) => {
        if (response.status === 200) {
          mySwal.fire({
            title: <p>Barraca Atualizada!</p>,
            icon: 'success',
          });
          history.push('/perfil');
        }
      });
  }

  return (
    <Container className="custom-container">
      <UserHeader />
      <Row className="form-header">
        <h1 className="title">Edite sua Barraca</h1>
      </Row>
      {isLoaded ? (
        <>
          <Form className="form-create-barraca" onSubmit={handleUpdate}>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-name">
                <Form.Label className="custom-label">
                  Nome da Barraca.
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  value={barracaName}
                  onChange={(e) => {
                    setBarracaName(e.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="custom-row-form">
              <Form.Group as={Col} controlId="barraca-description">
                <Form.Label className="custom-label">
                  Descrição da barraca.
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  className="custom-textarea"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  required
                />
              </Form.Group>
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
                Atualizar
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
