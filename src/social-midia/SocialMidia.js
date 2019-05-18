import React from 'react';
import './SocialMidia.sass';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import whatsapp from './whatsapp.svg';
import youtube from './youtube.svg';


class NavItem extends React.Component{


  render(){
    return(
      <a href={this.props.href} target="_blank" className="mr" rel="noopener noreferrer">
        <img
          src={this.props.icon}
          className="social-icon"
          alt={this.props.text} />
      </a>
    )
  }


}


export default class SocialMidia extends React.Component{


  render(){

    const links = [];

    const social_links = [
      {href: 'https://www.facebook.com/TurismoLu/', text: 'facebook site', icon: facebook},
      {href: '#', text: 'facebook site', icon: instagram},
      {href: '#', text: 'facebook site', icon: youtube},
      {href: 'https://wa.me/5516991250303', text: 'facebook site', icon: whatsapp}
    ]

    social_links.forEach((link)=>{
      links.push(<NavItem href={link.href} text={link.text} icon={link.icon}/>)
    });

    return(
      <div className="navbar-nav ml-1">{links}</div>
    )
  }


}
