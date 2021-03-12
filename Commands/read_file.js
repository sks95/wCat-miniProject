var fs = require('fs');
var path = require('path');

function dispCont(input){
    for(let i = 0; i < input.length; i++){
        let fileName = path.basename(input[i]);
        
        if (fs.existsSync(fileName)) {
            //file exists
            let data = fs.readFileSync(fileName, 'utf8');
            console.log(data); 
        }
        else {
            console.log("File does not exists.");
        }
    }
}

module.exports = {
    read_files: dispCont
}




