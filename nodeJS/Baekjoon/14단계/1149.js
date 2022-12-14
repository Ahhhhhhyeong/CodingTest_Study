/** RGB 거리 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const rgb = input.map(v => v.split(' ').map(x => +x));

const memo = [...new Array(N+1)].map(v => new Array(3).fill(0));
memo[1] = rgb[0];
for(let i = 2; i <= N; i++){
    let red = Math.min(memo[i-1][1], memo[i-1][2]) + rgb[i-1][0];
    let green = Math.min(memo[i-1][0], memo[i-1][2]) + rgb[i-1][1];
    let blue = Math.min(memo[i-1][0], memo[i-1][1]) + rgb[i-1][2];
    memo.push([red, green, blue]);
}    

console.log(Math.min(...memo[parseInt(N)])); 
