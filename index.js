var haiku = require('haiku-random');
var color = require('cli-color');

console.log(color.red('Here is your Haiku:'))
var thehaiku = haiku.random();
console.log(color.cyan.bgBlack(thehaiku));