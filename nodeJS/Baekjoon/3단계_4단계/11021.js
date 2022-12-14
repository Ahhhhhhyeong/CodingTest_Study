// A + B - 7
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const { deflateSync } = require("zlib");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cnt = parseInt(input[0]);

for(var i = 1; i <= cnt; i++){
    let a = Number(input[i].split(' ')[0]);
    let b = Number(input[i].split(' ')[1]);
    console.log(`Case #${i}: ${a + b}`);
}