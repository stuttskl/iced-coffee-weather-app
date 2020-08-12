var express = require('express');
const axios = require('axios');

const router = express.Router();

// Don't delete! Now it is used for getting weather for a specific city
router.get("/", function(req,res) {
  let formattedQuery;
  let city = req.query.value ? req.query.value.toString() : "";
  let state = req.query.state ? req.query.state.toString() : "";
  let country = req.query.country ? req.query.country.toString() : "";
  console.log(req.query);

  if (req.query.value) {
    formattedQuery = city + "," + state + "," + country;
    let url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${formattedQuery}&appid=${process.env.WEATHER_API_KEY}`);
    axios.get(url)
      .then(function(response) {
        res.send(response.data);
      })
      //catch error
      .catch(function(error) {
        console.log(error);
        res.sendStatus(400);
      });
  }
  else {
    res.sendStatus(400);
  }
});

router.post("/graphdata", (req, res) => {
  let params = req.body;

  let url = `https://api.openweathermap.org/data/2.5/onecall?` +
            `lat=${params.lat}&lon=${params.long}&exclude=minutely&appid=${process.env.WEATHER_API_KEY}`;

  axios.get(url)
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    res.sendStatus(error.response.status);
  }) 
});

router.post('/getbycoords', (req, res) => {
  let params = req.body;
  let url = `http://api.openweathermap.org/data/2.5/weather?` +
            `lat=${params.lat}&lon=${params.long}&appid=${process.env.WEATHER_API_KEY}`;

  axios.get(url)
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    res.sendStatus(error.response.status);
  })
});

module.exports = router;

  