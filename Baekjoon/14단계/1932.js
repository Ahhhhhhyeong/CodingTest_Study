// 정수 삼각형
const fs = require("fs");
const { maxHeaderSize } = require("http");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[N, ...arr] = input;
N = Number(N);
arr = arr.map(i => i.split(' ').map(i => Number(i)));
solution(N, arr);

function solution(N, arr) {
    for(let i = N - 2; i >= 0; i--){
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
        }
    }
    console.log(arr[0][0]);
}

//1932	맞았습니다!!	14632 kb 	216 ms