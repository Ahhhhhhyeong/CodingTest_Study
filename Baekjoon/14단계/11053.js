//LIS(Longest Increasing Subsequence)를 구하는 문제
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = input[1].split(' ').map(Number);
const dp = [];
let max = 1;

for(let i = 0; i < N; i++){
    dp[i] = 1;
    for(let j = 0; j < i; j++){
        if(arr[j] < arr[i] && dp[j] + 1 > dp[i]){
            dp[i] = dp[j] + 1;
            if(max < dp[i]){
                max = dp[i];
            }
        }        
    }
}

console.log(max);