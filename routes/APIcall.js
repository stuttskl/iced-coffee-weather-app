var express = require('express');
var router = express.Router();

const axios = require('axios');

router.get("/", function(req,res) {
    axios("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid="+ process.env.WEATHER_API_KEY, function(error, response, body) {
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.send(results["temp"]);
        }
    });
});

module.exports = router;