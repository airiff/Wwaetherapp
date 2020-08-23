    

module.exports = function(){
    console.log('test');
      
const { alias } = require('yargs');

var argv = require('yargs')
.command('hello', 'Say Hi', function(yargs){
    yargs.options({
        name: {
            demand: true,
            alias: 'n',
            description: 'Pls enter ur name'
        },
        lastname: {
            demand: true,
            alias: 'l',
            description: 'Pls enter ur lastname'
        }

    }).help('help')
})
.help('help')
.argv;
var command = argv._[0];
console.log(argv);

if (command === 'hello' && argv.name !== undefined && argv.lastname !== undefined) {
 console.log(`My name is ${argv.name} ${argv.lastname}`);
}

else if (command === 'hello'){
    console.log('hello world');
}
}
