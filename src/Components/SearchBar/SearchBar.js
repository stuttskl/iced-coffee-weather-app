import React from 'react';
import '../../styles/SearchBar.css';
import Container from '@material-ui/core/Container';
import { SearchField } from './SearchField';
import { Suggestions } from './Suggestions';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingSuggestions: false,
      textValue: "",
      loading: true,
    }
    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(values) {
    this.setState(values);
  }

  render() {
    return (
      <Container maxWidth="sm" id="search-view">
        <SearchField stateHandler={this.stateHandler}/>
        {this.state.textValue != "" && <Suggestions text={this.state.textValue} loading={this.state.loading}/>}
      </Container>
    );
  }
}