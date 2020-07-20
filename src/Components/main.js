import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { mainStyles } from '../styles/styles';

/* One way of styling with Material UI is to use hooks.
   However, these only work inside functions, so we can't have this with
   the Main class below.*/
function HeaderHook() {
    const classes = mainStyles();
    return (
        <div className={classes.mainHeader}>
            <Typography variant="h3" gutterBottom>
                Welcome to Weather Roasters
            </Typography>
        </div>
    );
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: 50,
            uvIndex: 10,
            humidity: 60,
            windSpeed: 12
        };
    }

    render() {
        return (
            <div>
                <HeaderHook />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        )
    }
} 

export default Main;