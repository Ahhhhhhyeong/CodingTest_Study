const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const memo = Array.from({length: N}, () => 0);

memo[1] = 1;
memo[2] = 2;
memo[3] = 3;

for(let i = 4; i <= N; i++){
    memo[i] = (memo[i - 2] + memo[i - 1]) % 15746;
}


console.log(memo[N]);
