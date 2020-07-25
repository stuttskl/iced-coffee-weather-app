import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
];

export class HourGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO
    // Implement main weather component: temperature, humidity, wind speed, UV index
    // https://app.asana.com/0/1182915487899489/1183169567980045
    return (
        <LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis label={{ value: '°F', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
    );
  }
};