import TextField from '@material-ui/core/TextField';
import React from 'react';

export const SearchField = (props) => {
  const handleChange = (e) => {
    let value = e.target.value;
    props.stateHandler({
      textValue: value
    })
  };

  return (
    <form id="search-form" noValidate autoComplete="off">
      <TextField id="outlined-basic" label="City Search" variant="outlined" fullWidth onChange={handleChange}/>
    </form>
  );
};