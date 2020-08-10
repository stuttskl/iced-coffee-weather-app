export const getLocation = async () => {
  // First, use the geolocation API to get the latitude/longitude of the user
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    .then(async (position) => {
      // Success! Now ask the server to use openweathermap to get the city/country and weather
      let result = await getWeatherFromLocation(position);
      return result;
    }).catch((err) => {
      return {success: false, err: err};
    });
  } else {
    return {success: false};
  }
}

export const getWeatherFromLocation = async (position) => {
  let coords = {
    lat: position.coords.latitude,
    long: position.coords.longitude,
  };

  let result;

  // Make a POST request to the server with latitude/longitude data in the request body.
  await fetch(window.location.href + 'weather/getbycoords', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(coords),
  })
  .then(response => response.json())
  .then(data => {
    result = data;
    result.success = true;
  })
  .catch((error) => {
    result = { success: false };
  });

  return result;
};

export const getLocationAndWeatherFromCity = async (query) => {
  let result;

  await fetch(window.location.href + `weather?${query}`, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    result = data;
    result.success = true;
  })
  .catch((error) => {
    result = { success: false };
  });

  return result;
};