var express = require('express');
var fs = require("fs");

const router = express.Router();
const cityData = JSON.parse(fs.readFileSync('places.json'));

router.get("/", function(req,res) {
  console.log(req.query);
  const value = req.query.value
  
  
  if (value && value != "") {
    const toCheck = value.toString().toLowerCase();
    const arrayToSend = cityData
      .filter(word => {
        let stateCheck = true;
        let countryCheck = true;
        let nameCheck = word.name.toLowerCase().startsWith(toCheck);
        if (nameCheck && req.query.state) {
          stateCheck = word.state.startsWith(req.query.state.toUpperCase());
        }
        if (nameCheck && req.query.country) {
          countryCheck = word.country.startsWith(req.query.country.toUpperCase());
        }
        return nameCheck && stateCheck && countryCheck;
      })
      .splice(0, 6);
  
    console.log(JSON.stringify(arrayToSend));
    res.send(JSON.stringify(arrayToSend));
  }
  else {
    res.status(400).send(JSON.stringify({error: "Missing query"}));
  }
});

module.exports = router;
