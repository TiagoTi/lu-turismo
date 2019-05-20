import React, { Component } from 'react';

class Alert extends Component {
  render() {
    <div class={"alert "+this.props.alert_class} role="alert">
      {this.props.content}
    </div>
  }
}

export default Alert;
