const express = require("express");
const DEFAULT_PORT = 3000;
let portNumber  = DEFAULT_PORT;
let app = express();
app.use(express.static('public'));
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