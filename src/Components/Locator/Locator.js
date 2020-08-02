import Button from '@material-ui/core/Button';
import React from 'react';

import { getLocation } from '../../location/getLocation';


export class Locator extends React.Component{
  constructor(props){
    super(props);
    this.handleDebugClick = this.handleDebugClick.bind(this);
  }

  // Kind of temporary, for debug purposes and to demonstrate the location feature.
  async handleDebugClick(e) {
    e.preventDefault();
    let result;
    result = await getLocation();
    if (result.success) {
      console.log(result);
      let newData = {
        city: result.name,
        country: result.sys.country,
        temperature: result.main.temp
      }
      this.props.stateHandler(newData);
    }
    else {
      console.log("DEBUG: Could not find your location.");
    }
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