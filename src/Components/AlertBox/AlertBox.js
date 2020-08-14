import React from 'react';
import './AlertBox.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';


export const AlertBox = props => {
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  let isDayTime = props.icon.includes('d');
  let greeting = ''
  if(isDayTime){
    greeting = 'Good Day'
  } else {
    greeting = 'Good Evening'
  }
  let toRender;
  let alert = ''
    if(currentTemp > 96) {
      alert = "It's HOT outside. Try to stay inside with AC if you can.";
    } else if(currentTemp >= 75 && currentTemp <= 95) {
      alert = "Don't forget your sunscreen! You may also want to grab an cold brew ;)";
    }  else if(currentTemp >= 60 && currentTemp <= 74) {
      alert = "It's the perfect temperature! Enjoy!";
    } else if(currentTemp >= 42 && currentTemp <= 59) {
      alert = "It might be a little chilly outside. You may want to grab a sweater! And a latte!";
    } else if (currentTemp >= 33) {
      alert = "It's pretty cold outside. I'd stay inside and drink coffee if you can.";
    } else if (currentTemp <= 32) {
      alert = "It's literally freezing. Go grab a warm cup of coffee :)";
    } else {
      alert = "I'm sorry, cannot retrieve weather tip information for some reason."
    }

    if (!props.canLoad) {
      toRender = <React.Fragment>
        <Alert severity="error">Can't load weather data for some reason!</Alert>
      </React.Fragment>
    }
    else if (props.loading) {
      toRender = <React.Fragment>
        <CircularProgress />
      </React.Fragment>;
    } 
    else {
      toRender = <React.Fragment>
          <div>
            <h1>ALERT!: {greeting}, {alert}</h1>
          </div>
      </React.Fragment>;
    }
  
    return toRender;
}