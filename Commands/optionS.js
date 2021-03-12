let fs = require('fs');
let readline = require('readline');

function remLineBreaks(filepath){
    for(let i = 1; i < filepath.length; i++){
        let readInterface = readline.createInterface({
            input: fs.createReadStream(filepath[i]),
            output: process.stdout,
            console: false
        });    
        readInterface.on('line', function(line) {
            // /^\s*[\r\n]/gm
            line = line.replace(/^\s*$(?:\r\n?|\n)/gm,"");
        });
    }
}

module.exports = {
    lineBreak: remLineBreaks
}