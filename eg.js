/*
setTimeout(function(){
    console.log('1');
}, 2000);

setTimeout(function(){
    console.log('5');
}, 1000);

console.log('2');

*/
function printMsg(message){
    setTimeout(function(){
    console.log(`This message is printed in 2 seconds, message: ${message}`);
}, 2000);
}

printMsg('2020');

