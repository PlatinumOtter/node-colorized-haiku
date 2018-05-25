var fs = require('fs');
var haiku = require('haiku-random');
var color = require('cli-color');

var printHaiku = function() {
    console.log(color.red('Here is your Haiku:'))
    var thehaiku = haiku.random();
    console.log(color.cyan.bgBlack(thehaiku));
    writeFile(thehaiku);
}

function writeFile(input) {
    fs.writeFile("haiku.txt", input, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("File saved.")
    })
}

printHaiku()