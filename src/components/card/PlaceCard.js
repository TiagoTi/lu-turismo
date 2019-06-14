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

            <div className="justify-content-flex-end">
              <p className="a">10x R$ 125,00</p>
            </div>

            <div className="">
                <p className="a"></p>
            </div>
            
          </div>
        </div>
      )
    }
  }