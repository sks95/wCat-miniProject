let fs = require('fs');
let readline = require('readline');

function dispLineNum(filepath){
    for(let i = 1; i < filepath.length; i++){
        // let counter = 1;
        // read file
        fs.readFile(filepath[i], 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // Add line number for each line
            data = data.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n')
            console.log(data);
          })
    }
}

module.exports = {
    dispLine: dispLineNum
}
