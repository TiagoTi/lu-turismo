import React from 'react';
import Footer from '../../menu/Footer';
import Header from '../../menu/Header';
import './Destination.sass'


const destinationApi = [
  {"title": "Cabo Frio"},
  {"title": "Natal"}
]

class DestinationBanner extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="banner">
        <div className="detail">
          <h1>{this.props.destination.title}</h1>
        </div>
        <div className="video"></div>
      </div>
    )
  }
}

export default class Destination extends React.Component{
  componentDidMount(){
    document.querySelector('#carouselExampleSlidesOnly').remove()
  }
  render(){
    return(
      <div>
        <Header />
        <div className="destination container">
          {
            destinationApi.map(d=><DestinationBanner destination={d}/>)
          }
        </div>
        <div className="container">
        <Footer />
        </div>
      </div>
    )
  }
}