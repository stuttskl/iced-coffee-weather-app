var express = require('express');
const axios = require('axios');

const router = express.Router();

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

  