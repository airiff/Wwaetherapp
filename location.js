var request = require('request');
var url = 'http://ipinfo.io';



//using promises instead of calback

module.exports =  function () {
    return new Promise(function (resolve, reject){
        request({
            url: url, 
            json: true
        },  function (error, response, body){
            if (error){
                reject ('Unable to fetch data');
            }    
            else {
                resolve (body);
            }    
        });
    });
}
            


/*function(callback){
    request({
        url: url, 
        json: true
    },  function (error, response, body){
        callback(body);
        });
}
*/