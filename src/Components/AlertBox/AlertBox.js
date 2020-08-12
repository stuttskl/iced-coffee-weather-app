import React from 'react';
import './AlertBox.css';
import Alert from '@material-ui/lab/Alert';
import { Icon, CardContent, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


export const AlertBox = props => {
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  

  let toRender;
  let alert = ''
  let iconType = ''
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay inside with AC if you can.";
      iconType = "fas fa-temperature-high";
    } else if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen! You may also want to grab an cold brew ;)";
      iconType = "fas fa-umbrella-beach";
    }  else if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's the perfect temperature! Enjoy!";
      iconType = "fas fa-sun";
    } else if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater! And a latte!";
      iconType = "fas fa-cloud-sun";
    } else if (currentTemp >= 33) {
      alert = "It's pretty cold outside. I'd stay inside and drink coffee if you can.";
      iconType = "far fa-snowflake";
    } else if (currentTemp <= 32) {
      alert = "It's literally freezing. Go grab a warm cup of coffee :)";
      iconType = "far fa-snowflake";
    } else {
      alert = "I'm sorry, cannot retrieve weather tip information for some reason."
      iconType = "fa fa-coffee"
    }
  
  return (
    <div>
      {/* <Icon className={iconType} style={{ fontSize: 40 }} /> */}
      <h3>{alert}</h3>
    </div>
  )
}