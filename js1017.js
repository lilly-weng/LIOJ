var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on("line", function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on("close", function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
//貪婪小偷
function solve(lines) {
  let bag = lines[0];
  //console.log('bag:', bag);
  let maxStuff = lines[1];

  //case1: 如果物件小於包包容量，就全都要
  if (maxStuff < bag) {
    let sum1 = 0;
    for (let k = 2; k < lines.length; k++) {
      sum1 += parseInt(lines[k]);
    }
    console.log(sum1);
    return;
  }

  //設定一個 array 來放東西的價值
  let arr = [];
  //case2: 如果物件大於包包容量，就要前幾大價值的
  for (let i = 2; i < lines.length; i++) {
    arr.push(lines[i]);
  }
  //sort in a descending order
  arr.sort(function (a, b) {
    return b - a;
  });
  //console.log('arr:', arr);
  //加總前bag數的值
  let sum = 0;
  for (let j = 0; j < bag; j++) {
    sum += parseInt(arr[j]);
  }

  console.log(sum);
}
