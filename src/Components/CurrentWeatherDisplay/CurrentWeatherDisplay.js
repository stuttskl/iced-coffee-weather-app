import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

export class CurrentWeatherDisplay extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      temperature: 33,
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
          <p>Temperature in {this.props.city} is: {this.props.temperature}</p>
        </div>
        <div id = "weatherdisplay">
          <Card>
            <CardContent>
              <Typography variant="h3">
                {this.state.temperature}
              </Typography>
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