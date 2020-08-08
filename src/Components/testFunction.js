export const testFunction = (value, enabled) => {
  if (enabled) {
    return value - 273.15;
  } else {
    return (value - 273.15) * 1.8 + 32;
  }
}