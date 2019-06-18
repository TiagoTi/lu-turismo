import React from 'react';
import $ from 'jquery';
import aparecida_do_norte from './aparecida_do_norte.jpg'
import cabo_frio from './cabo_frio.jpg'
import caldas_nova from './caldas_nova.jpg'


class CarouselItem extends React.Component{
  render(){
    return(
      <div className={"carousel-item " + this.props.active}>
        <img src={this.props.src} className="d-block w-100" alt={this.props.alt}/>
      </div>
    )
  }
}


export default class Carousel extends React.Component{


  componentDidMount(){
    $('#carouselExampleSlidesOnly').carousel()
  }


  render(){

    const carousel_items = [];

    const carousel_items_src = [
      {img_src: cabo_frio, img_alt: 'Foto Cabo Frio', active: "active"},
      {img_src: aparecida_do_norte, img_alt: 'Foto Aparecida do Norte', active: ""},
      {img_src: caldas_nova, img_alt: 'Foto Caldas Novas', active:""}
    ];

    carousel_items_src.forEach((carousel_item)=>{
      carousel_items.push(<CarouselItem src={carousel_item.img_src} alt={carousel_item.img_alt} active={carousel_item.active}/>);
    });

    return(
      <div id="carouselExampleSlidesOnly" className="carousel slide clearfix" data-ride="carousel">
        <div className="carousel-inner">{carousel_items}</div>
      </div>
    )


  }
}
