//LIS(Longest Increasing Subsequence)를 구하는 문제
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0];
const arr = input[1].split(' ').map(Number);
const arr2 = [...arr];

const leftArrCheck = (arr, n) => { // 좌측부터의 LIS 구하기
    const temp = [...arr];
    let i = 0;
    while(i + 1 < n && arr[i] < arr[i+1]) ++i;
    if(temp == arr) return false;
    return true;
}

const rightArrCheck = (arr, n) => {
    const temp = [...arr];
    for(let i = n-1; i < 0; i--){
        if(arr[i] < arr[i-1]){
            arr[i] = arr[i-1];
        }
    }
    if(temp == arr) return false;
    return true;
}
console.log(leftArrCheck(arr, n));
console.log(rightArrCheck(arr2, n));
console.log(arr, arr2);
// const dp = [];
// let max = 1;
// if(leftArrCheck(arr, n) && rightArrCheck(arr2, n)){
//     for(let i = 0; i < n; i++){
//         dp[i] = 1;
        
//     }
// }


// 좌/우측의 각각의 값을 더하여 -1을 한 값 중 최대값을 구한다.
// 해당위치가 2번 중복으로 -1을 해줌