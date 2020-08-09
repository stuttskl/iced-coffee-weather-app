import React from 'react';
import '../../styles/SearchBar.css';
import Container from '@material-ui/core/Container';
import { SearchField } from './SearchField';
import { getSuggestions, Suggestions } from './Suggestions';
import { parseInput } from './parseInput';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSuggestions: false,
      textValue: "",
      loading: true,
      suggestions: [],
    }
    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(values) {
    this.setState(values);
  }

  componentDidUpdate() {
    if (this.state.loading && this.state.textValue != "") {
      let values = this.state.textValue.split(',').map(value => value.trim());
      getSuggestions(parseInput(values), this.stateHandler);
    }
  }

  async updateLocation() {
    let result;
    let graphDataResults;
    result = await getLocationAndWeatherFromCity(query);
    if (result.success) {
      console.log(result);
      graphDataResults = await getGraphData({ latitude: result.coord.lat, longitude: result.coord.lon });
    }
    else {
      console.log("DEBUG: Couldn't find this place?");
    }

    let newData;
    if (result.success === true && graphDataResults.success === true) {

      let hourlyData = [];
      for (let i=0; i < 24; i++){
        hourlyData[i] = {
          "time": graphDataResults.hourly[i].dt,
          "temperature": ((graphDataResults.hourly[i].temp - 273.15) * 1.8 + 32).toFixed(2)
        }
      }
      console.log(hourlyData);

      newData = {
        city: result.name,
        country: result.sys.country,
        temperature: result.main.temp,
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        hourlyData: hourlyData,
        loading: false,
        canLoad: true
      }
    }
    else {
      newData = {
        canLoad: false
      }
    }
    this.props.mainStateHandler(newData);
  }

  render() {
    return (
      <Container maxWidth="sm" id="search-view">
        <SearchField stateHandler={this.stateHandler} suggestions={this.state.suggestions}/>
        {this.state.textValue != "" && <Suggestions 
          text={this.state.textValue}
          suggestions={this.state.suggestions}
          loading={this.state.loading} 
          handler={this.stateHandler}
        />}
      </Container>
    );
  }
}