import React from 'react';
import { Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaImage } from 'react-icons/fa';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function BarracaPage() {
  const products = [
    { name: 'Manga', price: 4.5, meansurement: 'KG' },
    { name: 'Tomarindo', price: 2.5, meansurement: 'KG' },
    { name: 'Milho', price: 0.5, meansurement: 'UNI' },
    { name: 'Banana', price: 0.75, meansurement: 'UNI' },
    { name: 'Abacata', price: 4.5, meansurement: 'KG' },
    { name: 'Limão', price: 2.5, meansurement: 'KG' },
    { name: 'Maça', price: 4.5, meansurement: 'KG' },
  ];

  return (
    <Container className="custom-container">
      <UserHeader />
      <Modal.Dialog className="barraca-page">
        <Modal.Header className="barraca-header">
          <h1 className="barraca-title">Nome da Barraca</h1>
        </Modal.Header>

        <Modal.Body className="barraca-body">
          <FaImage size={250} color="#4CAF50" />

          <p className="barraca-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            leo sed nulla commodo iaculis at egestas risus. In porttitor luctus
            iaculis. Phasellus tortor mi, vehicula pharetra dolor imperdiet,
            vestibulum tincidunt mauris. Etiam dignissim fringilla erat id
            pulvinar. Praesent sed risus dolor. Quisque tortor lacus, faucibus a
            mollis eget, vestibulum imperdiet nibh. Donec dui arcu, cursus ut
            tempus ac, cursus ut mi. Donec rhoncus pulvinar tortor nec
            facilisis. Praesent sollicitudin turpis ac lacus posuere porttitor.
            Sed porttitor felis sit amet nibh auctor ullamcorper. Suspendisse
            lorem odio, viverra quis est sed, vehicula rhoncus mi. Pellentesque
            luctus nisl massa, et dignissim ligula mattis eget. Proin consequat
            porta mauris sit amet egestas. Quisque quis lacinia odio.
          </p>
          <hr />
          <table className="products">
            {products.map((product) => (
              <tr className="products-row">
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-meansurement">{product.meansurement}</td>
              </tr>
            ))}
          </table>
        </Modal.Body>
        <Modal.Footer className="barraca-footer">
          <Link to="/" className="btn barraca-button">
            <FaWhatsapp size={24} /> Entrar em contato
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  );
}
