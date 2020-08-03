import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  } from 'recharts';

const data = [
    {
        "time": "8:00AM",
        "temperature": 65
    },
    {
        "time": "9:00AM",
        "temperature": 68
    },
    {
        "time": "10:00AM",
        "temperature": 69
    },
    {
        "time": "11:00AM",
        "temperature": 73
    },
    {
        "time": "12:00AM",
        "temperature": 78
    },
    {
        "time": "1:00PM",
        "temperature": 80
    },
    {
        "time": "2:00PM",
        "temperature": 79
    },
    {
        "time": "3:00PM",
        "temperature": 78
    },
    {
        "time": "4:00PM",
        "temperature": 76
    },
    {
        "time": "5:00PM",
        "temperature": 74
    },
    {
        "time": "6:00PM",
        "temperature": 72
    },
    {
        "time": "7:00PM",
        "temperature": 67
    },
    {
        "time": "8:00PM",
        "temperature": 65
    },
    {
        "time": "9:00PM",
        "temperature": 63
    },
    {
        "time": "10:00PM",
        "temperature": 62
    },
    {
        "time": "11:00PM",
        "temperature": 60
    },
    {
        "time": "12:00PM",
        "temperature": 56
    },
    {
        "time": "1:00AM",
        "temperature": 55
    },
    {
        "time": "2:00AM",
        "temperature": 55
    },
    {
        "time": "3:00AM",
        "temperature": 57
    },
    {
        "time": "4:00AM",
        "temperature": 59
    },
    {
        "time": "5:00AM",
        "temperature": 60
    },
    {
        "time": "6:00AM",
        "temperature": 62
    },
    {
        "time": "7:00AM",
        "temperature": 66
    },
    {
        "time": "8:00AM",
        "temperature": 69
    },
];

export class HourGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <LineChart width={730} height={250} data={this.props.hourlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
    );
  }
};