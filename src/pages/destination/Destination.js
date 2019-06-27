import React from 'react';
import Footer from '../menu/Footer';
import Header from '../menu/Header';
import './Destination.sass'



export default class Destination extends React.Component{
  componentDidMount(){
    document.querySelector('#carouselExampleSlidesOnly').remove()
  }
  render(){
    return(
      <div>
        <Header />
        <div className="destination container">
          oi
        </div>
        <div className="container">
        <Footer />
        </div>
      </div>
    )
  }
}