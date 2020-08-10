import TextField from '@material-ui/core/TextField';
import React from 'react';

// The form the user types a location into
export const SearchField = (props) => {
  const handleChange = (e) => {
    let value = e.target.value;
    props.stateHandler({
      textValue: value,
      loading: true
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateLocation(0);
  }

  return (
    <form id="search-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City Search" variant="outlined" fullWidth onChange={handleChange}/>
    </form>
  );
};