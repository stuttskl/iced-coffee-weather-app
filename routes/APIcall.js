var express = require('express');
const axios = require('axios');

const router = express.Router();


router.get("/", function(req,res) {
  axios.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=" + process.env.WEATHER_API_KEY)
    .then(function(response) {
      res.send(response.data);
    })
    //catch error
    .catch(function(error) {
      res.sendStatus(400);
    })
});

router.post("/graphdata", (req, res) => {
  console.log(params);

  // Make One Call here
  let url = `http://api.openweathermap.org/data/2.5/weather?` +
            `lat=${params.lat}&lon=${params.long}&appid=${process.env.WEATHER_API_KEY}`;

  console.log(url);

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
  console.log(params);
  let url = `http://api.openweathermap.org/data/2.5/weather?` +
            `lat=${params.lat}&lon=${params.long}&appid=${process.env.WEATHER_API_KEY}`;

  console.log(url);

  axios.get(url)
  .then(function(response) {
    res.send(response.data);
  })
  .catch(function(error) {
    res.sendStatus(error.response.status);
  })
});

module.exports = router;

  