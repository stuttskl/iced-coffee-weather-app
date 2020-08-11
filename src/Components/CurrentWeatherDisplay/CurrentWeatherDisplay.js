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

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const CurrentWeatherDisplay = (props) => {
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
          <div id = "weather-display">
            <Card>
              <CardContent>
                <Grid>
                  <Typography variant="h5">
                    {((props.temperature - 273.15) * 1.8 + 32).toFixed(2)} °F
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
