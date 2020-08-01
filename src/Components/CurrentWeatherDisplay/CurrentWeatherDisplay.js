import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import sun from './sun.png';

export class CurrentWeatherDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      temperature: 50,
      uvIndex: 0,
      humidity: "30%",
      windSpeed: "WNW 9 mph"
    }
  }

  render(){

    return(
      <React.Fragment>
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
                Humidity: {this.state.humidity}
              </Typography>
              <Typography color="textSecondary">
                UV Index: {this.state.uvIndex}
              </Typography>
              <Typography color="textSecondary">
                Wind: {this.state.windSpeed}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </React.Fragment>
    );
  }
};
