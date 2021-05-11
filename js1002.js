var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  for (let i=0; i<lines.length; i++) {
      let temp = lines[i].split(' ');
      let a = Number(temp[0]);
      let b = Number(temp[1]);
      
      if ( a === 0 && b === 0) {
          return;
      }

      if (a === b) {
          console.log(a);
      } else if (a < b) {
          console.log(b);
      } else if (a > b) {
          console.log(a);
      } 
  }
}
