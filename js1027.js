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
  let nums = lines[0].split("-");
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  //console.log(arr);
  //紀錄總和
  let odd_sum = 0;
  let even_sum = 0;
  //奇數位是 2，偶數位是 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (j % 2 === 1) {
        // index 是奇數，表示是偶數的位置
        //console.log("偶數" + arr[i][j]);
        even_sum += Number(arr[i][j]);
        //console.log("偶數加總" + even_sum);
      } else {
        // index 是偶數，表示是奇數的位置
        let odd = Number(arr[i][j]) * 2;
        //console.log("奇數" + odd);
        if (odd >= 10) {
          odd = odd - 9;
        }
        //console.log("奇數" + odd);
        odd_sum += odd;
      }
    }
  }
  //減掉最後一個數字
  even_sum -= arr[3][3];
  let total_sum = even_sum + odd_sum;

  if (total_sum % 10 === 10 - Number(arr[3][3])) {
    if (Number(arr[0][0]) === 5) {
      console.log("MASTER_CARD");
      return;
    } else {
      console.log("VISA");
      return;
    }
  }
  console.log("INVALID");
}
