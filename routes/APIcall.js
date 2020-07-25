var express = require('express');
const router = express.Router();

const axios = require('axios');

router.get("/", function(req,res) {
    //axios("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid="+ process.env.WEATHER_API_KEY, function(error, response, body) {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid="+ process.env.WEATHER_API_KEY)
      .then(function(response) {
          res.send(response.data);
      })
      .catch(function(error) {
          res.sendStatus(400);
      })
      
    //if(!error && response.statusCode == 200){
            //var parsedData = JSON.parse(body);
           // res.send(results["temp"]);
      //  }
   // });
    });
//});
module.exports = router;
