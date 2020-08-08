import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {
    BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
  } from 'recharts';

export class ForecastGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="graph">
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" display="block">
                        7 DAY FORECAST
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <BarChart width={730} height={250} data={this.props.dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Day" />
                        <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="High" fill="#fcb103" />
                        <Bar dataKey="Low" fill="#03adfc" />
                    </BarChart>
                </Grid>
            </Grid>
        </div>
    );
  }
};