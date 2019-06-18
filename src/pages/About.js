import React from 'react';
import Footer from '../menu/Footer';
import Header from '../menu/Header';
import './About.sass'

function About() {
  return (
    <div className="about container">
      <Header />
      <div className="height_100">
      <h1>Quem Somos</h1>
      <p>
        <strong>Lu turismo</strong> é uma empresa que começou 25 de julho em 2001 em uma pequena sala, recebendo todos os seus clientes com muito carinho e realizando sonhos de sempre fazer viagens com o público em geral, onde <em>viajar é privilégio de todos</em>. Estamos a quase oito anos no mercado fazendo muitos momentos se tornarem <em className="blue">Inésqueciveis</em>.
      </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
