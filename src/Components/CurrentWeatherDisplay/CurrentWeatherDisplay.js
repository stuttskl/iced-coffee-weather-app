import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './CurrentWeatherDisplay.css';
import Icon from '@material-ui/core/Icon';

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
  const iconStyle = "fas fa-sun";

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
              Current conditions for {props.city}, {countryCodes[props.country]}
            </Typography>
          </div>
          <Button variant="contained" color="primary" onClick={onMouseClick}>
              Change Temperature Units
          </Button>
          <div id = "weather-display">
            <Card>
              <CardContent>
                <Grid>
                  <Typography variant="h5">
                    {changeTempUnits(props.units, props.temperature)} {displayUnits()}
                  </Typography>
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
              </CardContent>
            </Card>
          </div>
      </div>
    </React.Fragment>;
  }

  return toRender;
};
