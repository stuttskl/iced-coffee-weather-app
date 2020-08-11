import React from 'react';
import './AlertBox.css';
import Alert from '@material-ui/lab/Alert';
import { Icon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export const AlertBox = props => {
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  let alert = ''
  let severity = ''
  let iconType = ''
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay in AC room if you can.";
      severity = "error";
      iconType = "fas fa-temperature-high";
    }
    else if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen!";
      severity = "warning";
      iconType = "fas fa-umbrella-beach";

    } 
    else if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's pretty temperate outside. Stay in, go out, either way -- have fun!";
      severity = "success";
      iconType = "fas fa-sun";
    }
    else if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater!";
      severity = "info";  
      iconType = "fas fa-cloud-sun";
    }
    else if (currentTemp >= 31){
      alert = "It's pretty cold outside. I'd stay in if you can.";
      severity = "info";
      iconType = "far fa-snowflake";
    } else {
      alert = "I'm sorry, cannot retrieve weather tip information for some reason."
      iconType = "fas fa-coffee";
    }
  
  return (
    <Alert icon={false} className="alertBox" variant="filled" severity={severity}>
      <Icon className={iconType} style={{ fontSize: 40 }} />
      <Typography variant="h6">
        {alert}
      </Typography>
    </Alert>
  )
};
