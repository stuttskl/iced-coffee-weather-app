import React from 'react';
import {
    BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar,
  } from 'recharts';

const data = [
    {
        "Day": "Monday",
        "High": 80,
        "Low": 65
    },
    {
        "Day": "Tuesday",
        "High": 75,
        "Low": 62
    },
    {
        "Day": "Wednesday",
        "High": 89,
        "Low": 60
    },
    {
        "Day": "Thurday",
        "High": 86,
        "Low": 65
    },
    {
        "Day": "Friday",
        "High": 90,
        "Low": 59
    },
    {
        "Day": "Saturday",
        "High": 75,
        "Low": 66
    },
    {
        "Day": "Sunday",
        "High": 74,
        "Low": 63
    }
];

export class ForecastGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <BarChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="High" fill="#fcb103" />
            <Bar dataKey="Low" fill="#03adfc" />
        </BarChart>
    );
  }
};