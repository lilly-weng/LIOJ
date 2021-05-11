var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function solve(lines) {
  let num = lines[0];
  //console.log(num);
  let n = 0;
  let sum = 0;

  for (let i = 1; i <= 1000; i++) {
    n = i * i;
    sum += n;
    if (n > num) {
      sum -= i * i;
      console.log(sum);
      break;
    }
  }
}
