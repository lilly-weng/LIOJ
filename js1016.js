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

//LIOJ 1016
function solve(lines) {
  //取數字
  let people = Number(lines[0]);
  let A = 0;
  let B = 0;
  //corner case
  if (people === 1) {
    console.log("PEACE");
    return;
  }

  for (let i = 1; i <= people; i++) {
    if (lines[i] === "A") {
      A++;
    } else {
      B++;
    }
  }

  if (A === people || B === people) {
    console.log("PEACE");
  }

  if (A > B) {
    for (let i = 1; i <= people; i++) {
      if (lines[i] === "B") {
        console.log(i);
      }
    }
  } else if (A < B) {
    for (let i = 1; i <= people; i++) {
      if (lines[i] === "A") {
        console.log(i);
      }
    }
  } else {
    console.log("PEACE");
  }
}
