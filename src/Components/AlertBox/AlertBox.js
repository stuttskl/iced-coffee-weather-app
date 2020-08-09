import React from 'react';
import './AlertBox.css';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';


export const AlertBox = props => {
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  let alert = ''
  let severity = ''
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay in AC room if you can.";
      severity = "error";
    }
    else if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen!";
      severity = "warning";
    } 
    else if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's pretty temperate outside. Stay in, go out, either way -- have fun!";
      severity = "success";
    }
    else if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater!";
      severity = "info";
    }
    else if (currentTemp >= 31 && currentTemp <= 4159){
      alert = "It's pretty cold outside. I'd stay in if you can.";
      severity = "info";
    } else {
      alert = "I'm sorry, cannot retrieve weather tip information for some reason."
    }
  
  return (
    <Alert icon={false} className="alertBox" variant="filled" severity={severity}>
      {alert}
    </Alert>
  )
};
