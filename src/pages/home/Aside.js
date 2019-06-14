import React from 'react';
import './Home.sass';
import './Video.sass';

export default class Aside extends React.Component{
  render(){
    return(
      <aside className="col-md-3">
        <div>
          <Video source="https://www.youtube.com/embed/L0cWBjfynrs"/>
          <Video source="https://www.youtube.com/embed/AF_UBXCA5-I"/>
          <Video source="https://www.youtube.com/embed/SEzx-nTO0Yg"/>
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
