import React from 'react';

export class AlertBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alertsAreLoaded: false,
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>alerts go here!</h1>
        <p>are alerts loaded? {this.props.alertsAreLoaded}</p>
      </React.Fragment>
    )
  }
}