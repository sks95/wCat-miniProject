var fs = require('fs');
const readFileObj = require('./Commands/read_file');
const remLineBrObj = require('./Commands/optionS')
const dispLineNumObj = require('./Commands/optionN');
const dispNELNumObj = require('./Commands/optionB');

// Take Input
input = process.argv.slice(2);

// node wCat <option> filename1 filename2 ..
let option = input[0];

if(option !== '-s' && option !== '-n' && option !== 'b'){
    readFileObj.read_files(input);
}
else if(option == '-s' || option == '-n' || option == 'b'){
    
    switch(option){
        case '-s':
            remLineBrObj.lineBreak(input);
            break;
        case '-n':
            dispLineNumObj.dispLine(input);
            break;
        case '-b':
            dispNELNumObj.dispLine(input);
            break;
        default:
            console.log("Invalid Option");
            break;
    }
}
