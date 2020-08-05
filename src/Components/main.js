// 3rd-party dependencies
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// Dependencies created by our group
import { mainStyles } from '../styles/styles';
import { HourGraph } from './Graphs/Hourgraph';
import { ForecastGraph } from './Graphs/Forecastgraph';
import { CurrentWeatherDisplay} from './CurrentWeatherDisplay/CurrentWeatherDisplay';
import { Locator } from './Locator/Locator';
import { AlertBox } from './AlertBox/AlertBox';

/* One way of styling with Material UI is to use hooks.
   However, these only work inside functions, so we can't have this with
   the Main class below.*/
function HeaderHook() {
    const classes = mainStyles();
    return (
        <div className={classes.mainHeader}>
            <Typography variant="h2" gutterBottom>
                Weather Roasters
            </Typography>
        </div>
    );
}

/*
    Main class
    Contains the basic skeleton of the app and its state
*/
export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 44.566667,
            longitude: -123.283333,
            temperature: 50,
            uvIndex: 10,
            humidity: 60,
            windSpeed: 12,
            city: "Corvallis",
            country: "USA",
            hourlyData: [],
            units: "F",
            loading: true,
            canLoad: true
        };
        this.handleAPIClick = this.handleAPIClick.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
    }

    stateHandler(values) {
        this.setState(values);
    }

    handleAPIClick(e) {
        e.preventDefault(e)
        fetch('/weather')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(JSON.stringify(data));
                alert('API Call initiated! Check your console!')
            });
    }

    render() {
        return (
            <div id="main-view">
                <HeaderHook />
                <HourGraph 
                    hourlyData={this.state.hourlyData} />
                <ForecastGraph />
                <Locator 
                    stateHandler={this.stateHandler}
                />
                <Button variant="contained" color="primary" onClick={this.handleAPIClick}>
                    Debug - Make API Call
                </Button>
                <CurrentWeatherDisplay 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity = {this.state.humidity}
                    uvIndex = {this.state.uvIndex}
                    windSpeed = {this.state.windSpeed}
                    loading = {this.state.loading}
                    canLoad = {this.state.canLoad}
                />
                <AlertBox 
                    temperature={this.state.temperature}
                />    
            </div>
        );
    }
    
};