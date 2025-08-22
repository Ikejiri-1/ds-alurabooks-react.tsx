import React from 'react';
const Sacola = require('../../assets/sacola.png');
const Favoritos = require('../../assets/favoritos.png');

export interface CardProps {
  children: React.ReactNode;
}
function Card(children: CardProps) {
  return (
    <>
      <div>
        <div>
          <h1>Sobre o livro:</h1>
          <h2>Liderança em Design</h2>
          <p>
            Habilidades de gestão para alavancar sua carreira <br />
            Por Vitor Zanini
          </p>
        </div>
        <div>
          <a href="#">
            <img src={Sacola} alt="" />
          </a>
          <a href="#">
            <img src={Favoritos} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
