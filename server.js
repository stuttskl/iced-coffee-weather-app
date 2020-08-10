const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require("./routes/APIcall");
const cityLookupRoutes = require('./routes/CityLookup');
require('dotenv').config();
const DEFAULT_PORT = 3000;
let portNumber  = DEFAULT_PORT;
let app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for API calls and getting weather data
app.use("/weather", apiRoutes);
app.use("/citylookup", cityLookupRoutes);

if (process.argv.length > 2 && process.argv[2]) {
  portNumber = process.argv[2];
  if (!parseInt(portNumber, 10)) {
    portNumber = DEFAULT_PORT;
    console.log("Invalid port specified - falling back to port " + DEFAULT_PORT);
  }
}

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(portNumber, () => {
  console.log("Listening on port " + portNumber);
});