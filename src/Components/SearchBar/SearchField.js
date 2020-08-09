import TextField from '@material-ui/core/TextField';
import React from 'react';

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
    console.log("Submitted!");
  }

  return (
    <form id="search-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City Search" variant="outlined" fullWidth onChange={handleChange}/>
    </form>
  );
};