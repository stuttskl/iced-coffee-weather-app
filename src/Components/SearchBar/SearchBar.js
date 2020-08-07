import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../../styles/SearchBar.css';
import Container from '@material-ui/core/Container';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container maxWidth="sm" id="main-view">
        <form id="search-form" noValidate autoComplete="off">
          <TextField id="outlined-basic" label="City Search" variant="outlined" fullWidth/>
        </form>
      </Container>
    );
  }
};