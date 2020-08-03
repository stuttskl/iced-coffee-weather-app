export const getGraphData = async (position) => {
    let coords = {
      lat: position.latitude,
      long: position.longitude,
    };
  
    let result;
  
    // Make a POST request to the server with latitude/longitude data in the request body.
    await fetch(window.location.href + 'weather/graphdata', {
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
    
    console.log(result);

    return result;
  };