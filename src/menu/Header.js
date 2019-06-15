import React from 'react';
import Navbar from './Navbar';
import './Header.sass';
import logo from './logo.png';
import Carousel from '../components/carousel/Carousel';

function Header() {
  return (
    <header className="Header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <Navbar />
      <hr />
      <Carousel />
    </header>
  );
}

export default Header;
