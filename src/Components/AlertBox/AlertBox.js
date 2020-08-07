import React, { useState } from 'react';
import './AlertBox.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

export const AlertBox = props => {
  // const currentTemp = useState(((temperature - 273.15) * 1.8 + 32).toFixed(2));
  // const currentTemp = useState(0);
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  let alert = ''
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay in AC room if you can.";
    }
    else if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen!";
    } 
    else if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's pretty temperate outside. Stay in, go out, either way -- have fun!";
    }
    else if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater!";
    }
    else {
      alert = "It's pretty cold outside. I'd stay in if you can.";
    }
  
  return (
    <div>
      <h1>Weather Tips!</h1>
      <p>temp is: {currentTemp}</p>
      <p>{alert}</p>
    </div>
  )
};
