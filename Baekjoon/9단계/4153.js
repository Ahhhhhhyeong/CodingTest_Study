/** 직각삼각형 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath)
              .toString()
              .trim()
              .split('\n')
              .map(x => x.split(' ').map(Number));
for(let i = 0; i < input.length - 1; i++){
    let arr = input[i].sort((a,b) => a - b);
    console.log(arr[0]**2 + arr[1]**2 === arr[2]**2 ? "right" : "wrong");
}