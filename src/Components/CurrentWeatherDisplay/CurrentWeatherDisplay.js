import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './CurrentWeatherDisplay.css';
import Icon from '@material-ui/core/Icon';
import Moment from 'moment';

import { countryCodes } from '../../constants/countrycodes';
import { changeTempUnits } from '../tempUnitChange';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const CurrentWeatherDisplay = (props) => {
  const onMouseClick = () => {
    const newUnit = props.units == "F" ? "C" : "F";
    props.stateHandler({units: newUnit});
    return newUnit;
  }
  const displayUnits = () => {
    const changedUnit = props.units;
    return '°'+changedUnit
  }
  let toRender;
  let currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2)
  let datetime = Moment.unix(props.dt).format('HH:mm')
  let alert = ''
  let iconStyle = ''
  if(currentTemp > 96) {
    alert = "It's HOT outside. Try to stay in AC room if you can.";
    iconStyle = "fas fa-temperature-high";
  } else if(currentTemp >= 75 && currentTemp <= 95) {
    alert = "Don't forget your sunscreen!";
    iconStyle = "fas fa-umbrella-beach";
  }  else if(currentTemp >= 60 && currentTemp <= 74) {
    alert = "It's pretty temperate outside. Stay in, go out, either way -- have fun!";
    iconStyle = "fas fa-sun";
  } else if(currentTemp >= 42 && currentTemp <= 59) {
    alert = "It might be a little chilly outside. You may want to grab a sweater!";
    iconStyle = "fas fa-cloud-sun";
  } else if (currentTemp >= 33) {
    alert = "It's pretty cold outside. I'd stay in if you can.";
    iconStyle = "far fa-snowflake";
  } else if (currentTemp <= 32) {
    alert = "It's literally freezing. Go grab a warm cup of coffee :)";
    iconStyle = "far fa-snowflake";
  } else {
    alert = "I'm sorry, cannot retrieve weather tip information for some reason."
    iconStyle = "fas fa-coffee";
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
      <div id='weather-display-main'>
          <div id="current-conditions">
            <Typography variant="h5">
              Currently in {props.city}, {countryCodes[props.country]}
            </Typography>
          </div>
          <div id = "weather-display">
            <Grid>
              <Typography variant="h4">
                {changeTempUnits(props.units, props.temperature)} {displayUnits()}
              </Typography>
              {/* <Typography variant="h5">
                {datetime}
              </Typography> */}
              <Icon className={iconStyle} style={{fontSize: 50 }} />
            </Grid>
            <Typography color="textSecondary">
              Humidity: {props.humidity}%
            </Typography>
            <Typography color="textSecondary">
              UV Index: {props.uvIndex}
            </Typography>
            <Typography color="textSecondary">
              Wind Speed: {props.windSpeed} km/h
            </Typography>
            <Button variant="contained" color="primary" onClick={onMouseClick}>
              Change Temperature Units
            </Button>
          </div>
      </div>
    </React.Fragment>;
  }

  return toRender;
};
