import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';
import BarracaCard from '../../components/BarracaCard';

export default function Market() {
  const [barracas, setBarracas] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ totalCount: 0, limit: 9 });
  const [totalPages, setTotalPages] = useState(0);

  async function fetchBarracas() {
    const response = await api.get(`market?page=${page}&limit=9`);
    console.debug('Page', page);

    setPageInfo({
      totalCount: response.data.totalCount,
      limit: response.data.limit,
    });
    setBarracas(response.data.data);
    setTotalPages(Math.trunc(pageInfo.totalCount / pageInfo.limit) + 1);
    setLoaded(true);
  }

  useEffect(() => {
    fetchBarracas();
  }, [page]);

  return (
    <Container className="custom-container">
      <UserHeader />
      <Row className="custom-row">
        <h1 className="text-header">
          Algumas barracas que possam te chamar a atenção.
        </h1>
      </Row>
      <Row className="row-right">
        <Link to="/market/create">Crie uma nova barraca agora mesmo!</Link>
      </Row>
      <Row className="custom-row">
        {isLoaded ? (
          <>
            <Row className="custom-row">
              <Pagination>
                <Pagination.First onClick={() => setPage(1)} />
                <Pagination.Prev
                  onClick={() => setPage(page <= 1 ? 1 : page - 1)}
                />
                <Pagination.Next
                  onClick={() => setPage(page >= totalPages ? page : page + 1)}
                />
                <Pagination.Last onClick={() => setPage(totalPages)} />
              </Pagination>
            </Row>
            {barracas.map((barraca) => (
              <Col
                key={barraca.id}
                lg={4}
                sm={12}
                xs={12}
                md={4}
                className="custom-col"
              >
                <BarracaCard barraca={barraca} />
              </Col>
            ))}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Row>
    </Container>
  );
}
