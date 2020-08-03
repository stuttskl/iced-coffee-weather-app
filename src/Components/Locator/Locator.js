import Button from '@material-ui/core/Button';
import React from 'react';

import { getLocation, getWeatherFromLocation } from '../../location/getLocation';

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
    result = await getLocation();
    if (result.success) {
      console.log(result);
    }
    else {
      // Default to getting weather from Corvallis if the user doesn't consent to giving their location
      result = await getWeatherFromLocation({
        coords: {
          latitude: 44.566667,
          longitude: -123.283333
        }
      })
      console.log("DEBUG: Could not find your location. (or wasn't given permission)");
    }

    let newData;
    if (result.success === true) {
      newData = {
        city: result.name,
        country: result.sys.country,
        temperature: result.main.temp,
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
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