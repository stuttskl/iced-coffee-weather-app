import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';

import sun from './WeatherDisplay';

/*
const styles = makeStyles({
  root: {
    minWidth: 300,
  },
  fontsize: {
    fontsize: 14,
  },
});
*/

/*
function WeatherIcon(peops){
  let Icon
  Icon = sun 
}
*/

export class WeatherDisplay extends React.Component{
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
    );
  }
};

/*
const WeatherCard = function() {
  const classes = useStyles();
      
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
  <Typography variant="h3" component="h2">
    50
  </Typography>
  <Typography className = {classes.fontsize} color="textSecondary">
    Humidity: 60
  </Typography>
  <Typography className={classes.fontsize} color="textSecondary" gutterBottom>
    UN Index: 10
  </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
*/