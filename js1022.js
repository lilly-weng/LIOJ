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
// 印出金字塔
function solve(lines) {
//一共有 n 層
//第 i 層會有 2i - 1 個星星
//星星會置中
//需要 n - i 個空白
    let n = lines[0];
    console.log(n);
    let str = '';
    let x = 0
    for (let i = 0; i < n; i++){
       //左邊空格
        for (let j = (n-1); j > i; j--) {
           console.log('$');
        }
        for (let k = 0; k <= x; k++) {
            console.log('*')
        }
        console.log('\n');
        x+=2;
      
    }
   
   
}
