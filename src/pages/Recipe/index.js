import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserHeader from '../../components/UserHeader';

import './style.css';

export default function Recipe() {
  return (
    <Container className="container-custom recipes">
      <UserHeader />
      <Row className="custom-row">
        <div className="recipe-header">
          <h1 className="recipe-title">Nome da Receita</h1>
          <p className="recipe-description">Descrição breve da receita</p>
          <div className="img-wrapper">
            <img
              src="https://i0.statig.com.br/bancodeimagens/cs/1t/wm/cs1twm81owp8iug586w3t6pjl.jpg"
              alt="imagem-da-receita"
              className="recipe-image"
            />
          </div>
        </div>
      </Row>
      <Row className="custom-row">
        <h3>Ingredientes:</h3>
        <p>
          Pudim: 1 lata de leite condensado 1 lata de leite (medida da lata de
          leite condensado) 3 ovos inteiros Calda: 1 xícara (chá) de açúcar 1/2
          xícara de água
        </p>
      </Row>
      <Row className="custom-row">
        <h3>Modo de Preparo:</h3>
        <p>
          Pudim: Primeiro, bata bem os ovos no liquidificador. Acrescente o
          leite condensado e o leite, e bata novamente. Calda: Derreta o açúcar
          na panela até ficar moreno, acrescente a água e deixe engrossar.
          Coloque em uma forma redonda e despeje a massa do pudim por cima. Asse
          em forno médio por 45 minutos, com a assadeira redonda dentro de uma
          maior com água. Espete um garfo para ver se está bem assado. Deixe
          esfriar e desenforme.
        </p>
      </Row>
    </Container>
  );
}
