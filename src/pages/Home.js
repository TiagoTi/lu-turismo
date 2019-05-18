import React from 'react';
import { Link } from 'react-router-dom'
import Footer from '../menu/Footer';
import Header from '../menu/Header';

function Home() {
  return (
    <div className="App container">
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
