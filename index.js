var fs = require('fs');

let stack = [0,0,0,0,0];

let lineList = fs.readFileSync('test.txt','utf8', function(err, data) {
  return data;
 });

lineList = lineList.split('\n');

let splitLineList = lineList.map(line => line.split(' '));
let i = 0;
while (true) {
  console.log("Step: ", i);
  console.log("Command: ", splitLineList[i][0]);
  console.log("Register: ", splitLineList[i][1]);
  console.log("Value: ", stack[splitLineList[i][1]-1] );
  console.log(stack[splitLineList[i][1]-1] == 0);
  console.log("============");
  if (splitLineList[i][0] == "inc") { stack[splitLineList[i][1]-1] += 1;}
  else if (splitLineList[i][0] == "dec") { stack[splitLineList[i][1]-1] -= 1 }
  else if (splitLineList[i][0] == "jmp") {i = splitLineList[i][1] }
  else if (splitLineList[i][0] == "isz") {if (stack[splitLineList[i][1]-1] == 0) {i++}}
  // else if (splitLineList[i][0] == "isz") {i++}
  else if (splitLineList[i][0] == "stp") {break;}
  i++;
}

console.log("stack", stack)
