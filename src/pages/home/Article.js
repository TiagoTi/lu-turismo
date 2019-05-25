import React from 'react';
import './Home.sass';

import PlaceCard from '../../components/card/PlaceCard';




export default class Article extends React.Component{
  render(){
    return(
      <article className="col-md-10 row">
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
      </article>
    )
  }
}
