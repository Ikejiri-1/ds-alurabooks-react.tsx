import React from 'react';
const Sacola = require('../../assets/sacola.png');
const Favoritos = require('../../assets/favoritos.png');
import styled from 'styled-components';
import { AbButton } from '../AbButton';

const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  width: 500px;
`;
const CardContainerText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

  h1,
  h2,
  h3 {
    font-weight: 700;
    font-style: bold;
    margin: 8px 0;
  }
  h1 {
    font-size: 32px;
    color: #eb9b00;
    line-height: 100%;
  }
  h2 {
    font-size: 18px;
    color: #002f52;
  }
  h3 {
    font-size: 36px;
    color: #002f52;
  }
  p {
    font-size: 14px;
    color: #000;
    line-height: 200%;
  }
`;

const CardContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CardContainerImage = styled.div`
  display: flex;
  gap: 16px;
`;
export interface CardProps {
  children: React.ReactNode;
}
function Card(children: CardProps) {
  return (
    <>
      <CardContainer>
        <CardContainerText>
          <h1>Sobre o livro:</h1>
          <h2>Liderança em Design</h2>
          <p>
            Habilidades de gestão para alavancar sua carreira <br />
            Por: Vitor Zanini
          </p>
          <p>A partir de:</p>
          <h3>R$ 29,90</h3>
        </CardContainerText>
        <CardContainerContent>
          <CardContainerImage>
            <a href="#">
              <img src={Sacola} alt="" />
            </a>
            <a href="#">
              <img src={Favoritos} alt="" />
            </a>
          </CardContainerImage>
          <AbButton styletype="primary" text="Comprar" />
        </CardContainerContent>
      </CardContainer>
    </>
  );
}

export default Card;
