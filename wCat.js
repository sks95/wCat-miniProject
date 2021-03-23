let fs = require("fs");

// Input from command line
let input = process.argv.slice(2);

let opt = [];
let file = [];
let str = ``;

for (let i = 0; i < input.length; i++) {
    // Check for paramter option and store opt
    if (input[i].startsWith("-")) {
        opt.push(input[i]);
    } else {
    // Add all files in file arr
        file.push(input[i]);
    }
}

// Check if each file exist
for (let j = 0; j < file.length; j++) {
    if (fs.existsSync(file[j])) {
        // Append content in string
        str += fs.readFileSync(file[j]).toString();
    } else {
        console.log("File does not exist.");
        return;
    }
}
str = str.split("\n");

if (opt.includes("-s")) {
    str = OptionS(str);
}
if (opt.includes("-b") && opt.includes("-n")) {
    if (opt.indexOf("-n") > opt.indexOf("-b")) {
        //implementing -b
        str = OptionB(str);
    } else {
        //implementing -n
        str = OptionN(str);
    }
} else {

    if (opt.includes("-n")) {
        //implementing -n
        str = OptionN(str);
    }
    if (opt.includes("-b")) {
        //implementing -b
        str = OptionB(str);
    }
}

str = str.join("\n");
console.log(str);

// Remove multiple blank line and include only 1
function OptionS(arr) {
    let v = [];
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "" || arr[i] == "\r") {
            if (flag === true) {
                continue;
            } else {
                v.push(arr[i]);
                flag = true;
            }
        } else {
            v.push(arr[i]);
            flag = false;
        }
    }
    return v;
}
// Print all line numbers
function OptionN(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i+1 + " " + arr[i];
    }
    return arr;
}
// Print line numbers of non-empty lines only
function OptionB(arr) {
    let numLine = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "" && arr[i] !== "\r") {
            arr[i] = numLine + " " + arr[i];
            numLine++;
        }
    }
    return arr;
}