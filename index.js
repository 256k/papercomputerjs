var fs = require('fs');
const process = require('process');

let stack = [0,0,0,0,0];

let lineList = fs.readFileSync(process.argv[2],'utf8', function(err, data) {
  if (err) console.log(err);
    else return data;
 });

lineList = lineList.split('\n').filter(line => (line[0] !== '#'));

let splitLineList = lineList.map(line => line.split(' '));
let i = 0;

while (true) {
  console.log("Step: ", i);
  console.log("Command: ", splitLineList[i][0]);
  console.log("Register: ", splitLineList[i][1], " | Value: ", stack[splitLineList[i][1]-1] );
  console.log("is zero: ", stack[splitLineList[i][1]-1] == 0);
  if (splitLineList[i][0] == "inc") { stack[splitLineList[i][1]-1] += 1;}
  else if (splitLineList[i][0] == "dec") { stack[splitLineList[i][1]-1] -= 1 }
  else if (splitLineList[i][0] == "jmp") {i = splitLineList[i][1] }
  else if (splitLineList[i][0] == "isz") {if (stack[splitLineList[i][1]-1] == 0) {i++}}
  else if (splitLineList[i][0] == "stp") {break;}
  console.log("stack after operation: ", stack)
  console.log("============");
  i++;
}

  console.log("============");
console.log("Final stack output: ", stack)
