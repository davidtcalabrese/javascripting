const fs = require('fs');

let bufferObj = fs.readFileSync(process.argv[2]);

const str = bufferObj.toString();

let arr = str.split('\n');

const result = arr.length-1;

console.log(result);