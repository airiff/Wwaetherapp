function getLocation() {
    return new Promise(function(resolve, reject) {
        resolve('Kathmandu')
    });
}

function getWeather(location) {
    return new Promise(function(resolve, reject) {
        resolve(`It's 78 in ${location}!`);
    });
}

getLocation().then(function (location){
    return getWeather(location);
}).then(function (currentWeather){
    console.log(currentWeather)
});




/*function doWork (shouldFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (shouldFail === true){
                reject('error message');
            }
            else {
                resolve('sucess')
            }
        }, 1000);
    });
}

doWork().then(function (message) {
    console.log(message);
    return doWork (true);
}).then(function (message){
    console.log(message);
}).catch(function (error){
    console.log(error);
});

*/
















































/*function doWork() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('done!');
            resolve();
        }, 3000);
    });
}

doWork().then(function(){
    return doWork();
}).then(function(){
    console.log('all done!');
});


*/