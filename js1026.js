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
  let n = lines[0];
  let nums = lines[1].split(" ");
  //思路: 後面除前面都一樣
  let a = nums[1] / nums[0];
  let i = 0;
  while (i + 1 < n) {
    if (nums[i + 1] / nums[i] === a) {
      i++;
    } else {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
