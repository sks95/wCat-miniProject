var fs = require('fs');
var path = require('path');

function dispCont(filepath){
    for(let j = 0; j < filepath.length; j++){
        // Check if file exists or not
        let val = fs.existsSync(filepath[j]);
        
        // If file exists
        if (val) {
            let data = fs.readFileSync(filepath[j], 'utf8');
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




