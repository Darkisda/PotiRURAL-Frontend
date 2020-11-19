import React, { useState, useEffect } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaImage } from 'react-icons/fa';
import api from '../../server/api';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function BarracaPage(props) {
  const [barraca, setBarraca] = useState({});

  const { match } = props;

  async function fetchBarracaByID() {
    const response = await api.get(`market/${match.params.id}`);

    setBarraca(response.data);
  }

  useEffect(async () => {
    await fetchBarracaByID();
  }, []);

  return (
    <Container className="custom-container">
      <UserHeader />
      {barraca ? (
        <Modal.Dialog className="barraca-page">
          <Modal.Header className="barraca-header">
            <h1 className="barraca-title">{barraca.barracaName}</h1>
          </Modal.Header>

          <Modal.Body className="barraca-body">
            <FaImage size={250} color="#4CAF50" />

            <p className="barraca-description">{barraca.description}</p>
            <hr />
            <table className="products">
              <tbody>
                {barraca.products ? (
                  barraca.products.map((product) => (
                    <tr key={product.id} className="products-row">
                      <td className="product-name">{product.productName}</td>
                      <td className="product-price">{product.price}</td>
                      <td className="product-meansurement">
                        {product.meansurement}
                      </td>
                    </tr>
                  ))
                ) : (
                  <>
                    <h1>Loading</h1>
                  </>
                )}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer className="barraca-footer">
            <Link to="/" className="btn barraca-button">
              <FaWhatsapp size={24} /> Entrar em contato
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </Container>
  );
}
