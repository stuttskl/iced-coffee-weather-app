// 3rd-party dependencies
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

// Dependencies created by our group
import { mainStyles } from '../styles/styles';
import { HourGraph } from './Graphs/Hourgraph';
import { ForecastGraph } from './Graphs/ForecastGraph';
import { CurrentWeatherDisplay} from './CurrentWeatherDisplay/CurrentWeatherDisplay';
import { Locator } from './Locator/Locator';
import { AlertBox } from './AlertBox/AlertBox';
import { SearchBar } from './SearchBar/SearchBar';
import "../styles/Main.css";

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
            dailyData: [],
            units: "F",
            loading: true,
            canLoad: true
        };
        this.stateHandler = this.stateHandler.bind(this);
    }

    stateHandler(values) {
        this.setState(values);
    }

    render() {
        return (
            <Container maxWidth="lg" id="main-view">
                <HeaderHook />
                <SearchBar mainStateHandler={this.stateHandler}/>
                <div className='alertBox'>
                    <AlertBox 
                        temperature={this.state.temperature}
                    /> 
                </div>
                <div className="spacer"></div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <div className="main-component">
                            <Locator 
                                stateHandler={this.stateHandler}
                            />
                            <div className="spacer"></div>
                            <CurrentWeatherDisplay 
                                city={this.state.city}
                                country={this.state.country}
                                temperature={this.state.temperature}
                                humidity = {this.state.humidity}
                                uvIndex = {this.state.uvIndex}
                                windSpeed = {this.state.windSpeed}
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                                icontype = 'fas fa-sun'
                            />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="main-component">
                            <HourGraph 
                                hourlyData={this.state.hourlyData} 
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                            />
                            <div className="spacer"></div>
                            <ForecastGraph 
                                dailyData={this.state.dailyData}
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    } 
};