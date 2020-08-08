import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid gray',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },
}));

export const Suggestions = (props) => {
  const classes = useStyles();
  const testData = ["Seattle", "Portland", "Vancouver", "Los Angeles", "New York"];

  let suggestionsWidget;

  if (props.loading) {
    suggestionsWidget = <LinearProgress />
  }
  else {
    suggestionsWidget =
      testData.map((cityName, index) => {
        return (
          <ListItem button divider key={index}>
            <ListItemText primary={cityName} />
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