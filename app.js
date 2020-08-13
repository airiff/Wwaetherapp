
var weather = require('./weather.js');
var location =  require('./location.js');


var argv = require('yargs')
    .options('location', {
        demand: false,
        alias: 'l',
        description: 'Pls enter your location',
        type: 'string'
    })
    .help('help')
    .argv;

//console.log(argv.location);

if (argv.l){
    console.log('Location input by user')
    weather(argv.l, function(currentWeather){})
}

else {
    location(function(location){
        console.log('Location fetched from IP')
        weather(location.city, function(currentWeather){})
    })
}
/*weather(function (currentWeather){
console.log(currentWeather);

});


if (typeof body.city === 'string' && argv.l.length > 0){
    weather(argv.l, function(currentWeather){
        console.log('Location acheived')
    });
}

else{
    location(function(error, location){
        if (error) {
            console.log(error)
        } 
        else {
            //console.log(location);
            console.log(`Current city: ${location.city}`);
            console.log(`Current log/lat: ${location.loc}`);
            weather(argv.l, function(currentWeather){
                console.log('Location acheived')
            });
        }
        
    });
    
}
*/



