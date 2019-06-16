import React from 'react';
import regiao_dos_lagos from './regiao_dos_lagos.jpg';
import './PlaceCard.sass';

export default class PlaceCard extends React.Component{
    render(){
      return(
        <div className="card card-border col-md-3  mglf">
          <img className="card-img-top car-image" src={regiao_dos_lagos} alt="Card image cap"/>
          <div className="card-body">

            <div className="justify-content-flex-end">
              <div className="label-price">
                <p className="c-red font-weight-bold">A partir</p>
              </div>
            </div>

            <div className="place-and-price">
              <p className="place">Região dos Lagos</p>
              <p className="price">10x<br/><span>R$ 125,00</span></p>
            </div>            
          </div>
        </div>
      )
    }
  }