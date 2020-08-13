// 3rd-party dependencies
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


// Dependencies created by our group
import { mainStyles } from '../styles/styles';
import { HourGraph } from './Graphs/HourGraph';
import { ForecastGraph } from './Graphs/ForecastGraph';
import { CurrentWeatherDisplay} from './CurrentWeatherDisplay/CurrentWeatherDisplay';
import { Locator } from './Locator/Locator';
import { AlertBox } from './AlertBox/AlertBox';
import { SearchBar } from './SearchBar/SearchBar';
import { changeTempUnits } from './tempUnitChange';
import { withStyles } from '@material-ui/core/styles';

import "../styles/Main.css";

export const useStyles = makeStyles({
    mainHeader: {
      margin: "5px",
      borderRadius: "5px",
      textAlign: "center"
    }
});

/* One way of styling with Material UI is to use hooks.
   However, these only work inside functions, so we can't have this with
   the Main class below.*/
function HeaderHook() {
    const classes = useStyles();
    
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
            icon: '01d.png',
            description: 'raining',
            loading: true,
            canLoad: true,
            //tempCurrentlyF: true
        };
        this.stateHandler = this.stateHandler.bind(this);
    }

    // kind of a hacky way to conditionally change the background color
    componentDidUpdate() {     
        let color = ''
        let isDayTime = this.state.icon.includes('d');
        if(isDayTime) {
            color = 'linear-gradient(#FDC18F, #FDB790, #FEAC8F)'
        } else if(!isDayTime) {
            color = ' linear-gradient(#7DB6C4, #6E789F, #0A2849)'
        } else {
            color = 'linear-gradient(#A08EAD, #8472A9, #6B58A3)'
        }
        document.body.style = `background: ${color};`; 
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
                        icon={this.state.icon}
                        loading = {this.state.loading}
                        canLoad = {this.state.canLoad}
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
                                icon = {this.state.icon}
                                description = {this.state.description}
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                                icontype = 'fas fa-sun'
                                stateHandler = {this.stateHandler}
                                units = {this.state.units}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div className="main-component">
                            <HourGraph 
                                hourlyData={this.state.hourlyData} 
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                                units = {this.state.units}
                            />
                            <div className="spacer"></div>
                            <ForecastGraph 
                                dailyData={this.state.dailyData}
                                loading = {this.state.loading}
                                canLoad = {this.state.canLoad}
                                units = {this.state.units}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    } 
};