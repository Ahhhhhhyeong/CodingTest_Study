const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const memo = [...new Array(N + 1)].fill(-1);
memo[0] = 0;
memo[1] = 1;
memo[2] = 2;

const tile = (n) => {
    if(memo[n] === -1){
        memo[n] = (tile(n-1) + tile(n-2)) % 15746;
    }
    return memo[n];    
}

console.log(tile(N));
