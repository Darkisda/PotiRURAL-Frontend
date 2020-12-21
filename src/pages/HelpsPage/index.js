import React, { useState, useEffect } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserHeader from '../../components/UserHeader';
import HelpCard from '../../components/HelpCard';
import api from '../../server/api';
import Loading from '../../components/Loading';

export default function HelpsPage() {
  const [helps, setHelps] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState({ totalCount: 0, limit: 9 });

  const totalPages =
    pageInfo.totalCount > 9
      ? Math.trunc(pageInfo.totalCount / pageInfo.limit) + 1
      : 1;

  async function fetchHelps() {
    const response = await api.get(`help?page=${page}&limit=9`);

    setPageInfo({
      totalCount: response.data.totalCount,
      limit: response.data.limit,
    });
    setHelps(response.data.data);
  }

  useEffect(async () => {
    setLoaded(false);
    await fetchHelps();
    setLoaded(true);
  }, [page]);

  function PrevPage() {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  }

  function NextPage() {
    if (page === totalPages) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  }

  function LoadedHelps() {
    return helps.length !== 0 ? (
      <>
        <Row className="custom-row">
          <Pagination>
            <Pagination.First onClick={() => setPage(1)} />
            <Pagination.Prev onClick={() => PrevPage()} />
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => setPage(totalPages)} />
          </Pagination>
        </Row>
        {helps.map((help) => (
          <Col
            key={help.id}
            lg={4}
            sm={12}
            xs={12}
            md={4}
            className="custom-col"
          >
            <HelpCard help={help} />
          </Col>
        ))}
      </>
    ) : (
      <Row className="custom-row empty-row">
        <h1 className="empty">
          Oops... parace que estamos sem nenhuma Ajuda. Crie uma nova agora
          mesmo!
        </h1>
      </Row>
    );
  }

  return (
    <Container className="container-custom articles">
      <UserHeader />
      <Row className="custom-row">
        <h1>Algumas formas de ajuda oferecidas por outras usuários.</h1>
      </Row>
      <Row className="row-right">
        <Link to="/helps/create">Crie agora uma nova forma de ajuda.</Link>
      </Row>
      <Row className="custom-row">
        {isLoaded ? <LoadedHelps /> : <Loading />}
      </Row>
    </Container>
  );
}
