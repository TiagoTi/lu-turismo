import React from 'react';
import {HashLink} from 'react-router-hash-link'
import SocialMidia from '../social-midia/SocialMidia';
import { Link } from 'react-router-dom';
import './Navbar.sass';


const PAGES = [
  {text: 'INICIO', href: '/#header', disable: false, type: 'hashLink'},
  {text: 'DESTINOS', href: '/destinations', disable: false},
  {text: 'GALERIA DE FOTOS', href: '/photos', disable: false},
  {text: 'CONTATO', href: '#contact', disable: false, type: 'hashLink'},
  {text: 'QUEM SOMOS', href: '/about#about-us', disable: true,type: 'hashLink'},
]


class NavbarToggler extends React.Component{
  render(){
    return(
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
    )
  }
}


class NavItem extends React.Component{
  render(){
    if (this.props.type==="hashLink"){
      return(<HashLink className="nav-link nav-item" to={this.props.to}>{this.props.text}</HashLink>)
    }else{
      return(<Link className="nav-link nav-item" to={this.props.to}>{this.props.text}</Link>)
    }
  }
}


class NavbarCollapse extends React.Component{
  render(){
    const links = [];
    this.props.links.forEach((link)=>{
      links.push( <NavItem to={link.href} text={link.text} type={link.type}/> )
    });

    return(
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">{links}</div>
      </div>
    )
  }
}


export default class Navbar extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <SocialMidia className="navbar-brand" />
        <NavbarToggler />
        <NavbarCollapse links={PAGES}/>
      </nav>
    )
  }
}
