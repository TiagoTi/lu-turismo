import React from 'react';
import { Link } from 'react-router-dom'
import logo from './../logo.svg';
import './../App.css';
import Footer from '../menu/Footer';
import Header from '../menu/Header';

function Home() {
  return (
    <div className="App container">
    <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/routes/Home.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footer />
      </header>
    </div>
  );
}

export default Home;
