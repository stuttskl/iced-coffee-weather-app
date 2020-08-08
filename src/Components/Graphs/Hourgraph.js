import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

function Alert(props) {
return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class HourGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <div className="graph">
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                <Typography variant="h4" align="center" display="block">
                    24Hr Forecast
                </Typography>
                </Grid>
                <Grid item xs={12} >
                <LineChart width={730} height={250} data={this.props.hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                </LineChart>
                </Grid>
            </Grid>
        </div>
      </React.Fragment>;
    }

    return toRender;
    }
};