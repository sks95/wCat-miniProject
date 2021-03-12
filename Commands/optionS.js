let fs = require('fs');
let readline = require('readline');

function remLineBreaks(filepath){
    //console.log(filepath.length);
    for(let i = 1; i < filepath.length; i++){
        // read file
        fs.readFile(filepath[i], 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            // replace multiple line break with single line break
            console.log(data.replace(/(\r\n|\r|\n){2,}/g, '$1\n'));
          })
    }
}

module.exports = {
    lineBreak: remLineBreaks
}