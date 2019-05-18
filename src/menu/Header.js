import React from 'react';
import Navbar from './Navbar';
import './Header.sass';
import logo from './logo.png';


function Header() {
  return (
    <header className="Header">
      <div className='logo'>
        <img src={logo} alt="Logo" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
