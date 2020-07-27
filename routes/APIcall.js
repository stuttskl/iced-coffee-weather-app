var express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/", function(req,res) {
    axios.get("https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=7&appid="+ process.env.WEATHER_API_KEY)
        .then(function(response) {
            res.json(response);
        })
        //catch error
        .catch(function(error) {
            res.send(error);
    });
});

module.exports = router;