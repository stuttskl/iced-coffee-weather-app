// 3rd-party dependencies
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// Dependencies created by our group
import { mainStyles } from '../styles/styles';
import { getLocation } from '../location/getLocation';
import { HourGraph } from './Graphs/Hourgraph';
import { ForecastGraph } from './Graphs/Forecastgraph';
import { CurrentWeatherDisplay} from './CurrentWeatherDisplay/CurrentWeatherDisplay';

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
            latitude,
            temperature: 50,
            uvIndex: 10,
            humidity: 60,
            windSpeed: 12,
            city: "Corvallis",
            country: "USA",
            hourlyData: {},
            units: "F"
        };
        this.handleDebugClick = this.handleDebugClick.bind(this);
        this.handleAPIClick = this.handleAPIClick.bind(this);
    }

    // Kind of temporary, for debug purposes and to demonstrate the location feature.
    async handleDebugClick(e) {
        e.preventDefault();
        let result;
        result = await getLocation();
        if (result.success) {
            console.log(result);
            this.setState({
                city: result.name,
                country: result.sys.country,
                temperature: result.main.temp
            });
        }
        else {
            console.log("DEBUG: Could not find your location.");
        }
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
                <HourGraph />
                <ForecastGraph />
                <Button variant="contained" color="primary" onClick={this.handleDebugClick}>
                    Debug - Get Location
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleAPIClick}>
                    Debug - Make API Call
                </Button>
                <CurrentWeatherDisplay 
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    humidity = {this.state.humidity}
                    uvIndex = {this.state.uvIndex}
                />          
            </div>
        );
    }
    
};