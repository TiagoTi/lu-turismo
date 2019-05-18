import React from 'react';
import Footer from '../menu/Footer';
import Header from '../menu/Header';
import Article from './home/Article';
import Aside from './home/Aside';
import './home/Home.sass';

function Home() {
  return (
    <div className="App container">
      <Header />
      <div className="row pt15">
        <Article />
        <Aside/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
