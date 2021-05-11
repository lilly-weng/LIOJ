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
  let stairs = lines[1].split(" ");
  //corner case
  if (Number(n) === 1) {
    console.log(1);
    return;
  }
  // 雙指針
  let slow = 0;
  let fast = 1;
  let max = 0;

  while (fast < n) {
    if (stairs[slow] === stairs[fast]) {
      tmp_max = fast - slow + 1;
      if (tmp_max > max) {
        max = tmp_max;
      }
      fast++;
    } else {
      slow = fast;
      fast = fast + 1;
      tmp_max = 1;
      if (tmp_max > max) {
        max = tmp_max;
      }
    }
  }
  console.log(max);
}
