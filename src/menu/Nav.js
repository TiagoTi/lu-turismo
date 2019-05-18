import React from 'react';
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <nav className="App">
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <Link to="/">Casa</Link>
    </nav>
  );
}

export default Nav;
