import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
  } from 'recharts';
import { changeTempUnits } from '../tempUnitChange';

function Alert(props) {
return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export class ForecastGraph extends React.Component {
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
      const units = this.props.units;
      const formattedData = this.props.dailyData.map(function(temp){
        return {
          "Day": temp.Day,
          "High": changeTempUnits(units, temp.High),
          "Low": changeTempUnits(units, temp.Low)
        }
      });

      toRender = <React.Fragment>
        <div className="graph">
            <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" display="block">
                        7 Day Forecast
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <BarChart width={730} height={250} data={formattedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Day" />
                        <YAxis label={{ value: '°'+ this.props.units, angle: -90, position: 'insideLeft' }} 
                        type="number" 
                        domain={[dataMin => (Math.ceil((dataMin-30)/20) * 20) , dataMax => (Math.ceil((dataMax + 20) / 10)* 10)]} 
                        />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Low" fill="#03adfc" />
                        <Bar dataKey="High" fill="#fcb103" />
                    </BarChart>
                </Grid>
            </Grid>
        </div>
      </React.Fragment>;
    }

    return toRender;
    }
};