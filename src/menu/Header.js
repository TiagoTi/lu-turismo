import React from 'react';
import Navbar from './Navbar';
import './Header.sass';
import logo from './logo.png';
import Carousel from '../components/carousel/Carousel';

function Header() {
  return (
    <header className="Header">

      <div className="fixed-top bg-color-main">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <Navbar />
        <hr />

      </div>
      <div className="clearfix p-t-230">
        <Carousel />
      </div>
    </header>
  );
}

export default Header;
