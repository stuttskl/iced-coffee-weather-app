import { countryToCode, countryCodes } from '../../constants/countrycodes';

const countryKeys = Object.keys(countryToCode);

export const parseInput = (rawString) => {
  let values = rawString.toString().split(',').map(value => value.trim());
  values = values.filter(value => value.length > 0);

  if (values.length == 2) {
    // Check to see if we have a country code for the input
    let country = countryKeys.filter(key => key.toLowerCase().startsWith(values[1].toLowerCase()));
    console.log(country);
    console.log(countryToCode[country[0]])
    values = [values[0], "", countryToCode[country[0]]];
  }
  else if (values.length == 3) {
    let country = countryKeys.filter(key => key.toLowerCase().startsWith(values[2].toLowerCase()))[0];
    values = [values[0], values[1], countryToCode[country]];
  }
  else {
    values = [values[0], "", ""];
  }
  return values;
};
