let fs = require('fs');
let readline = require('readline');

// filepath = process.argv.slice(2);

function dispLineNum(filepath){
    for(let i = 1; i < filepath.length; i++){
        // let counter = 1;
        // read file
        fs.readFile(filepath[i], 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // Remove all the blank lines
            data = data.replace(/^\s*[\r\n]/gm, "");
            // Add line number to all lines
            data = data.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n')
            console.log(data);
          })
    }
}
// dispLineNum(filepath);

module.exports = {
    dispLine: dispLineNum
}