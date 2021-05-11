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
//靈魂伴侶
//判斷兩數是否相等
function solve(lines) {
  for (let i=0; i<lines.length; i++) {
      let temp = lines[i].split(' ');
      let a = Number(temp[0]);
      let b = Number(temp[1]);
      
      if ( a === b) {
          console.log('Yes') ;
      } else {
          console.log('No');
      }
  }
}
