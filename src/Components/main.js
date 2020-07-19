import React from 'react';
import Button from '@material-ui/core/Button';

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
                <h1>Welcome to Weather Roasted</h1>
                <Button variant="contained" color="primary">
                    Hello World
                 </Button>
            </div>
        )
    }
} 

export default Main;