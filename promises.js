var request = require('request');

function getWeather (location) {
    return new Promise(function(resolve, reject){
        var encodedLocation = encodeURIComponent(location);
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=6f9a9312770ef4d44444b2a39bc9e7ad`;
    
        request({
            url: url, 
            json: true
        }, function (error, response, body){
            if (error) {
                return reject('Unable to fetch the weather info!');
            }
            else {
                resolve(`It is ${body.main.temp} in ${body.name}`)
            }
            
        });
    });
}

getWeather('Pokhara').then(function (currentWeather){
        console.log(currentWeather);
}, function(error) {
    console.log(error);
});
















