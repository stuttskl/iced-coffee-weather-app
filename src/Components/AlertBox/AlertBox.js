import React, { useState } from 'react';
import './AlertBox.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

export const AlertBox = props => {
  // const currentTemp = useState(((temperature - 273.15) * 1.8 + 32).toFixed(2));
  // const currentTemp = useState(0);
  const currentTemp = ((props.temperature - 273.15) * 1.8 + 32).toFixed(2);
  return (
    <div>
      <h1>this is going to be the new alert box</h1>
      <p>temp is: {currentTemp}</p>
      {/* <p>{alerts}</p> */}
    </div>
  )
};
