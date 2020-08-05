import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './CurrentWeatherDisplay.css';
import sun from './sun.png';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class CurrentWeatherDisplay extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let toRender;
    if (!this.props.canLoad) {
      toRender = <React.Fragment>
        <Alert severity="error">Can't load weather data for some reason!</Alert>
      </React.Fragment>
    }
    else if (this.props.loading) {
      toRender = <React.Fragment>
        <CircularProgress />
      </React.Fragment>;
    } 
    else {
      toRender = <React.Fragment>
        <div id='weather-display-main'>
            <div id="current-conditions">
              <Typography variant="h3">
                Current conditions for {this.props.city}, {this.props.country}:
              </Typography>
            </div>
            <div id = "weatherdisplay">
              <Card>
                <CardContent>
                  <Grid>
                    <Typography variant="h3">
                      {((this.props.temperature - 273.15) * 1.8 + 32).toFixed(2)} °F
                    </Typography>
                    <img src={sun} alt="Icon"></img>
                  </Grid>
                  <Typography color="textSecondary">
                    Humidity: {this.props.humidity}%
                  </Typography>
                  <Typography color="textSecondary">
                    UV Index: {this.props.uvIndex}
                  </Typography>
                  <Typography color="textSecondary">
                    Wind Speed: {this.props.windSpeed} km/h
                  </Typography>
                </CardContent>
              </Card>
            </div>
        </div>
      </React.Fragment>;
    }

    return toRender;
  }
};
