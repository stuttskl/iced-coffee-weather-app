// 3rd-party dependencies
import Button from '@material-ui/core/Button';
import React from 'react';
import Typography from '@material-ui/core/Typography';

// Dependencies created by our group
import { CurrentConditions } from './CurrentConditions/CurrentConditions';
import { mainStyles } from '../styles/styles';
import { getLocation } from '../location/getLocation';
import { HourGraph } from './Graphs/Hourgraph';

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
            temperature: 50,
            uvIndex: 10,
            humidity: 60,
            windSpeed: 12,
            city: "Corvallis",
            country: "USA"
        };
        this.handleDebugClick = this.handleDebugClick.bind(this);
    }

    // Kind of temporary, for debug purposes and to demonstrate the location feature.
    async handleDebugClick(e) {
        e.preventDefault();
        let result;
        result = await getLocation();
        if (result.success) {
            this.setState({
                city: result.city,
                country: result.country
            });
        }
        else {
            console.log("DEBUG: Could not find your location.");
        }
    }

    render() {
        return (
            <div id="main-view">
                <HeaderHook />
                <CurrentConditions 
                    city={this.state.city}
                    country={this.state.country}
                />
                <HourGraph />
                <Button variant="contained" color="primary" onClick={this.handleDebugClick}>
                    Debug - Get Location
                </Button>
            </div>
        );
    }
};