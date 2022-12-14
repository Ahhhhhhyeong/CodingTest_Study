//LIS(Longest Increasing Subsequence)를 구하는 문제
const { Console } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[n, arr] = input;
n = Number(n);
arr = arr.split(' ').map(Number);

const soultionDP = (arr, n) => {
    const upDp = new Array(n).fill(1);
    const downDP = new Array(n).fill(1);

    for(let i = 0; i < n; i++)    { // 좌측부터 LIS 구하기
        const current = arr[i];
        let cnt = 1;
        for(let j = 0; j < i; j++){
            const before = arr[j];
            if(current > before) cnt = Math.max(cnt, upDp[j] + 1);
        }
        upDp[i] = cnt;
    }

    for(let i = n - 2; i >= 0; i--){ // 우측부터 LIS 구하기
        const current = arr[i];
        let cnt = 1;
        for(let j = i + 1; j < n; j++){
            const before = arr[j];
            if(current > before) cnt = Math.max(cnt, downDP[j] + 1);
        }
        downDP[i] = cnt;
    }
    
    // 좌/우측의 각각의 값을 더하여 -1을 한 값 중 최대값을 구한다.
    // 해당위치가 2번 중복으로 -1을 해줌
  let result = 0;
    for(let i = 0; i < n; i++){
        result = Math.max(result, upDp[i] + downDP[i] - 1);
    }
    console.log(result);
}


soultionDP(arr, n);