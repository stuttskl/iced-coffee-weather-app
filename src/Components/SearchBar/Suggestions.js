import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { countryCodes } from '../../constants/countrycodes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid gray',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
}));

// Fetch city/location suggestions from the back end API
export const getSuggestions = async (values, handler) => {
  if (values && values[0] != "") {
    let result;

    await fetch(window.location.href + `citylookup?value=${values[0]}&state=${values[1]}&country=${values[2]}`, {
      method: 'GET',
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      result = data;
      handler({ suggestions: data, loading: false });
    })
    .catch((error) => {
      console.log(error);
      result = [];
    });  
  }
}

export const Suggestions = (props) => {
  const classes = useStyles();

  let suggestionsWidget;

  if (props.loading) {
    suggestionsWidget = <LinearProgress />
  }
  else {
    suggestionsWidget =
      props.suggestions.map((suggestion, index) => {
        const country = countryCodes[suggestion.country];
        const state = suggestion.state != "" ? `${suggestion.state}, ` : '';
        let formattedName = `${suggestion.name}, ${state}${country}`;
        return (
          <ListItem button divider key={index} onClick={() => {props.updateLocation(index)}}>
            <ListItemText primary={formattedName} />
          </ListItem>
        );
      });
  }

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      {suggestionsWidget}
    </List>
  );
};