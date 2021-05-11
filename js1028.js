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
  let nums = lines[0].split(" ");
  let n = nums.length;
  //console.log(nums.length);
  //console.log(nums[1].length);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      sum += Number(nums[i][j]);
    }
  }
  //console.log(sum);
  while (sum >= 10) {
    let ten = parseInt(sum / 10);
    let bit = parseInt(sum % 10);
    sum = ten + bit;
  }
  console.log(sum);
}
