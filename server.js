const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require("./routes/APIcall");
require('dotenv').config();
const DEFAULT_PORT = 3000;
let portNumber  = DEFAULT_PORT;
let app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/weather", apiRoutes);

if (process.argv.length > 2 && process.argv[2]) {
  portNumber = process.argv[2];
  if (!parseInt(portNumber, 10)) {
    portNumber = DEFAULT_PORT;
    console.log("Invalid port specified - falling back to port " + DEFAULT_PORT);
  }
}

app.post('/weather/getbycoords', (req, res) => {
  let params = req.body;
  //console.log(params);

  // TODO - use latitude and longitude info to make a call to the weather API
  // params.lat is the latitude, params.long is the longitude.

  // Mock data to send back to the client.
  let weatherData = {
    city: "Seattle",
    country: "USA",
    temperature: 293, //kelvin
  }
  res.send(weatherData);
})

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(portNumber, () => {
  console.log("Listening on port " + portNumber);
});