import React from 'react';
import regiao_dos_lagos from './regiao_dos_lagos.jpg';
import './PlaceCard.sass';

export default class PlaceCard extends React.Component{
    render(){
      return(
        <div className="card card-border col-md-3  mglf">
          <img className="card-img-top car-image" src={regiao_dos_lagos} alt="Card image cap"/>
          <div className="card-body d-flex justify-content-center">
            <h4 className="card-title c-blue-palle">Cabo Frio região dos lagos</h4>
            <div className="aaa">
              <h5 className="card-title c-red font-weight-bold price-label">A partir</h5>
              <p className="card-text">10x<br/>R$ 125,00</p>
              <a href="www.google.com.br" className="btn btn-primary">detalhes</a>
            </div>
  
          </div>
        </div>
      )
    }
  }