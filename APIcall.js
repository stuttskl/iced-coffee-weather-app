const axios = require('axios');

var app = express();

app.get("/results", function(req,res) {
    axios("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=34e47a9c09f7eed541ec45ab96dda7e8", function(error, response, body) {
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.send(results["temp"]);
        }
    });
});

