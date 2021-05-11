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
  let symbol = nums[1];
  let sum = 0;
  if (Number(nums[0]) === 0 && Number(nums[2]) === 0) {
    console.log(0);
    return;
  }
  switch (symbol) {
    case "+":
      sum = Math.round(Number(nums[0]) + Number(nums[2]));
      console.log(sum);
      return;
    case "-":
      sum = Math.round(Number(nums[0]) - Number(nums[2]));
      console.log(sum);
      return;
    case "*":
      //console.log(nums[0]);
      sum = Math.round(Number(nums[0]) * Number(nums[2]));
      console.log(sum);
      return;
    case "/":
      sum = Math.round(Number(nums[0]) / Number(nums[2]));
      console.log(sum);
      return;
  }
}
