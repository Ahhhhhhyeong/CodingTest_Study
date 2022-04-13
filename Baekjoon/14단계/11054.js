//LIS(Longest Increasing Subsequence)를 구하는 문제
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);

const arrCheck = (nums, n) => {
    let i = 0;
    while(i + 1 < n && nums[i] < nums[i+1]) ++i;
    console.log(i);
    if(i === 0 || i === n - 1)return false;
    while(i + 1 < n && nums[i] > nums[i+1]) ++i;
    if(i !== n - 1) return false;
    return true;
}

console.log(arrCheck(arr, n));
const dp = [];
let max = 1;
if(arrCheck(arr, n)){
    for(let i = 0; i < n; i++){
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
}