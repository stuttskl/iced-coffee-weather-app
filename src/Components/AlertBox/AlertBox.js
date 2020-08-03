import React from 'react';

export class AlertBox extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let currentTemp = ((this.props.temperature - 273.15) * 1.8 + 32).toFixed(2);
    let alert = "";
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay in AC room if you can.";
    }
    if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen!";
    } 
    if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's pretty temperate outside. Stay in, go out, either way -- have fun!";
    }
    if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater!";
    }
    if(currentTemp >= 32 && currentTemp <= 41) {
      alert = "It's pretty cold outside. I'd stay in if you can.";
    }
    return (
      <React.Fragment>
        <h1>Alert System</h1>
        <h3>{currentTemp} °F</h3>
        <p>{alert}</p>
      </React.Fragment>
    )
  }
}