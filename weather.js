var request = require('request');
module.exports = function( location, callback){
    var encodedLocation = encodeURIComponent(location);
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=6f9a9312770ef4d44444b2a39bc9e7ad`;
    
    request({
        url: url, 
        json: true
    },  function (error, response, body){
         if (error) {
             callback('Unable to fetch the weather info!');
         }
         else {
            console.log(`It is ${body.main.temp} in ${body.name}`)
         }

        
    });
}