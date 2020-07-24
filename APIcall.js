const axios = require('axios');

var app = express();

app.get("/results", function(req,res) {
    axios("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=<enter your API key here>", function(error, response, body) {
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.send(results["temp"]);
        }
    });
});

