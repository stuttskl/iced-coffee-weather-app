var express = require('express');
const router = express.Router();
const axios = require('axios');

router.get("/", function(req,res) {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid="+ process.env.WEATHER_API_KEY)
        .then(function(response) {
            res.send(response.data);
        })
        //catch error
        .catch(function(error) {
            res.sendStatus(400);
    });
});


module.exports = router;