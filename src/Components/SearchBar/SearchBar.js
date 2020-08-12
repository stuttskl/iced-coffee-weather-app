import React from 'react';
import '../../styles/SearchBar.css';
import Container from '@material-ui/core/Container';
import { SearchField } from './SearchField';
import { getSuggestions, Suggestions } from './Suggestions';
import { parseInput } from './parseInput';
import { getLocationAndWeatherFromCity } from '../../location/getLocation';
import { getGraphData } from '../Graphs/getGraphData';
import { formatHourlyData, formatDailyData } from '../Graphs/graphFormat';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSuggestions: true,
      textValue: "",
      loading: true,
      suggestions: [],
    }
    this.stateHandler = this.stateHandler.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
    this.handleClickIn = this.handleClickIn.bind(this);
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

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickIn, false);
  }

  // Used for making the suggestions box go away if the user clicks away from this element
  handleClickIn(e) {
    if (this.node.contains(e.target)) {
      this.setState({showingSuggestions: true});
      return;
    }
    this.setState({showingSuggestions: false});
  }

  async updateLocation(index=0) {
    let result;
    let graphDataResults;
    let query;

    // Make sure we show a loading icon while retrieving weather data
    this.props.mainStateHandler({loading: true});
    if (this.state.suggestions.length > 0) {
      let values = this.state.suggestions[index];
      query = "&value=" + values.name + "&state=" + values.state + "&country=" + values.country;
    }
    else {
      let values = parseInput(this.state.textValue.split(',').map(value => value.trim()));
      query = "&value=" + values[0] + "&state=" + values[1] + "&country=" + values[2];
    }

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

      const hourlyData = formatHourlyData(graphDataResults.hourly);
      const dailyData = formatDailyData(graphDataResults.daily);

      newData = {
        city: result.name,
        country: result.sys.country,
        temperature: result.main.temp,
        humidity: result.main.humidity,
        windSpeed: result.wind.speed,
        hourlyData: hourlyData,
        dailyData: dailyData,
        uvIndex: graphDataResults.current.uvi,
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
      <Container maxWidth="sm" id="search-view" ref={node => this.node = node}>
        <SearchField 
          stateHandler={this.stateHandler} 
          suggestions={this.state.suggestions}
          updateLocation={this.updateLocation}
        />
        {(this.state.textValue != "" && this.state.showingSuggestions) && 
        <Suggestions 
          text={this.state.textValue}
          suggestions={this.state.suggestions}
          loading={this.state.loading} 
          handler={this.stateHandler}
          updateLocation={this.updateLocation}
        />}
      </Container>
    );
  }
}