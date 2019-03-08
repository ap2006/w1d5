var chalk = require("chalk");

var message = chalk.blue.bgRed.bold('Hello world!');
var newmessage = (chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
console.log(message);
console.log(newmessage);