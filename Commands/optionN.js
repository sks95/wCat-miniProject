let fs = require('fs');
let readline = require('readline');

// filepath = process.argv.slice(2);
function dispLineNum(filepath){
    for(let i = 1; i < filepath.length; i++){
        let count = 1;
        let readInterface = readline.createInterface({
            input: fs.createReadStream(filepath[i]),
            output: process.stdout,
            console: false
        });    
        readInterface.on('line', function(line) {
            console.log(count+". "+line);
            count++;
        });
    }
}

module.exports = {
    dispLine: dispLineNum
}
