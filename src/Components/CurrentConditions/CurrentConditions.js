import React from 'react';
import Typography from '@material-ui/core/Typography';

export class CurrentConditions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO
    // Implement main weather component: temperature, humidity, wind speed, UV index
    // https://app.asana.com/0/1182915487899489/1183169567980045
    return (
      <div id="current-conditions">
        <Typography variant="h3">
          Current conditions for {this.props.city}, {this.props.country}:
        </Typography>
      </div>
    );
  }
};