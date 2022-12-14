/** 체스판 다시 칠하기 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);

let whiteFirst = [
    "WBWBWBWB", 
    "BWBWBWBW",
    "WBWBWBWB", 
    "BWBWBWBW",
    "WBWBWBWB", 
    "BWBWBWBW",
    "WBWBWBWB", 
    "BWBWBWBW"
];
let blackFirst = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB"
];

let min = 64;

const whiteFirstArr = (y, x) => {
    let counter = 0;
    for(let i = y; i < y+8; i++){
        for(let j = x; j < x + 8; j++){
            if(input[i][j] !== whiteFirst[i - y][j - x]) counter++;
        }
    }
    return counter;
}

const BlackFirstArr = (y, x) => {
    let counter = 0;
    for(let i = y; i < y + 8; i++){
        for(let j = x; j < x + 8; j++){
            if(input[i][j] !== blackFirst[i - y][j - x]) counter++;
        }
    }
    return counter;
}
let minArr = [];
for(let i = 0; i + 7 < N; i++){
    for(let j = 0; j + 7 < M; j++){
        minArr.push(whiteFirstArr(i, j));
        minArr.push(BlackFirstArr(i, j));
    }
}
console.log(Math.min.apply(null, minArr));