import Button from '@material-ui/core/Button';
import React from 'react';
import Moment from 'moment';

import { getLocation, getWeatherFromLocation } from '../../location/getLocation';
import { getGraphData } from '../Graphs/getGraphData';

export class Locator extends React.Component{
  constructor(props){
    super(props);
    this.handleDebugClick = this.handleDebugClick.bind(this);
    this.state = {
      canLoad: false,
    }
  }

  // Executed upon component appearing in app.
  componentDidMount() {
    this.runLocator();
  }

  async runLocator() {
    let result;
    let graphDataResults;
    result = await getLocation();
    if (result.success) {
      console.log(result);
      graphDataResults = await getGraphData({ latitude: result.coord.lat, longitude: result.coord.lon });
    }
    else {
      // Default to getting weather from Corvallis if the user doesn't consent to giving their location
      result = await getWeatherFromLocation({
        coords: {
          latitude: 44.566667,
          longitude: -123.283333
        }
      })
      graphDataResults = await getGraphData({ latitude: 44.566667, longitude: -123.283333 });
      console.log("DEBUG: Could not find your location. (or wasn't given permission)");
    }

    let newData;
    if (result.success === true && graphDataResults.success === true) {

      let hourlyData = [];
      for (let i=0; i < 24; i++){
        hourlyData[i] = {
          "time": Moment(graphDataResults.hourly[i].dt * 1000).format('hh:mm A'),
          "temperature": ((graphDataResults.hourly[i].temp - 273.15) * 1.8 + 32).toFixed(2)
        }
      }
      console.log(hourlyData);

      let dailyData = [];
      for (let i=0; i < 8; i++){
        dailyData[i] = {
          "Day": Moment(graphDataResults.daily[i].dt * 1000).format('dddd').slice(0, 3),
          "High": ((graphDataResults.daily[i].temp.max - 273.15) * 1.8 + 32).toFixed(2),
          "Low": ((graphDataResults.daily[i].temp.min - 273.15) * 1.8 + 32).toFixed(2)
        }
      }
      console.log(dailyData);

      newData = {
        city: result.name,
        country: result.sys.country,
        temperature: result.main.temp,
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        hourlyData: hourlyData,
        dailyData: dailyData,
        loading: false,
        canLoad: true
      }
    }
    else {
      newData = {
        canLoad: false
      }
    }
    this.props.stateHandler(newData);
  }

  // Kind of temporary, for debug purposes and to demonstrate the location feature.
  async handleDebugClick(e) {
    e.preventDefault();
    this.runLocator();
  }

  render() {
    return(
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={this.handleDebugClick}>
          Debug - Get Location
        </Button>
      </React.Fragment>
    );
  }
};