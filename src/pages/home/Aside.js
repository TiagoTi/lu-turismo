import React from 'react';
import './Home.sass';
import './Video.sass';
import './Testimony.sass'

export default class Aside extends React.Component{
  render(){
    return(
      <aside className="col-md-3">
        <div>
          <Video source="https://www.youtube.com/embed/L0cWBjfynrs"/>
          <Video source="https://www.youtube.com/embed/AF_UBXCA5-I"/>
          <Video source="https://www.youtube.com/embed/SEzx-nTO0Yg"/>
        </div>
        <div className="testimonies">
          <Testimony />
          <Testimony />
        </div>
      </aside>
    )
  }
}


class Video extends React.Component{
  render(){
    return(
      <div className='video'>
        <iframe src={this.props.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
}

 
class Testimony extends React.Component{
  render(){
    return(
      <div className="testimony">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo nesciunt illo cumque aperiam veniam placeat soluta, porro qui quod, iusto adipisci tempora et consectetur ut excepturi libero laborum dolore?
        </p>
        <p className="author">Darth Vader</p>
        <hr/>

      </div>
    )
  }
}