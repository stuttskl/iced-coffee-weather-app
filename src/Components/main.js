import React from 'react';

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
            </div>
        )
    }
} 

export default Main;