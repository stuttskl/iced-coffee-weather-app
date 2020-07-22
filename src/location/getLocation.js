const success = (position) => {
  console.log(position);
}

const error = (err) => {
  console.log(err);
}

export const getLocation = () => {
  if (navigator.geolocation) {
    console.log("Getting location...");
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Can't get location");
  }
}